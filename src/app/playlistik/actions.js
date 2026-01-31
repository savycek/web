"use server";

export async function submitFeedback(prevState, formData) {
    const rating = formData.get("rating");
    const comment = formData.get("comment");
    const password = formData.get("password");

    // 1. Ověření hesla (porovnání s .env)
    if (password !== process.env.ACCESS_PASSWORD) {
        return { success: false, message: "Chyba: Heslo se neshoduje." };
    }

    // 2. Odeslání na Discord
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
        return { success: false, message: "Chyba serveru: Webhook není nastaven." };
    }

    const payload = {
        content: `<@776340471819403324> **čas na nový playlistík!** 🎵`,
        embeds: [
            {
                color: 3066993, // Spotify Green barva (cca)
                fields: [
                    { name: "Spokojenost", value: `${rating}/10`, inline: true },
                    { name: "Komentář", value: comment || "Bez komentáře" },
                ],
                footer: { text: "Odesláno z webu" },
                timestamp: new Date().toISOString(),
            },
        ],
    };

    try {
        await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
        return { success: true, message: "Odesláno! Nový playlistík už se vaří!" };
    } catch (error) {
        return { success: false, message: "Chyba při odesílání." };
    }
}

// Pomocná funkce pro získání obrázku ze Spotify (využívá veřejné OEmbed API)
export async function getPlaylistCover() {
    const playlistUrl = process.env.SPOTIFY_PLAYLIST_URL;
    if (!playlistUrl) return "/placeholder.png"; // Fallback, kdyby nebyl odkaz

    try {
        const res = await fetch(`https://open.spotify.com/oembed?url=${playlistUrl}`);
        const data = await res.json();
        return data.thumbnail_url;
    } catch (e) {
        console.error("Chyba při načítání coveru:", e);
        return null;
    }
}
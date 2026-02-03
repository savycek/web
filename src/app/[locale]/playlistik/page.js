import Image from "next/image";
import { Disc, Send, Music } from "lucide-react";
import { submitFeedback, getPlaylistCover } from "./actions"; // Import server action
import FeedbackForm from "./form"; // Vyčlenil jsem form do komponenty níže kvůli interaktivitě

export default async function PlaylistPage() {
    // Načteme cover playlistu na serveru
    const coverUrl = await getPlaylistCover();

    return (
        <div className="min-h-screen bg-[#0d0d0d] text-white p-4 selection:bg-[#1DB954]/20">
            <div className="max-w-xl mx-auto flex flex-col gap-8 pt-12">

                <section className="text-center flex flex-col gap-2">
                    <h1 className="text-[2.25rem] font-bold leading-tight">andulky fit playlistík</h1>
                    <p className="text-[#8E8E93]">Tak co, už jsi nabažena?</p>
                </section>

                <div className="relative group w-64 h-64 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#222] to-[#111] shadow-2xl border border-white/5"></div>

                    <div className="absolute inset-2 rounded-full animate-[spin_8s_linear_infinite] overflow-hidden border-4 border-[#121212]">
                        {coverUrl ? (
                            <Image
                                src={coverUrl}
                                alt="Playlist Cover"
                                fill
                                className="object-cover opacity-90"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                                <Music className="w-12 h-12 text-gray-500" />
                            </div>
                        )}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#0d0d0d] rounded-full border border-white/10 z-10"></div>
                    </div>

                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                </div>

                <div className="bg-[#1c1c1e] border border-[#2c2c2e] rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Disc className="w-4 h-4 text-[#1DB954]" />
                        Tvůj názor
                    </h3>

                    <FeedbackForm />
                </div>

            </div>
        </div>
    );
}
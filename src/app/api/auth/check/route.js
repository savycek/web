import { NextResponse } from 'next/server';
import { authStore } from '@/lib/authStore';
import { cookies } from 'next/headers';

export async function POST() {
    // Změna: .toString() na konci
    const code = Math.floor(1000 + Math.random() * 9000).toString();

    console.log(`[LOGIN] Generuji nový kód: "${code}"`); // LOG

    authStore.set(code, { status: 'pending', createdAt: Date.now() });
    return NextResponse.json({ code });
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');

    // LOG pro ladění (uvidíš, jestli se prohlížeč ptá)
    // console.log(`[POLLING] Kontrola kódu: "${code}"`);

    if (!code || !authStore.has(code)) {
        return NextResponse.json({ status: 'invalid' });
    }

    const data = authStore.get(code);

    if (data.status === 'approved') {
        console.log(`[LOGIN] Kód "${code}" byl SCHVÁLEN! Přihlašuji...`); // LOG

        authStore.delete(code);

        // Nastavení cookie
        const cookieStore = await cookies(); // V novějším Next.js musí být await
        cookieStore.set('admin_session', 'logged-in-token', {
            httpOnly: true,
            path: '/',
            maxAge: 86400
        });

        return NextResponse.json({ status: 'approved' });
    }

    return NextResponse.json({ status: 'pending' });
}
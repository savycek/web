import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { promises as fs } from 'fs';
import path from 'path';

const tempDir = path.join(process.cwd(), '.temp-auth');
async function ensureDir() {
    try {
        await fs.access(tempDir);
    } catch {
        await fs.mkdir(tempDir, { recursive: true });
    }
}

export async function POST() {
    await ensureDir();
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    const filePath = path.join(tempDir, `${code}.json`);
    const data = { status: 'pending', createdAt: Date.now() };

    console.log(`[LOGIN] Generuji nový kód: "${code}"`);
    await fs.writeFile(filePath, JSON.stringify(data));

    setTimeout(async () => {
        try {
            await fs.unlink(filePath);
            console.log(`[CLEANUP] Smazán expirovaný kód: ${code}`);
        } catch (error) {
            if (error.code !== 'ENOENT') {
                console.error(`[CLEANUP] Chyba při mazání souboru pro kód ${code}:`, error);
            }
        }
    }, 300000); // 5 minut

    return NextResponse.json({ code });
}

export async function GET(request) {
    await ensureDir();
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');

    if (!code) {
        return NextResponse.json({ status: 'invalid' });
    }

    const filePath = path.join(tempDir, `${code}.json`);

    try {
        const fileContent = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileContent);

        if (data.status === 'approved') {
            console.log(`[LOGIN] Kód "${code}" byl SCHVÁLEN! Přihlašuji...`);

            await fs.unlink(filePath);

            const cookieStore = cookies();
            cookieStore.set('admin_session', 'logged-in-token', {
                httpOnly: true,
                path: '/',
                maxAge: 86400
            });

            return NextResponse.json({ status: 'approved' });
        }

        return NextResponse.json({ status: 'pending' });

    } catch (error) {
        if (error.code === 'ENOENT') {
            return NextResponse.json({ status: 'invalid', error: 'Code not found' });
        }
        console.error(`[ERROR] Chyba při čtení souboru pro kód ${code}:`, error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

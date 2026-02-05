import { NextResponse } from 'next/server';
import { authStore } from '@/lib/authStore';

export async function POST(request) {
    const authHeader = request.headers.get('authorization');
    const secret = process.env.ADMIN_SECRET;

    // Debugging logs
    console.log('--- Shortcut Auth Debug ---');
    console.log('Received Authorization Header:', authHeader);
    console.log('Expected Secret from env:', secret);
    console.log('Constructed Expected Header:', `Bearer ${secret}`);
    console.log('Do headers match?', authHeader === `Bearer ${secret}`);
    console.log('---------------------------');

    if (authHeader !== `Bearer ${secret}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const code = String(body.code);

    if (!code || !authStore.has(code)) {
        return NextResponse.json({ error: 'Code not found' }, { status: 404 });
    }

    const currentData = authStore.get(code);
    authStore.set(code, { ...currentData, status: 'approved' });
    return NextResponse.json({ message: 'Unlocked!' });
}

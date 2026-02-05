"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
    const [code, setCode] = useState(null);
    const [status, setStatus] = useState('loading');
    const router = useRouter();

    useEffect(() => {
        fetch('/api/auth/check', { method: 'POST' })
            .then(res => res.json())
            .then(data => {
                setCode(data.code);
                setStatus('pending');
            });
    }, []);

    useEffect(() => {
        if (!code || status === 'approved') return;

        const interval = setInterval(async () => {
            const res = await fetch(`/api/auth/check?code=${code}`);
            const data = await res.json();

            if (data.status === 'approved') {
                setStatus('approved');
                clearInterval(interval);
                router.push('/admin/dashboard/');
                router.refresh();
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [code, status, router]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen [#0d0d0d] text-white p-4">
            <div className="flex flex-col text-center items-center space-y-6">
                <h1 className="text-4xl font-bold">Srdečně se vítám!</h1>

                {status === 'loading' && (
                    <img
                        src="/Svg/Loader.svg"
                        alt="loading"
                        width={60}
                        height={60}
                    />
                )}
                {status === 'pending' && (
                    <div>
                        <div className="text-8xl font-bold tracking-widest text-emerald-400">
                            {code}
                        </div>
                    </div>
                )}

                {status === 'approved' && (
                    <img
                        src="/Svg/Loader.svg"
                        alt="loading"
                        width={60}
                        height={60}
                    />
                )}
            </div>
        </div>
    );
}
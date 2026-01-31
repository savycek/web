import Link from "next/link";
import Container from "@/components/Container";
import {CalendarCheck2, Coffee} from "lucide-react";

export default function RootLayout({ children }) {
    return (
        <main className="min-h-screen bg-[#0d0d0d] text-white p-4">
            <div className="max-w-[50rem] mx-auto flex flex-col gap-4">
                <section id="hero" className="mt-12 pb-8 flex flex-col gap-2">
                    <h1 className="text-[2.25rem] font-bold leading-tight">Administrace</h1>
                </section>
                <nav className="bg-[#1a1a1a] px-15 py-2 rounded-2xl flex gap-3 border border-white/10 w-full justify-between text-sm font-bold">
                    <Link className="py-2 px-4 rounded-xl transition hover:bg-[#0e0e0e]" href="/admin/dashboard">Dashboard</Link>
                    <Link className="py-2 px-4 rounded-xl transition hover:bg-[#0e0e0e]" href="/admin/tasks">Tasky</Link>
                    <Link className="py-2 px-4 rounded-xl transition hover:bg-[#0e0e0e]" href="/admin/calendar">Kalendář</Link>
                    <Link className="py-2 px-4 rounded-xl transition hover:bg-[#0e0e0e]" href="/admin/stats">Statistika</Link>
                    <Link className="py-2 px-4 rounded-xl transition hover:bg-[#0e0e0e]" href="/admin/content">Web Manager</Link>
                </nav>
                { children }
            </div>
        </main>
    );
}

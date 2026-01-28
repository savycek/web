"use client"; // Důležité pro Next.js (protože používáme useState)

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/Container.jsx";
import Tag from "@/components/Tag.jsx";
import InputField from "@/components/InputField.jsx";
import { Zap, Layers, Send, CheckCircle2, Terminal, Palette, X, AlertTriangle } from "lucide-react";

export default function DaaSPage() {
    // Stav pro viditelnost banneru
    const [isBannerVisible, setIsBannerVisible] = useState(true);

    return (
        <div className="min-h-screen bg-[#0d0d0d] text-white p-4 selection:bg-white/20">
            <div className="max-w-200 mx-auto flex flex-col gap-8">

                {/* HERO SECTION */}
                <section id="hero" className="pt-12 flex flex-col gap-4">

                    {/* VYLEPŠENÝ WARNING BANNER */}
                    {isBannerVisible && (
                        <div className="mb-5 bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-start gap-3 transition-all animate-in fade-in slide-in-from-top-2">
                            <AlertTriangle className="text-red-400 w-5 h-5 shrink-0 mt-0.5" />
                            <div className="flex-1">
                                <p className="text-red-200 text-sm font-medium leading-relaxed">
                                    Stránka je falešná a platí pouze pro nejmenované hrošky. Nenechte se napálit!
                                </p>
                            </div>
                            <button
                                onClick={() => setIsBannerVisible(false)}
                                className="text-red-400/60 hover:text-red-200 cursor-pointer hover:bg-red-500/20 p-1 rounded-md transition-colors"
                                aria-label="Zavřít upozornění"
                            >
                                <X width="16" height="16" />
                            </button>
                        </div>
                    )}

                    <div className="flex items-center gap-2 text-[#8E8E93] text-sm font-medium uppercase tracking-wider">
                        <Zap width="16" height="16" className="text-white" />
                        <span>DaaS</span>
                    </div>
                    <h1 className="text-[2.25rem] font-bold leading-tight">
                        Tvůj osobní <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">front-end</span> & <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">design</span> konzultant.
                    </h1>
                    <p className="text-[#8E8E93] leading-relaxed max-w-lg">
                        DaaS je model založený na promptech. Žádné zbytečné meetingy, jen čisté řešení problémů ve vašem stacku.
                    </p>
                </section>

                <hr className="border-[#262626]" />

                {/* TECH STACK */}
                <section className="flex flex-col gap-4">
                    <h2 className="text-xl font-semibold">Podporované technologie</h2>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Container title="Kódování">
                            <div className="flex flex-wrap gap-1.5">
                                <Tag text="React" icon={<img src="https://cdn.simpleicons.org/react/FFFFFF" className="w-3.5 h-3.5" />} />
                                <Tag text="Next.js" icon={<img src="https://cdn.simpleicons.org/nextdotjs/FFFFFF" className="w-3.5 h-3.5" />} />
                                <Tag text="JavaScript" icon={<img src="https://cdn.simpleicons.org/javascript/FFFFFF" className="w-3.5 h-3.5" />} />
                                <Tag text="Tailwind CSS" icon={<img src="https://cdn.simpleicons.org/tailwindcss/FFFFFF" className="w-3.5 h-3.5" />} />
                                <Tag text="Framer Motion" icon={<img src="https://cdn.simpleicons.org/framer/FFFFFF" className="w-3.5 h-3.5" />} />
                            </div>
                        </Container>

                        <Container title="Grafika">
                            <div className="flex flex-wrap gap-1.5">
                                <Tag text="Figma" icon={<img src="https://cdn.simpleicons.org/figma/FFFFFF" className="w-3.5 h-3.5" />} />
                                <Tag text="Blender" icon={<img src="https://cdn.simpleicons.org/blender/FFFFFF" className="w-3.5 h-3.5" />} />
                            </div>
                        </Container>
                    </div>
                </section>

                {/* JAK TO FUNGUJE */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#161616] border border-[#262626] p-5 rounded-xl flex flex-col gap-2">
                        <Terminal className="text-[#8E8E93] mb-1" />
                        <h3 className="font-semibold text-white">1. Pošleš prompt</h3>
                        <p className="text-sm text-[#8E8E93]">Popíšeš problém, vložíš snippet kódu nebo požadavek na design.</p>
                    </div>
                    <div className="bg-[#161616] border border-[#262626] p-5 rounded-xl flex flex-col gap-2">
                        <Zap className="text-[#8E8E93] mb-1" />
                        <h3 className="font-semibold text-white">2. Zpracování</h3>
                        <p className="text-sm text-[#8E8E93]">Analyzuje zadání a vytvoří řešení. Většina requestů je odbavena okamžitě.</p>
                    </div>
                    <div className="bg-[#161616] border border-[#262626] p-5 rounded-xl flex flex-col gap-2">
                        <CheckCircle2 className="text-[#8E8E93] mb-1" />
                        <h3 className="font-semibold text-white">3. Implementace</h3>
                        <p className="text-sm text-[#8E8E93]">Dostaneš zkonzultovaný kód a jistě expertní názor na tvou dechberoucí stránku!</p>
                    </div>
                </section>

                {/* PRICING */}
                <section className="flex flex-col gap-4">
                    <h2 className="text-xl font-semibold">Ceník služeb</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Basic Plan */}
                        <div className="p-6 rounded-2xl border border-[#262626] bg-[#0d0d0d] flex flex-col justify-between hover:border-white/20 transition-colors">
                            <div>
                                <div className="text-[#8E8E93] text-sm uppercase font-bold tracking-wider mb-2">Hrošek Standard</div>
                                <div className="text-3xl font-bold mb-4">Zdarma</div>
                                <ul className="flex flex-col gap-2 text-sm text-[#CCCCCC]">
                                    <li className="flex gap-2 items-center"><CheckCircle2 width="14" className="text-white"/> Jednorázová konzultace</li>
                                    <li className="flex gap-2 items-center"><CheckCircle2 width="14" className="text-white"/> Code review</li>
                                    <li className="flex gap-2 items-center"><CheckCircle2 width="14" className="text-white"/> Garance kvality</li>
                                </ul>
                            </div>
                            <button className="mt-6 w-full py-2 bg-[#1C1C1E] text-white rounded-lg text-sm font-medium hover:bg-[#2C2C2E] transition-colors">
                                Odeslat jeden prompt
                            </button>
                        </div>

                        {/* Pro Plan */}
                        <div className="p-6 rounded-2xl border border-white/20 bg-[#161616] flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold px-2 py-1 rounded-bl-lg">DOPORUČENO</div>
                            <div>
                                <div className="text-[#8E8E93] text-sm uppercase font-bold tracking-wider mb-2">Hrošek+</div>
                                <div className="text-3xl font-bold mb-4">1€ <span className="text-lg font-normal text-[#8E8E93]">/ prompt</span></div>
                                <ul className="flex flex-col gap-2 text-sm text-[#CCCCCC]">
                                    <li className="flex gap-2 items-center"><CheckCircle2 width="14" className="text-white"/> Vše v Hrošek Standard</li>
                                    <li className="flex gap-2 items-center"><CheckCircle2 width="14" className="text-white"/> Složité UI/UX konzultace</li>
                                    <li className="flex gap-2 items-center"><CheckCircle2 width="14" className="text-white"/> Komplexní až nesmyslné požadavky</li>
                                </ul>
                            </div>
                            <button className="mt-6 w-full py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                                Zahájit spolupráci
                            </button>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
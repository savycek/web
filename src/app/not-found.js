"use client";
import './globals.css';
import FuzzyText from "@/components/FuzzyText.jsx";

export default function GlobalNotFound() {
    console.log("what about stop shooting in your own leg?");

    return (
        <html lang="en" suppressHydrationWarning>
        <body suppressHydrationWarning>
        <div className="px-4 md:px-8 min-h-screen bg-[#0d0d0d] text-white selection:bg-white/20 relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[#0d0d0d] z-0" />
            <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto p-4">

                <div className="w-full font-bold tracking-tight flex justify-center items-center">
                    <FuzzyText
                        baseIntensity={0.20}
                        hoverIntensity={1.1}
                        fontSize="clamp(2rem, 8vw, 6rem)"
                        enableHover
                    >
                        Page not found.
                    </FuzzyText>
                </div>

                <div className="w-full text-[#8E8E93] flex justify-center items-center mt-2">
                    <FuzzyText
                        baseIntensity={0.15}
                        hoverIntensity={1.1}
                        fontWeight={600}
                        fontSize="clamp(1.25rem, 4vw, 3rem)"
                        enableHover
                    >
                        What a shame!
                    </FuzzyText>
                </div>

            </div>
        </div>
        </body>
        </html>
    );
}
"use client";

import { useActionState, useState } from "react";
import { submitFeedback } from "./actions";
import { Loader2, Send } from "lucide-react";

const initialState = {
    success: false,
    message: null,
};

export default function FeedbackForm() {
    const [state, formAction, isPending] = useActionState(submitFeedback, initialState);
    const [rating, setRating] = useState(10);

    return (
        <form action={formAction} className="flex flex-col gap-5">

            {/* 1. INPUT: HODNOCENÍ (GRAFIKA) */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#8E8E93]">
                    Jak se poslouchalo?
                </label>
                {/* Skrytý input pro odeslání hodnoty */}
                <input type="hidden" name="rating" value={rating} />

                <div className="flex justify-between items-center bg-[#0d0d0d]/50 p-3 rounded-lg border border-white/5">
                    {[...Array(10)].map((_, i) => {
                        const val = i + 1;
                        return (
                            <button
                                key={val}
                                type="button"
                                onClick={() => setRating(val)}
                                className={`w-8 h-10 rounded transition-all duration-200 flex items-center justify-center font-bold text-sm
                            ${rating >= val
                                    ? "bg-[#1DB954] text-black shadow-[0_0_10px_rgba(29,185,84,0.4)] scale-110"
                                    : "bg-white/5 text-white/30 hover:bg-white/10"
                                }`}
                            >
                                {val}
                            </button>
                        );
                    })}
                </div>
                <div className="flex justify-between text-xs text-[#8E8E93] px-1">
                    <span>na kurvu 😕</span>
                    <span>po kurvě 🤩</span>
                </div>
            </div>

            {/* 2. INPUT: TEXT AREA */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#8E8E93]">Co bys dodala pro tvorbu dalšího playlistíku?</label>
                <textarea
                    name="comment"
                    rows={3}
                    className="w-full bg-[#0d0d0d] border border-[#3a3a3c] rounded-lg p-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#1DB954] focus:ring-1 focus:ring-[#1DB954] transition-all resize-none"
                    placeholder="Chybí mi tam víc paní Muffinová..."
                />
            </div>

            {/* 3. INPUT: HESLO */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#8E8E93]">Tajné heslo</label>
                <input
                    type="password"
                    name="password"
                    required
                    className="w-full bg-[#0d0d0d] border border-[#3a3a3c] rounded-lg p-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#1DB954] focus:ring-1 focus:ring-[#1DB954] transition-all"
                    placeholder="••••••••"
                />
            </div>

            {/* STAVOVÁ ZPRÁVA */}
            {state.message && (
                <div className={`p-3 rounded-lg text-sm ${state.success ? "bg-[#1DB954]/10 text-[#1DB954]" : "bg-red-500/10 text-red-400"}`}>
                    {state.message}
                </div>
            )}

            {/* TLAČÍTKO */}
            <button
                type="submit"
                disabled={isPending || state.success}
                className="mt-2 bg-white text-black font-semibold py-3 px-4 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
                {isPending ? (
                    <Loader2 className="animate-spin w-5 h-5" />
                ) : state.success ? (
                    "Odesláno"
                ) : (
                    <>
                        Odeslat a vytvořit nový playlistík <Send className="w-4 h-4" />
                    </>
                )}
            </button>
        </form>
    );
}
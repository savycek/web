import { Check, ArrowRight, Sparkles } from "lucide-react";

export default function FeatureItem({ text, highlighted = false }) {
    return (
        <li className="flex items-start gap-3 text-sm">
            <div className={`mt-0.5 min-w-[18px] flex justify-center ${highlighted ? 'text-blue-400' : 'text-gray-500'}`}>
                <Check size={16} strokeWidth={highlighted ? 3 : 2} />
            </div>
            <span className={highlighted ? 'text-white font-medium' : 'text-gray-400'}>
                {text}
            </span>
        </li>
    );
}
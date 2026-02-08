import { motion } from "framer-motion";

export default function FeatureContainer({ icon, title, description, delay = 0, color = "purple" }) {
    const colors = {
        purple: {
            glow: "bg-purple-500",
            border: "group-hover:border-purple-500/50",
            text: "group-hover:text-purple-400",
            iconBg: "group-hover:bg-purple-500/10"
        },
        yellow: {
            glow: "bg-yellow-500",
            border: "group-hover:border-yellow-500/50",
            text: "group-hover:text-yellow-400",
            iconBg: "group-hover:bg-yellow-500/10"
        },
        blue: {
            glow: "bg-blue-500",
            border: "group-hover:border-blue-500/50",
            text: "group-hover:text-blue-400",
            iconBg: "group-hover:bg-blue-500/10"
        }
    };

    const theme = colors[color] || colors.purple;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay, duration: 0.5 }}
            className={`
                group relative flex flex-col items-center text-center p-8 
                rounded-3xl border border-white/5 bg-[#0d0d0d] 
                overflow-hidden transition-all duration-500
                ${theme.border} hover:shadow-2xl hover:shadow-black/50
            `}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className={`absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 ${theme.glow} blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
            <div className="relative mb-6 z-10">
                <div className={`
                    relative z-10 p-4 rounded-2xl border border-white/10 bg-[#161616]
                    transition-all duration-300 group-hover:scale-110 group-hover:border-white/20
                    ${theme.iconBg}
                `}>
                    <div className={`text-white/70 transition-colors duration-300 ${theme.text}`}>
                        {icon}
                    </div>
                </div>
                <div className={`absolute inset-0 ${theme.glow} blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-150 z-0`} />
            </div>
            <h3 className="relative z-10 text-xl font-bold text-white mb-3 transition-colors duration-300">
                {title}
            </h3>
            <p className="relative z-10 text-[#8E8E93] text-sm leading-relaxed max-w-[260px] group-hover:text-gray-400 transition-colors duration-300">
                {description}
            </p>
        </motion.div>
    );
}
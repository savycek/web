"use client"
import { motion } from "framer-motion";

export const AnimatedHeroText = ({ children }) => (
    <motion.h1
        className="text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-center leading-[1.1] tracking-tight flex flex-wrap justify-center"
        initial="hidden"
        animate="show"
        variants={{
            show: { transition: { staggerChildren: 0.1 } }
        }}
    >
        {children.split(" ").map((word, i) => (
            <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                    show: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }
                    }
                }}
            >
                {word}
            </motion.span>
        ))}
    </motion.h1>
);
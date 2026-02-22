"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { House } from "lucide-react"

const AnimatedPostHeader = ({ title, formattedDate, locale, homeTranslation }) => {

    // Kontejner, který spustí animace dětí postupně za sebou
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Mezera mezi animacemi prvků
                delayChildren: 0.1,
            }
        }
    }

    // Univerzální varianta pro plynulé vyjetí nahoru
    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] // Custom "apple-style" ease-out
            }
        }
    }

    return (
        <motion.header
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="pt-12 flex flex-col gap-1 border-b border-white/10 pb-10"
        >
            <motion.div variants={itemVariants}>
                <Link
                    href={`/${locale}`}
                    className="text-[#8E8E93] w-max flex items-center gap-1 hover:text-white transition-all mb-3 group"
                >
                    <House size={16} className="group-hover:-translate-y-0.5 transition-all" />
                    <span className="text-sm font-medium">{homeTranslation}</span>
                </Link>
            </motion.div>

            <motion.h1
                variants={itemVariants}
                className="text-5xl font-bold leading-tight tracking-tight text-white"
            >
                {title}
            </motion.h1>

            {formattedDate && (
                <motion.p
                    variants={itemVariants}
                    className="text-[#8E8E93] leading-relaxed mt-2"
                >
                    {formattedDate}
                </motion.p>
            )}
        </motion.header>
    )
}

export default AnimatedPostHeader
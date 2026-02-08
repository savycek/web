"use client"
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LanguageSwitch() {
    const t = useTranslations();
    const pathname = usePathname();

    const isCs = pathname.startsWith('/cs');
    const flagIcon = isCs ? "/Svg/UKFlag.svg" : "/Svg/CzechFlag.svg";

    let targetLink;
    if (isCs) {
        targetLink = pathname.replace(/^\/cs/, '/en');
    } else {
        if (pathname.startsWith('/en')) {
            targetLink = pathname.replace(/^\/en/, '/cs');
        } else {
            targetLink = '/cs' + (pathname === '/' ? '' : pathname);
        }
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <motion.div className="absolute top-4 right-4 z-10"
                    initial="hidden"
                    whileInView="visible"
                    variants={containerVariants}
        >
            <Link
                href={targetLink}
                className="flex items-center text-white gap-2 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full text-xs font-medium transition-colors border border-white/5 backdrop-blur-sm"
            >
                <img src={flagIcon} alt="Lang" className="w-4 h-4 rounded-sm" />
                <span>{t('Switcher.label')}</span>
                <ArrowRight size={12} className="opacity-50" />
            </Link>
        </motion.div>
    )
}
"use client";

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";
import { AnimatedHeroText } from "@/components/AnimatedHeroText.jsx";
import Grainient from "@/components/Grainient.jsx";
import {Gem, Zap, Shield, BadgeQuestionMark, ArrowRight, HelpCircle, Info, Send, Mail, Check, Copy} from "lucide-react";
import FeatureContainer from "@/components/FeatureContainer.jsx"
import Container from "@/components/Container.jsx"
import FeatureItem from "@/components/FeatureItem.jsx"
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

export default function Webs() {
    const t = useTranslations();
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };
    const itemVariants = {
        hidden: { filter: "blur(10px)", y: 20, opacity: 0 },
        visible: {
            filter: "blur(0px)",
            y: 0,
            opacity: 1,
            transition: { duration: 0.4 }
        },
    };

    const [copied, setCopied] = useState(false);

    const handleCopyDiscord = () => {
        navigator.clipboard.writeText("@savycek");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="px-3 md:px-0 min-h-screen bg-[#0d0d0d] text-white selection:bg-white/20 relative">
            <motion.div className="absolute inset-0 w-full h-screen overflow-hidden z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
            >
                <Grainient
                    className="w-full h-full opacity-80"
                    color1="#E9A9E7"
                    color2="#6C5BFF"
                    color3="#C8BFE7"
                    timeSpeed={1}
                    colorBalance={0}
                    warpStrength={0.8}
                    warpFrequency={4}
                    warpSpeed={1.5}
                    warpAmplitude={40}
                    blendAngle={0}
                    blendSoftness={0.05}
                    rotationAmount={400}
                    noiseScale={2}
                    grainAmount={0.1}
                    grainScale={2}
                    grainAnimated={false}
                    contrast={1.2}
                    gamma={1}
                    saturation={1}
                    centerX={0}
                    centerY={0}
                    zoom={1}
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0d0d0d]/50 to-[#0d0d0d]" />
            </motion.div>
            <div className="relative z-10 max-w-300 mx-auto flex flex-col justify-center min-h-screen p-4">
                <motion.section
                    id="hero"
                    className="flex flex-col gap-6 items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <AnimatedHeroText>
                        {t("WebsPage.Hero.title")}
                    </AnimatedHeroText>

                    <motion.p
                        className="text-[#8E8E93] text-xl max-w-250 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {t("WebsPage.Hero.description")}
                    </motion.p>
                </motion.section>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-200 mx-auto">
                <FeatureContainer
                    icon={<Gem width="32" height="32" strokeWidth="1.5"/>}
                    title={t("WebsPage.Features.designTitle")}
                    description={t("WebsPage.Features.designDesc")}
                    delay={0.1}
                    color="purple"
                />
                <FeatureContainer
                    icon={<Zap width="32" height="32" strokeWidth="1.5"/>}
                    title={t("WebsPage.Features.speedTitle")}
                    description={t("WebsPage.Features.speedDesc")}
                    delay={0.2}
                    color="yellow"
                />
                <FeatureContainer
                    icon={<Shield width="32" height="32" strokeWidth="1.5"/>}
                    title={t("WebsPage.Features.securityTitle")}
                    description={t("WebsPage.Features.securityDesc")}
                    delay={0.3}
                    color="blue"
                />
            </section>

            <section className="w-full px-3 md:px-0 max-w-200 mx-auto mt-25 mb-30">
                <div className="text-center px-4"
                >
                    <motion.div className="max-w-3xl mx-auto mb-16"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={itemVariants}
                    >
                        <h2 className="font-bold text-5xl md:text-6xl mb-6">
                            {t("WebsPage.Admin.title")} <span className="text-emerald-500">{t("WebsPage.Admin.titleHighlight")}</span>.
                        </h2>
                        <p className="text-[#8E8E93] text-xl leading-relaxed">
                            {t("WebsPage.Admin.description")}
                        </p>
                    </motion.div>

                    <motion.div className="relative group max-w-6xl mx-auto"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={itemVariants}
                    >
                        <Image
                            src="/Images/AdminShowcase.png"
                            alt="Ukázka intuitivní administrace"
                            width={1900}
                            height={1000}
                            className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-[1.01]"
                            priority
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-emerald-500/60 blur-[120px] rounded-full -z-10 opacity-60 pointer-events-none"/>
                    </motion.div>
                </div>
            </section>

            <section className="w-full px-3 md:px-0 max-w-200 mx-auto mt-20">
                <motion.div className="text-center mb-12"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={itemVariants}
                >
                    <h2 className="font-bold text-4xl mb-2 text-white">
                        {t("WebsPage.Pricing.title")}
                    </h2>
                    <p className="text-[#8E8E93] text-lg">
                        {t("WebsPage.Pricing.subtitle")}
                    </p>
                </motion.div>

                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={itemVariants}
                >
                    <Container className="p-5 flex">
                        <div className="">
                            <h3 className="text-xl font-medium text-gray-400">{t("WebsPage.Pricing.cardVizitka.title")}</h3>
                            <div className="mt-2 flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-white">3 900 Kč</span>
                                <span className="text-sm text-gray-500">{t("WebsPage.Pricing.once")}</span>
                            </div>
                            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                                {t("WebsPage.Pricing.cardVizitka.description")}
                            </p>
                        </div>
                        <div className="w-full h-px bg-white/10 my-2" />
                        <ul className="flex flex-col gap-4 mb-4 flex-1">
                            <FeatureItem text={t("WebsPage.Pricing.cardVizitka.list.1")} />
                            <FeatureItem text={t("WebsPage.Pricing.cardVizitka.list.2")} />
                            <FeatureItem text={t("WebsPage.Pricing.cardVizitka.list.3")} />
                            <FeatureItem text={t("WebsPage.Pricing.cardVizitka.list.4")} />
                            <FeatureItem text={t("WebsPage.Pricing.cardVizitka.list.5")} />
                        </ul>
                        <a
                            href="#contact"
                            className="w-full py-3 rounded-xl border border-white/10 bg-white/5 text-white font-medium text-center hover:bg-white/10 transition-colors"
                        >
                            {t("WebsPage.Pricing.cardVizitka.button")}
                        </a>
                    </Container>
                    <Container className="p-5 flex">
                        <div className="">
                            <h3 className="text-xl font-medium text-gray-400">{t("WebsPage.Pricing.cardFirma.title")}</h3>
                            <div className="mt-2 flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-white">
                                    {t("WebsPage.Pricing.cardFirma.price")}
                                </span>
                            </div>

                            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                                {t("WebsPage.Pricing.cardFirma.description")}
                            </p>
                        </div>
                        <div className="w-full h-px bg-white/10 my-2" />
                        <ul className="flex flex-col gap-4 mb-4 flex-1">
                            <FeatureItem text={t("WebsPage.Pricing.cardFirma.list.1")} highlighted />
                            <FeatureItem text={t("WebsPage.Pricing.cardFirma.list.2")} highlighted />
                            <FeatureItem text={t("WebsPage.Pricing.cardFirma.list.3")} highlighted />
                            <FeatureItem text={t("WebsPage.Pricing.cardFirma.list.4")} />
                            <FeatureItem text={t("WebsPage.Pricing.cardFirma.list.5")} />
                            <FeatureItem text={t("WebsPage.Pricing.cardFirma.list.6")} />
                        </ul>
                        <a
                            href="#contact"
                            className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium text-center hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 group"
                        >
                            {t("WebsPage.Pricing.cardFirma.button")}
                        </a>
                    </Container>
                </motion.div>
            </section>
            <section className="w-full px-3 md:px-0 max-w-200 mx-auto mt-20">
                <motion.div className="text-center mb-12"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={itemVariants}
                >
                    <h2 className="font-bold text-4xl mb-2 text-white">
                        {t("WebsPage.Maintenance.title")}
                    </h2>
                    <p className="text-[#8E8E93] text-lg">
                        {t("WebsPage.Maintenance.subtitle")}
                    </p>
                </motion.div>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={itemVariants}
                >
                    <Container className="p-5 flex">
                        <div className="">
                            <h3 className="text-xl font-medium text-gray-400">{t("WebsPage.Maintenance.cardMain.title")}</h3>
                            <div className="mt-4 flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-white">390 Kč</span>
                                <span className="text-sm text-gray-500">{t("WebsPage.Maintenance.cardMain.priceInfo")}</span>
                            </div>
                            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                                {t("WebsPage.Maintenance.cardMain.description")}
                            </p>
                        </div>
                        <div className="w-full h-px bg-white/10 my-2" />
                        <ul className="flex flex-col gap-4 mb-4 flex-1">
                            <FeatureItem text={t("WebsPage.Maintenance.cardMain.list.1")} highlighted />
                            <FeatureItem text={t("WebsPage.Maintenance.cardMain.list.2")} highlighted />
                            <FeatureItem text={t("WebsPage.Maintenance.cardMain.list.3")} />
                            <FeatureItem text={t("WebsPage.Maintenance.cardMain.list.4")} />
                        </ul>
                        <a
                            href="#contact"
                            className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium text-center hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 group"
                        >
                            {t("WebsPage.Maintenance.cardMain.button")}
                        </a>
                    </Container>
                    <div className="relative w-full h-full rounded-2xl border border-white/10 overflow-hidden min-h-[300px]">
                        <div className="absolute inset-0 z-0">
                            <Grainient
                                className="w-full h-full opacity-60"
                                color1="#1e3a8a"
                                color2="#3b82f6"
                                color3="#60a5fa"
                                timeSpeed={1}
                                colorBalance={0}
                                warpStrength={0.8}
                                warpFrequency={4}
                                warpSpeed={1.5}
                                warpAmplitude={40}
                                blendAngle={0}
                                blendSoftness={0.05}
                                rotationAmount={400}
                                noiseScale={2}
                                grainAmount={0.1}
                                grainScale={2}
                                grainAnimated={false}
                                contrast={1.2}
                                gamma={1}
                                saturation={1}
                                centerX={0}
                                centerY={0}
                                zoom={1}
                            />
                        </div>
                        <div className="relative z-10 p-7 flex flex-col h-full justify-center items-center text-center gap-6">
                            <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                                <HelpCircle width="40" height="40" className="text-white"/>
                            </div>

                            <h3 className="text-2xl font-bold text-white">
                                {t("WebsPage.Maintenance.cardInfo.title")}
                            </h3>

                            <p className="text-gray-200 leading-relaxed max-w-sm">
                                {t("WebsPage.Maintenance.cardInfo.descriptionPart1")}
                                <strong> {t("WebsPage.Maintenance.cardInfo.descriptionPart2")}</strong> {t("WebsPage.Maintenance.cardInfo.descriptionPart3")}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>
            <section className="max-w-200 px-3 md:px-0 mx-auto mt-10">
                <motion.div className="inline-flex items-start gap-3 text-left p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-200"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={itemVariants}
                >
                    <Info className="shrink-0 mt-1" size={20} />
                    <div className="text-sm leading-relaxed">
                        <strong className="text-blue-100 block mb-1">{t("WebsPage.Legal.title")}</strong>
                        {t("WebsPage.Legal.descriptionPart1")} <span className="font-bold"> {t("WebsPage.Legal.descriptionPart2")}</span>{t("WebsPage.Legal.descriptionPart3")}
                    </div>
                </motion.div>
            </section>
            <div id="contact" className="scroll-mt-20" />
            <section className="max-w-200 px-3 md:px-0 mx-auto mt-32 mb-20">
                <motion.div className="text-center mb-12"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={itemVariants}
                >
                    <h2 className="font-bold text-5xl md:text-6xl mb-6 text-white tracking-tight">
                        {t("WebsPage.Contact.titlePart1")} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-white">
                        {t("WebsPage.Contact.titlePart2")}
                    </span>
                    </h2>
                    <motion.p className="text-[#8E8E93] text-lg max-w-xl mx-auto leading-relaxed"
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.2 }}
                              variants={itemVariants}
                    >
                        {t("WebsPage.Contact.description")}
                    </motion.p>
                </motion.div>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={itemVariants}
                >
                    <a
                        href="mailto:me@savycek.eu"
                        className="group p-2 bg-[#1a1a1a] rounded-2xl border border-white/10 hover:border-white/25 hover:bg-[#202020] transition-all flex gap-3 items-center"
                    >
                        <div className="bg-[#0d0d0d] border border-white/10 p-3 rounded-xl group-hover:border-white/20 transition-colors">
                            <Mail size={24} className="text-white transition-colors"/>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-white text-lg leading-tight">{t("WebsPage.Contact.email")}</span>
                            <span className="text-[#8E8E93] text-sm leading-tight group-hover:text-white/80 transition-colors">me@savycek.eu</span>
                        </div>
                    </a>
                    <button
                        onClick={handleCopyDiscord}
                        className="group w-full text-left p-2 bg-[#1a1a1a] rounded-2xl border border-white/10 hover:border-white/25 hover:bg-[#202020] transition-all flex gap-3 items-center cursor-pointer"
                    >
                        <div className="bg-[#0d0d0d] border border-white/10 p-3 rounded-xl group-hover:border-white/20 transition-colors relative">
                            {copied ? (
                                <Check size={24} className="text-green-500 scale-110 transition-transform"/>
                            ) : (
                                <img
                                    src="https://cdn.simpleicons.org/discord/white"
                                    alt="Discord"
                                    width={24}
                                    height={24}
                                />
                            )}
                        </div>
                        <div className="flex flex-col">
                        <span className="font-bold text-white text-lg leading-tight">
                            {copied ? t("WebsPage.Contact.copied") : t("WebsPage.Contact.discord")}
                        </span>
                            <span className={`text-sm leading-tight transition-colors ${copied ? "text-green-500" : "text-[#8E8E93]"}`}>
                            @savycek
                        </span>
                        </div>
                    </button>
                </motion.div>
            </section>
        </div>
    );
}
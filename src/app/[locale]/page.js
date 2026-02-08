"use client";

import { useTranslations } from 'next-intl';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Container from "@/components/Container.jsx";
import Tag from "@/components/Tag.jsx";
import ProjectCard from "@/components/ProjectCard.jsx";
import { motion } from "framer-motion";
import { House, Mars, GraduationCap, ArrowRight } from "lucide-react";

export default function Home() {
  const t = useTranslations();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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

  return (
      <div className="min-h-screen bg-[#0d0d0d] text-white p-4 selection:bg-white/20 relative">
        <div className="max-w-200 mx-auto flex flex-col gap-12 pt-10 pb-20">
          <motion.section
              id="hero"
              className="pt-12 flex flex-col gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
          >
            <motion.h1 className="text-[2.25rem] font-bold leading-tight" variants={itemVariants}>
              {t('Hero.title')}
            </motion.h1>
            <motion.p className="text-[#8E8E93] leading-relaxed" variants={itemVariants}>
              {t('Hero.description')}
            </motion.p>
          </motion.section>

          <motion.section
              id="info"
              className="flex flex-col md:flex-row gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
          >
            <motion.div className="w-full flex flex-1" variants={itemVariants}>
              <Container title={t('BasicInfo.title')}>
                <div className="flex flex-wrap gap-1.5">
                  <Tag text={t('BasicInfo.age')} icon={<Mars width="14" height="14" />} />
                  <Tag text={t('BasicInfo.country')} icon={<House width="14" height="14" />} />
                  <Tag text={t('BasicInfo.student')} icon={<GraduationCap width="14" height="14" />} />
                </div>
              </Container>
            </motion.div>
            <motion.div className="w-full flex flex-1" variants={itemVariants}>
              <Container title={t('Languages.title')}>
                <div className="flex flex-wrap gap-1.5">
                  <Tag text={t('Languages.czech')} icon={<img src="/Svg/CzechFlag.svg" alt="CZ" className="w-4 h-4" />} />
                  <Tag text={t('Languages.english')} icon={<img src="/Svg/UKFlag.svg" alt="UK" className="w-4 h-4" />} />
                  <Tag text={t('Languages.german')} icon={<img src="/Svg/GermanFlag.svg" alt="DE" className="w-4 h-4" />} />
                  <Tag text={t('Languages.swedish')} icon={<img src="/Svg/SwedenFlag.svg" alt="SW" className="w-4 h-4" />} />
                </div>
              </Container>
            </motion.div>
          </motion.section>

          <motion.section
              id="skills"
              className="flex flex-col gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
          >
            <motion.h2 className="text-2xl font-semibold mt-2 mb-1" variants={itemVariants}>
              {t('Skills.title')}
            </motion.h2>
            <div className="flex flex-col md:flex-row gap-4">
              <motion.div className="w-full flex flex-1" variants={itemVariants}>
                <Container title={t('Skills.tools')}>
                  <div className="flex flex-wrap gap-1.5">
                    <Tag text="JetBrains IDE" icon={<img src="https://cdn.simpleicons.org/jetbrains/FFFFFF" className="w-3.5 h-3.5" />} />
                    <Tag text="Figma" icon={<img src="https://cdn.simpleicons.org/figma/FFFFFF" className="w-3.5 h-3.5" />} />
                    <Tag text="GitHub" icon={<img src="https://cdn.simpleicons.org/github/FFFFFF" className="w-3.5 h-3.5" />} />
                    <Tag text="Vercel" icon={<img src="https://cdn.simpleicons.org/vercel/FFFFFF" className="w-3.5 h-3.5" />} />
                    <Tag text="Supabase" icon={<img src="https://cdn.simpleicons.org/supabase/FFFFFF" className="w-3.5 h-3.5" />} />
                    <Tag text="Discord" icon={<img src="https://cdn.simpleicons.org/discord/FFFFFF" className="w-3.5 h-3.5" />} />
                    <Tag text="Blender" icon={<img src="https://cdn.simpleicons.org/blender/FFFFFF" className="w-3.5 h-3.5" />} />
                    <Tag text="Roblox Studio" icon={<img src="https://cdn.simpleicons.org/robloxstudio/FFFFFF" className="w-3.5 h-3.5" />} />
                    <Tag text="Godot Engine" icon={<img src="https://cdn.simpleicons.org/godotengine/FFFFFF" className="w-3.5 h-3.5" />} />
                  </div>
                </Container>
              </motion.div>
              <motion.div className="w-full flex flex-1" variants={itemVariants}>
                <Container title={t('Skills.coding')}>
                  <div className="flex flex-wrap gap-1.5">
                    <Tag text="JavaScript" icon={<img src="https://cdn.simpleicons.org/javascript/FFFFFF" className="w-3.5 h-3.5" />} />
                    <Tag text="React" icon={<img src="https://cdn.simpleicons.org/react/FFFFFF" className="w-3.5 h-3.5" />} />
                    <Tag text="Next.js" icon={<img src="https://cdn.simpleicons.org/nextdotjs/FFFFFF" className="w-3.5 h-3.5" />} />
                    <Tag text="Swift & SwiftUI" icon={<img src="https://cdn.simpleicons.org/swift/FFFFFF" className="w-3.5 h-3.5" />} />
                    <div className="bg-[#0d0d0d] text-white rounded-lg flex items-center gap-2 px-3 py-1.5 border border-white/5 transition-transform hover:scale-105">
                      <span className="text-sm font-bold">C#</span>
                      <span className="text-sm text-white">C-Sharp</span>
                    </div>
                    <Tag text="Tailwind CSS" icon={<img src="https://cdn.simpleicons.org/tailwindcss/FFFFFF" className="w-3.5 h-3.5" />} />
                    <Tag text="Python" icon={<img src="https://cdn.simpleicons.org/python/FFFFFF" className="w-3.5 h-3.5" />} />
                  </div>
                </Container>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
              id="projects"
              className="flex flex-col gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
          >
            <motion.h2 className="text-2xl font-semibold mt-2 mb-1" variants={itemVariants}>
              {t('Projects.title')}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ProjectCard title="Imbus" img="/Projects/imbus.png" description={t('Projects.imbusDesc')} />
              <ProjectCard title="Clova.cz" img="/Projects/clova.png" description={t('Projects.clovaDesc')} />
              <ProjectCard title="Funweek 2028" img="/Projects/funweek.png" description={t('Projects.funweekDesc')} />
              <ProjectCard title="Underpine" img="/Projects/underpine.png" description={t('Projects.underpineDesc')} />
            </div>
          </motion.section>

        </div>
      </div>
  );
}
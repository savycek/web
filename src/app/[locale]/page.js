"use client";

import { useTranslations } from 'next-intl';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Container from "@/components/Container.jsx";
import Tag from "@/components/Tag.jsx";
import ProjectCard from "@/components/ProjectCard.jsx";
import { House, Mars, GraduationCap, ArrowRight } from "lucide-react";

export default function Home() {
  const t = useTranslations();
  const pathname = usePathname();

  const isCs = pathname.startsWith('/cs');
  const targetLink = isCs ? '/en' : '/cs';
  const flagIcon = isCs ? "/Svg/UKFlag.svg" : "/Svg/CzechFlag.svg";

  return (
      <div className="min-h-screen bg-[#0d0d0d] text-white p-4 selection:bg-white/20 relative">

        {/* lang switchh */}
        <div className="absolute top-4 right-4 z-10">
          <Link
              href={targetLink}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full text-xs font-medium transition-colors border border-white/5 backdrop-blur-sm"
          >
            <img src={flagIcon} alt="Lang" className="w-4 h-4 rounded-sm" />
            <span>{t('Switcher.label')}</span>
            <ArrowRight size={12} className="opacity-50" />
          </Link>
        </div>

        <div className="max-w-200 mx-auto flex flex-col gap-4 pt-10">

          <section id="hero" className="pt-12 pb-8 flex flex-col gap-2">
            <h1 className="text-[2.25rem] font-bold leading-tight">{t('Hero.title')}</h1>
            <p className="text-[#8E8E93] leading-relaxed">
              {t('Hero.description')}
            </p>
          </section>

          <div className="flex flex-col md:flex-row gap-4">
            <Container title={t('BasicInfo.title')}>
              <div className="flex flex-wrap gap-1.5">
                <Tag text={t('BasicInfo.age')} icon={<Mars width="14" height="14" />} />
                <Tag text={t('BasicInfo.country')} icon={<House width="14" height="14" />} />
                <Tag text={t('BasicInfo.student')} icon={<GraduationCap width="14" height="14" />} />
              </div>
            </Container>

            <Container title={t('Languages.title')}>
              <div className="flex flex-wrap gap-1.5">
                <Tag text={t('Languages.czech')} icon={<img src="/Svg/CzechFlag.svg" alt="CZ" className="w-4 h-4" />} />
                <Tag text={t('Languages.english')} icon={<img src="/Svg/UKFlag.svg" alt="UK" className="w-4 h-4" />} />
                <Tag text={t('Languages.german')} icon={<img src="/Svg/GermanFlag.svg" alt="DE" className="w-4 h-4" />} />
                <Tag text={t('Languages.swedish')} icon={<img src="/Svg/SwedenFlag.svg" alt="SW" className="w-4 h-4" />} />
              </div>
            </Container>
          </div>

          <h2 id="skills" className="text-2xl font-semibold mt-4 mb-1">{t('Skills.title')}</h2>
          <div className="flex flex-col md:flex-row gap-4">
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
          </div>

          <h2 id="projects" className="text-2xl font-semibold mt-4 mb-1">{t('Projects.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard title="Imbus" img="/Projects/imbus.png" description={t('Projects.imbusDesc')} />
            <ProjectCard title="Clova.cz" img="/Projects/clova.png" description={t('Projects.clovaDesc')} />
            <ProjectCard title="Funweek 2028" img="/Projects/funweek.png" description={t('Projects.funweekDesc')} />
            <ProjectCard title="Underpine" img="/Projects/underpine.png" description={t('Projects.underpineDesc')} />
          </div>
        </div>
      </div>
  );
}
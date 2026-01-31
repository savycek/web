import Image from "next/image";
import Container from "@/components/Container.jsx";
import Tag from "@/components/Tag.jsx";
import InputField from "@/components/InputField.jsx";
import ProjectCard from "@/components/ProjectCard.jsx";
import { House, Mars, GraduationCap  } from "lucide-react";

export default function Home() {
  return (
      <div className="min-h-screen bg-[#0d0d0d] text-white p-4 selection:bg-white/20">
        <div className="max-w-200 mx-auto flex flex-col gap-4">
          <section id="hero" className="pt-12 pb-8 flex flex-col gap-2">
            <h1 className="text-[2.25rem] font-bold leading-tight">Ahoj, jsem Dominik</h1>
            <p className="text-[#8E8E93] leading-relaxed">
              Jsem 17letý student programování. Jsem z České republiky, věnuji se vývoji webových aplikací, aplikací ve Swift & SwiftUI, hernímu vývoji a vektorové grafice.
            </p>
          </section>

          <div className="flex flex-col md:flex-row gap-4">
            <Container title="Základní informace">
              <div className="flex flex-wrap gap-1.5">
                <Tag text="17 let" icon={<Mars width="14" height="14" />} />
                <Tag text="Česká republika" icon={<House width="14" height="14" />} />
                <Tag text="Student programování" icon={<GraduationCap width="14" height="14" />} />
              </div>
            </Container>

            <Container title="Jazyková znalost">
              <div className="flex flex-wrap gap-1.5">
                <Tag text="Nativní čeština" icon={<img src="/Svg/CzechFlag.svg" alt="CZ" className="w-4 h-4" />} />
                <Tag text="Pokročilá angličtina" icon={<img src="/Svg/UKFlag.svg" alt="UK" className="w-4 h-4" />} />
                <Tag text="Zákl. němčina" icon={<img src="/Svg/GermanFlag.svg" alt="DE" className="w-4 h-4" />} />
                <Tag text="Zákl. švédština" icon={<img src="/Svg/SwedenFlag.svg" alt="SW" className="w-4 h-4" />} />
              </div>
            </Container>
          </div>

          <h2 id="skills" className="text-2xl font-semibold mt-4 mb-1">Dovednosti</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <Container title="Nástroje">
              <div className="flex flex-wrap gap-1.5">
                <Tag text="JetBrains IDE" icon={<img src="https://cdn.simpleicons.org/jetbrains/FFFFFF" className="w-3.5 h-3.5" />} />
                <Tag text="Figma" icon={<img src="https://cdn.simpleicons.org/figma/FFFFFF" className="w-3.5 h-3.5" />} />
                <Tag text="GitHub" icon={<img src="https://cdn.simpleicons.org/github/FFFFFF" className="w-3.5 h-3.5" />} />
                <Tag text="Vercel" icon={<img src="https://cdn.simpleicons.org/vercel/FFFFFF" className="w-3.5 h-3.5" />} />
              </div>
            </Container>

            <Container title="Kódování">
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
              </div>
            </Container>
          </div>

          <h2 id="projects" className="text-2xl font-semibold mt-4 mb-1">Projekty</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard title="Imbus" img="/Projects/imbus.png" description="Nezisková iniciativa, která se zaměřuje na srozumitelné předávání informací a neustálé vzdělávání skrze společnou tvorbu a experimentování." />
            <ProjectCard title="Clova.cz" img="/Projects/clova.png" description="Vývojářské studio specializující se na platformu Roblox. Dodáváme špičkové skripty, herní assety a komplexní systémy, které kombinují precizní zpracování s vysokou mírou modularity a cenovou dostupností." />
            <ProjectCard title="Funweek 2028" img="/Projects/funweek.png" description="Projektový týden nabitý workshopy, diskusemi a interaktivními soutěžemi, jehož cílem je posilovat sebevědomí, autenticitu a respekt k diverzitě u žáků druhého stupně základních škol." />
            <ProjectCard title="Underpine" img="/Projects/underpine.png" description="Autorská psychologicky-hororová hra. Příběh nás zavede do mrazivého skandinávského pohoří, konkrétně do izolovaného údolí Underpine Valley." />
          </div>
        </div>
      </div>
  );
}

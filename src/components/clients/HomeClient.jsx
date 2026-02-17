"use client";
import { useTranslations } from 'next-intl';
import Container from "@/components/Container.jsx";
import Tag from "@/components/Tag.jsx";
import ProjectCard from "@/components/ProjectCard.jsx";
import { motion } from "framer-motion";
import { House, Mars, GraduationCap } from "lucide-react";

const renderIcon = (item) => {
    if (item.iconSlug) {
        return <img src={`https://cdn.simpleicons.org/${item.iconSlug}/white`} className="w-3.5 h-3.5"
                    alt={item.title}/>;
    }

    if (item.customIcon) {
        return <img src={item.customIcon} className="w-3.5 h-3.5" alt={item.title} />;
    }

    return null;
};

export default function HomeClient({ projects = [], tools = [], coding = [] }) {
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
                                    {tools.map((skill) => (
                                        <Tag
                                            key={skill._id}
                                            text={skill.title}
                                            icon={renderIcon(skill)}
                                        />
                                    ))}
                                </div>
                            </Container>
                        </motion.div>

                        <motion.div className="w-full flex flex-1" variants={itemVariants}>
                            <Container title={t('Skills.coding')}>
                                <div className="flex flex-wrap gap-1.5">
                                    {coding.map((skill) => (
                                        <Tag
                                            key={skill._id}
                                            text={skill.title}
                                            icon={renderIcon(skill)}
                                        />
                                    ))}
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
                        {projects && projects.length > 0 ? (
                            projects.map((project) => (
                                <ProjectCard
                                    key={project._id}
                                    title={project.title}
                                    img={project.img}
                                    description={project.description}
                                />
                            ))
                        ) : (
                            <div className="w-full flex justify-center">
                                <img
                                    src="/Svg/Loader.svg"
                                    alt="loading"
                                    width={60}
                                    height={60}
                                />
                            </div>
                        )}
                    </div>
                </motion.section>

            </div>
        </div>
    );
}
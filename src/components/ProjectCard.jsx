import Container from "@/components/Container.jsx"
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { filter: "blur(10px)", y: 20, opacity: 0 },
    visible: {
        filter: "blur(0px)",
        y: 0,
        opacity: 1,
        transition: { duration: 0.4 }
    },
};

const ProjectCard = ({ title, img, description }) => (
    <motion.div variants={cardVariants} className="flex-1 flex flex-col gap-2">
        <Container className="!p-5">
            <img
                src={img}
                alt={title}
                className="rounded-xl w-full h-48 object-cover border border-white/10"
            />
            <h3 className="text-lg font-medium mt-2">{title}</h3>
            <span className="text-[#8E8E93]">{description}</span>
        </Container>
    </motion.div>
);

export default ProjectCard;
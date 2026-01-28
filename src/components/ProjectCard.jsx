import Container from "@/components/Container.jsx"

const ProjectCard = ({ title, img, description }) => (
    <Container className="!p-5">
        <img
            src={img}
            alt={title}
            className="rounded-xl w-full h-48 object-cover border border-white/10"
        />
        <h3 className="text-lg font-medium mt-2">{title}</h3>
        <span className="text-[#8E8E93]">{description}</span>
    </Container>
);

export default ProjectCard;
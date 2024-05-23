import styled from "@emotion/styled";
import { routes } from "../routes";

const projects = [
  {
    category: "Professional work",
    description: "Projects I've worked on in a professional capacity.",
    list: [
      {
        id: "outgo",
        title: "Outgo",
        description: "A tool to help people manage their finances.",
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      },
      {
        id: "convoy",
        title: "Convoy",
        description: "A platform to help people find and hire lawyers.",
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      },
      {
        id: "legalpad",
        title: "Legalpad",
        description: "A platform to help people find and hire lawyers.",
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      },
    ],
  },
  {
    category: "Take home code samples",
    description: "Code samples from interviews.",
    list: [
      {
        id: "email-thing",
        title: "Email Thing",
        description: "A tool to help people manage their finances.",
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      },
      {
        id: "convoy-svelte",
        title: "Convoy Svelte",
        description: "A platform to help people find and hire lawyers.",
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      },
      {
        id: "convoy-react",
        title: "Convoy React",
        description: "A platform to help people find and hire lawyers.",
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      },
      {
        id: "convoy-svelte",
        title: "Outgo — Svelte",
        description: "A tool to help people manage their finances.",
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      },
      {
        id: "lunas",
        title: "Luna's",
        description: "A platform to help people find and hire lawyers.",
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      },
      {
        id: "not-netflix-inc",
        title: "Not Netflix Inc",
        description: "A platform to help people find and hire lawyers.",
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      },
      {
        id: "material-ide",
        title: "Material IDE",
        description: "A platform to help people find and hire lawyers.",
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      },
    ],
  },
  {
    category: "Projects",
    description: "Personal projects I've worked on.",
    list: [
      {
        id: "chutta",
        title: "Chutta",
        description: "A tool to help people manage their finances.",
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      },
      {
        id: "librorum",
        title: "Librorum",
        description: "A platform to help people find and hire lawyers.",
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      },
      {
        id: "cyberhawk",
        title: "Cyberhawk",
        description: "A platform to help people find and hire lawyers.",
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      },
    ],
  },
  {
    category: "45 mins generic code challenges",
    description: "Prompts from live coding challenges.",
    list: [
      {
        id: "wordle",
        title: "Wordle",
        description: "A tool to help people manage their finances.",
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      },
      {
        id: "snake",
        title: "Snake",
        description: "A platform to help people find and hire lawyers.",
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      },
      {
        id: "color-autocomplete-react",
        title: "Autocomplete React",
        description: "A platform to help people find and hire lawyers.",
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      },
    ],
  },
];

const CategoryGroup = styled.div`
  margin-bottom: 2rem;
  text-align: start;
`;

const CategoryTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;
`;

const ProjectItem = styled.li`
  margin-bottom: 3rem;
  border-left: 4px solid #eb9a3f;
  padding-left: 1rem;
  cursor: pointer;

  transition: all ease 0.3s;
  :hover {
    padding-left: 1.25rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  margin-bottom: 0.5rem;
`;

const ProjectTechStack = styled.p`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const CategoryDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const RootContainer = styled.div`
  display: flex;
  text-align: start;
  flex-direction: column;
  padding: 32px 200px;
`;

const Projects = () => {
  return (
    <RootContainer>
      <h1>Projects</h1>
      <p>
        Here are selected projects and code samples that I have written about
        and shared with permission.
      </p>
      {projects.map((category) => (
        <CategoryGroup key={category.category}>
          <CategoryTitle>{category.category}</CategoryTitle>
          <CategoryDescription>{category.description}</CategoryDescription>
          <ProjectList>
            {category.list.map((project) => (
              <ProjectItem
                key={project.id}
                onClick={() =>
                  window.open(routes.project.replace(":id", project.id))
                }
              >
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTechStack>
                  {project.techStack.join(", ")}
                </ProjectTechStack>
              </ProjectItem>
            ))}
          </ProjectList>
        </CategoryGroup>
      ))}
    </RootContainer>
  );
};

export default Projects;

import { memo, useRef } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { TProject } from "../data/projects";
import { motion } from "framer-motion";

const RootContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 32px;
  padding: 32px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2d6c4;
  max-width: 720px;
  width: 100%;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 576px) {
    margin: 16px;
    padding: 24px;
  }
`;

const ProjectTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1f1f1f;
  margin-bottom: 8px;
`;

const ProjectSubTitle = styled.div`
  font-size: 16px;
  color: #555;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const ProjectType = styled.span`
  margin-left: 12px;
  font-size: 13px;
  font-weight: 600;
  background: #f9f4ee;
  color: #eb9a3f;
  padding: 4px 10px;
  border-radius: 999px;
  display: flex;
  align-items: center;
`;

const TimingIcon = styled.span`
  i {
    margin: 0 6px 0 12px;
    color: #aaa;
  }
`;

const Link = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: #eb9a3f !important;
  border: 1px solid #eb9a3f;
  font-family: "Montserrat", sans-serif;
  padding: 4px 12px;
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: #eb9a3f;
    color: white !important;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 16px;
  overflow: hidden;
  border: 2px solid #ddd;
  background: #f5f3ef;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
    pointer-events: none;
  }

  &:hover img,
  &:hover video {
    transform: scale(1.05);
  }

  @media (max-width: 576px) {
    height: auto;
  }
`;

interface Props {
  project: TProject;
}

const Project = ({ project }: Props) => {
  const {
    demoLink,
    subtitle,
    title,
    timing,
    height = "auto",
    width = "100%",
    image,
    videoUrl,
    projectType,
  } = project;

  return (
    <RootContainer
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <ProjectTitle>
        <div>{title}</div>
        {demoLink && (
          <Link href={demoLink} target="_blank" rel="noreferrer">
            Live Demo
          </Link>
        )}
      </ProjectTitle>
      <ProjectSubTitle>
        {subtitle}
        {projectType && (
          <ProjectType>
            {`(${projectType}) `}
            {timing && (
              <TimingIcon>
                <i className="fas fa-hourglass-half" />
                {timing}
              </TimingIcon>
            )}
          </ProjectType>
        )}
      </ProjectSubTitle>
      <ImageContainer>
        {image && <Image src={image} alt={"ProjectImage"} height={350} />}
        {videoUrl && (
          <video height={height} width={width} autoPlay muted loop playsInline>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </ImageContainer>
    </RootContainer>
  );
};

export default memo(Project);

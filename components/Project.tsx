import { memo } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { Project } from "../data/projects";

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  width: 600px;
`;

const ProjectTitle = styled.div`
  font-weight: 600;
  justify-content: center;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const ProjectSubTitle = styled.div`
  font-weight: 400;
  margin-bottom: 16px;
  font-size: 16px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const ProjectType = styled.div`
  margin-left: 8px;
  font-weight: 600;
  font-size: 12px;
`;

const TimingIcon = styled.span`
  i {
    margin: 0 4px;
  }
`;

const Link = styled.a`
  font-weight: 500;
  font-size: 16px;
  margin-left: 16px;
  color: #eb9a3f !important;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  border: 2px solid #eee;
  background: #333;
  overflow: hidden;
  height: 350px;
  margin-bottom: 16px;

  @media (max-width: 576px) {
    height: auto;
    width: 100%;
  }
`;

interface Props {
  project: Project;
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
    <RootContainer>
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
            ({projectType}){" "}
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
          <video height={height} width={width} controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </ImageContainer>
    </RootContainer>
  );
};

export default memo(Project);

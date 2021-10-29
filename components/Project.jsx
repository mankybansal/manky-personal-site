import { memo } from "react";
import Image from "next/image";
import styled from "@emotion/styled";

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  width: 600px;
`;

const ProjectTitle = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
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
  color: #eb9a3f !important;
  margin-bottom: 16px;
`;

const Project = ({
  project: {
    demoLink,
    subtitle,
    title,
    timing,
    year,
    height = "auto",
    width = "100%",
    imageUrl,
    videoUrl,
    projectType,
  },
}) => {
  return (
    <RootContainer>
      <ProjectTitle>{title}</ProjectTitle>
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
      {demoLink && (
        <Link href={demoLink} target="_blank" rel="noreferrer">
          Live Demo
        </Link>
      )}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={"ProjectImage"}
          height={height}
          width={width}
        />
      )}
      {videoUrl && (
        <video height={height} width={width} controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </RootContainer>
  );
};

export default memo(Project);

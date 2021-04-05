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
`;

const Link = styled.a`
  font-weight: 500;
  color: #eb9a3f !important;
  margin-bottom: 16px;
`;

const Project = ({
  demoLink,
  subtitle,
  title,
  height = "auto",
  width = "100%",
  imageUrl,
  videoUrl,
}) => {
  return (
    <RootContainer>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectSubTitle>{subtitle}</ProjectSubTitle>
      {demoLink && (
        <Link href={demoLink} target="_blank">
          Live Demo
        </Link>
      )}
      {imageUrl && <Image src={imageUrl} height={height} width={width} />}
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

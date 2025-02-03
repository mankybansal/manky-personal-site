import { memo } from "react";
import styled from "@emotion/styled";
import { TExperience } from "../data/experiences";

const RootContainer = styled.div<{ current: boolean }>`
  display: flex;
  margin: 50px;
  gap: ${({ current }) => (current ? "32px" : "16px")};

  @media (max-width: 576px) {
    margin: 20px 0;
    width: 100%;
    text-align: left;
    flex-direction: column;
  }
`;

const StyledImage = styled.img`
  @media (max-width: 576px) {
    display: none;
  }
`;

const InfoContainer = styled.div<{ current: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const YearText = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 8px;
`;

const NameText = styled.a`
  font-weight: 500;
  margin-bottom: 4px;
  text-decoration: underline;
`;

const DetailsText = styled.div<{ current: boolean }>`
  font-weight: 600;
  font-size: ${({ current }) => (current ? "16px" : "12px")};
  color: #eb9a3f;
  margin-bottom: 8px;
`;

const CityText = styled.div`
  font-weight: 500;
  font-size: 12px;
`;

const StageText = styled.div`
  font-weight: 500;
  color: #aaa;
  margin-top: 4px;
  font-size: 12px;
`;

interface Props {
  experience: TExperience;
}

const Experience = ({ experience }: Props) => {
  const { year, image, name, city, details, stage, current, link } = experience;

  return (
    <RootContainer current={current}>
      <StyledImage src={image} height={current ? "48px" : "32px"} />
      <InfoContainer current={current}>
        <YearText>{year}</YearText>
        <NameText href={link} target="_blank" rel="noreferrer">
          {name}
          <i
            className="fa fa-arrow-right"
            style={{ marginLeft: "16px", color: "#DDD" }}
          />
        </NameText>
        <DetailsText current={current}>{details}</DetailsText>
        <CityText>{city}</CityText>
        <StageText>{stage}</StageText>
      </InfoContainer>
    </RootContainer>
  );
};

export default memo(Experience);

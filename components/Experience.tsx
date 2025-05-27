import { memo } from "react";
import styled from "@emotion/styled";
import { TExperience } from "../data/experiences";

const RootContainer = styled.div<{ current: boolean }>`
  background: ${({ current }) =>
    current
      ? "linear-gradient(135deg, #fffdf8, #fef5e7)" // warm light gradient
      : "white"};
  border-radius: 20px;
  padding: 24px;
  box-shadow: ${({ current }) =>
    current
      ? "0 24px 48px rgba(0, 0, 0, 0.08)"
      : "0 20px 40px rgba(0, 0, 0, 0.06)"};
  flex: 1;
  min-width: 280px;
  max-width: 360px;
  transition:
    transform 0.2s,
    box-shadow 0.3s;
  text-align: left;
  position: relative;

  &:hover {
    transform: translateY(-4px) scale(${({ current }) => (current ? 1.02 : 1)});
    box-shadow: ${({ current }) =>
      current
        ? "0 30px 60px rgba(0, 0, 0, 0.1)"
        : "0 24px 50px rgba(0, 0, 0, 0.08)"};
  }

  @media (max-width: 576px) {
    padding: 20px;
  }
`;

const StyledImage = styled.img`
  width: 48px;
  height: auto;
  margin-bottom: 8px;
  border-radius: 8px;
  object-fit: contain;

  @media (max-width: 576px) {
    display: none;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const YearText = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #999;
  margin-bottom: 4px;
`;

const NameText = styled.a`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #222;
  text-decoration: none;

  i {
    margin-left: 8px;
    font-size: 12px;
    color: #bbb;
  }

  &:hover i {
    transform: translateX(4px);
    transition: transform 0.2s;
    color: #eb9a3f;
  }
`;

const DetailsText = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #eb9a3f;
  margin-bottom: 6px;
`;

const CityText = styled.div`
  font-size: 14px;
  color: #555;
  font-weight: 500;
`;

const StageText = styled.div`
  font-size: 12px;
  color: #aaa;
  margin-top: 2px;
`;

interface Props {
  experience: TExperience;
}

const Experience = ({ experience }: Props) => {
  const { year, image, name, city, details, stage, current, link } = experience;

  return (
    <RootContainer current={current}>
      <StyledImage src={image} alt={`${name} logo`} />
      <InfoContainer>
        <YearText>{year}</YearText>
        <NameText href={link} target="_blank" rel="noreferrer">
          {name}
          <i className="fa fa-arrow-right" />
        </NameText>
        <DetailsText>{details}</DetailsText>
        <CityText>{city}</CityText>
        <StageText>{stage}</StageText>
      </InfoContainer>
    </RootContainer>
  );
};

export default memo(Experience);

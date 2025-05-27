import { memo } from "react";
import styled from "@emotion/styled";
import { TEducation } from "../data/education";

const RootContainer = styled.div`
  background: #fffdf8
    linear-gradient(to bottom, rgba(0, 0, 0, 0.03), transparent);
  border-radius: 20px;
  padding: 24px;

  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  min-width: 280px;
  width: 100%;
  max-width: 480px;
  transition: transform 0.2s;

  @media (max-width: 576px) {
    flex-direction: column;
    padding: 20px;
    text-align: left;
  }
`;

const StyledImage = styled.img`
  @media (max-width: 576px) {
    display: none;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 32px;
`;

const YearLocationText = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #999;
  margin-bottom: 4px;
`;

const InstitutionText = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 8px;
  color: #222;
  text-decoration: none;
`;

const CredentialText = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #eb9a3f;
  margin-bottom: 8px;
`;

const ExtraNotesText = styled.div`
  font-size: 12px;
  color: #aaa;
  margin-top: 2px;
`;

interface Props {
  education: TEducation;
}

const Education = ({ education }: Props) => {
  const {
    year,
    image,
    imageHeight,
    institution,
    location,
    extraNotes,
    credential,
  } = education;

  return (
    <RootContainer>
      <StyledImage src={image} height={imageHeight} />
      <InfoContainer>
        <YearLocationText>
          {year}, {location}
        </YearLocationText>
        <InstitutionText>{institution}</InstitutionText>
        <CredentialText>{credential}</CredentialText>
        {extraNotes && <ExtraNotesText>{extraNotes}</ExtraNotesText>}
      </InfoContainer>
    </RootContainer>
  );
};

export default memo(Education);

import { memo } from "react";
import styled from "@emotion/styled";
import { TEducation } from "../data/education";

const RootContainer = styled.div`
  display: flex;
  margin: 50px;

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

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 32px;
`;

const YearLocationText = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 8px;
`;

const InstitutionText = styled.div`
  font-weight: 500;
  margin-bottom: 4px;
`;

const CredentialText = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #eb9a3f;
  margin-bottom: 8px;
`;

const ExtraNotesText = styled.div`
  font-weight: 500;
  font-size: 12px;
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

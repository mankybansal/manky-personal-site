import { css } from "@emotion/css";
import styles from "../styles/Home.module.css";
import { memo } from "react";
import styled from "@emotion/styled";
import { Education } from "../data/education";

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

interface Props {
  education: Education;
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
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-left: 32px;
        `}
      >
        <div
          className={css`
            font-family: "Montserrat", sans-serif;
            font-weight: 400;
            font-size: 16px;
            margin-bottom: 8px;
          `}
        >
          {year}, {location}
        </div>
        <div
          className={`${styles.segoeLight20}
                  ${css`
                    font-weight: 500;
                    margin-bottom: 4px;
                  `}`}
        >
          {institution}
        </div>
        <div
          className={`${styles.segoeLight20}
                  ${css`
                    font-weight: 600;
                    font-size: 16px;
                    color: #eb9a3f;
                    margin-bottom: 8px;
                  `}`}
        >
          {credential}
        </div>
        {extraNotes && (
          <div
            className={`${styles.segoeLight20}
                  ${css`
                    font-weight: 500;
                    font-size: 12px;
                  `}`}
          >
            {extraNotes}
          </div>
        )}
      </div>
    </RootContainer>
  );
};

export default memo(Education);

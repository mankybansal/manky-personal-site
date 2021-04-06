import { css } from "@emotion/css";
import styles from "../styles/Home.module.css";
import { memo } from "react";
import styled from "@emotion/styled";

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

const Experience = ({
  experience: { year, image, imageHeight, name, city, details },
}) => (
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
        {year}
      </div>
      <div
        className={`${styles.segoeLight20}
                  ${css`
                    font-weight: 500;
                    margin-bottom: 4px;
                  `}`}
      >
        {name}
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
        {details}
      </div>
      <div
        className={`${styles.segoeLight20}
                  ${css`
                    font-weight: 500;
                    font-size: 12px;
                  `}`}
      >
        {city}
      </div>
    </div>
  </RootContainer>
);

export default memo(Experience);

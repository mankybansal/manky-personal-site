import { css } from "@emotion/css";
import styles from "../styles/Home.module.css";
import { memo } from "react";

const Experience = ({ year, image, imageHeight, name, city, details }) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "50px",
      }}
    >
      <img src={image} height={imageHeight} />
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-left: 32px;
        `}
      >
        <span
          className={css`
            font-family: "Montserrat", sans-serif;
            font-weight: 400;
            font-size: 16px;
            margin-bottom: 8px;
          `}
        >
          {year}
        </span>
        <span
          className={`${styles.segoeLight20}
                  ${css`
                    font-weight: 500;
                    margin-bottom: 4px;
                  `}`}
        >
          {name}
        </span>
        <span
          className={`${styles.segoeLight20}
                  ${css`
                    font-weight: 600;
                    font-size: 16px;
                    color: #eb9a3f;
                    margin-bottom: 8px;
                  `}`}
        >
          {details}
        </span>
        <span
          className={`${styles.segoeLight20}
                  ${css`
                    font-weight: 500;
                    font-size: 12px;
                  `}`}
        >
          {city}
        </span>
      </div>
    </div>
  );
};

export default memo(Experience);

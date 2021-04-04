import { memo } from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

const RootContainer = styled.div`
  width: 100%;
  height: 80px;
  background: #fafafa;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 80px;
  padding-top: 10px;
  border-bottom: 1px solid #eee;
  background: rgba(255, 255, 255, 0.97);
  transition: all ease 0.5s;
  position: absolute;
  z-index: 9999;
  overflow: hidden;
  
  &.shrink {
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    padding-top: 0;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  ;
`;

const Cool = styled.div`
  transition: all ease 0.3s;
  opacity: 0;
  height: 60px;
  width: 60px;
  border-right: 1px solid #000;
  float: left;
`;

const HeaderLink = styled.div`
  display: inline-block;
  font-size: 18px;
  vertical-align: top;
  height: 60px;
  padding: 18px 5px 24px 5px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  margin-left: 30px;
  margin-right: 30px;
  transition: all ease 0.3s;
  cursor: pointer;
  float: left;

  &.shrink {
    margin-left: 25px;
    margin-right: 25px;
  }

  :hover {
    color: #eb9a3f;
    height: 48px;
    border-bottom: 2px solid #eb9a3f;
  }
`;

const HeaderLink2 = styled(HeaderLink)`
  letter-spacing: 5px;
  font-size: 20px;
  padding: 16px 20px 24px 20px;

  &.shrink {
    margin-left: 80px;
    margin-right: 60px;
  }
`;

const Header = () => {
  return (
    <RootContainer>
      <InnerContainer>
        <Cool>
          <img
            src={"static/images/Logo.png"}
            className={css`
              height: 50px;
              margin-top: 5px;
            `}
          />
        </Cool>
        <HeaderLink2>
          <span style={{ fontWeight: 700 }}>MAYANK</span>
          BANSAL
        </HeaderLink2>
        <HeaderLink>
          <a href={"#about"}>About</a>
        </HeaderLink>
        <HeaderLink>
          <a href={"#experience"}>Experience</a>
        </HeaderLink>
        <HeaderLink>
          <a href={"#projects"}>Projects</a>
        </HeaderLink>
        <HeaderLink>
          <a href={"#skills"}>Technical Skills</a>
        </HeaderLink>

        <HeaderLink>
          <a href="https://manky.me/resume" target="_blank">
            Resume
          </a>
        </HeaderLink>
        <HeaderLink>
          <a href={"#contact"}>Contact</a>
        </HeaderLink>
      </InnerContainer>
    </RootContainer>
  );
};

export default memo(Header);

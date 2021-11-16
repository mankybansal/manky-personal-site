import { memo } from "react";
import styled from "@emotion/styled";

const RootContainer = styled.div`
  width: 100%;
  height: 80px;
  background: #fafafa;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
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
  justify-content: center;
  display: flex;
`;

const BaseHeaderLink = styled.div`
  display: inline-block;
  font-size: 18px;
  vertical-align: top;
  height: 60px;
  padding: 18px 5px 24px 5px;
  font-weight: 400;
  margin-left: 30px;
  margin-right: 30px;
  transition: all ease 0.3s;
  cursor: pointer;
  float: left;
`;

const HeaderLink1 = styled(BaseHeaderLink)`
  :hover {
    color: #eb9a3f;
    height: 48px;
    border-bottom: 2px solid #eb9a3f;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

const HeaderLink2 = styled(BaseHeaderLink)`
  letter-spacing: 5px;
  font-size: 20px;
  padding: 16px 20px 24px 20px;
`;

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Technical Skills", href: "#skills" },
  { label: "Resume", href: "/resume", target: "_blank" },
  { label: "Contact", href: "#contact" },
];

const Header = () => (
  <RootContainer>
    <InnerContainer>
      <HeaderLink2>
        <span style={{ fontWeight: 700 }}>MAYANK</span>
        BANSAL
      </HeaderLink2>
      {links.map((link, idx) => (
        <HeaderLink1 key={`${link.label}-${idx}`}>
          <a href={link.href} target={link.target ?? ""}>
            {link.label}
          </a>
        </HeaderLink1>
      ))}
    </InnerContainer>
  </RootContainer>
);

export default memo(Header);

import styled from "@emotion/styled";

export const SectionTitle = styled.div`
  font-size: 64px;
  color: #b25c37;
  font-family: "Coromont Garamond", serif;
  font-weight: 700;

  @media (max-width: 568px) {
    font-size: 32px;
  }
`;

export const ShimmerButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  border-radius: 9999px;
  font-family: "Montserrat", sans-serif;
  background: #eb9a3f;
  color: white;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition:
    transform 0.2s ease,
    box-shadow 0.3s ease;

  :visited {
    color: white;
  }

  border: 2px solid transparent;
  box-shadow: 0 8px 20px rgba(233, 122, 0, 0.3);

  &:hover {
    color: white;
    transform: scale(1.05);
    box-shadow: 0 12px 30px rgba(233, 122, 0, 0.5);
  }
`;

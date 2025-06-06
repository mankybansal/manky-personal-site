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

export const GlassyButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  border-radius: 9999px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: white;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  background: rgba(235, 154, 63, 0.3);
  box-shadow:
    0 8px 24px 0 rgba(233, 122, 0, 0.25),
    0 1.5px 4px 0 rgba(255, 255, 255, 0.2) inset;
  backdrop-filter: blur(12px) saturate(130%);
  -webkit-backdrop-filter: blur(12px) saturate(130%);
  transition:
    transform 0.18s cubic-bezier(0.4, 2, 0.5, 1),
    box-shadow 0.2s cubic-bezier(0.4, 2, 0.5, 1),
    background 0.3s;

  :visited {
    color: white;
  }

  /* Shimmer text only */
  span {
    display: inline-block;
    background: linear-gradient(
      90deg,
      #fff 20%,
      #ffe4b3 40%,
      #fff 60%,
      #fff 100%
    );
    background-size: 200% auto;
    color: white;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 1.5s linear infinite;
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  /* Shimmer border */
  &::before {
    content: "";
    position: absolute;
    inset: -3px; /* Spread border outside a bit */
    border-radius: inherit;
    padding: 0;
    z-index: 1;
    background: conic-gradient(
      from 0deg,
      #fff8e1 0deg,
      #fdbb69 60deg,
      #eb9a3f 120deg,
      #f6e27a 180deg,
      #fff8e1 240deg,
      #fdbb69 300deg,
      #fff8e1 360deg
    );
    opacity: 0.8;
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: xor;
    pointer-events: none;
    transition:
      filter 0.4s,
      opacity 0.4s;
    filter: blur(0.7px) brightness(1.1);
    /* Only visible on hover */
    opacity: 0;
  }

  &:hover::before {
    animation: spinBorder 1.3s linear infinite;
    opacity: 1;
  }

  @keyframes spinBorder {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Ensure content is above the border effect */
  > * {
    position: relative;
    z-index: 2;
  }

  &:hover {
    color: white;
    transform: scale(1.045);
    background: rgba(235, 154, 63, 0.5);
    box-shadow:
      0 12px 32px 0 rgba(233, 122, 0, 0.35),
      0 1.5px 8px 0 rgba(255, 255, 255, 0.25) inset;
  }
`;

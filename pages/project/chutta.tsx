import styled from "@emotion/styled";

const ProjectPage = styled.div`
  padding: 24px;
  justify-content: center;
  display: flex;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  text-align: left;
`;

const TextBlock = styled.p`
  margin: 24px 0;
  max-width: 800px;
  font-size: 1.125rem;
  line-height: 1.6rem;
`;

import microSavingsPlatform from "../../public/images/screenshots/micro-savings-platform.png";
import Image from "next/image";
import { DateTime } from "luxon";

const Highlight = styled.span`
  font-weight: 600;
`;

const StyledImage = styled(Image)`
  margin: 24px 0;
  width: 100%;
  height: auto;
  max-width: 800px;
`;

export default function Chutta() {
  return (
    <ProjectPage>
      <InnerContainer>
        <h1>Chutta</h1>
        <TextBlock>
          <Highlight>Hackathon Project — June 2017</Highlight>
        </TextBlock>
        <TextBlock>
          Chutta was a micro-savings platform that helps you meet your saving
          goals. This project was developed for an AngelHack hackathon, in which
          it placed second.
        </TextBlock>
        <TextBlock>
          This app was linked to your bank account, and would monitor card
          transactions in real time. Everytime the user made a transaction, the
          system would round off the transaction by charging an additional
          amount. For example ₹483.00 would become ₹500.00 if you had set{" "}
          <Highlight>
            &quot;Round to the nearest 50 on transactions above ₹300.00.&quot;
          </Highlight>
        </TextBlock>

        <StyledImage
          src={microSavingsPlatform}
          alt={"ProjectImage"}
          height={350}
        />

        <TextBlock>
          Unfortunately, this app is not deployed at the moment, nor is it
          runnable. This project was showcased live, with a real Amazon
          purchase.
        </TextBlock>
        <TextBlock>
          Technologies used:{" "}
          <Highlight>
            Angular.js, Flask, Python, JQuery, Selenium, Stripe
          </Highlight>
        </TextBlock>
      </InnerContainer>
    </ProjectPage>
  );
}

// Enhanced Meet page with improved UX, animations, and stricter gating logic

import { useState } from "react";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 12px;
  background: linear-gradient(to bottom, #fffdf8, #f5f3ef);
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Intro = styled.div`
  max-width: 700px;
  text-align: center;
  margin-bottom: 32px;
  color: #333;
  animation: ${fadeIn} 0.6s ease forwards;
  opacity: 0;
  animation-fill-mode: forwards;

  p {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  max-width: 800px;
  align-items: center;
  text-align: center;
  opacity: ${({ dimmed }) => (dimmed ? 0.4 : 1)};
  transition: opacity 0.3s ease;

  h1 {
    color: #222;
    font-weight: 600;
  }

  h4 {
    color: #666;
    font-weight: 400;
    margin-top: 0.5rem;
    max-width: 600px;
  }
`;

const OptionsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

const OptionButton = styled.button`
  padding: 10px 28px;
  font-size: 16px;
  font-weight: 500;
  color: #222;
  background: transparent;
  border-radius: 999px;
  border: 2px solid #222;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #222;
    color: white;
    transform: translateY(-1px);
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: #eb9a3f;
      color: white;
      border-color: #eb9a3f;
    `}
`;

const Highlight = styled.span`
  color: #eb9a3f;
  font-weight: 600;
`;

const VideoFrame = styled.iframe`
  border: none;
  width: 100%;
  max-width: 500px;
  height: 280px;
  margin: 12px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ScheduleButton = styled(OptionButton)`
  font-size: 18px;
  padding: 14px 32px;
  margin-top: 24px;
`;

const Meet = () => {
  const [formState, setFormState] = useState({
    step1: undefined,
    immigration: undefined,
    hiring: undefined,
    hireMe: undefined,
  });

  const isAnswered = (step) => step !== undefined;

  const handle = (key, value) => {
    const newState = { ...formState };
    newState[key] = value;
    if (key === "step1") {
      newState.immigration = undefined;
      newState.hiring = undefined;
      newState.hireMe = undefined;
    }
    if (key === "hiring") {
      newState.hireMe = undefined;
    }
    setFormState(newState);
  };

  const shouldShowCalendar =
    formState.step1 === "other" ||
    formState.hireMe === "hasOpenPosition" ||
    formState.hireMe === "differentCompany" ||
    formState.immigration === "hasWatched";

  return (
    <RootContainer>
      <Intro>
        <p>Hi — thanks for your interest in connecting!</p>
        <p>
          This form helps us both figure out what kind of conversation will be
          most valuable. I can help with immigration, hiring, or anything in
          between.
        </p>
        <p>
          I often talk with founders, engineers, and immigrants navigating U.S.
          opportunities. Let’s make this useful for both of us!
        </p>
      </Intro>

      <OptionGroup dimmed={isAnswered(formState.step1)}>
        <h1>What would you like to meet about?</h1>
        <OptionsContainer>
          <OptionButton
            isSelected={formState.step1 === "immigration"}
            onClick={() => handle("step1", "immigration")}
          >
            Immigration / Visas
          </OptionButton>
          <OptionButton
            isSelected={formState.step1 === "hiring"}
            onClick={() => handle("step1", "hiring")}
          >
            Hiring / Job Opportunities
          </OptionButton>
          <OptionButton
            isSelected={formState.step1 === "other"}
            onClick={() => handle("step1", "other")}
          >
            Just Networking
          </OptionButton>
        </OptionsContainer>
      </OptionGroup>

      {formState.step1 === "immigration" && (
        <OptionGroup dimmed={isAnswered(formState.immigration)}>
          <h1>Have you already explored these?</h1>
          <h4>
            I’ve put together answers to common O-1 / EB-1A questions. They’re
            helpful even if you&#39;re just getting started — and many
            influencers now quote them on LinkedIn.
          </h4>
          <OptionsContainer>
            <VideoFrame
              src="https://www.youtube.com/embed/Ar_hijWPS5s"
              title="Alternative Work Visa"
              allowFullScreen
            />
            <VideoFrame
              src="https://www.youtube.com/embed/0AzPlMJ6slQ"
              title="Common O-1 Visa Questions"
              allowFullScreen
            />
          </OptionsContainer>
          <OptionsContainer>
            <OptionButton
              isSelected={formState.immigration === "hasWatched"}
              onClick={() => handle("immigration", "hasWatched")}
            >
              Yep, already watched
            </OptionButton>
            <OptionButton
              isSelected={formState.immigration === "hasNotWatched"}
              onClick={() => handle("immigration", "hasNotWatched")}
            >
              Not yet
            </OptionButton>
          </OptionsContainer>
          {formState.immigration === "hasNotWatched" && (
            <h4>
              You can find many of the most common answers in the videos above,
              or by browsing LinkedIn where creators often summarize this
              process. I recommend starting there before scheduling time
              together. 🙏
            </h4>
          )}
        </OptionGroup>
      )}

      {formState.step1 === "hiring" && (
        <OptionGroup dimmed={isAnswered(formState.hiring)}>
          <h1>Are you looking to hire me?</h1>
          <OptionsContainer>
            <OptionButton
              isSelected={formState.hiring === "hireMayank"}
              onClick={() => handle("hiring", "hireMayank")}
            >
              Yes, I want to hire you
            </OptionButton>
            <OptionButton
              isSelected={formState.hiring === "hireMe"}
              onClick={() => handle("hiring", "hireMe")}
            >
              No, I am looking for a job
            </OptionButton>
          </OptionsContainer>
        </OptionGroup>
      )}

      {formState.hiring === "hireMayank" && (
        <OptionGroup>
          <h1>
            I’m not actively looking, but I love hearing about what you&#39;re
            building. <Highlight>Message me on LinkedIn first.</Highlight>
          </h1>
          <OptionsContainer>
            <OptionButton
              onClick={() => window.open("https://linkedin.com/in/mankybansal")}
            >
              💼 Message me on LinkedIn
            </OptionButton>
          </OptionsContainer>
        </OptionGroup>
      )}

      {formState.hiring === "hireMe" && (
        <OptionGroup dimmed={isAnswered(formState.hireMe)}>
          <h1>
            Do any of my current or past employers —{" "}
            <Highlight>OpenAI</Highlight>,<Highlight>Outgo (DAT)</Highlight>,{" "}
            <Highlight>Convoy (Flexport)</Highlight>,
            <Highlight>Legalpad (Deel)</Highlight> — have an open role
            you&#39;re applying to?
          </h1>
          <OptionsContainer>
            <OptionButton
              isSelected={formState.hireMe === "hasOpenPosition"}
              onClick={() => handle("hireMe", "hasOpenPosition")}
            >
              Yes
            </OptionButton>
            <OptionButton
              isSelected={formState.hireMe === "hasNoOpenPosition"}
              onClick={() => handle("hireMe", "hasNoOpenPosition")}
            >
              No, but I’m still interested
            </OptionButton>
            <OptionButton
              isSelected={formState.hireMe === "differentCompany"}
              onClick={() => handle("hireMe", "differentCompany")}
            >
              No, different company
            </OptionButton>
          </OptionsContainer>
        </OptionGroup>
      )}

      {formState.hireMe === "hasNoOpenPosition" && (
        <OptionGroup>
          <h1>
            It’s unlikely I can help right now. Feel free to connect on LinkedIn
            for future roles!
          </h1>
          <OptionsContainer>
            <OptionButton
              onClick={() => window.open("https://linkedin.com/in/mankybansal")}
            >
              🔗 Connect on LinkedIn
            </OptionButton>
          </OptionsContainer>
        </OptionGroup>
      )}

      {shouldShowCalendar && (
        <OptionGroup>
          <h1>Great — let&#39;s talk!</h1>
          <h4>
            If you&#39;re in North America, please schedule on a weekday. I
            reserve weekends for international time zones. 🙏
          </h4>
          <ScheduleButton
            onClick={() => window.open("https://calendly.com/mankybansal")}
          >
            📅 Schedule a Meeting
          </ScheduleButton>
        </OptionGroup>
      )}
    </RootContainer>
  );
};

export default Meet;

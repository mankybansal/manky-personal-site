// Enhanced Meet page with linked-list-style flow

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

const IntroCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
  max-width: 720px;
  text-align: center;
  color: #333;
  animation: ${fadeIn} 0.6s ease forwards;
  opacity: 0;
  animation-fill-mode: forwards;

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
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

const InnerContainer = styled.div`
  display: flex;
  max-width: 768px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const ScheduleButton = styled(OptionButton)`
  font-size: 18px;
  padding: 14px 32px;
  margin-top: 24px;
`;

const flow = {
  step1: {
    question: "What would you like to meet about?",
    options: [
      {
        label: "Immigration / Visas",
        value: "immigration",
        next: "immigration",
      },
      { label: "Hiring / Job Opportunities", value: "hiring", next: "hiring" },
      { label: "Just Networking", value: "other", next: "confirm" },
    ],
  },
  immigration: {
    question: (
      <>
        <h1>Have you already explored these?</h1>
        <h4>
          I’ve put together answers to common O-1 / EB-1A questions. They’re
          helpful even if you&#39;re just getting started — and many influencers
          now quote them on LinkedIn.
        </h4>
      </>
    ),
    custom: (
      <OptionsContainer>
        <iframe
          src="https://www.youtube.com/embed/Ar_hijWPS5s"
          title="Alternative Work Visa"
          allowFullScreen
          style={{
            width: "100%",
            maxWidth: 500,
            height: 280,
            border: "none",
            borderRadius: 12,
          }}
        />
        <iframe
          src="https://www.youtube.com/embed/0AzPlMJ6slQ"
          title="Common O-1 Visa Questions"
          allowFullScreen
          style={{
            width: "100%",
            maxWidth: 500,
            height: 280,
            border: "none",
            borderRadius: 12,
          }}
        />
      </OptionsContainer>
    ),
    options: [
      { label: "Yep, already watched", value: "hasWatched", next: "confirm" },
      { label: "Not yet", value: "hasNotWatched" },
    ],
  },
  hiring: {
    question: "Are you looking to hire me?",
    options: [
      {
        label: "Yes, I want to hire you",
        value: "hireMayank",
        message: "linkedin",
      },
      { label: "No, I am looking for a job", value: "hireMe", next: "hireMe" },
    ],
  },
  hireMe: {
    question: (
      <>
        <h1>
          Do any of my current or past employers — <Highlight>OpenAI</Highlight>
          ,<Highlight>Outgo (DAT)</Highlight>,{" "}
          <Highlight>Convoy (Flexport)</Highlight>,
          <Highlight>Legalpad (Deel)</Highlight> — have an open role you&#39;re
          applying to?
        </h1>
      </>
    ),
    options: [
      { label: "Yes", value: "hasOpenPosition", next: "confirm" },
      {
        label: "No, but I’m still interested",
        value: "hasNoOpenPosition",
        message: "linkedin",
      },
      {
        label: "No, different company",
        value: "differentCompany",
        next: "confirm",
      },
    ],
  },
  confirm: {
    question: (
      <>
        <h1>Have we already agreed to meet?</h1>
        <h4>
          I get hundreds of requests each week and only take meetings I've
          explicitly confirmed. If we haven’t chatted yet, I’ll have to cancel.
          🙏
        </h4>
      </>
    ),
    options: [
      { label: "Yes, we confirmed", value: true, message: "calendar" },
      { label: "Not yet", value: "hasNotConfirmed" },
    ],
  },
};

const Meet = () => {
  const [step, setStep] = useState("intro");
  const [formState, setFormState] = useState({});

  const node = flow[step] || null;
  const currentValue = formState[step];

  const handle = (value, next, message) => {
    setFormState({ ...formState, [step]: value });
    if (message === "linkedin") {
      window.open("https://linkedin.com/in/mankybansal");
    } else if (message === "calendar") {
      setStep("calendar");
    } else if (next) {
      setStep(next);
    }
  };

  return (
    <RootContainer>
      <InnerContainer>
        {step === "intro" && (
          <IntroCard>
            <h2>Hi — thanks for your interest in connecting!</h2>
            <p>
              This form helps us both figure out what kind of conversation will
              be most valuable. I can help with immigration, hiring, or anything
              in between.
            </p>
            <p>
              I often talk with founders, engineers, and immigrants navigating
              U.S. opportunities. Let’s make this useful for both of us!
            </p>
            <OptionsContainer>
              <OptionButton onClick={() => setStep("step1")}>
                Get Started
              </OptionButton>
            </OptionsContainer>
          </IntroCard>
        )}

        {node && step !== "calendar" && (
          <OptionGroup>
            {typeof node.question === "string" ? (
              <h1>{node.question}</h1>
            ) : (
              node.question
            )}
            {node.custom && node.custom}
            <OptionsContainer>
              {node.options.map(({ label, value, next, message }) => (
                <OptionButton
                  key={label}
                  isSelected={currentValue === value}
                  onClick={() => handle(value, next, message)}
                >
                  {label}
                </OptionButton>
              ))}
            </OptionsContainer>
          </OptionGroup>
        )}

        {step === "calendar" && (
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

        {/* Extra message for "Not yet" in confirm step */}
        {currentValue === "hasNotConfirmed" && (
          <h4 style={{ marginTop: "1.5rem", color: "#aa0000" }}>
            I can’t take meetings unless we’ve explicitly confirmed. But you can
            still find answers to most questions on LinkedIn or YouTube!
          </h4>
        )}

        {/* Extra message for "Not yet" in immigration step */}
        {currentValue === "hasNotConfirmed" && (
          <h4 style={{ marginTop: "1.5rem", color: "#aa0000" }}>
            I do not do informational calls. You can still find answers to most
            questions on LinkedIn or YouTube.
          </h4>
        )}
      </InnerContainer>
    </RootContainer>
  );
};

export default Meet;

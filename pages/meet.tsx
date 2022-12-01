import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 12px;
`;

const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  max-width: 800px;
  align-items: center;

  h1 {
    color: #555;
  }

  h4 {
    color: #eb9a3f;
  }
`;

const OptionsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const OptionButton = styled.button<{ isSelected?: boolean }>`
  padding: 8px 32px;
  line-height: normal;
  font-size: 20px;
  font-weight: 400;
  color: black;
  margin: 4px;
  background: transparent;
  border-radius: 2rem;
  width: fit-content;
  border: 2px solid black;
  transition: all ease 0.3s;

  &:hover {
    background: black;
    color: white;
    border: 2px solid black;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: #eb9a3f;
      color: white;
      border: 2px solid #eb9a3f;
    `}

  .fa {
    margin: 0 8px;
  }
`;

const Highlight = styled.span`
  color: #000;
  text-decoration: underline;
`;

type FormState = {
  step1: "immigration" | "hiring" | "other" | undefined;
  immigration: "hasWatched" | "hasNotWatched" | undefined;
  hiring: "hireMayank" | "hireMe" | undefined;
  hireMe: "hasOpenPosition" | "hasNoOpenPosition" | undefined;
};

const Meet = () => {
  const router = useRouter();

  const [formState, setFormState] = useState<FormState>({
    step1: undefined,
    immigration: undefined,
    hiring: undefined,
    hireMe: undefined,
  });

  const handleClickMeet = () => {
    router.replace("https://calend.ly/mankybansal");
  };

  const handleSelectStep1 = (value: FormState["step1"]) => {
    setFormState((prevState) => ({
      ...prevState,
      step1: value,
      immigration: undefined,
      hiring: undefined,
      hireMe: undefined,
    }));
  };

  const handleSelectImmigration = (value: FormState["immigration"]) => {
    setFormState((prevState) => ({
      ...prevState,
      immigration: value,
    }));
  };

  const handleSelectHiring = (value: FormState["hiring"]) => {
    setFormState((prevState) => ({
      ...prevState,
      hiring: value,
      hireMe: undefined,
    }));
  };

  const handleSelectHireMe = (value: FormState["hireMe"]) => {
    setFormState((prevState) => ({
      ...prevState,
      hireMe: value,
    }));
  };

  return (
    <RootContainer>
      <OptionGroup>
        <h1>What do you want to meet about?</h1>
        <OptionsContainer>
          <OptionButton
            isSelected={formState.step1 === "immigration"}
            onClick={() => handleSelectStep1("immigration")}
          >
            Immigration / Visas
          </OptionButton>
          <OptionButton
            isSelected={formState.step1 === "hiring"}
            onClick={() => handleSelectStep1("hiring")}
          >
            Hiring / Job Opportunities
          </OptionButton>
          <OptionButton
            isSelected={formState.step1 === "other"}
            onClick={() => handleSelectStep1("other")}
          >
            Networking
          </OptionButton>
        </OptionsContainer>
      </OptionGroup>
      {formState.step1 === "immigration" && (
        <OptionGroup>
          <h1>
            Have you watched my O-1A Visa / EB-1A Green Card videos where I
            answer common questions? (Recommended)
          </h1>
          <h4>
            These videos can answer common questions about the process of
            getting an O-1A Visa and EB-1A Green Card. I recommend watching them
            before scheduling a meeting with me.
          </h4>
          <OptionsContainer>
            <OptionButton
              isSelected={formState.immigration === "hasWatched"}
              onClick={() => handleSelectImmigration("hasWatched")}
            >
              Yes
            </OptionButton>
            <OptionButton
              isSelected={formState.immigration === "hasNotWatched"}
              onClick={() => handleSelectImmigration("hasNotWatched")}
            >
              No
            </OptionButton>
          </OptionsContainer>
        </OptionGroup>
      )}
      {formState.immigration === "hasNotWatched" && (
        <OptionGroup>
          <h1>You can watch them here:</h1>
          <OptionsContainer>
            <OptionButton
              onClick={() =>
                window.open("https://www.youtube.com/watch?v=Ar_hijWPS5s")
              }
            >
              <i className="fa fa-youtube" />
              Alternative Work Visa In USA When H-1B Visa Fails
              <i className="fa fa-link" />
            </OptionButton>
            <OptionButton
              onClick={() =>
                window.open("https://www.youtube.com/watch?v=0AzPlMJ6slQ")
              }
            >
              <i className="fa fa-youtube" />
              Most Common Question About O-1 Work Visa In USA
              <i className="fa fa-link" />
            </OptionButton>
          </OptionsContainer>
        </OptionGroup>
      )}
      {formState.step1 === "hiring" && (
        <OptionGroup>
          <h1>Do you want to hire me?</h1>
          <OptionsContainer>
            <OptionButton
              isSelected={formState.hiring === "hireMayank"}
              onClick={() => handleSelectHiring("hireMayank")}
            >
              Yes, I want to hire you
            </OptionButton>
            <OptionButton
              isSelected={formState.hiring === "hireMe"}
              onClick={() => handleSelectHiring("hireMe")}
            >
              No, I am looking for a job
            </OptionButton>
          </OptionsContainer>
        </OptionGroup>
      )}
      {formState.hiring === "hireMayank" && (
        <OptionGroup>
          <h1>
            I may not be looking for a job, but I am interested in learning what
            you are creating.{" "}
            <Highlight>Message me on LinkedIn first.</Highlight>
          </h1>
          <OptionsContainer>
            <OptionButton
              onClick={() => window.open("https://linkedin.com/in/mankybansal")}
            >
              <i className="fa fa-linkedin-square" />
              Message me on LinkedIn
              <i className="fa fa-link" />
            </OptionButton>
          </OptionsContainer>
        </OptionGroup>
      )}
      {formState.hiring === "hireMe" && (
        <OptionGroup>
          <h1>
            Does Mayank&apos;s current / previous company have an open position?
          </h1>
          <OptionsContainer>
            <OptionButton
              isSelected={formState.hireMe === "hasOpenPosition"}
              onClick={() => handleSelectHireMe("hasOpenPosition")}
            >
              Yes, I there is an open position
            </OptionButton>
            <OptionButton
              isSelected={formState.hireMe === "hasNoOpenPosition"}
              onClick={() => handleSelectHireMe("hasNoOpenPosition")}
            >
              No, I there isn&apos;t an open position
            </OptionButton>
          </OptionsContainer>
        </OptionGroup>
      )}
      {formState.hireMe === "hasNoOpenPosition" && (
        <OptionGroup>
          <h1>
            It&apos;s unlikely that we can hire you at the moment. Connect with
            me on linkedin for future opportunities!
          </h1>
          <OptionsContainer>
            <OptionButton
              onClick={() => window.open("https://linkedin.com/in/mankybansal")}
            >
              <i className="fa fa-linkedin-square" />
              Connect with me on LinkedIn
              <i className="fa fa-link" />
            </OptionButton>
          </OptionsContainer>
        </OptionGroup>
      )}
      {(formState.step1 === "other" ||
        formState.hireMe === "hasOpenPosition" ||
        formState.immigration === "hasWatched") && (
        <OptionGroup>
          <h1>Great! Let&apos;s talk.</h1>
          <h4>
            If you are present in North America at the time of the meeting,
            please schedule our meeting on a weekday. Weekends are reserved for
            people in other timezones.
          </h4>
          <OptionsContainer>
            <OptionButton
              onClick={() => window.open("https://calendly.com/mankybansal")}
            >
              <i className="fa fa-calendar" />
              Schedule a meeting
              <i className="fa fa-link" />
            </OptionButton>
          </OptionsContainer>
        </OptionGroup>
      )}
    </RootContainer>
  );
};

export default Meet;

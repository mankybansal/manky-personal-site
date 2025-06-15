import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { SectionTitle, ShimmerButton } from "./Common";

const FactCard = styled.div`
  border-radius: 20px;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 32px;
  max-width: 720px;
  margin: 48px auto;
  transition: all 0.3s ease;
  background: #fffdf8
    linear-gradient(to bottom, rgba(0, 0, 0, 0.03), transparent);
`;

const FactList = styled.ul`
  margin-top: 12px;
  padding-left: 0;
  font-size: 18px;
  line-height: 1.8;
  list-style: none;
`;

const FactItem = styled.li`
  background: white;
  border-radius: 16px;
  padding: 12px 16px;
  margin-bottom: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  }
`;

const FactText = styled.div`
  font-size: 18px;
  color: #333;
  text-align: left;
`;

const FeedbackRow = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  flex-wrap: wrap;
`;

const ReactionButton = styled.button`
  background: #f5f3ef;
  border: none;
  border-radius: 999px;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: #333;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    background: #eb9a3f;
    color: white;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const RandomFacts = () => {
  const allFacts = [
    "Born in Bengaluru ❤️",
    "INF-J personality type",
    "Left-handed (yes, ink smears everywhere)",
    <>
      Went to a{" "}
      <a
        href="https://www.thelawrenceschool.org/"
        target="_blank"
        rel="noreferrer"
      >
        <b>
          <u>beautiful boarding school</u>
        </b>
      </a>
    </>,
    "Own 27,500+ LEGO bricks",
    "WebStorm > VS Code (fight me)",
    "Chai > Coffee (am I even a Seattleite?)",
    "Have an excellent credit score",
    <>
      The U.S. government considers me{" "}
      <a
        href="https://www.uscis.gov/working-in-the-united-states/temporary-workers/o-1-visa-individuals-with-extraordinary-ability-or-achievement"
        target="_blank"
        rel="noreferrer"
      >
        <b>
          <u>“extraordinary” (O-1)</u>
        </b>
      </a>{" "}
      — and I self-petitioned for{" "}
      <a
        href="https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-first-preference-eb-1"
        target="_blank"
        rel="noreferrer"
      >
        <b>
          <u>EB-1A</u>
        </b>
      </a>
    </>,
    "I play percussive fingerstyle guitar 🎸",
  ];

  const [voteCounts, setVoteCounts] = useState({});
  const [showAll, setShowAll] = useState(false);

  const getSessionVotes = () =>
    JSON.parse(localStorage.getItem("factVotes") || "{}");

  const saveVote = (factIndex, type) => {
    const existing = getSessionVotes();
    if (existing[`${factIndex}-${type}`]) return false;
    existing[`${factIndex}-${type}`] = true;
    localStorage.setItem("factVotes", JSON.stringify(existing));
    return true;
  };

  const handleFeedback = async (factIndex, type) => {
    const success = saveVote(factIndex, type);
    if (!success) return alert("You've already voted on this!");

    await fetch("/api/facts/vote", {
      method: "POST",
      body: JSON.stringify({ factIndex, type }),
      headers: { "Content-Type": "application/json" },
    });

    const updated = await fetch(`/api/facts/count?index=${factIndex}`).then(
      (r) => r.json(),
    );
    setVoteCounts((prev) => ({ ...prev, [factIndex]: updated }));
  };

  useEffect(() => {
    Promise.all(
      allFacts.map((_, idx) =>
        fetch(`/api/facts/count?index=${idx}`).then((r) => r.json()),
      ),
    ).then((results) => {
      const counts = {};
      results.forEach((result, idx) => {
        counts[idx] = result;
      });
      setVoteCounts(counts);
    });
  }, []);

  // @ts-ignore
  const sortedIndexes = [...Array(allFacts.length).keys()].sort((a, b) => {
    const aTotal = (voteCounts[a]?.up || 0) + (voteCounts[a]?.["me-too"] || 0);
    const bTotal = (voteCounts[b]?.up || 0) + (voteCounts[b]?.["me-too"] || 0);
    return bTotal - aTotal;
  });

  const displayIndexes = showAll ? sortedIndexes : sortedIndexes.slice(0, 3);

  return (
    <FactCard>
      <SectionTitle style={{ fontSize: 32 }}>
        10 Random Facts About Me
      </SectionTitle>
      <FactList>
        {displayIndexes.map((idx) => (
          <FactItem key={idx}>
            <FactText>{allFacts[idx]}</FactText>
            <FeedbackRow>
              <ReactionButton onClick={() => handleFeedback(idx, "up")}>
                👍 Like ({(voteCounts[idx]?.up || 0).toLocaleString()})
              </ReactionButton>
              <ReactionButton onClick={() => handleFeedback(idx, "down")}>
                👎 Boo ({(voteCounts[idx]?.down || 0).toLocaleString()})
              </ReactionButton>
              <ReactionButton onClick={() => handleFeedback(idx, "me-too")}>
                ✋ Me too ({(voteCounts[idx]?.["me-too"] || 0).toLocaleString()}
                )
              </ReactionButton>
            </FeedbackRow>
          </FactItem>
        ))}
      </FactList>

      {!showAll && (
        <ShimmerButton onClick={() => setShowAll(true)}>
          Show more
        </ShimmerButton>
      )}
    </FactCard>
  );
};

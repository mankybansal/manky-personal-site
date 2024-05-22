import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { DateTime } from "luxon";

const MediumArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40mankybansal&api_key=gbdrx8k2swkrwb2ol4loygtg3nktwnudlky33lfj&order_dir=desc&count=4",
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.items));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      {articles?.map((article, index) => (
        <MediumCard article={article} key={index} />
      ))}
    </div>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  vertical-align: top;
  flex: 1;
  max-width: 500px;
  width: 100%;
`;

const Link = styled.a`
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Body = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const Title = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
`;

const MediumCard = ({ article }) => {
  const imageUrl = article["description"].match(/<img[^>]+src="([^">]+)"/)[1];

  return (
    <Card>
      {imageUrl && (
        <div
          style={{
            maxWidth: "500px",
            width: "100%",
            height: "250px",
            background: "white",
            overflow: "hidden",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            border: "2px solid #eee",
            borderRadius: "10px",
          }}
        >
          <Image
            src={imageUrl}
            alt={article.title}
            width={500}
            height={250}
            style={{ objectFit: "cover" }} // optional
          />
        </div>
      )}
      <Body>
        <Title>{article.title}</Title>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Subtitle className="text-muted">
            {DateTime.fromFormat(
              article.pubDate,
              "yyyy-MM-dd HH:mm:ss",
            ).toFormat("dd LLLL, yyyy")}
          </Subtitle>
          <Link href={article.link}>Read More</Link>
        </div>
      </Body>
    </Card>
  );
};

export default MediumArticles;

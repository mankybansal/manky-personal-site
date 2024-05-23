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
  cursor: pointer;
  width: 100%;

  :hover {
    a {
      text-decoration: underline !important;
    }
  }
`;

const Body = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Title = styled.a`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 1rem;
  text-align: left;
`;

const Subtitle = styled.p`
  font-size: 1rem;
`;

const ImageContainer = styled.div`
  max-width: 500px;
  width: 100%;
  height: 250px;
  background: white;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 2px solid #eee;
  border-radius: 10px;

  :hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

const MediumCard = ({ article }) => {
  const imageUrl = article["description"].match(/<img[^>]+src="([^">]+)"/)[1];

  return (
    <Card onClick={() => window.open(article.link)}>
      {imageUrl && (
        <ImageContainer>
          <Image
            src={imageUrl}
            alt={article.title}
            width={500}
            height={250}
            style={{ objectFit: "cover" }}
          />
        </ImageContainer>
      )}
      <Body>
        <Title href={article.href}>{article.title}</Title>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
          }}
        >
          <i className={"fa fa-medium"} />
          <Subtitle className="text-muted" style={{ color: "#888" }}>
            {DateTime.fromFormat(
              article.pubDate,
              "yyyy-MM-dd HH:mm:ss",
            ).toFormat("dd LLLL, yyyy")}
          </Subtitle>
          <div style={{ fontWeight: 500 }}>Mayank Bansal</div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.26rem" }}>
          {article.categories.map((category, index) => (
            <div
              style={{
                display: "flex",
                color: "#555",
                fontSize: "0.75rem",
                border: "1px solid #ccc",
                padding: "0.25rem 0.5rem",
                borderRadius: "2rem",
                whiteSpace: "nowrap",
              }}
              key={index}
            >
              {category}
            </div>
          ))}
        </div>
      </Body>
    </Card>
  );
};

export default MediumArticles;

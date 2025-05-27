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
    <ArticlesGrid>
      {articles?.map((article, index) => (
        <MediumCard article={article} key={index} />
      ))}
    </ArticlesGrid>
  );
};

const ArticlesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
  margin-top: 2rem;
`;

const Card = styled.div`
  width: 100%;
  max-width: 480px;
  flex: 0 1 calc(50% - 1rem); // two per row with gap

  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;
`;

const Body = styled.div`
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #222;
  text-align: left;
  margin: 1rem 0 0.5rem 0;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 0.85rem;
  color: #888;
  margin-bottom: 0.5rem;

  i {
    color: #999;
  }

  span.author {
    font-weight: 600;
    color: #444;
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.5rem;
`;

const Tag = styled.div`
  font-size: 0.75rem;
  border: 1px solid #ddd;
  color: #555;
  padding: 4px 10px;
  border-radius: 2rem;
  white-space: nowrap;
`;

const MediumCard = ({ article }) => {
  const imageUrl = article["description"].match(/<img[^>]+src="([^">]+)"/)?.[1];

  return (
    <Card onClick={() => window.open(article.link, "_blank")}>
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
        <Title>{article.title}</Title>
        <Meta>
          <i className="fab fa-medium" />
          <span>
            {DateTime.fromFormat(
              article.pubDate,
              "yyyy-MM-dd HH:mm:ss",
            ).toFormat("dd LLLL, yyyy")}
          </span>
          <span className="author">Mayank Bansal</span>
        </Meta>
        <TagList>
          {article.categories.map((category, index) => (
            <Tag key={index}>{category}</Tag>
          ))}
        </TagList>
      </Body>
    </Card>
  );
};

export default MediumArticles;

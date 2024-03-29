export type Experience = {
  year: string;
  image: string;
  imageHeight: string;
  name: string;
  city: string;
  details: string;
  stage: string;
};

export const experiences: Experience[] = [
  {
    image: "/images/outgo.png",
    name: "Outgo, Inc.",
    imageHeight: "50px",
    year: "2022 - Present",
    city: "Seattle, Washington",
    details: "Software Engineer III",
    stage: "Seed Stage",
  },
  {
    image: "/images/C-Block.svg",
    name: "Convoy, Inc.",
    imageHeight: "50px",
    year: "2019 - 2022",
    city: "Seattle, Washington",
    details: "Software Engineer II",
    stage: "Series E 🦄",
  },
  {
    image: "/images/legalpad.png",
    name: "Legalpad, Inc.",
    imageHeight: "70px",
    year: "2018 - 2019",
    city: "Seattle, Washington",
    details: "Software Engineer + Designer",
    stage: "Acquired by Deel",
  },
  {
    image: "/images/mitraz.png",
    name: "Mitraz Financial",
    imageHeight: "70px",
    year: "2015 - 2018 (Part Time)",
    city: "Chicago, Illinois",
    details: "Software Engineer + Designer",
    stage: "Acquired by Scripbox",
  },
  {
    image: "/images/1519876701450.jpeg",
    name: "Sadgi Creative",
    imageHeight: "70px",
    year: "2016 - 2017 (Part Time)",
    city: "Bengaluru, Karnataka",
    details: "Co-founder, Tech Lead",
    stage: "Defunct",
  },
];

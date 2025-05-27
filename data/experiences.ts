export type TExperience = {
  year: string;
  image: string;
  link: string;
  name: string;
  city: string;
  details: string;
  stage: string;
  current?: boolean;
};

export const experiences: TExperience[] = [
  {
    image: "/images/logos/openai.svg",
    name: "OpenAI",
    link: "https://openai.com",
    year: "2024 - Present",
    city: "Seattle, Washington",
    details: "Member of Technical Staff",
    stage: "",
    current: true,
  },
  {
    image: "/images/logos/outgo.svg",
    name: "Outgo",
    link: "https://outgo.com",
    year: "2022 - 2024",
    city: "Seattle, Washington",
    details: "Software Engineer III",
    stage: "Acquired by DAT",
  },
  {
    image: "/images/logos/convoy.svg",
    name: "Convoy",
    link: "https://convoy.com",
    year: "2019 - 2022",
    city: "Seattle, Washington",
    details: "Software Engineer II",
    stage: "Acquired by Flexport",
  },
  {
    image: "/images/logos/legalpad.svg",
    name: "Legalpad",
    link: "https://legalpad.io",
    year: "2018 - 2019",
    city: "Seattle, Washington",
    details: "Software Engineer + Designer",
    stage: "Acquired by Deel",
  },
];

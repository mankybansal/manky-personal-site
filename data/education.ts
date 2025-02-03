export type TEducation = {
  image: string;
  institution: string;
  imageHeight: string;
  year: string;
  location: string;
  credential: string;
  extraNotes?: string;
};

export const education = [
  {
    image: "/images/IIT.png",
    institution: "Illinois Institute of Technology",
    imageHeight: "64px",
    year: "2017 - 2018",
    location: "Chicago, Illinois",
    credential: "3.65/4.00 GPA, B.S. Computer Science",
    extraNotes: "Cum Laude, Dean's List, Scholarship, Finished Early",
  },
  {
    image: "/images/manipal.png",
    institution: "Manipal University",
    imageHeight: "64px",
    year: "2014 - 2016",
    location: "Manipal, Karnataka",
    credential: "B.S. Computer Science",
    extraNotes: " Two Year Transfer",
  },
];

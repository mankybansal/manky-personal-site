import notNetflixInc from "../public/images/screenshots/not-netflix-inc.png";
import convoyOffersSvelte from "../public/images/screenshots/convoy-offers-svelte.png";
import tagAutocompleteReact from "../public/images/screenshots/tag-autocomplete-react.png";
import model3Simulator from "../public/images/screenshots/model-3-simulator.jpeg";
import immigrationWizard from "../public/images/screenshots/immigration-wizard.jpg";
import interiorDashboard from "../public/images/screenshots/interior-dashboard.png";
import microSavingsPlatform from "../public/images/screenshots/micro-savings-platform.png";

import { StaticImageData } from "next/image";

export type TProject = {
  demoLink?: string;
  subtitle: string;
  title: string;
  timing?: string;
  year?: string;
  height?: any;
  width?: any;
  image?: StaticImageData;
  videoUrl?: string;
  projectType: string;
};

export const projects: TProject[] = [
  {
    title: "Not Netflix Inc - Checkout",
    subtitle: "React + Typescript + Framer Motion",
    projectType: "Code Sample",
    timing: "~7 hours",
    demoLink: "https://not-netflix-inc.manky.me",
    image: notNetflixInc,
  },
  {
    title: "Luna's Ice Cream Shoppe",
    subtitle: "React",
    projectType: "Code Sample",
    timing: "~4 hours",
    demoLink: "https://lunas-ice-cream-shoppe.manky.me",
    videoUrl: "videos/lunas-ice-cream-shoppe.mov",
    height: 350,
    width: "auto",
  },
  {
    title: "Material Modeling IDE",
    subtitle: "React, Three.js, Meteor",
    projectType: "Code Sample",
    timing: "~10 hours",
    demoLink: "https://material-modeling-ide.manky.me",
    videoUrl: "videos/material-modeling-ide.mov",
    height: 350,
    width: "auto",
  },
  {
    title: "Tesla Model 3 UI Simulator",
    subtitle: "React",
    projectType: "Side Project",
    timing: "~10 hours",
    demoLink: "https://tesla-model-3-dashboard.manky.me",
    image: model3Simulator,
  },
  {
    title: "Freight Offers - React",
    subtitle: "React",
    projectType: "Code Sample",
    timing: "~8 hours",
    demoLink: "https://convoy-offers-client.manky.me",
    videoUrl: "/videos/convoy-offers-react.mov",
    height: 350,
    width: "auto",
  },
  {
    title: "Freight Offers - Svelte",
    subtitle: "Svelte + Typescript",
    projectType: "Side Project",
    timing: "~4 hours",
    demoLink: "https://convoy-offers-svelte.manky.me",
    image: convoyOffersSvelte,
  },
  {
    title: "Tag Autocomplete - React",
    subtitle: "React + Styled",
    projectType: "Code Sample",
    timing: "1.5 hours",
    demoLink: "https://tag-autocomplete-react.manky.me/",
    image: tagAutocompleteReact,
  },
  {
    title: "Immigration Wizard",
    subtitle: "React, Rails",
    projectType: "Production App",
    image: immigrationWizard,
  },
  {
    title: "Interior Management Dashboard",
    subtitle: "AngularJS + Node.js + Neo4j",
    projectType: "Production App",
    image: interiorDashboard,
  },
  {
    title: "Micro-savings Platform",
    subtitle: "Angular + JQuery + Flask",
    projectType: "Hackathon",
    timing: "24 hours",
    image: microSavingsPlatform,
  },
];

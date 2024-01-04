import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://bendemaj.com", // replace this with your deployed domain
  author: "Ben Demaj",
  desc: "My minimal personal space on the web",
  title: "Ben Demaj",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const SOCIALS: SocialObjects = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/bendemaj",
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/bendemaj",
    active: true,
  },
  {
    name: "Contact",
    href: "mailto:bendemaj.ad@gmail.com",

    active: true,
  },
  {
    name: "CV",
    href: "/assets/CV_Demaj.pdf",
    active: true,
  },
];

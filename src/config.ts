import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://ben-www.vercel.app", // replace this with your deployed domain
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
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/bendemaj",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Contact",
    href: "mailto:bendemaj.ad@gmail.com",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
];

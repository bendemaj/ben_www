import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://bendemaj.github.io", // replace this with your deployed domain
  author: "Ben Demaj",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Ben Demaj - My Workspace",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
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

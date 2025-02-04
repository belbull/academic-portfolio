import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "👩🏾‍💻 Beleicia B.",
  EMAIL: "beleicia@cs.stanford.edu",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 10,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Beleicia is a Ph.D. Candidate at Stanford that explores design methods for community-centered design.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "curriculum vitae",
    HREF: "https://scholar.google.com/citations?user=OyE0sDYAAAAJ",
  },
  {
    NAME: "google scholar",
    HREF: "https://scholar.google.com/citations?user=OyE0sDYAAAAJ",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/beleiciabullock",
  },
];

import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Gabriel Kwong",
  EMAIL: "gabrielkwong971@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 1,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "This is a blog and portfolio website for Gabriel Kwong.",
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
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/gabrielkryss"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/gabriel-kwong-947a1a233/",
  },
  // {
  //   NAME: "twitter-x",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
];

// This is for the Socials component
export const SOCIALMEDIA = {
  github: SOCIALS[0].HREF,
  linkedin: SOCIALS[1].HREF,
  // twitter: SOCIALS[2].HREF,
  email: `mailto:${SITE.EMAIL}`,
};

export const SKILLS = {
  programming_languages: `Rust, Go, C++, C, C#, Java, Python, 
  Javascript, Typescript, HTML, CSS, Tailwind, 
  HLSL, WGSL, Lua, Bash`,
  tools: `Unity, Unreal, OpenXR, PostgreSQL, AWS, Blender, 
  React, Svelte, Astro, Firebase, Neovim, Visual Studio, 
  Bevy, Axum, Tokio, Ratatui, make, cmake, Premake, xmake, 
  Jupyter Notebook, SciPy, scikit-learn`,
  soft: `Self Organized, Adaptable, Critical Thinker, Interpersonal, Problem Solver, Knowledge Sharing`,
}

export const EDUCATION = {
  schoolName: "Simon Fraser University",
  degree: "Bachelor of Applied Science Computer Science Major Interactive Arts and Technology Minor, with Co-operative Education",
  dateStart: new Date("05/01/2019"),
  dateEnd: new Date("12/31/2023"),
};

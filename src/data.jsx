import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

import githubImage from "./assets/github.png";
import quiz from "./assets/quiz.png";
import hack from "./assets/hack.png";
import job from "./assets/job.png";
import color from "./assets/color.png";
import facts from "./assets/facts.png";
import music from "./assets/music.png";
import lorem from "./assets/lorem.png";
import md from "./assets/markdown.png";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-orange-600" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-yellow-300" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-sky-400" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: facts,
    url: "https://fact-sharing.netlify.app/",
    github: "https://github.com/PawelHamryszak/share-a-fact",
    title: "Share a Fact",
    text: "Fact Sharing is a FullStack website for discovering, sharing, and voting on interesting facts. Users explore facts, submit their own, and engage in a knowledge-sharing community.",
  },
  {
    id: nanoid(),
    img: music,
    url: "https://zonemusic.netlify.app/",
    github: "https://github.com/PawelHamryszak/music-zone",
    title: "MusicZone",
    text: "FullStack E-commerce app built with React, Stripe for payments, and Auth0 for authentication. Offers product filtering, cart review, and seamless Stripe checkout in a fully functional online store.",
  },
  {
    id: nanoid(),
    img: job,
    url: "https://joobb.netlify.app/",
    github: "https://github.com/PawelHamryszak/jobfinder",
    title: "JobSter",
    text: "JobSter is a platform that enables users to add and remove job listings, create an account, filter results, and view statistics. The project utilizes an API, allowing for efficient retrieval and updating of job-related data.",
  },
  {
    id: nanoid(),
    img: githubImage,
    url: "https://git-hub-me.netlify.app/login",
    github: "https://github.com/PawelHamryszak/githhub-users",
    title: "GitHub Users",
    text: "GitHub Users is an app utilizing the GitHub API to access user info, search accounts, view profiles, and track activity, catering to GitHub community enthusiasts.",
  },
  {
    id: nanoid(),
    img: quiz,
    url: "https://quiz-you.netlify.app/",
    github: "https://github.com/PawelHamryszak/quiz",
    title: "Quiz",
    text: "Quiz with category selection, powered by an API. Test your knowledge in various subjects, choose your preferred category.",
  },
  {
    id: nanoid(),
    img: hack,
    url: "https://news-hacking.netlify.app/",
    github: "https://github.com/PawelHamryszak/hackernews",
    title: "Hacker News",
    text: "A website utilizing an API to check news on Hacker News, allowing users to browse, filter, and display the latest articles. Stay updated on the freshest news and insights from the world of technology and startups.",
  },
  {
    id: nanoid(),
    img: color,
    url: "https://take-color.netlify.app/",
    github: "https://github.com/PawelHamryszak/color-generator",
    title: "Color Generator",
    text: "Color Generator is an interactive website that allows users to customize colors using a color palette and customization options to create unique color combinations.",
  },
  {
    id: nanoid(),
    img: lorem,
    url: "https://your-ipsum.netlify.app/",
    github: "https://github.com/PawelHamryszak/lorem-generator",
    title: "Lorem Ipsum Generator",
    text: "Lorem Generator is a JavaScript-based tool built with React that generates random Lorem Ipsum-style text. It's perfect for filling in content in web projects.",
  },
  {
    id: nanoid(),
    img: md,
    url: "https://md-prev.netlify.app",
    github: "https://github.com/PawelHamryszak/markdown",
    title: "Markdown Preview",
    text: "Markdown Preview enables real-time rendering of Markdown files, allowing users to format and preview text instantly. A valuable tool for content creators and developers seeking readable and aesthetically pleasing documents.",
  },
];

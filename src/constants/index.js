import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  junaid,
  qasim,
  nabeel,
  profile,
  profil,
} from "../assets";
import "../components/style.css";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "download-cv",
    title: "Download CV",
    className: "download-cv-link",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Wordpress Developer",
    icon: backend,
  },
  {
    title: "Tailwind CSS",
    icon: creator,
  },
];
const servicess = [
  {
    title: "Islamabad",
    icon: profil,
  },
  {
    title: "Lahore",
    icon: profile,
  },
];
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Phptravels",
    icon: starbucks,
    date: "March 2020 - AUGUST 2020",
    points: [
      "I start my coding career from PHPTRAVELS which is product base software house.",
      "I started with the HTML first than learned CSS and after that JAVASCRIPT, I learned all this within five months and after completing my internship i joined as associate software engineer.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Wordpress Developer",
    company_name: "Webiside",
    icon: tesla,
    date: "May 2021 - November 2021",
    points: [
      "I was add one more skill in my web development career which is Wordpress.",
      "In Webiside software company i started job as a Wordpress theme customization Developer.",
      "My Responsibilities include theme and plugin development, site optimization, and troubleshooting issues.",
      "My WordPress sites are mobile-responsive. This is a must in today's web development landscape, as many users access websites on mobile devices.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Upwork",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2022 - July 2022",
    points: [
      "I have over Two years of experience in front-end web development, specializing in creating visually appealing and user-friendly websites.",
      "Proficient in HTML, CSS, and JavaScript, I have built and maintained numerous responsive websites that exceed client expectations.",
      "i completed 4 projects on upwork as a free lancer.which was simple websites.",
      "I believe in open and clear communication with clients throughout the project lifecycle, ensuring that their goals and expectations are met.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "techbucks",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "August 2022 - Present",
    points: [
      "I also add one more skill in my web development career which is most famous library REACT.JS.",
      "As a React.js developer at TechBucks, I played a pivotal role in creating dynamic and interactive front-end solutions for our clients.",
      "My proficiency in Redux allows me to efficiently manage application state, ensuring smooth data flow and an enhanced user experience.",
      "I have successfully integrated RESTful and GraphQL APIs into our React.js applications, enabling real-time data retrieval and seamless interactions.",
      "I collaborate closely with our UI/UX designers to transform design concepts into functional and visually appealing React.js components.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Mudasir Bukhari proved me wrong.",
    name: "Junaid",
    designation: "CEO",
    company: "TECHBUCKS",
    image: junaid,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mudasir Bukhari does.",
    name: "Muhammad Qasim",
    designation: "CEO",
    company: "PHPTRAVELS",
    image: qasim,
  },
  {
    testimonial:
      "After Mudasir Bukhari optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Nabeel Ahmad",
    designation: "CTO",
    company: "WEBISIDE",
    image: nabeel,
  },
];

const projects = [
  {
    name: "GYM BOOKING APP",
    description:
      "This website is gym booking application which has 4 role GYM, GYMNAST, COACH and ADMIN role all of them booking schedules and many more functionalities",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/zahid-hussain-dev/Gym-Dashboard",
  },
  {
    name: "Assetplanet",
    description:
      "Web application that has different kind of module e.g. Death module, Assets module, Divorce module and Social Security module. which has different functionalities.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/mudasir256/assetplanet",
  },
  {
    name: "Kitchen App",
    description:
      "Kitchen app which has different kind of functions like details of chef and details of recipe and add chef add recipe of any kitchen ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/mudasir256/kitchen/tree/main/src/components",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  servicess,
};

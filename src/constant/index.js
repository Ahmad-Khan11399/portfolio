import {
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  crypto,
  read,
  noise,
  threejs,
  bootstrap,
  next,
  mama,
  sam,
  firebase,
  aur,
} from "../assets";

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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "Back-End developer",
    icon: web,
  },
  {
    title: "MERN-Stack developer",
    icon: web,
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
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: next,
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
    name: "Firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "Basics of HTML , CSS , BootStrap",
    tech_name: "HTML",
    icon: html,
    iconBg: "#383E56",
    date: "August 2021 - Jan 2022",
    points: [
      "Developing and maintaining static websites using HTML, CSS and other related technologies.",
      "Collaborating with UI/UX developers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring all device compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Unix Line Command , Node-JS, Express-JS ",
    tech_name: "Node",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - May 2022",
    points: [
      "Developing and maintaining Back-end Scripts .",
      "Learning Unix Line Command.",
      "Collaborating with other developers.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mongo , Mongoose, Git, Restful API",
    tech_name: "Mongo",
    icon: mongodb,
    iconBg: "#383E56",
    date: "May 2022 - August 2022",
    points: [
      "Developing and maintaining web applications servers using Mongo-DB, Mongoose and their security related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing various security Techniques including Firebase , OAuth etc for backend Severs.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React-JS, Next-JS, Ant-D, Apex Charts, Chart JS, 3-JS",
    tech_name: "React",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "August 2022 - Present",
    points: [
      "Developing and maintaining Advanced web applications using React.js and other related technologies.",
      "Making Apps For real life use case.",
      "Implementing responsive design and various API integration including Web Audio API, Coin-gecko API, Weather API etc.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Creating a website seemed like a daunting task, but Ahmad made it appear effortless.",
    name: "Mohd Samran Ali",
    designation: "R.P.A developer",
    company: "IBM",
    image: sam,
  },
  {
    testimonial:
      "I haven't encountered a web developer who genuinely prioritizes their clients' success as much as he does.",
    name: "Moeen Khan",
    designation: "Marketing Manager",
    company: "Bee Shipping",
    image: mama,
  },
  {
    testimonial:
      "His ability to self-learn and comprehend the requirements of the final product is truly impressive.",
    name: "Anayatur Rehman",
    designation: "SDE ",
    company: "TCS",
    image: aur,
  },
];

const projects = [
  {
    name: "Crypto Dashboars",
    description:
      "A React-based dashboard fetches data from the CoinGecko API and displays it as charts using ApexCharts. It is deployed on Netlify.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Resdtful API",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/Ahmad-Khan11399/crypt/tree/master",
  },
  {
    name: "Redopedia",
    description:
      "This React-based library, still in development, enables users to retrieve book information both by title and category. It has future potential for users to read books and includes the capability to integrate a payment gateway for purchasing books.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: read,
    source_code_link: "https://github.com/Ahmad-Khan11399/Readopedia",
  },
  {
    name: "Noise Level detection",
    description:
      "The Noise App is a project that merges the capabilities of the Web Audio API with D3 charts to craft an interactive application. This application dynamically generates and visually represents different types of noise in real-time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Rest API",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: noise,
    source_code_link: "https://github.com/Ahmad-Khan11399/noise",
  },
];

export { services, technologies, experiences, testimonials, projects };

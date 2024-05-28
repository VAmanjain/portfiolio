import flex from "../assests/projects/bootsrap.png";
import game from "../assests/projects/Funbar.png";
import travel from "../assests/projects/Dream.png";
import news from "../assests/projects/new.com.png";
import Hotel from "../assests/projects/Hotel.png";
import Quirkify from "../assests/projects/Quikify.png";
import HTML from "../assests/html.png";
import CSS from "../assests/css.png";
import JS from "../assests/javascript.png";
import ReactJS from "../assests/react.png";
import Tailwind from "../assests/tailwindr.png";
import Bootstrap from "../assests/Bootstrapr.png";
import Sass from "../assests/sassr.png";
import Next from '../assests/next.svg'
import NodeJS from '../assests/nodejs.png'
import Mongo from '../assests/mongo.png'
import Tailwind2 from '../assests/Tailwind.svg'
import NextAuth from '../assests/NextAuth.png'

export const data = [
  {
    id: 1,
    name: "Quikify",
    image: Quirkify,
    github: "https://github.com/VAmanjain/Quirkify",
    live: "https://main--quirkify-1.netlify.app/",
    desc: "Quirkify is a unique thought-sharing platform where users express their quirky ideas, opinions, and experiences in a fun, engaging way.",
    technologies: [Next,NextAuth, NodeJS, Mongo, Tailwind2],
    time: "April 2024 - Present ",
    context:
      "Quirkify is a unique platform that celebrates individuality and encourages users to share their quirks, interests, and perspectives with a community that embraces diversity and fosters meaningful connections through the power of shared experiences and self-expression.",
  },
  {
    id: 2,
    name: "Dreams Travel  ",
    image: travel,
    github: "https://github.com/VAmanjain/Dreams-Travel",
    live: "https://dreams-travel.netlify.app/",
    desc: "Dreams Travel is your go-to destination for all your travel needs. From exotic destinations to budget-friendly trips, we offer a wide range of options to make your dream vacation a reality.",
    technologies: [HTML, CSS, JS, ReactJS, Tailwind2, Bootstrap, Sass],
    time: "September 2023 - October 2023 ",
    context:
      "Dreams Travel crafts bespoke journeys worldwide. With curated itineraries, seamless bookings, and expert guidance, we transform dreams into remarkable vacations. From cultural immersions to thrilling adventures, we cater to diverse travel desires. Explore confidently with us, discovering the world's wonders through unforgettable experiences.",
  },

  {
    id: 3,
    name: "Fun-Bar",
    image: game,
    github: "https://github.com/VAmanjain/FunBar",
    live: "https://fun-bar.netlify.app/",
    desc: "Funbar is a gaming website that offers a wide range of fun and exciting games for all ages. From classic games  Funbar has it.",
    technologies: [HTML, CSS, JS, ReactJS],
    time: "September 2023 - October 2023 ",
    context:
      "FanBar is a fun website with lots of different games. You can play many games. It's made using ca React, which helps make the games cool and fun to play. If you like games or want to learn about making games, FanBar is a great place to have fun and learn new things! Come join us and explore all the games at FanBar!.",
  },
  {
    id: 4,
    name: "Hotel Skyline",
    image: Hotel,
    github:
      "https://github.com/devashishsoni98/Web-Based-Skyline-Management-System",
    live: "https://skyline1.netlify.app/",
    desc: "This is a Hotel Management system with lots of features like view, filter and book rooms .",
    technologies: [HTML, CSS, JS, Bootstrap],
    time: "October 2023 - Present ",
    context:
      "This project is being build for my second year NSP project with my teammate using HTML , CSS , JavaScript and Bootstrap. The purpose is to create a fully functioning Hotel Mangement system with multiple dynamic features like booking rooms, payment methods, admin and customer databse, manage rooms, reviews and users etc. This project will use mySql for the backend which will be integrated later on.",
  },

  {
    id: 5,
    name: "News.com",
    image: news,
    github: "https://github.com/VAmanjain/News.com",
    live: "https://news-com.netlify.app/",
    desc: "News.com is a reliable and up-to-date news shorting website. Stay informed with the latest news on various topics in just a few clicks.",
    technologies: [HTML, CSS, JS],
    time: "September 2023 - October 2023 ",
    context:
      "News.com is a website that gives you the newest information from all around the world. Whether it's about big events, technology, sports, or anything else, you'll find it here. It's easy to use and helps you stay updated on what's happening globally. If you want to know what's going on in the world, News.com is the place to be!",
  },
  {
    id: 6,
    name: "FlexStart Clone ",
    image: flex,
    github: "https://github.com/VAmanjain/flexstart",
    live: "https://bootstrap-clone11.netlify.app/",
    desc: "It is a clone Website of FlexStart made by Bootstrap Developers. ",
    technologies: [HTML, CSS, JS, Bootstrap],
    time: "Augest 2023 - September 2023 ",
    context:
      "Flex Start is a practice template that works like Bootstrap. It helps you learn how to build great websites using Bootstrap's style. You can use it to create professional-looking websites that work on phones and computers. It's a perfect way to practice and get better at using Bootstrap for your web projects!",
  },
];

import foodOneImg from "../assets/portfolio/foodOne.png"
import basicSass from "../assets/portfolio/basicSass.png"
import synclab from "../assets/portfolio/sync_lab.png"
import refurbishedLaptop from "../assets/portfolio/refurbished_laptop.png"
import appVilla from "../assets/portfolio/appvilla.png"
import interior from "../assets/portfolio/interior.png"


export const PORTFOLIO = [
  {
    key: "synclab",
    title: "Sync Lab EMS",
    desc: "Employee Management Admin Dashboard",
    img: synclab,
    technologyUsed: ["TailwindCss" , "ShadcnUi" , "ReactJs" , "Express" , "MongoDB"],
    infodesc1: "Highly interactive UI using TailwindCss and ShadcnUI as component library.",
    infodesc2:"Used Redux toolkit for state management and redux toolkit query for fetching and caching Api.",
    infodesc3: "Implemented authentication or authorization using JWT token in Express",
    infodesc4: "Handled realtime data using MongoDB as database",
    order1: 1,
    order2: 2,
    color:"red-500",
    href:"https://synclabems.netlify.app/",
    isMernApp:true
  },
  {
    key: "rentopc",
    title: "RentoPc",
    desc: "Refurbished Laptop E-commerce Web App",
    img: refurbishedLaptop,
    technologyUsed: ["TailwindCss" , "ShadcnUi" , "NextJs" , "MongoDB"],
    infodesc1: "Highly interactive UI using TailwindCss and ShadcnUI as component library.",
    infodesc2: "Used contextApi for state management and native fetch for fetching Api",
    infodesc3: "Implemented authentication or authorization using NextAuth",
    infodesc4: "Handled realtime data using MongoDB as database",
    order1: 1,
    order2: 2,
    color:"red-500",
    href:"https://refurbished-laptops.vercel.app/",
    isMernApp:true
  },
  {
    key: "basicSass",
    title: "Basic Sass",
    desc: "A sass landing page",
    img: basicSass,
    technologyUsed: ["HTML" , "SASS" , "ReactJS"],
    infodesc1: "HTML5 SASS REACTJS",
    infodesc2: "ParticleJs library for 3d Particle effect",
    infodesc3:"Customized swiper carousel",
    infodesc4: "Smooth Scrool Back to Top button ",
    order1: 1,
    order2: 2,
    color:"blue-500",
    href:"https://basic-sass.netlify.app/",
    isMernApp:false
  },
  {
    key: "interior",
    title: "Interior",
    desc: "A interior designer website",
    img: interior,
    technologyUsed: ["HTML" , "SASS" , "ReactJS"],
    infodesc1: "HTML5 SASS REACTJS",
    infodesc2: "Added AOS animation for interactivity",
    infodesc3:"Customized swiper carousel",
    infodesc4: "Smooth Scrool Back to Top button ",
    order1: 1,
    order2: 2,
    color:"blue-500",
    href:"https://interior-design-rings.netlify.app/",
    isMernApp:false
  },
  {
    key: "appvilla",
    title: "AppVilla",
    desc: "A mobile app development company website",
    img: appVilla,
    technologyUsed: ["HTML" , "SASS" , "ReactJS"],
    infodesc1: "HTML5 SASS REACTJS",
    infodesc2: "Added AOS animation for interactivity",
    infodesc3:"Customized swiper carousel",
    infodesc4: "Smooth Scrool Back to Top button ",
    order1: 1,
    order2: 2,
    color:"blue-500",
    href:"https://appvilla-service.netlify.app/",
    isMernApp:false
  },
  {
    key: "foodOne",
    title: "Food One",
    desc: "A Restaurant booking app",
    img: foodOneImg,
    technologyUsed: ["HTML" , "SASS" , "ReactJS"],
    infodesc1: "HTML5 TAILWINDCSS NEXT-JS EXPRESS MONGODB",
    infodesc2: "Highly interactive ui and component based architecture.",
    infodesc3:"Integrated MongoDB database to store users data and Booking info.",
    infodesc4: "Complete Login Signup functionality or Authentication",
    order1: 1,
    order2: 2,
    color:"red-500",
    href:"https://food-one-app.vercel.app/",
    isMernApp:false
  },
];
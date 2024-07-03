export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "./b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },

  // {
  //   id: 5,
  //   title: "Currently building a JS Animation library",
  //   description: "The Inside Scoop",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Automatic Number Plate Recognition",
    des: "This ANPR System is designed to enhance security and reduce unpaid transaction in petrol station.",
    img: "./p1.svg",
    iconLists: ["./python.svg", "./yolo.svg","./ocr.svg"],
    iconTitle: ["Python","YoloV8","EasyOCR"],
    link: "https://github.com/hardik1805/anpr_for_forecourt",
  },
  {
    id: 2,
    title: "Work Diary",
    des: "",
    img: "/p2.svg",
    iconLists: ["./next.svg", "./tail.svg", "./ts.svg", "./stream.svg", "./c.svg"],
    iconTitle:["NextJs","TailwindCSS","Typescript","Stream","CSS"],
    link: "/ui.yoom.com",
  }
];

export const testimonials = [
  {
    quote:
      '\"Hardik has done a great job with high JavaScript skill. \nHighly recommend him!\"',
    name: "Xavier Bargas",
    title: "Upwork Client",
  },

];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "./cloud.svg",
    nameImg: "./cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "./app.svg",
    nameImg: "./appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "./host.svg",
    nameImg: "./hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    desc: "Contributed to developing a web-based platform using React.js, enhancing user interactivity and experience.",
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer",
    desc: "Developed key modules of employee management software at a SaaS company, including the chat, engagement module, and others.",
    className: "md:col-span-2",
    thumbnail: "./exp2.svg",
  },
  {
    id: 3,
    title: "Desktop App Developer",
    desc: "Developed a cross-platform desktop application for managing work diaries, featuring an auto-update mechanism using Electron.js.",
    className: "md:col-span-2",
    thumbnail: "./exp4.svg",
  },
  {
    id: 4,
    title: "Freelance MERN Stack Developer",
    desc: "Collaborated with a development team to build a social media website, and liaised with the client to incorporate upgrades and new features.",
    className: "md:col-span-2",
    thumbnail: "./exp3.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "./git.svg",
    link:"https://github.com/hardik1805"
  },
  {
    id: 2,
    img: "./x.png",
    link: "https://x.com/ihardik1805"
  },
  {
    id: 3,
    img: "./link.svg",
    link: "https://www.linkedin.com/in/hardik-gangajaliya"
  },
];

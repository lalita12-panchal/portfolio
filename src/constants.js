// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's

import sp from './assets/company_logo/sp.jpeg';
import cs from'./assets/company_logo/cs.png'
// Education Section Logo's

import mit from './assets/education_logo/mit.jpeg';
import MPBoardLogo from './assets/education_logo/MPBoardLogo.png';
// Project Section Logo's
import  ReactCounter from './assets/work_logo/ReactCounter.png';
import cserver from './assets/work_logo/cserver.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import en from './assets/work_logo/en.png';
import employe from './assets/work_logo/employe.jpeg';
import not from './assets/work_logo/not.png';
import fs from './assets/work_logo/fs.png';
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
   
      { name: 'Redux', logo: reduxLogo },
   
      { name: 'Tailwind CSS', logo: tailwindcssLogo },

      
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
  
    ],
  },
];

  export const experiences = [

    {
      id: 1,
      img: sp,
      role: "Java Development",
      company: "smart programming",
      date: "July 2023 - dec 2023",
      desc: "Contributed to enterprise-level applications as a Java Developer, specializing in core Java, object-oriented programming, and backend development. Experienced in working with Spring Boot, Hibernate, RESTful APIs, and SQL databases. Skilled in building scalable, secure, and high-performance applications, with strong expertise in debugging, testing (JUnit), and version control (Git). Collaborated with cross-functional teams to deliver optimized solutions and enhance system performance",
      skills: [
        "core java",
        "advance java",
        "servlet",
        "jsp",
        "Mysql",
        "JDBC",
    

      
      ],
    },
    {
      id: 2,
      img: cs,
      role: "Frontend Intern",
      company: "chamunda software",
      date: "March 2024 - july 2024",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
      "Tailwind CSS",
     " React"
    
      ],
    },
  ];
  
  export const education = [
 
    {
      id: 1,
      img: mit,
      school: "Mahakal institute of technology ujjain",
      Year: "2021 - 2025",
      grade: "75.8",
      desc: "I completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering in 2025. During this four-year journey, I developed a strong foundation in core computer science principles and engineering practices. My curriculum covered diverse areas such as Operating Systems, Computer Networks, Software Engineering, Machine Learning, and Full-Stack Web Development. I actively participated in hands-on lab work, coding challenges, and collaborative projects that strengthened my problem-solving and programming skills. Throughout the course, I worked on several real-world applications that integrated theoretical knowledge with practical implementation, preparing me for a career in software development and emerging tech fields",
           degree: "Btech in Computer Science",
    
    },
    {
      id: 2,
      img: MPBoardLogo,
      school: "Government Girls' Higher Secondary School",
      Year: "2020 - 2021",
      grade: "84%",
      desc: "I completed my class 12 education from Government Girls' Higher Secondary School, Bhonrasa, under the MP board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "MP board(XII) - PCM ",
    },
    {
      id: 3,
      img: MPBoardLogo,
      school: "Government Girls' Higher Secondary School",
      Year: "2018 - 2019",
      grade: "85%",
      desc: "I completed my class 10 education from Government Girls' Higher Secondary School, Bhonrasa, under the MP board,",
      degree: "MP board(X),",
    },
  ];
  
  export const projects = [
        {
      id: 4,
      title: "fullstack-crud-app ",
      description:
        "Fullstack CRUD Application Built a fullstack web app using Java, Spring Boot, React, HTML, CSS, and JavaScript with a REST API for seamless client-server communication. Implemented CRUD (Create, Read, Update, Delete) operations with MySQL as the database. Tested and documented APIs using Postman Designed a responsive UI with React and styled components for smooth user interaction",
      image: fs,
      tags: ["Java","Springboot","React","Html","CSS", "jS","RestApi","MuSQL","postman"],
      github: "https://github.com/lalita12-panchal/fullstack-crud-app",
      webapp: "https://github.com/lalita12-panchal/fullstack-crud-app",
    },
    {
      id: 0,
      title: "React Counter app",
      description:
  "React Word Counter is a lightweight app that tracks words, characters, and reading time in real time.Built with React hooks and a responsive UI, it’s fast, minimal, and user-friendly.",
      image: ReactCounter,
      tags: ["HTML", "CSS", "JavaScript", "React JS"],
      github: "https://github.com/lalita12-panchal/react-word-counter",
      webapp: "https://lalita12-panchal.github.io/react-word-counter/",
    },
    {
      id: 1,
      title: "ChatApplication",
      description:
        "“Built a real-time chat app supporting private and group conversations with live updates.Developed using React, Socket.io, and Node.js for seamless communication.",
      image: cserver,
      tags: ["java Javax" ,"Java Swing", "Awt", "Socket.io"],
      github: "https://github.com/lalita12-panchal/ChatApplication"
    
    },
    {
      id: 2,
      title: "Enotes Web Application",
      description:
        "The eNotes Web Application is a Java-based notes tracking system built with Servlets, JSP, JDBC, and Bootstrap. It enables users to securely create, edit, delete, and view notes through a responsive and user-friendly dashboard.",
      image: en,
      tags: ["Java", "Servlet", "Jsp", "JDBC","MySql","API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/lalita12-panchal/Enotesweb-application",
      webapp: "https://github.com/lalita12-panchal/Enotesweb-application",
    },
    {
      id: 3,
      title: "Employee Management System ",
      description:
        "An Employee Management System using Servlet, JSP, JDBC, Java, and MySQL is a web-based application that manages employee records such as personal details, job roles, and salary. It uses JSP for the user interface, Servlets for request handling, and JDBC with MySQL for database operations. The system ensures efficient, secure, and centralized employee data management.",
      tags: ["java","Servlet","jsp","Mysql"],
      image :employe,
      github: "https://github.com/lalita12-panchal/Employee_Management_System",
      webapp: "https://github.com/lalita12-panchal/Employee_Management_System",
    },

    {
      id: 5,
      title: "NotePadEditior",
      description:
        "Notepad Editor is a simple yet powerful text editor application developed using Java. Designed as a desktop application, it provides an intuitive interface for managing and editing text files efficiently. The editor focuses on providing essential features for text manipulation while maintaining a lightweight footprint.",
      image: not,
      tags: ["java","Javax" ,"Java Swing", "Awt"],
      github: "https://github.com/lalita12-panchal/NotePadEditor",
      webapp: "https://github.com/lalita12-panchal/NotePadEditor",
    },
  
  ];  
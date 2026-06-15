import { IconType } from 'react-icons'
import {
  SiSpring,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiTailwindcss,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiDocker,
  SiGooglecloud,
  SiPostman,
  SiFigma,
  SiPython,
  SiKotlin,
  SiCanva,
  SiOpenai
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa'
import { FiVideo } from 'react-icons/fi'

export interface Skill {
  name: string
  icon: IconType
  brandColor: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  imagePath: string
  liveUrl?: string
  githubUrl?: string
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Languages & Frameworks',
    skills: [
      { name: 'Java', icon: FaJava, brandColor: '#f89820' },
      { name: 'Spring Boot', icon: SiSpring, brandColor: '#6db33f' },
      { name: 'JavaScript', icon: SiJavascript, brandColor: '#f7df1e' },
      { name: 'TypeScript', icon: SiTypescript, brandColor: '#3178c6' },
      { name: 'Python', icon: SiPython, brandColor: '#3776ab' },
      { name: 'Kotlin', icon: SiKotlin, brandColor: '#7f52ff' },
      { name: 'React', icon: SiReact, brandColor: '#61dafb' },
      { name: 'Node.js', icon: SiNodedotjs, brandColor: '#339933' },
      { name: 'Express', icon: SiExpress, brandColor: '#828282' },
      { name: 'Next.js', icon: SiNextdotjs, brandColor: '#ffffff' },
      { name: 'PHP', icon: SiPhp, brandColor: '#777bb4' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, brandColor: '#06b6d4' }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, brandColor: '#47a248' },
      { name: 'MySQL', icon: SiMysql, brandColor: '#4479a1' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: FaAws, brandColor: '#ff9900' },
      { name: 'GCP', icon: SiGooglecloud, brandColor: '#4285f4' },
      { name: 'Docker', icon: SiDocker, brandColor: '#2496ed' }
    ]
  },
  {
    title: 'Tools & Git',
    skills: [
      { name: 'Git', icon: SiGit, brandColor: '#f05032' },
      { name: 'GitHub', icon: SiGithub, brandColor: '#ffffff' },
      { name: 'Postman', icon: SiPostman, brandColor: '#ff6c37' }
    ]
  },
  {
    title: 'AI & Creative Tools',
    skills: [
      { name: 'Figma', icon: SiFigma, brandColor: '#f24e1e' },
      { name: 'Canva', icon: SiCanva, brandColor: '#00c4cc' },
      { name: 'OpenAI', icon: SiOpenai, brandColor: '#74aa9c' },
      { name: 'PixVerse AI', icon: FiVideo, brandColor: '#ff3366' }
    ]
  }
]

export const projectsData: Project[] = [
  {
    slug: 'mof-internship',
    title: 'Software Developer Internship — Ministry of Finance',
    description: 'Contributed to the development and enhancement of multiple mission-critical government information systems at the Ministry of Finance. Worked across full-stack development using Java Spring Boot, Vue.js, Microservices, MySQL, and GitHub, focusing on API development, database management, system integration, security implementation, dashboard development, service monitoring, and software maintenance.',
    tags: ['Spring Boot', 'Vue.js', 'Microservices', 'MySQL', 'Tailwind CSS'],
    imagePath: '/images/projects/mof-internship.png'
  },
  {
    slug: 'focusfox',
    title: 'FocusFox',
    description: 'A dedicated Chrome extension designed specifically for SLIIT university students. It serves as an academic productivity and course management tool that integrates seamlessly with Moodle and CourseWeb.',
    tags: ['Chrome Extension', 'JavaScript', 'Productivity'],
    imagePath: '/images/projects/focusfox.jpg',
    liveUrl: 'https://chromewebstore.google.com/detail/focusfox/kgfihielaibchimfgfkdlehkldegiokl',
    githubUrl: 'https://github.com/Viduraz/Focus_Fox'
  },
  {
    slug: 'hotel-cancellation',
    title: 'Hotel Booking Cancellation Prediction',
    description: 'A machine learning assignment project focused on predicting hotel booking cancellations using historical data. Trains and compares four classification models (Logistic Regression, KNN, Decision Tree, Random Forest) built using Python and Jupyter Notebooks.',
    tags: ['Python', 'Machine Learning', 'Scikit-Learn', 'Pandas', 'Jupyter Notebook'],
    imagePath: '/images/projects/hotel-cancellation.png',
    liveUrl: 'https://youtu.be/EJaPym_MzWQ?si=q8FGYd4__OqoWF6p',
    githubUrl: 'https://github.com/Eranga999/Ml-Assigment.git'
  },
  {
    slug: 'jayasinghe-storeline',
    title: 'JayasingheStoreline — MERN Retail System',
    description: 'A comprehensive MERN-based retail and inventory management system built by an 8-member team. Integrates customer-facing shopping, order processing, delivery coordination, supplier management, and administrative dashboards, featuring integrated PayHere sandbox payment gateway.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux Toolkit', 'PayHere API'],
    imagePath: '/images/projects/jayasinghe-storeline.png',
    liveUrl: 'https://jayasinghestorelines.netlify.app/',
    githubUrl: 'https://github.com/chathuwa-whiz/JayasingheStoreline-MERN.git'
  },
  {
    slug: 'maj-25',
    title: "MAJ'25 — Digitalized Scout Camping Experience",
    description: "Developed Sri Lanka's first digital scout camping management platform for the Maliyadeva Adarsha Scout Group. Built with React, Express.js, and MongoDB, the system digitizes participant registration, activity tracking, profile management, and administrative operations through a modern full-stack architecture.",
    tags: ['React', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Framer Motion'],
    imagePath: '/images/projects/maj25.png',
    liveUrl: 'https://maj2025com.netlify.app/',
    githubUrl: 'https://github.com/Viduraz/MAJ-25'
  },
  {
    slug: 'gurugedara',
    title: 'GuruGedara — Sales & Inventory Management System',
    description: 'A robust PHP-based POS, Sales & Inventory Management System built with MVC architecture. Originally developed for GuruGedara Publications, and subsequently deployed at the Kurunegala District Scout Headquarters Shop. Features secure authentication, real-time AJAX inventory checks, transaction workflows, and TCPDF-based invoice generation.',
    tags: ['PHP', 'MySQL', 'MVC Architecture', 'AJAX', 'TCPDF'],
    imagePath: '/images/projects/gurugedara.png',
    liveUrl: 'http://gurugedara.duckdns.org',
    githubUrl: 'https://github.com/Viduraz/gurugedara.duckdns.org.git'
  },
  {
    slug: 'medical-history',
    title: 'Medical History Tracker',
    description: 'A comprehensive healthcare management system built for SLIIT as an ITPM project during the 3rd year, 1st semester. Developed with a Flask backend, MySQL database, and React frontend, the platform streamlines interactions between patients, doctors, pharmacies, laboratories, and administrators.',
    tags: ['React', 'Flask', 'MySQL', 'Python'],
    imagePath: '/images/projects/medical-history.png',
    githubUrl: 'https://github.com/Viduraz/Medical_History_Tracker.git'
  },
  {
    slug: 'agrilanka',
    title: 'AgriLanka — Agriculture Management Platform',
    description: 'A comprehensive full-stack web application designed to support Sri Lankan farmers. Developed for the SLIIT PAF module during the 3rd year, 1st semester. Features Spring Boot microservices, MongoDB, Firebase authentication, Cloudinary asset storage, AI disease detection, and crop weather planning.',
    tags: ['Spring Boot', 'React', 'MongoDB', 'Firebase', 'Cloudinary'],
    imagePath: '/images/projects/agrilanka.png',
    githubUrl: 'https://github.com/Viduraz/PAF_SLIIT.git'
  },
  {
    slug: 'vehicle-rental',
    title: 'Vehicle Rental System',
    description: 'A full-stack Java web application built with Maven, Jakarta Servlets, JSP, and MySQL. Employs JDBC database persistence and a servlet-based MVC architectural design to coordinate customer account creation, secure login, dashboard customization, and profile updates.',
    tags: ['Java', 'JSP & Servlets', 'MySQL', 'JDBC', 'Maven'],
    imagePath: '/images/projects/vehicle-rental.png',
    githubUrl: 'https://github.com/Viduraz/Vehical_Renatal_system-.git'
  },
  {
    slug: 'todo-list',
    title: 'To-Do List Android App',
    description: 'A clean and practical Android productivity app built with Kotlin and AndroidX. Combines a task-oriented home dashboard, reminder scheduling with SharedPreferences local persistence, onboarding slides, and a custom timer/stopwatch utility with notification support.',
    tags: ['Kotlin', 'Android SDK', 'AndroidX', 'SharedPreferences', 'Material Design'],
    imagePath: '/images/projects/todo-list.png',
  }
]


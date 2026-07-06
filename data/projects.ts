import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "SAFE",
    fullTitle:
      "SMART ACCIDENT & EMERGENCY: APLIKASI MOBILE DARURAT UNTUK KESELAMATAN DAN RESPONS CEPAT",

    slug: "safe",

    description:
      "Mobile emergency application integrating accident detection, real-time notifications, and live location sharing.",

    imageUrl: "/project/safe/safe.png",

    featured: true,

    subRole: "FULL-STACK MOBILE DEVELOPER & SYSTEM ANALYST",

    imageBg: "bg-neo-blue",

    category: ["Mobile", "System Analyst"],

    year: 2026,

    timelineLabel: "Emergency Response System",

    subtitle: "Smart Accident & Emergency",

    duration: "MAR 2026 - JUN 2026",

    teamSize: "4 MEMBERS",

    overview: `
SAFE (Smart Accident & Emergency) is a mobile application designed to support faster emergency response during traffic accidents and medical emergencies. The system leverages smartphone sensors, real-time notifications, and live location sharing to help users notify trusted contacts automatically in critical situations.

The application was developed as a collaborative academic project involving mobile, backend, and system analysis activities. By integrating Firebase Cloud Messaging and Google Maps services, SAFE enables users to send emergency alerts accompanied by accurate location information, helping improve accessibility and coordination during emergency events.

In this project, I worked as a Full-Stack Mobile Developer and System Analyst, contributing to requirements analysis, UML documentation, backend API development using Golang, mobile development with Flutter, and database design using PostgreSQL. I collaborated closely with the team throughout the software development lifecycle to ensure that technical implementations aligned with user needs and system requirements`,

    techStackDetailed: [
      {
        category: "MOBILE",
        tags: [
          "Flutter — Cross-platform mobile development.",
          "Dart — High-performance application logic.",
        ],
      },
      {
        category: "BACKEND",
        tags: [
          "Golang — Main programming language for building APIs.",
          "Fiber — Fast web framework for routing and requests.",
          "REST API — Web API design for client-server integration.",
        ],
      },
      {
        category: "DATABASE",
        tags: ["PostgreSQL — Production database for storing application data."],
      },
      {
        category: "SERVICES",
        tags: [
          "Firebase Cloud Messaging — Real-time push notifications for emergency alerts.",
          "Google Maps API — Live location tracking and map rendering.",
        ],
      },
      {
        category: "DESIGN",
        tags: ["Figma — UI/UX design and wireframing."],
      },
    ],

    gallery: [
      "/project/safe/safe.png",
      "/project/safe/safe-1.png",
      "/project/safe/safe-2.png",
    ],
  },

  {
    title: "TEMPURA",

    fullTitle:
      "PERANCANGAN SISTEM IOT UNTUK PENGENDALIAN SUHU DAN KELEMBABAN PADA PROSES FERMENTASI TEMPE BERBASIS KONTROL OTOMATIS DAN PENCATATAN DATA PRODUKSI",

    slug: "tempura",

    description:
      "IoT-based monitoring system for controlling temperature and humidity during tempe fermentation.",

    imageUrl: "/project/tempura/tempura.png",

    featured: true,

    subRole: "SYSTEM ANALYST",

    imageBg: "bg-neo-pink",

    category: ["IoT", "System Analyst"],

    year: 2026,

    timelineLabel: "Smart Agriculture",

    subtitle: "Tempe Fermentation Monitoring System",

    duration: "MAR 2026 - JUN 2026",

    teamSize: "4 MEMBERS",

    overview: `
TEMPURA is an IoT-based solution designed to monitor and control temperature and humidity during the tempe fermentation process. The system combines automatic environmental control with production data recording to support more consistent and efficient fermentation activities.

The project integrates ESP32 devices, mobile applications, and backend services to provide real-time monitoring and operational visibility. By digitizing traditional fermentation practices, TEMPURA promotes technological adoption within local agroindustry processes.

As a System Analyst, I was responsible for requirements engineering, business process analysis, UML documentation, database design, and system architecture planning to ensure seamless integration between IoT devices and software components.
    `,

    techStackDetailed: [
      {
        category: "IOT DEVICES",
        tags: [
          "ESP32 — IoT microcontroller for reading sensors and controlling relays.",
          "DHT22 — Temperature and humidity sensor for fermentation monitoring.",
          "Relay Module — Actuator switch for automatic heating and fan controls.",
        ],
      },
      {
        category: "MOBILE",
        tags: [
          "Flutter — Cross-platform mobile monitoring application.",
          "Dart — High-performance logic for real-time mobile app updates.",
        ],
      },
      {
        category: "BACKEND",
        tags: [
          "Golang — Backend service development for IoT data ingestion.",
        ],
      },
      {
        category: "DATABASE",
        tags: ["PostgreSQL — Relational database for production data management."],
      },
      {
        category: "TOOLS",
        tags: [
          "Figma — User interface design and visual prototyping.",
          "Draw.io — System modeling and design documentation.",
        ],
      },
    ],

    gallery: [
      "/project/tempura/tempura.png",
      "/project/tempura/tempura-1.png",
      "/project/tempura/tempura-2.png",
    ],
  },

  {
    title: "SIPINJAM",

    fullTitle:
      "SISTEM INFORMASI PEMINJAMAN DAN PENGELOLAAN INVENTARIS BERBASIS WEB",

    slug: "sipinjam",

    description:
      "Web-based inventory loan management system for asset tracking and reporting.",

    imageUrl: "/project/sipinjam/sipinjam-landingpage.png",

    featured: false,

    subRole: "SYSTEM ANALYST & WEB DEVELOPER",

    imageBg: "bg-neo-blue",

    category: ["Web", "System Analyst"],

    year: 2025,

    timelineLabel: "Inventory Management",

    subtitle: "Inventory Loan Management System",

    duration: "NOV 2025 - DEC 2025",

    teamSize: "3 MEMBERS",

    overview: `
SIPINJAM is a web-based information system designed to support inventory borrowing, asset tracking, and reporting activities within organizations. The application digitalizes manual workflows to improve transparency and operational efficiency.

The platform provides authentication, inventory management, borrowing modules, and reporting features that simplify administrative processes and support better asset management practices.

In this project, I contributed as a System Analyst and Web Developer, participating in requirements analysis, database design, Laravel development, authentication implementation, and system testing.
    `,

    techStackDetailed: [
      {
        category: "FRONTEND",
        tags: [
          "HTML — Structure of web-based inventory interface.",
          "CSS — Visual styling and custom layouts.",
          "JavaScript — Interactive client-side features and dynamic pages.",
          "Bootstrap — Responsive CSS framework for rapid UI styling.",
        ],
      },
      {
        category: "BACKEND",
        tags: [
          "Laravel — Full-stack web framework with built-in authentication and ORM.",
          "PHP — Server-side language powering the business logic.",
        ],
      },
      {
        category: "DATABASE",
        tags: ["MySQL — Relational database for managing loan records and assets."],
      },
      {
        category: "TOOLS",
        tags: [
          "Git — Version control system for tracking codebase changes.",
          "GitHub — Code hosting repository and collaboration platform.",
          "Laragon — Local development environment for PHP and MySQL.",
        ],
      },
    ],

    gallery: [
      "/project/sipinjam/sipinjam-landingpage.png",
      "/project/sipinjam/sipinjam-login.png",
      "/project/sipinjam/sipinjam-admin-dashboard.png",
      "/project/sipinjam/sipinjam-admin-inventaris.png",
    ],
  },

  {
    title: "PROAPPS",

    fullTitle:
      "SISTEM INFORMASI MANAJEMEN PROGRAM KERJA ORGANISASI KEMAHASISWAAN HIMATIF FASILKOM UNIVERSITAS JEMBER BERBASIS MOBILE APP",

    slug: "proapps",

    description:
      "Mobile-based information system supporting work program management and organizational coordination.",

    imageUrl: "/project/proapps/proapps.png",

    featured: false,

    subRole: "SYSTEM ANALYST",

    imageBg: "bg-zinc-800",

    category: ["System Analyst"],

    year: 2026,

    timelineLabel: "Organization Management",

    subtitle: "Program Management Information System",

    duration: "MAR - JUN 2026",

    teamSize: "3 MEMBERS",

    overview: `
PROAPPS is a mobile-based information system designed to support work program management, documentation, and coordination within HIMATIF, Faculty of Computer Science, University of Jember. The application implements role-based access to improve communication and operational efficiency among organization members.

The project centralizes organizational activities into a single digital platform, enabling better management of work programs, documentation processes, and information dissemination. The system was developed collaboratively using Agile practices to align technical solutions with stakeholder requirements.

In this project, I served as a System Analyst, contributing to stakeholder analysis, business process modeling, UML documentation, user flow design, and functional requirement specifications.
    `,

    techStackDetailed: [
      {
        category: "MODELING",
        tags: [
          "Use Case Diagram — Modeling system functionalities and actor interactions.",
          "Activity Diagram — Mapping business logic and workflow sequences.",
          "Class Diagram — Designing static system database structures.",
        ],
      },
      {
        category: "TOOLS",
        tags: [
          "Draw.io — Visual system modeling and diagramming.",
          "Figma — UI mockups and user flow designs.",
          "Trello — Project management and agile task tracking.",
        ],
      },
      {
        category: "METHODOLOGY",
        tags: ["Agile Scrum — Software development methodology for iterative collaboration."],
      },
    ],

    gallery: [
      "/project/proapps/proapps.png",
      "/project/proapps/proapps-1.png",
    ],
  },

  {
    title: "KANDANG DIGITAL",

    fullTitle:
      "KANDANGDIGITAL: APLIKASI PENGELOLAAN KEUANGAN, STOK, DAN MONITORING KESEHATAN KAMBING",

    slug: "kandang-digital",

    description:
      "Mobile application for managing goat farm finances, inventory, and health monitoring.",

    imageUrl: "/project/kandangDigital/kandangDigital.png",

    featured: true,

    subRole: "UI/UX DESIGNER & SYSTEM ANALYST",

    imageBg: "bg-neo-yellow",

    category: ["UI/UX", "System Analyst"],

    year: 2025,

    timelineLabel: "Livestock Management",

    subtitle: "Goat Farm Management Application",

    duration: "NOV 2025 - DEC 2025",

    teamSize: "3 MEMBERS",

    overview: `
KandangDigital is a mobile application designed to assist goat farmers in managing finances, livestock inventory, and health monitoring activities through an integrated digital platform.

The application focuses on improving operational efficiency by providing tools for financial recording, livestock management, and health tracking in a single system tailored to farmers' daily activities.

As a UI/UX Designer and System Analyst, I conducted user research, developed personas and user journeys, designed wireframes and high-fidelity prototypes, and performed usability testing to ensure the solution aligned with user needs.
    `,

    techStackDetailed: [
      {
        category: "DESIGN",
        tags: ["Figma — Designing high-fidelity interactive prototypes and mockups."],
      },
      {
        category: "RESEARCH",
        tags: [
          "User Interviews — Gathering feedback and insights directly from goat farmers.",
          "Affinity Diagram — Organizing research data and identifying pain points.",
          "Persona Mapping — Defining target user characteristics and requirements.",
        ],
      },
      {
        category: "UX METHODS",
        tags: [
          "Journey Mapping — Mapping user steps during farm management activities.",
          "Usability Testing — Validating interactive mockups with real users.",
        ],
      },
    ],

    gallery: [
      "/project/kandangDigital/kandangDigital.png",
      "/project/kandangDigital/kandangDigital-1.png",
      "/project/kandangDigital/kandangDigital-2.png",
      "/project/kandangDigital/kandangDigital-3.png",
    ],
  },
];
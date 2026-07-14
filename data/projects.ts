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

    subRole: "UI/UX DESIGN & MOBILE DEVELOPER",

    imageBg: "bg-[#df1c1c]",

    category: ["UI/UX", "Mobile"],

    year: 2026,

    timelineLabel: "Emergency Response System",

    subtitle: "Smart Accident & Emergency",

    teamSize: "4 MEMBERS",

    overview: `
Problem

During emergency situations, victims may be unable to manually contact trusted people or share their location, resulting in delayed assistance.

Goal

Develop a mobile application that supports emergency response through manual SOS, automatic accident detection, and real-time location sharing.

Solution

SAFE integrates smartphone sensors, location services, RESTful APIs, and push notifications into a cross-platform mobile application that helps users quickly notify trusted emergency contacts.

Development Process

The project began with identifying user requirements and designing the user experience. The system was implemented using Flutter for the mobile application, Golang (Fiber) for RESTful APIs, Supabase (PostgreSQL) for cloud database services, and OpenStreetMap for in-app location visualization. Black Box Testing was conducted to validate the application's core functionalities.

My Contributions

Designed high-fidelity prototypes. Developed RESTful APIs and mobile application features, including emergency notifications, SOS history, and real-time location tracking.

Impact

Provides users with a faster and more reliable way to send emergency alerts and share their location with trusted contacts.

Technologies & Tools
Flutter, Dart, Golang, Supabase, PostgreSQL, Firebase Cloud Messaging, OpenStreetMap, Figma.`,

    techStackDetailed: [
      {
        category: "MOBILE",
        tags: [
          "Flutter — Cross-platform mobile application development.",
          "Dart — Programming language for implementing application logic, sensor integration, and user interfaces.",
        ],
      },
      {
        category: "BACKEND",
        tags: [
          "Golang — Main programming language for building APIs.",
          "REST API — Enables communication between the mobile application and backend services.",
        ],
      },
      {
        category: "DATABASE",
        tags: [
          "Supabase — Backend-as-a-Service used to manage cloud-hosted PostgreSQL services.",
          "PostgreSQL — Relational database for storing user accounts, emergency contacts, SOS reports, and application data.",
        ],
      },
      {
        category: "SERVICES",
        tags: [
          "Firebase Cloud Messaging — Sends real-time emergency notifications to trusted contacts.",
          "Google Maps — Opens external navigation for routing to the emergency location.",
          "OpenStreetMap (OSM) — Provides in-app map visualization and real-time location tracking.",
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

    imageBg: "bg-[#f8f8f8]",

    category: ["System Analyst"],

    year: 2026,

    timelineLabel: "Smart Agriculture",

    subtitle: "Tempe Fermentation Monitoring System",

    teamSize: "4 MEMBERS",

    overview: `
Problem

Traditional tempe fermentation relies on manual monitoring of temperature and humidity, making the process inconsistent and prone to production failure.

Goal

Design an IoT-based monitoring and automatic control system to maintain optimal fermentation conditions.

Solution

TEMPURA combines IoT devices, backend services, and a mobile application to monitor environmental conditions, record production data, and automatically control temperature and humidity.

Development Process

The project started with requirements engineering and business process analysis. System documentation was produced, including System Request (SR), Software Requirements Specification (SRS), user stories, functional and non-functional requirements, communication interface specifications, flowcharts, and database design. The system architecture was designed to integrate ESP32 devices, backend services, and the mobile application.

My Contributions

Led the requirements engineering process, prepared system documentation, designed the system architecture, and defined database structures to support IoT integration.

Impact

Provides a structured system design that supports efficient monitoring, automated environmental control, and future implementation.

Technologies & Tools
ESP32, DHT22 Sensor, Relay Modules, Flutter, Golang, Supabase, PostgreSQL, Enterprise Architect, Figma.`,

    techStackDetailed: [
      {
        category: "IOT DEVICES",
        tags: [
          "ESP32 — IoT microcontroller for sensor data acquisition and actuator control.",
          "DHT22 — Temperature and humidity sensor for fermentation monitoring.",
          "Relay Module — Controls electrical actuators automatically.",
          "DC Fan — Reduces temperature when it exceeds the configured threshold.",
          "Incandescent Bulb — Provides heating to maintain optimal fermentation temperature.",
          "Mist Maker — Increases humidity when it falls below the configured threshold.",

        ],
      },
      {
        category: "MOBILE",
        tags: [
          "Flutter — Cross-platform mobile application for real-time monitoring and device control.",
          "Dart — Application logic and user interface development.",
        ],
      },
      {
        category: "BACKEND",
        tags: [
          "Golang — RESTful API development and backend services for IoT communication.",
        ],
      },
      {
        category: "DATABASE",
        tags: [
          "Supabase — Backend-as-a-Service with cloud-hosted PostgreSQL services.",
          "PostgreSQL — Stores sensor readings, production records, and device status."
        ],
      },
      {
        category: "TOOLS",
        tags: [
          "Figma — User interface design and visual prototyping.",
          "Enterprise Architect — System analysis, UML modeling, and software architecture documentation.",
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

    imageUrl: "/project/sipinjam/sipinjam.png",

    featured: false,

    subRole: "SYSTEM ANALYST & WEB DEVELOPER",

    imageBg: "bg-[#ffffff]",

    category: ["Web", "System Analyst"],

    year: 2025,

    timelineLabel: "Inventory Management",

    subtitle: "Inventory Loan Management System",

    teamSize: "3 MEMBERS",

    overview: `
Problem

Manual inventory borrowing processes make it difficult to track loan requests, approvals, and asset returns efficiently.

Goal

Develop a web-based inventory management system that simplifies borrowing workflows and improves inventory administration.

Solution

A Laravel-based web application implementing the MVC architecture to manage inventory data, borrowing requests, administrator approvals, and return processes.

Development Process

The project began with business process analysis and user requirements analysis. A relational database structure and MVC architecture were designed before implementing the application using Laravel. Black Box Testing was conducted to validate system functionality.

My Contributions

Analyzed business requirements, designed the MVC application architecture and relational database, developed borrowing, approval, return, and password recovery features, and performed Black Box Testing.

Impact

Digitized the inventory borrowing process, improving efficiency, data accuracy, and inventory tracking.

Technologies & Tools
Laravel, PHP, MySQL, Tailwind CSS, HTML, JavaScript, AJAX, Git, GitHub, Laragon.`,

    techStackDetailed: [
      {
        category: "FRONTEND",
        tags: [
          "HTML — Structures the web application interface.",
          "Tailwind CSS — Utility-first CSS framework for building responsive and modern user interfaces.",
          "JavaScript — Implements interactive client-side functionality.",
          "AJAX — Enables asynchronous data exchange without reloading the page.",
        ],
      },
      {
        category: "BACKEND",
        tags: [
          "Laravel — PHP framework for developing secure and maintainable web applications.",
          "PHP — Server-side programming language for implementing business logic.",
        ],
      },
      {
        category: "DATABASE",
        tags: ["MySQL — Relational database for managing inventory, borrowing transactions, users, and reports."],
      },
      {
        category: "TOOLS",
        tags: [
          "Git — Version control for source code management.",
          "GitHub — Repository hosting and team collaboration.",
          "Laragon — Local development environment for Laravel and MySQL.",
        ],
      },
    ],

    gallery: [
      "/project/sipinjam/sipinjam.png",
      "/project/sipinjam/sipinjam-fitur.png",
      "/project/sipinjam/sipinjam-admin-dashboard.png",
      "/project/sipinjam/sipinjam-admin-inventaris.png",
      "/project/sipinjam/sipinjam-admin-peminjaman.png",
      "/project/sipinjam/sipinjam-mahasiswa-dashboard.png",
      "/project/sipinjam/sipinjam-mahasiswa-katalog.png",
      "/project/sipinjam/sipinjam-mahasiswa-riwayat.png",
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

    imageBg: "bg-[#0a1628]",

    category: ["System Analyst"],

    year: 2026,

    timelineLabel: "Organization Management",

    subtitle: "Mobile-Based Work Program Management Information System",

    teamSize: "3 MEMBERS",

    overview: `
Problem

Managing organizational work programs through manual documentation and scattered communication often leads to miscommunication, inefficient coordination, and poor documentation.

Goal

Design a structured mobile-based information system to support work program management within the student organization.

Solution

A complete system analysis and design document that defines business processes, functional requirements, user roles, and system interactions before implementation.

Development Process

The project began with stakeholder analysis and business process analysis to identify organizational needs. A System Request document was prepared, followed by UML modeling consisting of Use Case, Activity, Class, Sequence, Communication, State, and Object Diagrams using an Agile approach.

My Contributions

Conducted stakeholder analysis, business process analysis, requirements analysis, prepared the System Request document, and developed comprehensive UML documentation.

Impact

Provides a structured system design that serves as a foundation for future application development and improves communication among project stakeholders.

Technologies & Tools
Draw.io, Enterprise Architect, Trello, UML Modeling, Agile.`,

    techStackDetailed: [
      {
        category: "MODELING",
        tags: [
          "Use Case Diagram — Defines system functionalities and actor interactions.",
          "Activity Diagram — Models business processes and workflow scenarios.",
          "Class Diagram — Represents the static structure of the system.",
          "Sequence Diagram — Illustrates interactions between system components.",
          "Communication Diagram — Visualizes object interactions and message exchanges within the system.",
          "Object Diagram — Represents object instances and their relationships at a specific point in time.",
        ],
      },
      {
        category: "TOOLS",
        tags: [
          "Enterprise Architect — UML modeling and software architecture documentation.",
          "Trello — Project management task tracking.",
        ],
      },
    ],

    gallery: [
      "/project/proapps/proapps.png",
      "/project/proapps/proapps-1.png",
      "/project/proapps/proapps-2.png",
      "/project/proapps/proapps-3.png",
      "/project/proapps/proapps-4.png",
      "/project/proapps/proapps-5.png",
      "/project/proapps/proapps-6.png",
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

    subRole: "UI/UX DESIGNER",

    imageBg: "bg-[#ffffff]",

    category: ["UI/UX"],

    year: 2025,

    timelineLabel: "Livestock Management",

    subtitle: "Goat Farm Management Application",

    teamSize: "3 MEMBERS",

    overview: `
Problem

Goat farmers often manage financial records, livestock data, and health monitoring manually, making information difficult to organize and access.

Goal

Design a user-friendly mobile application that simplifies daily farm management activities.

Solution

A mobile application prototype designed using the Design Thinking methodology to improve usability and support efficient farm management.

Development Process

The project followed the Design Thinking process, including user research, stakeholder interviews, information architecture, user flow, task flow, wireframing, high-fidelity prototyping, and usability testing using Maze.

My Contributions

Conducted user research, designed information architecture, user flows, wireframes, and interactive prototypes, and refined the Authentication, Financial Management, and Help Center features based on usability testing results.

Impact

Provides a more intuitive user experience that helps farmers manage farm operations more efficiently.

Technologies & Tools
Figma, Maze, Design Thinking, Usability Testing, User Interface Design.`,

    techStackDetailed: [
      {
        category: "DESIGN",
        tags: [
          "Figma — Designing user interfaces, wireframes, and interactive high-fidelity prototypes.",
        ],
      },
      {
        category: "EVALUATION",
        tags: [
          "Maze — Evaluating prototype usability and validating design decisions with users.",
        ],
      },
    ],

    gallery: [
      "/project/kandangDigital/kandangDigital.png",
      "/project/kandangDigital/kandangDigital-1.png",
      "/project/kandangDigital/kandangDigital-2.png",
      "/project/kandangDigital/kandangDigital-3.png",
      "/project/kandangDigital/kandangDigital-4.png",
    ],
  },
];
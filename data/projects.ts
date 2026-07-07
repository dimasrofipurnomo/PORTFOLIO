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
SAFE (Smart Accident & Emergency) is a mobile application designed to improve emergency response by enabling users to quickly send SOS alerts and share their real-time location with trusted contacts. The application supports both manual emergency reporting and automatic accident detection using the smartphone's accelerometer and gyroscope sensors, allowing critical emergency information to be delivered more quickly during urgent situations.

Developed as an academic team project, SAFE integrates mobile technology, backend services, and location-based features into a unified platform. The system utilizes Flutter for cross-platform mobile development, Golang for RESTful API development, Supabase (PostgreSQL) for cloud-based database management, OpenStreetMap (OSM) for in-app map visualization and real-time location tracking, Google Maps for external navigation, and Firebase Cloud Messaging for instant emergency notifications.

As a Full-Stack Mobile Developer and System Analyst, I contributed to requirements analysis, UML modeling, database design, REST API development, and Flutter mobile application development. My primary responsibilities included implementing the emergency notification feature using Firebase Cloud Messaging, developing the SOS history feature, and integrating real-time location tracking to support faster and more reliable emergency response.`,

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

    imageBg: "bg-neo-pink",

    category: ["IoT", "System Analyst"],

    year: 2026,

    timelineLabel: "Smart Agriculture",

    subtitle: "Tempe Fermentation Monitoring System",

    duration: "MAR 2026 - JUN 2026",

    teamSize: "4 MEMBERS",

    overview: `
TEMPURA (Tempe Fermentation Monitoring System) is an IoT-based system designed to monitor and automatically control temperature and humidity throughout the tempe fermentation process. By integrating environmental monitoring with production data recording, the system helps maintain optimal fermentation conditions while improving consistency and operational efficiency.

Developed as an academic team project, TEMPURA combines IoT devices, mobile applications, and backend services into a unified monitoring platform. The system utilizes ESP32 to collect sensor data and automatically control actuators such as heaters, fans, and mist makers based on predefined environmental thresholds. Production data is stored in a cloud database, allowing users to monitor fermentation conditions and production history in real time.

As a System Analyst, I was responsible for requirements analysis, business process modeling, UML documentation, database design, and system architecture planning. I worked closely with the development team to ensure seamless integration between IoT devices, backend services, and the mobile application.
    `,

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
SIPINJAM (Inventory Loan Management System) is a web-based information system developed to streamline inventory borrowing and asset management processes within an organization. The system digitalizes manual borrowing workflows by providing centralized inventory records, loan requests, return management, and reporting features, improving administrative efficiency and asset traceability.

Developed as an academic team project, SIPINJAM was built using the Laravel framework with a MySQL database to deliver a secure and responsive web application. The system supports role-based authentication, inventory management, borrowing and return transactions, and administrative reporting to simplify day-to-day inventory operations.

As a System Analyst and Web Developer, I contributed to requirements analysis, business process modeling, database design, and Laravel-based web development. I was primarily responsible for developing the student loan request feature, administrator approval workflow, password recovery functionality, and inventory return management, ensuring an efficient and well-structured inventory borrowing process.
    `,

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

    subtitle: "Mobile-Based Work Program Management Information System",

    duration: "MAR - JUN 2026",

    teamSize: "3 MEMBERS",

    overview: `
PROAPPS (Program Kerja Management Information System) is a system analysis and design project for a mobile-based information system that supports work program management within HIMATIF, Faculty of Computer Science, University of Jember. The project was conducted to analyze organizational workflows and translate stakeholder needs into a structured system design before implementation.

Developed as an academic team project, PROAPPS focuses on producing comprehensive system documentation, including business process models, functional requirements, UML diagrams, and user interface prototypes. The project follows an Agile approach to ensure that the proposed system aligns with organizational needs and user expectations.

As a System Analyst, I was responsible for stakeholder analysis, requirements elicitation, business process modeling, UML documentation, user flow design, and software requirements specification. The outcome of this project was a complete system design and documentation package that can serve as the foundation for future system development.
    `,

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
          "Entity Relationship Diagram (ERD) — Designs the database structure and relationships."
        ],
      },
      {
        category: "TOOLS",
        tags: [
          "Draw.io — Visual system modeling and diagramming.",
          "Enterprise Architect — UML modeling and software architecture documentation.",
          "Trello — Project management task tracking.",
        ],
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
KandangDigital is a mobile application designed to help goat farmers manage farm operations through an integrated digital platform. The application supports financial management, livestock inventory, and health monitoring, enabling farmers to organize daily activities more efficiently and systematically.

Developed as an academic team project, KandangDigital adopted the Design Thinking methodology to understand the challenges faced by goat farmers and transform them into user-centered digital solutions. Through the stages of empathize, define, ideate, prototype, and test, the project focused on creating an intuitive and accessible user experience tailored to the needs of its target users.

As a UI/UX Designer, I contributed to user research, stakeholder interviews, persona development, user journey mapping, task flow design, wireframing, high-fidelity prototyping, and usability testing. I was primarily responsible for designing the Authentication, Financial Management, and Help Center features, ensuring they addressed user needs while providing an intuitive and consistent user experience.
    `,

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
    ],
  },
];
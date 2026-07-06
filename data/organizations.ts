import { Organization } from "@/types";

export const organizations: Organization[] = [
  {
    name: "HIMATIF UNEJ",
    role: "Public Relations Staff (Social Media Division)",
    period: "Jan 2025 - Present",
    description: "Managing digital content and organizational communication through website articles, social media publications, and promotional materials to support academic and student activities.",
    color: "yellow",
    tags: [
      "Public Relations",
      "Content Management",
      "Social Media",
      "Technical Writing"
    ],
  },
  {
    name: "Pembinaan GEMASTIK (KOMPAK)",
    role: "Public Relations Coordinator",
    period: "May 2026 - Jul 2026",
    description: "Coordinated communication between mentors, participants, and organizing committees while managing information dissemination, schedules, and promotional materials for the GEMASTIK 2026 coaching program.",
    color: "yellow",
    tags: [
      "Leadership",
      "Public Relations",
      "Event Coordination",
      "Communication",
      "Stakeholder Management"
    ],
  },
  {
    name: "IT Development Training",
    role: "Public Relations Staff",
    period: "Mar 2026 - Apr 2026",
    description: "Supported participant communication, information dissemination, and promotional activities for a mobile development training program focused on Flutter, Dart, and backend integration.",
    color: "pink",
    tags: [
      "Public Relations",
      "Digital Communication",
      "Event Organizing",
      "Team Collaboration",
      "Content Management"
    ],
  },
  {
    name: "Character of Development",
    role: "Secretary",
    period: "Dec 2025 - Feb 2026",
    description: "Managed administrative documentation, meeting agendas, official correspondence, and committee coordination to support the successful execution of the Character of Development programs.",
    color: "pink",
    tags: [
      "Administration",
      "Documentation",
      "Technical Writing",
      "Time Management",
      "Team Coordination"
    ],
  },
  {
    name: "Information Technology Challenge (ITeC)",
    role: "Secretary",
    period: "Aug 2025 - Oct 2025",
    description: "Managed administrative documentation, meeting agendas, official correspondence, and committee coordination to support the successful execution of the Information Technology Challenge event.",
    color: "blue",
    tags: [
      "Administration",
      "Documentation",
      "Technical Writing",
      "Time Management",
      "Team Coordination"
    ],
  },
  {
    name: "SkripsiTalk",
    role: "Public Relations Staff",
    period: "May 2025 - Jun 2025",
    description: "Supported participant communication, promotional activities, and information dissemination for an academic seminar focused on thesis preparation and writing guidance for Information Technology students.",
    color: "blue",
    tags: [
      "Public Relations",
      "Digital Communication",
      "Event Promotion",
      "Team Collaboration",
      "Content Management"
    ],
  },
  {
    name: "IThings",
    role: "Production Coordinator",
    period: "Mar 2026 - Present",
    description: "Coordinated merchandise production, managed operational workflows, and collaborated with team members to ensure product quality and timely delivery for HIMATIF business initiatives.",
    color: "orange",
    tags: [
      "Production Management",
      "Team Coordination",
      "Operational Planning",
      "Quality Control",
      "Time Management"
    ],
  },
  {
    name: "MAKRAB HIMATIF UNEJ",
    role: "Public Relations Staff",
    period: "Nov 2025 - Dec 2025",
    description: "Supported communication, promotional activities, and participant engagement to foster stronger relationships among HIMATIF members during the annual gathering program.",
    color: "orange",
    tags: [
      "Public Relations",
      "Event Organizing",
      "Communication",
      "Team Collaboration",
      "Community Building"
    ],
  },
];

export interface LeadershipSkill {
  category: string;
  points: string[];
  color: "yellow" | "blue" | "pink" | "white";
}

export const leadershipSkills: LeadershipSkill[] = [
  {
    category: "PUBLIC RELATIONS",
    points: [
      "Digital Communication",
      "Content Management",
      "Public Speaking",
      "Community Engagement",
      "Information Dissemination",
      "Stakeholder Relations",
    ],
    color: "yellow",
  },
  {
    category: "ORGANIZATIONAL LEADERSHIP",
    points: [
      "Team Coordination",
      "Decision Making",
      "Problem Solving",
      "Conflict Management",
      "Responsibility",
      "Initiative",
    ],
    color: "blue",
  },
  {
    category: "PROJECT & EVENT MANAGEMENT",
    points: [
      "Event Organizing",
      "Scheduling",
      "Task Management",
      "Agile Collaboration",
      "Documentation",
      "Operational Planning",
    ],
    color: "pink",
  },
  {
    category: "COLLABORATION",
    points: [
      "Cross-functional Teamwork",
      "Adaptability",
      "Empathy",
      "Active Listening",
      "Knowledge Sharing",
      "Time Management",
    ],
    color: "white",
  },
];

export interface EventPhoto {
  title: string;
  imageUrls: string[];
}

export const eventGallery: EventPhoto[] = [
  { title: "HIMATIF UNEJ", imageUrls: ["/organization/himatif.webp", "/organization/sertif_himatif.png"] },
  { title: "Information Technology Challenge", imageUrls: ["/organization/itec.webp", "/organization/sertif_itec.png"] },
  { title: "Character of Development", imageUrls: ["/organization/cod.webp", "/organization/cod_lapang.png"] },
  { title: "Coaching GEMASTIK Program", imageUrls: ["/organization/pembinaan_gemastik.webp"] },
  { title: "IT Development Training", imageUrls: ["/organization/itdev.webp", "/organization/sertif_itdev.png"] },
  { title: "SkripsiTalk", imageUrls: ["/organization/skripsitalk-1.png", "/organization/sertif_skripsitalk.png"] },
  { title: "IThings", imageUrls: ["/organization/ithings.png"] },
  { title: "Makrab HIMATIF UNEJ", imageUrls: ["/organization/makrab.png", "/organization/makrab_panitia.png"] },
];

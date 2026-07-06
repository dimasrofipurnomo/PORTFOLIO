/**
 * Helper to get the Simple Icons CDN URL for a given technology name.
 * Returns null if no suitable logo is found.
 */
export function getTechIconUrl(techName: string): string | null {
  const cleanTech = techName.trim().toLowerCase();

  const customUrls: Record<string, string> = {
    pest: "https://raw.githubusercontent.com/pestphp/art/main/logo.svg",
    phpunit: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/phpunit/phpunit-original.svg",
    "enterprise architecture": "/ea.png",
    css: "/css.png",
    csharp: "/csharp.png",
    canva: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg"
  };

  if (customUrls[cleanTech]) {
    return customUrls[cleanTech];
  }

  const mapping: Record<string, string> = {
    // Languages
    typescript: "typescript",
    python: "python",
    golang: "go",
    go: "go",
    php: "php",
    javascript: "javascript",
    dart: "dart",
    html: "html5",

    // Frameworks & Libraries
    flutter: "flutter",
    react: "react",
    "next.js": "nextdotjs",
    nextjs: "nextdotjs",
    laravel: "laravel",
    "tailwind css": "tailwindcss",
    tailwindcss: "tailwindcss",
    bootstrap: "bootstrap",

    // Databases
    postgresql: "postgresql",
    mysql: "mysql",
    supabase: "supabase",
    firebase: "firebase",

    // Design & Documentation
    "draw.io": "diagramsdotnet",
    drawio: "diagramsdotnet",
    figma: "figma",
    canva: "canva",
    "enterprise architecture": "enterprise",
    enterprise: "enterprise architecture", 

    // Deployment
    vercel: "vercel",
    railway: "railway",

    // Project Management
    trello: "trello",
    jira: "jira",
    notion: "notion",

    // Version Control
    git: "git",
    github: "github",

    // Testing
    postman: "postman",
    swagger: "swagger",
    maze: "maze",
  };

  const slug = mapping[cleanTech];
  if (slug) {
    return `https://cdn.simpleicons.org/${slug}`;
  }

  return null;
}

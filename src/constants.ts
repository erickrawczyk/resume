export const personalInfo: PersonalInfo = {
  name: "Eric Krawczyk",
  email: "eric.krawczyk@gmail.com",
  location: "Detroit, MI",
  linkedIn: "https://www.linkedin.com/in/eric-krawczyk",
  github: "https://www.github.com/erickrawczyk",
  website: "https://eric.kraw.cz"
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: ["JavaScript/TypeScript", "HTML", "CSS", "Tailwind CSS", "Material UI"]
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "REST", "GraphQL"]
  },
  {
    label: "DevOps",
    skills: ["AWS", "Heroku", "Docker", "CircleCI", "GitLab", "GitHub Actions"]
  },
  {
    label: "Testing",
    skills: ["Jest", "React Testing Library", "Cypress", "Puppeteer", "Postman"]
  },
  {
    label: "Tools",
    skills: ["VS Code", "Git", "Postman", "Figma", "Photoshop"]
  }
]

export const experiences: Experience[] = [
  {
    organization: {
      name: "Paladin, PBC",
      website: "https://www.joinpaladin.com",
      location: "Chicago, IL (Remote)",
      summary: "Increasing access to justice by helping legal teams run more efficient pro bono programs.",
    },
    positions: [
      {
        title: "Senior Software Engineer",
        startDate: "2021-02-01",
        endDate: "2022-08-01",
      },
      {
        title: "Lead Product Engineer",
        startDate: "2022-08-01",
        endDate: "2024-02-01",
      },
      {
        title: "VP, Engineering",
        startDate: "2024-02-01",
      }
    ],
    description: [
      "Facilitated the transition to a new SPA frontend, including a complete rewrite of the frontend codebase.",
      "Led the development of a Time and Billing Management Product after acquiring a competitor.",
    ]
  },
  {
    organization: {
      name: "SkySpecs",
      website: "https://www.skyspecs.com",
      location: "Ann Arbor, MI (Remote)",
      summary: "Data & Robotics startup that helps wind farm owners monitor the health of their turbine fleets",
    },
    positions: [
      {
        title: "Senior Software Engineer",
        startDate: "2020-07-01",
        endDate: "2021-01-01",
      },
      {
        title: "Software Engineer (Applications & DevOps)",
        startDate: "2019-01-01",
        endDate: "2020-07-01",
      },
    ],
    description: [
      "Responsible for building features and several microservices with one other engineer, including an authorization service, a user management application, and a PDF rendering engine that increased maximum report size by 10x.",
      "Developed a CI/CD pipeline to automate the review and deployment of stateless infrastructure using GitLabCI and Hashicorp Terraform.",
    ]
  },
  {
    organization: {
      name: "Deepfield (Acquired by Nokia)",
      website: "https://www.nokia.com/networks/ip-networks/deepfield",
      location: "Ann Arbor, MI",
      summary: "Realtime big data analytics and security products for peta-scale networks",
    },
    positions: [
      {
        title: "Software Engineer (Frontend)",
        startDate: "2020-07-01",
        endDate: "2021-01-01",
      }
    ],
    description: [
      "Worked with UX to develop a new design language and led the integration of React and Material UI into a legacy view framework, allowing customers to configure custom dashboards for realtime analytics.",
    ]
  },
  {
    organization: {
      name: "DocNetwork",
      website: "https://www.docnetwork.org",
      location: "Ann Arbor, MI",
      summary: "Health software suite to manage patient records at schools and camps",
    },
    positions: [
      {
        title: "Software Developer",
        startDate: "2014-12-01",
        endDate: "2016-11-01",
      },
      {
        title: "Head of Engineering",
        startDate: "2016-11-01",
        endDate: "2017-11-01",
      },
    ],
    description: [
      "Early employee that led a team of 6 engineers to develop and scale the company's EHR to support hundreds of schools and camps.",
    ]
  },
]

export const education: Education = {
  school: {
    name: "University of Michigan",
    location: "Ann Arbor, MI",
    website: "https://www.umich.edu",
  },
  major: "Computer Science (Pursued)",
  startDate: "2011-09-01",
  endDate: "2015-05-01",
}
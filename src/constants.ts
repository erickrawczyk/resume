export const personalInfo: PersonalInfo = {
  name: "Eric Krawczyk",
  title: "Software Product Engineer",
  location: "Detroit, MI",
  email: { label: "eric.krawczyk@gmail.com", url: "https://link.kraw.cz/email" },
  linkedIn: { label: "eric-krawczyk", url: "https://link.kraw.cz/linkedin" },
  github: { label: "erickrawczyk", url: "https://link.kraw.cz/resume" },
  website: { label: "eric.kraw.cz", url: "https://link.kraw.cz/homepage" },
}

export const professionalExperiences: Experience[] = [
  {
    organization: {
      name: "Paladin, PBC",
      website: "https://link.kraw.cz/paladin",
      location: "Chicago, IL (Remote)",
      summary: "Increasing access to justice by helping legal teams run more efficient pro bono programs.",
    },
    positions: [
      {
        title: "VP, Engineering",
        startDate: "2024-02",
      },
      {
        title: "Lead Product Engineer",
        startDate: "2022-08",
        endDate: "2024-02",
      },
      {
        title: "Senior Software Engineer",
        startDate: "2021-02",
        endDate: "2022-08",
      },
    ],
    description: [
      "Own engineering roadmap, team structure, and cross-functional delivery across a 7-person eng org. Set technical direction while staying hands-on across the full stack.",
      "Directed development and launch of a data intelligence product following a competitor acquisition, leading cross-functional integration across product, engineering, and client success.",
      "Rebuilt the Django frontend in React, delivering 10x faster search and a 20% increase in lawyer engagement with pro bono opportunities.",
    ]
  },
  {
    organization: {
      name: "SkySpecs",
      website: "https://link.kraw.cz/skyspecs",
      location: "Ann Arbor, MI (Remote)",
      summary: "Data & robotics startup helping wind farm owners monitor turbine fleet health.",
    },
    positions: [
      {
        title: "Senior Software Engineer",
        startDate: "2020-07",
        endDate: "2021-01",
      },
      {
        title: "Software Engineer, Applications & DevOps",
        startDate: "2019-01",
        endDate: "2020-07",
      },
    ],
    description: [
      "Shipped fleet management, authorization, and reporting services for wind turbine operators. Introduced infrastructure-as-code practices using Terraform and GitLabCI, enabling stateless deployments and eliminating manual release overhead.",
    ]
  },
  {
    organization: {
      name: "Deepfield (Acquired by Nokia)",
      website: "https://link.kraw.cz/deepfield",
      location: "Ann Arbor, MI",
      summary: "Realtime big data analytics and security products for peta-scale networks.",
    },
    positions: [
      {
        title: "Software Engineer, Frontend",
        startDate: "2017-11",
        endDate: "2018-12",
      }
    ],
    description: [
      "Led React and Material UI integration into a legacy view framework, enabling customers to configure realtime analytics dashboards for the first time – a capability that had previously required engineering involvement for every change.",
    ]
  },
  {
    organization: {
      name: "DocNetwork",
      website: "https://link.kraw.cz/docnetwork",
      location: "Ann Arbor, MI",
      summary: "Health software suite managing patient records at schools and camps.",
    },
    positions: [
      {
        title: "Head of Engineering",
        startDate: "2016-11",
        endDate: "2017-11",
      },
      {
        title: "Software Developer",
        startDate: "2014-12",
        endDate: "2016-11",
      },
    ],
    description: [
      "Joined as the third engineer and grew into leading a team of 6, scaling the EHR platform from early pilot to hundreds of schools and camps nationwide – owning product engineering, architecture, and hiring as the company expanded.",
    ]
  },
]

export const extracurricularExperiences: Experience[] = [
  {
    organization: {
      name: "313 Care Collective",
      website: "https://link.kraw.cz/313cc",
      location: "Detroit, MI",
      summary: "Community health org providing first aid, training, and logistical support for local political action.",
    },
    positions: [
      {
        title: "First Responder & Instructor",
        startDate: "2020-08",
      },
      {
        title: "Dispute Resolution & De-escalation Mediator",
        startDate: "2020-08",
        endDate: "2021-10",
      },
    ],
  },
  {
    organization: {
      name: "Syncytium Arts",
      website: "https://link.kraw.cz/syncytium",
      location: "Ann Arbor/Detroit, MI",
      summary: "Artist incubator and collective building immersive installations for ephemeral events.",
    },
    positions: [
      {
        title: "Director of Hospitality",
        startDate: "2022-10",
      },
      {
        title: "Artist & Fabricator",
        startDate: "2019-05",
      },
    ],
  },
]

export const skills = [
  {
    category: "Languages & Frameworks",
    items: ["Python (Django, Flask)", "TypeScript/JavaScript", "React", "Node.js", "Next.js"],
  },
  {
    category: "Infrastructure & DevOps",
    items: ["Docker", "Kubernetes", "Terraform", "CI/CD", "AWS"],
  },
  {
    category: "Data & Tooling",
    items: ["PostgreSQL", "GraphQL", "dbt", "Datadog"],
  },
]

export const education: Experience = {
  organization: {
    name: "University of Michigan",
    location: "Ann Arbor, MI",
    website: "https://link.kraw.cz/umich",
  },
  positions: [
    {
      title: "Computer Science",
      startDate: "2011-09",
      endDate: "2015-05",
    }
  ],
}

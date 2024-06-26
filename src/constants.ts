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
        title: "Senior Software Engineer",
        startDate: "2021-02",
        endDate: "2022-08",
      },
      {
        title: "Lead Product Engineer",
        startDate: "2022-08",
        endDate: "2024-02",
      },
      {
        title: "VP, Engineering",
        startDate: "2024-02",
      }
    ],
    description: [
      "Empower team members through mentorship, fostering a culture of collaboration, managing project lifecycles, and enhancing internal support and deployment processes.",
      "Directed the development and launch of a new data intelligence product from a competitor's acquisition, leading cross-functional teams to integrate the acquisition smoothly into our product line.",
      "Rebuilt the Django python frontend in React, significantly improving UX and maintainability while improving relevance and speed of pro bono opportunity results, resulting in 10x faster search and a 20% increase in lawyer interest in pro bono opportunities.",
    ]
  },
  {
    organization: {
      name: "SkySpecs",
      website: "https://link.kraw.cz/skyspecs",
      location: "Ann Arbor, MI (Remote)",
      summary: "Data & Robotics startup that helps wind farm owners monitor the health of their turbine fleets.",
    },
    positions: [
      {
        title: "Senior Software Engineer",
        startDate: "2020-07",
        endDate: "2021-01",
      },
      {
        title: "Software Engineer (Applications & DevOps)",
        startDate: "2019-01",
        endDate: "2020-07",
      },
    ],
    description: [
      "Microservices and applications developer building turbine fleet management, authorization, user management, and reporting services, as well as automating the CI/CD pipeline for deploying stateless infrastructure using GitLabCI and Hashicorp Terraform.",
    ]
  },
  {
    organization: {
      name: "Deepfield (Acquired by Nokia)",
      website: "https://link.kraw.cz/deepfield",
      location: "Ann Arbor, MI",
      summary: "Realtime big data analytics and security products for peta-scale networks",
    },
    positions: [
      {
        title: "Software Engineer (Frontend)",
        startDate: "2017-11",
        endDate: "2018-12",
      }
    ],
    description: [
      "Led the integration of React and Material UI into a legacy view framework, allowing customers to configure realtime analytics dashboards.",
    ]
  },
  {
    organization: {
      name: "DocNetwork",
      website: "https://link.kraw.cz/docnetwork",
      location: "Ann Arbor, MI",
      summary: "Health software suite to manage patient records at schools and camps.",
    },
    positions: [
      {
        title: "Software Developer",
        startDate: "2014-12",
        endDate: "2016-11",
      },
      {
        title: "Head of Engineering",
        startDate: "2016-11",
        endDate: "2017-11",
      },
    ],
    description: [
      "Early employee leading a team of 6 engineers to scale the company's EHR to support hundreds of schools and camps.",
    ]
  },
]

export const extracurricularExperiences: Experience[] = [
  {
    organization: {
      name: "313 Care Collective",
      website: "https://link.kraw.cz/313cc",
      location: "Detroit, MI",
      summary: "Community health organization providing first aid, training, supplies, and logistical support for local political action.",
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
      summary: "Artist incubator and collective that empowers creators and builds immersive installations for ephemeral events.",
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

export const education: Experience = {
  organization: {
    name: "University of Michigan",
    location: "Ann Arbor, MI",
    website: "https://link.kraw.cz/umich",
  },
  positions: [
    {
      title: "Computer Science, Pursued",
      startDate: "2011-09",
      endDate: "2015-05",
    }
  ],
}

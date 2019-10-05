import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import { Job, JobDetail } from './Job';

const Experience = () => (
  <Section title="Experience">
    <Job
      company="SkySpecs"
      role="Applications + DevOps Engineer"
      location="Ann Arbor, MI"
      startDate="Jan. 2019"
      pitch="Data & Robotics startup that helps wind farm owners manage turbine fleets"
    >
      <JobDetail>
        Software Engineer responsible for the development and deployment of the
        Horizon web application
      </JobDetail>
      <JobDetail>
        Built a PDF rendering engine using react and puppeteer that increased
        maximum report size by 10 times
      </JobDetail>
      <JobDetail>
        Developed a CI/CD pipeline to automate the review and deployment of
        stateless infrastructure using GitLabCI and Terraform
      </JobDetail>
    </Job>

    <Job
      company="Deepfield"
      role="Frontend Engineer"
      location="Ann Arbor, MI"
      startDate="Nov. 2017"
      endDate="Dec. 2018"
      pitch="Realtime big data analytics and security products for peta-scale networks"
    >
      <JobDetail>
        Full stack engineer with a frontend focus building API’s, UI’s and data
        visualizations for understanding large-scale network data
      </JobDetail>
      <JobDetail>
        Led the integration of React and Material UI into a custom view
        framework
      </JobDetail>
    </Job>

    <Job
      company="DocNetwork"
      role="Head of Engineering"
      location="Ann Arbor, MI"
      startDate="Dec. 2014"
      endDate="Nov. 2017"
      pitch="Health software suite to manage patient records at schools and camps"
    >
      <JobDetail>
        Early employee that eventually led a team of 6 engineers to develop and
        scale the company’s EHR application
      </JobDetail>
      <JobDetail>
        Responsible for project management, technical roadmaps, issue
        prioritization, sprint planning, and implementing team-wide scrum
        methodologies
      </JobDetail>
    </Job>
  </Section>
);

export default Experience;

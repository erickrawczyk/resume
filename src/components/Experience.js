import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import { Job, JobDetail } from './Job';

const Experience = () => (
  <Section title="Experience">
    <Job
      company="SkySpecs"
      role="Senior Software Engineer"
      location="Ann Arbor, MI"
      startDate="Jan. 2019"
      pitch="Data & Robotics startup that helps wind farm owners manage turbine fleets"
    >
      <JobDetail>
        Software Engineer responsible for the development and deployment of the
        Horizon suite of web applications.
      </JobDetail>
      <JobDetail>
        Developed a CI/CD pipeline to automate the review and deployment of
        stateless infrastructure using GitLabCI and Hashicorp Terraform.
      </JobDetail>
      <JobDetail>
        Responsible for building several microservices with one other engineer,
        including an authorization service, a user management application, and a
        PDF rendering engine that increased maximum report size by 10x.
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
        visualizations for understanding large-scale network data.
      </JobDetail>
      <JobDetail>
        Worked with UX to develop a new design language and led the integration
        of React and Material UI into a legacy view framework, allowing
        customers to configure custom dashboards for realtime analytics.
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
        scale the company’s EHR application to support millions of profiles.
      </JobDetail>
      <JobDetail>
        Responsible for creating technical roadmaps and how to execute them,
        building integrations with several third party vendors.
      </JobDetail>
    </Job>

    <Job
      company="Argo Friend Date"
      role="Lead Engineer, Web"
      location="Ann Arbor, MI"
      startDate="Jan. 2015"
      endDate="Sep. 2018"
      pitch="Sign up for a blind friend date and meet someone new"
    >
      <JobDetail>
        Collaborated with cofounders and a student team to expand a hackathon
        project into a full product.
      </JobDetail>
      <JobDetail>
        Rebuilt the original AngularJS application in React with a Firebase
        backend and an SMS chatbot.
      </JobDetail>
    </Job>
  </Section>
);

export default Experience;

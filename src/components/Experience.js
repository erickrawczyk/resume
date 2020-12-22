import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import { Job, JobDetail } from './Job';

const jobs = [
  {
    company: 'SkySpecs',
    pitch:
      'Data & Robotics startup that helps wind farm owners manage turbine fleets',
    roles: [
      { name: 'Software Engineer', start: 'Jan. 2019', end: 'Jun. 2020' },
      { name: 'Senior Software Engineer', start: 'Jun. 2020', end: 'Present' },
    ],
  },
];

const Experience = () => (
  <Section title="Experience">
    <Job
      company="SkySpecs"
      location="Ann Arbor, MI (Remote)"
      roles={[
        {
          name: 'Senior Software Engineer',
          start: 'Jun. 2020',
          end: 'Present',
        },
        { name: 'Software Engineer', start: 'Jan. 2019', end: 'Jun. 2020' },
      ]}
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
      location="Ann Arbor, MI"
      roles={[
        {
          name: 'Frontend Engineer',
          start: 'Nov. 2020',
          end: 'Dec. 2018',
        },
      ]}
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
      location="Ann Arbor, MI"
      pitch="Health software suite to manage patient records at schools and camps"
      roles={[
        {
          name: 'Head of Engineering',
          start: 'Nov. 2016',
          end: 'Nov. 2017',
        },
        { name: 'Software Developer', start: 'Dec. 2014', end: 'Nov. 2016' },
      ]}
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
  </Section>
);

export default Experience;

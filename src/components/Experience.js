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
      company="Paladin, PBC"
      location="New York, NY (Remote)"
      roles={[
        {
          name: 'Senior Software Engineer',
          start: 'Feb. 2021',
          end: 'Present',
        },
      ]}
      pitch="Increasing access to justice by helping legal teams run more efficient pro bono programs."
    >
      <JobDetail>
        Developed a product experimentation framework in coordination with the
        Head of Product to run several product experiments that resulted in a
        3.4x increase in pro-bono opportunity pageviews.
      </JobDetail>
      <JobDetail>
        Raised CircleCI success rate by 21% and decreased automated test
        duration by 46%, allowing the main branch to deploy successfully within
        10 minutes 97% of the time.
      </JobDetail>
    </Job>
    <Job
      company="SkySpecs"
      location="Ann Arbor, MI (Remote)"
      roles={[
        {
          name: 'Senior Software Engineer',
          start: 'Jun. 2020',
          end: 'Jan. 2021',
        },
        { name: 'Software Engineer', start: 'Jan. 2019', end: 'Jun. 2020' },
      ]}
      pitch="Data & Robotics startup that helps wind farm owners manage turbine fleets"
    >
      <JobDetail>
        Responsible for building features and several microservices with one
        other engineer, including an authorization service, a user management
        application, and a PDF rendering engine that increased maximum report
        size by 10x.
      </JobDetail>
      <JobDetail>
        Developed a CI/CD pipeline to automate the review and deployment of
        stateless infrastructure using GitLabCI and Hashicorp Terraform.
      </JobDetail>
    </Job>

    <Job
      company="Deepfield"
      location="Ann Arbor, MI"
      roles={[
        {
          name: 'Frontend Engineer',
          start: 'Nov. 2017',
          end: 'Dec. 2018',
        },
      ]}
      pitch="Realtime big data analytics and security products for peta-scale networks"
    >
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
    </Job>
  </Section>
);

export default Experience;

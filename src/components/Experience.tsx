import { experiences } from '../constants';

export default function Experience() {
  return (
    <section>
      <h2>Experience</h2>
      {experiences.map((experience) => (
        <div key={experience.organization.name}>
          <h3>{experience.organization.name}</h3>
          <p>{experience.organization.location}</p>
          <p>{experience.organization.website}</p>
          <p>{experience.organization.summary}</p>
          <ul>
            {experience.positions.map((position, index) => (
              <li key={index}>
                <h4>{position.title}</h4>
                <p>
                  {position.startDate} - {position.endDate || 'Present'}
                </p>
              </li>
            ))}
          </ul>
          <ul>
            {experience.description.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

import { Positions } from '@components/Positions';

interface ExperienceItemProps {
  experience: Experience;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <>
      <div className="flex justify-between align-middle mb-1">
        <h3 className="text-xl font-medium">
          <a href={experience.organization.website} target="_blank">
            {experience.organization.name}
          </a>
        </h3>
        <p>{experience.organization.location}</p>
      </div>
      {experience.positions ? (
        <Positions positions={experience.positions} />
      ) : null}
      <p className="italic text-sm mb-1">{experience.organization.summary}</p>
      <ul className="text-sm list-disc pl-4">
        {experience.description?.map((description, index) => (
          <li key={index}>{description}</li>
        ))}
      </ul>
    </>
  );
}

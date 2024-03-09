import { Positions } from '@components/Positions';
import clsx from 'clsx';
import CircleLine from './CircleLine';

interface ExperienceItemProps {
  experience: Experience;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const isSingle = experience.description?.length === 1;
  return (
    <div className="flex">
      <CircleLine />
      <div className="grow">
        <div className="flex justify-between align-middle mb-1">
          <h3 className="text-lg font-medium">
            <a href={experience.organization.website} target="_blank">
              {experience.organization.name}
            </a>
          </h3>
          <p>{experience.organization.location}</p>
        </div>
        {experience.positions ? (
          <Positions positions={experience.positions} />
        ) : null}
        <p className="italic text-xs mb-1">{experience.organization.summary}</p>
        <ul className={clsx('text-xs', !isSingle && 'list-disc pl-4')}>
          {experience.description?.map((description) => (
            <li key={description} className="mb-1">
              {description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

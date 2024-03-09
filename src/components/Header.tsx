import { personalInfo } from '@constants';

export default function Header() {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="uppercase text-6xl">{personalInfo.name}</h1>
      </div>
      <div>
        <div className="flex flex-col">
          <h2>{personalInfo.location}</h2>
          <a className="block" href={personalInfo.website} target="_blank">
            Website
          </a>
          <a
            className="block"
            href={`mailto:${personalInfo.email}`}
            target="_blank"
          >
            Email
          </a>
          <a className="block" href={personalInfo.linkedIn} target="_blank">
            LinkedIn
          </a>
          <a className="block" href={personalInfo.github} target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

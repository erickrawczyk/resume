import ExperienceItem from '@components/ExperienceItem';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <section>
      {experiences.map((experience) => (
        <div key={experience.organization.name} className="mb-4">
          <ExperienceItem experience={experience} />
        </div>
      ))}
    </section>
  );
}

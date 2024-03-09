import ExperienceItem from '@components/ExperienceItem';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <section className="w-full">
      {experiences.map((experience) => (
        <div key={experience.organization.name} className="mb-2">
          <ExperienceItem experience={experience} />
        </div>
      ))}
    </section>
  );
}

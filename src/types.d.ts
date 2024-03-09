type PersonalInfo = {
  name: string;
  email: string;
  location: string;
  linkedIn: string;
  github: string;
  website: string;
}

type SkillCategory = {
  label: string;
  skills: string[];
}

type Position = {
  title: string;
  startDate: string;
  endDate?: string;
}

type Organization = {
  name: string;
  location: string;
  website: string;
  summary: string;
}

type Experience = {
  organization: Organization;
  positions: Position[];
  description: string[];
}

type School = Pick<Organization, "name" | "location", "website">;
type Education = {
  school: School;
  major: string;
  startDate: string;
  endDate: string;
}

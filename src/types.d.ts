type SocialMedia = {
  label?: string;
  url: string;
}

type PersonalInfo = {
  name: string;
  title: string;
  location: string;
  email: SocialMedia;
  linkedIn: SocialMedia;
  github: SocialMedia;
  website: SocialMedia;
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
  summary?: string;
}

type Experience = {
  organization: Organization;
  positions?: Position[];
  description?: string[];
}

type School = Pick<Organization, "name" | "location", "website">;
type Education = {
  school: School;
  major: string;
  startDate: string;
  endDate: string;
}

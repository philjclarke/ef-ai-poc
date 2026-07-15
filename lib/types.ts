export type FutureSkill =
  | "Technological literacy"
  | "AI & big data"
  | "Analytical thinking"
  | "Empathy"
  | "Curiosity"
  | "Resilience";

export type SkillsBuilderSkill =
  | "Listening"
  | "Speaking"
  | "Problem solving"
  | "Creativity"
  | "Staying positive"
  | "Aiming high"
  | "Leadership"
  | "Teamwork";

export type JobRoute = "degree" | "apprenticeship";

// The request the real EdCo/Spirit endpoint will receive. Spirit can enrich a
// webAccountId with school, location, deprivation stats and Ofsted data
// server-side, which is why location arrives pre-filled in the UI.
export type GenerateRequest = {
  webAccountId: string;
  resourceId: string;
  topic: string;
  yearGroup: string;
  location: string;
  interests: string[];
  occupations: string[];
};

export type NewsStory = {
  headline: string;
  summary: string;
  sourceName: string;
  sourceUrl: string;
  scienceCapitalLink: string;
  dimensions: string[];
};

export type NotableFigure = {
  name: string;
  dates?: string;
  location: string;
  summary: string;
  scienceCapitalLink: string;
  dimensions: string[];
};

export type LocalJob = {
  title: string;
  employer: string;
  route: JobRoute;
  qualifications: string;
  futureSkills: FutureSkill[];
  skillsBuilderSkills: SkillsBuilderSkill[];
  summary: string;
  connections: string[];
  dimensions: string[];
};

export type ConversationStarter = {
  title: string;
  prompt: string;
  connects: string[];
};

export type TeachingResource = {
  meta: {
    topic: string;
    yearGroup: string;
    location: string;
    interests: string[];
    occupations: string[];
  };
  newsStory: NewsStory;
  notableFigure: NotableFigure;
  jobs: [LocalJob, LocalJob];
  conversationStarters: ConversationStarter[];
};

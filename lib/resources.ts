export type Resource = {
  slug: string;
  title: string;
  phase: "Primary" | "Secondary";
  ageRange: string;
  yearGroups: string[];
  defaultTopic: string;
  description: string;
  accent: "coral" | "teal" | "yellow";
};

export const resources: Resource[] = [
  {
    slug: "autumn-science-hunt",
    title: "Autumn science hunt",
    phase: "Primary",
    ageRange: "4-7",
    yearGroups: ["Reception", "Year 1", "Year 2"],
    defaultTopic: "Autumn and seasonal change",
    description:
      "Keep your class busy this autumn with twelve days of 10-minute activities including fun science questions and words of the day.",
    accent: "coral",
  },
  {
    slug: "planets-of-the-solar-system-poster",
    title: "Planets of the solar system poster",
    phase: "Primary",
    ageRange: "7-11",
    yearGroups: ["Year 3", "Year 4", "Year 5", "Year 6"],
    defaultTopic: "Space and the solar system",
    description:
      "Use this classroom poster to answer questions about the order and sizes of planets in our solar system.",
    accent: "teal",
  },
  {
    slug: "periodic-table-posters",
    title: "Periodic table posters",
    phase: "Secondary",
    ageRange: "11-14",
    yearGroups: ["Year 7", "Year 8", "Year 9"],
    defaultTopic: "Elements and the periodic table",
    description:
      "Classroom posters of the periodic table, available in simple and detailed versions (with and without lanthanides and actinides).",
    accent: "yellow",
  },
];

export function getResource(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

// Stands in for the school profile Spirit will derive from the webAccountId.
export const mockSchoolProfile = {
  webAccountId: "wa-demo-0001",
  schoolName: "Gorton Community Primary School",
  location: "Gorton, Manchester",
};

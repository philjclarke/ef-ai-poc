export type RelatedCard = {
  title: string;
  text: string;
  phase: "Primary" | "Secondary";
  ageRange?: string;
  image: string;
  action?: "watch" | "download";
  partOfLesson?: boolean;
};

export type Resource = {
  slug: string;
  title: string;
  phase: "Primary" | "Secondary";
  ageRange: string;
  yearGroups: string[];
  defaultTopic: string;
  description: string;
  image: string;
  bannerImage?: string;
  downloadUrl?: string;
  topics: string[];
  about: string[];
  benefits: string[];
  relatedTopic: string;
  related: RelatedCard[];
};

// Content mirrored from the live energisingfutures.co.uk resource pages
// (logged-out views) so the prototype starts from what the pages look like today.
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
    image: "/ef/autumn-science-hunt.png",
    bannerImage: "/ef/nutkin-1.jpg",
    downloadUrl:
      "https://energisingfutures.co.uk/wp-content/uploads/2025/09/EF_AutumnScienceHunt_Primary_Presentation.pptx",
    topics: [
      "Materials",
      "Weather",
      "Animals, including humans",
      "Everyday materials",
      "Sound",
      "Living things and their habitats",
      "Plants",
      "Seasonal changes",
      "Working scientifically",
    ],
    about: [
      "Bring autumnal science to life by linking classroom learning to the great outdoors with this quiz. Keep your class busy with twelve days of 10-minute activities including fun science questions, word of the day and a dive deeper task.",
      "Get your class hunting for the incredible science happening all around us this cozy season. Each short activity is designed to fit into a busy timetable, needs little or no preparation, and turns everyday walks, playtimes and journeys home into opportunities for scientific observation.",
    ],
    benefits: [
      "Turns the local outdoors into a science classroom, connecting lessons to what children already notice at home and in their community.",
      "Twelve bite-size, low-prep activities keep observation and enquiry skills sharp without extra planning or equipment.",
      "Builds early scientific vocabulary through a daily word of the day.",
      "Encourages families to explore autumn together, valuing home and community knowledge as real science capital.",
    ],
    relatedTopic: "Animals, including humans",
    related: [
      {
        title: "Circuits animation",
        text: "Use this animation, to provide context for an investigation into what happens when there is more than one bulb in a circuit.",
        phase: "Primary",
        ageRange: "7-11",
        image: "/ef/related/ES_Circuits-animation-VID-1996x1228px-297x183.jpg",
        action: "watch",
        partOfLesson: true,
      },
      {
        title: "Circuits and symbols activity sheet 1",
        text: "Use this activity sheet to identify components, use symbols and draw a circuit diagram.",
        phase: "Primary",
        ageRange: "7-11",
        image:
          "/ef/related/ES_Circuits-and-symbols-activity-sheet-1_Thumbnnail-1996x1228px-297x183.jpg",
        action: "download",
        partOfLesson: true,
      },
      {
        title: "Circuits investigation planning sheet",
        text: "Plan an investigation into the effects of having more than one bulb in a circuit, with this investigation planning sheet.",
        phase: "Primary",
        ageRange: "7-11",
        image:
          "/ef/related/ES_Circuits-investigation-planning-sheet_Thumbnnail-1996x1228px-297x183.jpg",
        action: "download",
        partOfLesson: true,
      },
      {
        title: "Circuits and symbols activity sheet 2",
        text: "Use this activity sheet to complete sentences about electricity and circuits and identify simple components, and working circuits.",
        phase: "Primary",
        ageRange: "7-11",
        image:
          "/ef/related/ES_Circuits-and-symbols-activity-sheet-2_Thumbnnail-1996x1228px-297x183.jpg",
        action: "download",
        partOfLesson: true,
      },
      {
        title: "Electric helicopter animation",
        text: "Can you make an electric helicopter with a rotor that switches on and off? Use this animation to introduce this challenge to pupils.",
        phase: "Primary",
        ageRange: "7-11",
        image:
          "/ef/related/ES_Electric-Helicopters-animation-VID-1996x1228px-297x183.jpg",
        action: "watch",
        partOfLesson: true,
      },
      {
        title: "Electric helicopter presentation",
        text: "Use this presentation to give pupils ideas for their own electric helicopter designs.",
        phase: "Primary",
        ageRange: "7-11",
        image:
          "/ef/related/ES_Design-an-electric-helicopter-PPT_Thumbnnail-1996x1228px-297x183.jpg",
        action: "download",
        partOfLesson: true,
      },
    ],
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
    image: "/ef/planets-of-the-solar-system-poster.jpg",
    bannerImage: "/ef/solar-system-1.jpg",
    topics: ["Earth and space"],
    about: [
      "Use this classroom poster to answer questions about the order and sizes of planets in our solar system.",
      "Vivid and clearly labelled, it gives pupils an at-a-glance reference for exploring distance, scale and the features that make each planet unique — a springboard for questions, comparisons and creative writing about space.",
    ],
    benefits: [
      "Gives pupils a permanent visual reference for the order, size and scale of the planets.",
      "Sparks curiosity about space careers and the real scientists exploring our solar system today.",
      "Supports comparison and enquiry skills as pupils rank, measure and question what they see.",
      "Works as a shared talking point for group discussion and independent research.",
    ],
    relatedTopic: "Earth and space",
    related: [
      {
        title: "Maggie Aderin-Pocock life story",
        text: "Simple information sheet describing the life, career and achievements of space scientist, inventor, and super scientist, Maggie Aderin-Pocock.",
        phase: "Primary",
        ageRange: "7-11",
        image:
          "/ef/related/Archive_Maggie-Aderin-Pocock-Life-Story-Info-sheet_Thumbnail-1996x1228px_-297x183.jpg",
      },
      {
        title: "Maggie Aderin-Pocock life story quiz",
        text: "Ten-question quiz about the life and career of space and super scientist Maggie Aderin-Pocock, for use with the life story information sheet.",
        phase: "Primary",
        ageRange: "7-11",
        image:
          "/ef/related/Archive_Maggie-Aderin-Pocock-Life-Story-Quiz_Thumbnail-1996x1228px_-297x183.jpg",
      },
      {
        title: "Maggie Aderin-Pocock space creative writing",
        text: "Pupils use this activity sheet to name the planets in our solar system and then write creatively about visiting a neighbouring planet.",
        phase: "Primary",
        ageRange: "7-11",
        image:
          "/ef/related/Archive_Maggie-Aderin-Pocock-Creative-Writing_Thumbnail-1996x1228px_-297x183.jpg",
      },
      {
        title: "Maggie Aderin-Pocock presentation",
        text: "Use this presentation to find out about the life, career and achievements of space scientist, inventor and super scientist, Maggie Aderin-Pocock.",
        phase: "Primary",
        ageRange: "7-11",
        image:
          "/ef/related/Archive_Maggie-Aderin-Pocock-Life-Story-PPT_Thumbnail-1996x1228px_-297x183.jpg",
      },
      {
        title: "Moon poster",
        text: "Use this poster to encourage pupils' to become Moon explorers!",
        phase: "Primary",
        ageRange: "7-11",
        image: "/ef/related/12001-EF-MOON-PO-1996x1228px-297x183.jpg",
      },
      {
        title: "Moon diary",
        text: "Challenge your pupils to keep a moon diary for 28 days – use the activity sheet to record what they see.",
        phase: "Primary",
        ageRange: "7-11",
        image: "/ef/related/12001-EF-MOON-WSH-1996x1228px-297x183.jpg",
      },
    ],
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
    image: "/ef/periodic-table-posters.jpg",
    bannerImage: "/ef/periodic-table-1.jpg",
    topics: ["Atomic structure and the periodic table"],
    about: [
      "A classroom poster of the periodic table, available in simple and detailed versions (with and without lanthanides and actinides).",
      "Colour-coded by element group, it helps students find their way around periods, groups and trends, turning a dense reference into an everyday tool for lessons, discussion and revision.",
    ],
    benefits: [
      "A clear, colour-coded reference available in simple and detailed versions to match the class.",
      "Helps students navigate groups, periods and trends with growing confidence.",
      "Connects abstract chemistry to real materials, local industry and careers.",
      "A permanent classroom aid that supports recall and revision throughout the topic.",
    ],
    relatedTopic: "Atomic structure and the periodic table",
    related: [
      {
        title: "Periodic table challenge interactive",
        text: "An interactive game helping students develop and test their knowledge of periodic table elements, and their properties.",
        phase: "Secondary",
        image: "/ef/related/Periodic-Table-Interactive_Thumbnail-1-297x183.png",
      },
      {
        title: "Periodic table poster (simple)",
        text: "A classroom poster of the periodic table (without lanthanides and actinides).",
        phase: "Secondary",
        image:
          "/ef/related/SIMPLE-Periodic-table-challenge-poster-Thumbnail-297x183.jpg",
      },
      {
        title: "Atomic structure and the periodic table knowledge organiser",
        text: "This two-page visual organiser contains essential knowledge for students learning about atomic structure and the periodic table.",
        phase: "Secondary",
        image:
          "/ef/related/Atomic-structure-periodic-table-KO_Thumbnail-297x183.jpg",
      },
      {
        title: "Check your learning: Atomic structure and the periodic table",
        text: "A five-question assessment sheet to check how much students know about atomic structure and the periodic table.",
        phase: "Secondary",
        image:
          "/ef/related/Atomic-structure-periodic-table-worksheet_Thumbnail-297x183.jpg",
      },
      {
        title: "Revision resources: 2026 (11-14)",
        text: "Find the perfect resource for your class with this handy overview of revision resources. These no-prep resources are organised into topics to save you time searching. Just print and go!",
        phase: "Secondary",
        image: "/ef/related/Resource-Planner-11-14-297x183.png",
      },
      {
        title: "Posters (secondary)",
        text: "A selection of vibrant posters providing essential knowledge and careers connections for a range of science topics.",
        phase: "Secondary",
        image: "/ef/related/EF-secondaryposters-297x183.png",
      },
    ],
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

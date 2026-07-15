import type { GenerateRequest, TeachingResource } from "./types";

// Placeholder content until the real EdCo/Spirit endpoint lands. Payloads are
// written for the default demo context (Gorton, Manchester); {tokens} are
// interpolated from the teacher's input only where the copy stays coherent
// for any value.
type PayloadDefaults = {
  interest1: string;
  interest2: string;
  occupation1: string;
};

const payloadDefaults: Record<string, PayloadDefaults> = {
  "autumn-science-hunt": {
    interest1: "dinosaurs",
    interest2: "drawing",
    occupation1: "shop assistant",
  },
  "planets-of-the-solar-system-poster": {
    interest1: "Minecraft",
    interest2: "football",
    occupation1: "warehouse manager",
  },
  "periodic-table-posters": {
    interest1: "football",
    interest2: "gaming",
    occupation1: "physiotherapist",
  },
};

const payloads: Record<string, TeachingResource> = {
  "autumn-science-hunt": {
    meta: {
      topic: "{topic}",
      yearGroup: "{yearGroup}",
      location: "{location}",
      interests: [],
      occupations: [],
    },
    newsStory: {
      headline:
        "City of Trees volunteers plant 3,000 new trees across east Manchester parks",
      summary:
        "Volunteers working with the City of Trees project have planted thousands of native saplings in parks across east Manchester, including Debdale Park, to boost wildlife habitats and help the city adapt to a changing climate.",
      sourceName: "Manchester Evening News",
      sourceUrl:
        "https://www.manchestereveningnews.co.uk/news/greater-manchester-news/",
      scienceCapitalLink:
        "Planting happens in autumn because trees are dormant — a perfect local example of seasonal change children can see in their own park, and proof that people near {location} do science outdoors as part of everyday life.",
      dimensions: ["Science in the news", "Science in everyday life"],
    },
    notableFigure: {
      name: "Leo Grindon",
      dates: "1818–1904",
      location: "Manchester",
      summary:
        "Leo Grindon was a Manchester botanist who ran hugely popular evening classes for working people and wrote The Manchester Flora, cataloguing the plants growing around the city's streets and parks. He believed anyone could be a scientist just by looking closely at the nature on their doorstep.",
      scienceCapitalLink:
        "Grindon's story shows children that noticing leaves, seeds and trees around {location} is real science — and that science has always belonged to ordinary Mancunians, not just people in labs.",
      dimensions: ["Scientists are like me", "Science literacy"],
    },
    jobs: [
      {
        title: "Ecologist",
        employer: "Greater Manchester Ecology Unit",
        route: "degree",
        qualifications:
          "BSc in Ecology, Environmental Science or Biology; often a postgraduate qualification or field survey experience.",
        futureSkills: ["Analytical thinking", "Curiosity", "Technological literacy"],
        skillsBuilderSkills: ["Problem solving", "Listening", "Aiming high"],
        summary:
          "Ecologists survey woodlands, ponds and parks across Greater Manchester to record which plants and animals live there and how the seasons affect them. Their reports decide how land is protected when new homes and tram lines are built. They use apps, maps and data as much as wellies and notebooks.",
        connections: [
          "Children who love {interest1} are already doing what ecologists do — observing, sorting and naming living things",
          "Families who walk, garden or grow food hold real seasonal knowledge ecologists rely on",
        ],
        dimensions: ["Science leads to careers", "Social uses of science"],
      },
      {
        title: "Horticulture and landscape apprentice",
        employer: "Manchester City Council Parks Team (including Debdale Park)",
        route: "apprenticeship",
        qualifications:
          "Level 2 Horticulture apprenticeship — no degree required; GCSEs helpful but enthusiasm for the outdoors matters most.",
        futureSkills: ["Resilience", "Curiosity", "Empathy"],
        skillsBuilderSkills: ["Teamwork", "Staying positive", "Listening"],
        summary:
          "Parks apprentices plant, prune and care for trees and flower beds through every season, learning why leaves fall, when seeds germinate and how to keep parks thriving for wildlife and families. They train on the job in parks children in {location} visit every week.",
        connections: [
          "A job children can watch happening in their own local park",
          "Connects to families whose work involves practical, hands-on skills — like a {occupation1}",
        ],
        dimensions: ["Science leads to careers", "Science in everyday life"],
      },
    ],
    conversationStarters: [
      {
        title: "Why do leaves change colour?",
        prompt:
          "The trees around {location} are turning red, orange and yellow right now. What do you think is happening inside the leaf — and why doesn't it happen in summer?",
        connects: ["seasonal change", "local environment", "curiosity"],
      },
      {
        title: "Seed detectives",
        prompt:
          "Conkers, acorns, sycamore helicopters — which seeds have you found near home or school? Why do you think they're all falling now, and how do they travel?",
        connects: ["out-of-school science", "family walks", "observation"],
      },
      {
        title: "Animal autumn plans",
        prompt:
          "Squirrels bury food, birds fly away, hedgehogs hibernate. If you were an animal in your local park, what would your autumn plan be — and why?",
        connects: ["{interest1}", "habitats", "empathy"],
      },
      {
        title: "Ask an expert at home",
        prompt:
          "Who at home notices the seasons changing — someone who drives, gardens, works outside or walks to work? Ask them what changes they spot in autumn and bring one back to share.",
        connects: ["family knowledge", "talking about science", "community"],
      },
      {
        title: "The 10-minute autumn hunt",
        prompt:
          "If we had ten minutes outside right now, what autumn science could we find? Make a list — then let's test it.",
        connects: ["science in everyday life", "curiosity", "teamwork"],
      },
    ],
  },

  "planets-of-the-solar-system-poster": {
    meta: {
      topic: "{topic}",
      yearGroup: "{yearGroup}",
      location: "{location}",
      interests: [],
      occupations: [],
    },
    newsStory: {
      headline:
        "Jodrell Bank's Lovell Telescope joins international effort to track new Moon mission",
      summary:
        "The giant Lovell Telescope at Jodrell Bank — just outside Manchester — is helping to track a spacecraft on its journey to the Moon, continuing a tradition that began when it tracked the very first satellites and Moon landers in the 1950s and 60s.",
      sourceName: "BBC News",
      sourceUrl: "https://www.bbc.co.uk/news/topics/jodrell-bank",
      scienceCapitalLink:
        "Space exploration isn't something that only happens in America or in films — one of the world's most famous telescopes is on {location}'s doorstep, listening to the solar system right now.",
      dimensions: ["Science in the news", "Science in the community"],
    },
    notableFigure: {
      name: "Sir Bernard Lovell",
      dates: "1913–2012",
      location: "Jodrell Bank, Cheshire",
      summary:
        "Bernard Lovell built the giant radio telescope at Jodrell Bank using borrowed equipment, sheer persistence and help from local engineers — at one point saving the project with steel racks from the Army. His telescope tracked Sputnik, the first spacecraft to the Moon, and is still exploring the solar system today.",
      scienceCapitalLink:
        "Lovell's story shows that world-changing space science was built near Manchester by determined people solving practical problems — resilience and problem solving that students can see in their own families too.",
      dimensions: ["Scientists are like me", "Science literacy"],
    },
    jobs: [
      {
        title: "Radio astronomer",
        employer: "Jodrell Bank Centre for Astrophysics, University of Manchester",
        route: "degree",
        qualifications:
          "Physics or Astrophysics degree (BSc/MPhys); many astronomers at Jodrell Bank studied in Manchester.",
        futureSkills: [
          "Analytical thinking",
          "AI & big data",
          "Curiosity",
          "Technological literacy",
        ],
        skillsBuilderSkills: ["Problem solving", "Creativity", "Aiming high"],
        summary:
          "Radio astronomers use the Lovell Telescope to study planets, stars and galaxies by listening to radio waves from space. They write computer programs to sift enormous amounts of data for faint signals. Their discoveries help us understand how our solar system formed.",
        connections: [
          "Players of {interest1} already think about worlds, distances and building at scale",
          "Data skills connect to any family member who works with stock systems, tills or records",
        ],
        dimensions: ["Science leads to careers", "Technological literacy"],
      },
      {
        title: "Engineering maintenance apprentice",
        employer: "Jodrell Bank Observatory",
        route: "apprenticeship",
        qualifications:
          "Level 3 Engineering Technician apprenticeship — no degree required; GCSEs in Maths and English usually needed.",
        futureSkills: ["Technological literacy", "Resilience", "Analytical thinking"],
        skillsBuilderSkills: ["Teamwork", "Problem solving", "Staying positive"],
        summary:
          "The Lovell Telescope is a 3,200-tonne moving machine that must point at exact spots in the sky — apprentice engineers keep its motors, gears and structure working in all weathers. It's hands-on engineering in the service of space science. Every discovery depends on their work.",
        connections: [
          "Perfect for students who love how things move and fit together — like {interest2} tactics or {interest1} builds",
          "Connects to families in practical roles — a {occupation1} keeps big systems running safely every day too",
        ],
        dimensions: ["Science leads to careers", "Science in everyday life"],
      },
    ],
    conversationStarters: [
      {
        title: "Walking the solar system",
        prompt:
          "If the Sun were a football at our school gate, Neptune would be a pea about half an hour's walk away across {location}. Where would the other planets land? What does that tell us about the poster's sizes and gaps?",
        connects: ["scale and distance", "local context", "{interest2}"],
      },
      {
        title: "Football on the Moon",
        prompt:
          "The Moon's gravity is about a sixth of Earth's. How would a penalty kick be different there — and on Jupiter? What would you have to change to make the game fair?",
        connects: ["{interest2}", "gravity", "analytical thinking"],
      },
      {
        title: "Building planets in Minecraft",
        prompt:
          "If you built the solar system in {interest1}, what would you get right and what would the game get wrong — about sizes, distances, light and gravity?",
        connects: ["{interest1}", "modelling", "creativity"],
      },
      {
        title: "Night shift science",
        prompt:
          "Some people in our families work at night or start before sunrise. Ask them: what have they noticed about the Moon, stars or seasons that daytime people miss?",
        connects: ["family knowledge", "day and night", "talking about science"],
      },
      {
        title: "Listening to space from Cheshire",
        prompt:
          "The Lovell Telescope near Manchester has been listening to space for nearly 70 years. If you could point it anywhere on the poster, where would you aim it — and what question would you want answered?",
        connects: ["local science", "curiosity", "aiming high"],
      },
    ],
  },

  "periodic-table-posters": {
    meta: {
      topic: "{topic}",
      yearGroup: "{yearGroup}",
      location: "{location}",
      interests: [],
      occupations: [],
    },
    newsStory: {
      headline:
        "Manchester's National Graphene Institute develops carbon membranes that could clean the world's water",
      summary:
        "Scientists at the National Graphene Institute in Manchester are developing filters made from graphene — a form of carbon just one atom thick, first isolated in Manchester — that can sieve salt from seawater and remove pollutants from drinking water.",
      sourceName: "University of Manchester news",
      sourceUrl: "https://www.manchester.ac.uk/about/news/",
      scienceCapitalLink:
        "One element on the poster — carbon, number 6 — is being turned into world-changing technology a bus ride from {location}. The periodic table isn't history; it's Manchester's live research frontier.",
      dimensions: ["Science in the news", "Social uses of science"],
    },
    notableFigure: {
      name: "John Dalton",
      dates: "1766–1844",
      location: "Manchester",
      summary:
        "John Dalton, a weaver's son who taught in Manchester for most of his life, proposed that everything is made of atoms — the idea the whole periodic table is built on. He was colour-blind and turned that into science too, publishing the first scientific study of colour blindness, which is still called Daltonism.",
      scienceCapitalLink:
        "Dalton had no wealthy background and no fancy laboratory, and he turned his own way of seeing the world into discovery — students in {location} walk streets named after the man who gave chemistry its atoms.",
      dimensions: ["Scientists are like me", "Science literacy"],
    },
    jobs: [
      {
        title: "Materials scientist",
        employer: "National Graphene Institute, University of Manchester",
        route: "degree",
        qualifications:
          "Degree in Materials Science, Chemistry or Physics (BSc/MSc); research roles usually need a PhD.",
        futureSkills: [
          "Analytical thinking",
          "AI & big data",
          "Technological literacy",
          "Curiosity",
        ],
        skillsBuilderSkills: ["Problem solving", "Creativity", "Teamwork"],
        summary:
          "Materials scientists design new substances atom by atom — stronger, lighter, or smarter than anything on the shelf. In Manchester they work on graphene for batteries, water filters and flexible electronics. They combine lab experiments with computer simulations of how atoms behave.",
        connections: [
          "The materials in {interest1} boots, consoles and phone screens all started in labs like this",
          "Links to families who work with materials every day — packaging, fabrics, medicines, cleaning products",
        ],
        dimensions: ["Science leads to careers", "Technological literacy"],
      },
      {
        title: "Laboratory technician apprentice",
        employer: "Chemical and materials employers across Greater Manchester (e.g. Trafford Park)",
        route: "apprenticeship",
        qualifications:
          "Level 3 Laboratory Technician apprenticeship — earn while you learn; GCSEs in Maths, English and Science usually required.",
        futureSkills: ["Technological literacy", "Resilience", "Analytical thinking"],
        skillsBuilderSkills: ["Listening", "Problem solving", "Aiming high"],
        summary:
          "Lab technician apprentices run the tests behind everything from water quality to new coatings, learning to use analytical instruments that identify which elements are in a sample. Greater Manchester's chemical industry — one of the UK's biggest — trains apprentices every year. No degree needed to start.",
        connections: [
          "Testing and checking connects to families in careful, precise roles — a {occupation1} measures and records too",
          "A real route into science that pays from day one",
        ],
        dimensions: ["Science leads to careers", "Science in everyday life"],
      },
    ],
    conversationStarters: [
      {
        title: "Elements in your pocket",
        prompt:
          "A smartphone contains around 30 different elements — find five on the poster. Which do you think is hardest to get, and what happens when the world runs short?",
        connects: ["everyday technology", "{interest2}", "global thinking"],
      },
      {
        title: "The £1bn element next door",
        prompt:
          "Graphene is pure carbon — element 6, the same element as pencil lead — yet Manchester scientists won a Nobel Prize for it. How can one element be both ordinary and world-changing?",
        connects: ["local science", "materials", "curiosity"],
      },
      {
        title: "Boot room chemistry",
        prompt:
          "Modern {interest1} boots use carbon fibre plates, titanium studs and synthetic polymers. Which elements on the poster make sport faster and safer — and what would boots made 100 years ago have been like?",
        connects: ["{interest1}", "materials science", "analytical thinking"],
      },
      {
        title: "Elements at work",
        prompt:
          "Ask someone at home which materials matter in their job — metals, plastics, cleaning chemicals, medicines. Can we find their working life on the periodic table?",
        connects: ["family knowledge", "talking about science", "careers"],
      },
      {
        title: "Design element 119",
        prompt:
          "Every element on the poster was discovered by someone — several in Manchester. If you discovered element 119 tomorrow, what would you name it, and what would you want it to do?",
        connects: ["creativity", "history of science", "aiming high"],
      },
    ],
  },
};

function interpolate(text: string, req: GenerateRequest, defaults: PayloadDefaults): string {
  const values: Record<string, string> = {
    topic: req.topic,
    yearGroup: req.yearGroup,
    location: req.location,
    interest1: req.interests[0] ?? defaults.interest1,
    interest2: req.interests[1] ?? req.interests[0] ?? defaults.interest2,
    occupation1: req.occupations[0] ?? defaults.occupation1,
  };
  return text.replace(/\{(\w+)\}/g, (match, key) => values[key] ?? match);
}

export function buildTeachingResource(req: GenerateRequest): TeachingResource {
  const payload = payloads[req.resourceId] ?? payloads["autumn-science-hunt"];
  const defaults = payloadDefaults[req.resourceId] ?? payloadDefaults["autumn-science-hunt"];
  const fill = (text: string) => interpolate(text, req, defaults);

  return {
    meta: {
      topic: req.topic,
      yearGroup: req.yearGroup,
      location: req.location,
      interests: req.interests,
      occupations: req.occupations,
    },
    newsStory: {
      ...payload.newsStory,
      summary: fill(payload.newsStory.summary),
      scienceCapitalLink: fill(payload.newsStory.scienceCapitalLink),
    },
    notableFigure: {
      ...payload.notableFigure,
      summary: fill(payload.notableFigure.summary),
      scienceCapitalLink: fill(payload.notableFigure.scienceCapitalLink),
    },
    jobs: [
      fillJob(payload.jobs[0], fill),
      fillJob(payload.jobs[1], fill),
    ],
    conversationStarters: payload.conversationStarters.map((starter) => ({
      ...starter,
      prompt: fill(starter.prompt),
      connects: starter.connects.map(fill),
    })),
  };
}

function fillJob(
  job: TeachingResource["jobs"][number],
  fill: (text: string) => string
): TeachingResource["jobs"][number] {
  return {
    ...job,
    summary: fill(job.summary),
    connections: job.connections.map(fill),
  };
}

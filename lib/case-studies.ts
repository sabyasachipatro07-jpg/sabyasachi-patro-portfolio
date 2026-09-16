export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  oneLiner: string;
  description: string;
  prototypeUrl?: string;
  featured?: boolean;
  problem?: string;
  primaryUsers?: string;
  secondaryUsers?: string;
  research?: string[];
  journey?: { stage: string; detail: string }[];
  opportunities?: string[];
  solution?: string[];
  mvp?: string[];
  metrics?: { metric: string; type: "north star" | "supporting" }[];
  risks?: string[];
  rollout?: string[];
  highlights?: string[];
  assumptionsNote?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "apollo-medicine-companion",
    title: "Apollo Medicine Companion",
    category: "AI Product",
    tags: ["AI Product", "Healthcare Workflow", "APM Portfolio"],
    oneLiner:
      "An AI-assisted medicine companion that simplifies the full medicine journey — from purchase to dosage to refills.",
    description:
      "An AI-assisted medicine organization and reminder app designed to simplify the complete medicine journey, from purchasing medicines and accessing prescription details to managing dosage timings and updating prescriptions.",
    prototypeUrl: "https://apollo-medicine-companion.vercel.app/",
    featured: true,
    problem:
      "Managing medicines for a household is fragmented today: prescriptions live in a doctor's handwriting or a PDF, refill timing is tracked in someone's head, and dosage reminders — when they exist — live in a generic phone alarm with no context. The cost of a missed step falls hardest on caregivers managing medicines for someone else, and on older adults managing several medicines at once.",
    primaryUsers: "Busy parents and family caregivers",
    secondaryUsers: "Older adults",
    research:
      [
        "Assumption: caregivers currently rely on a mix of memory, phone reminders, and physical pill organizers, and switch between at least two of these for a single dependent.",
        "Assumption: prescription details (dosage, duration, refill dates) are the most error-prone step, since they require reading and re-entering information from a photographed or handwritten prescription.",
      ],
    journey: [
      { stage: "Prescribe", detail: "Doctor issues or updates a prescription; caregiver photographs or receives it digitally." },
      { stage: "Digitize", detail: "Caregiver adds the prescription to the app — manually or by scanning — capturing medicine, dose, and schedule." },
      { stage: "Purchase", detail: "App surfaces what needs reordering and when, reducing last-minute pharmacy runs." },
      { stage: "Take", detail: "Reminders fire at the right time, for the right person, with the right dose." },
      { stage: "Renew", detail: "App flags when a prescription is nearing its end or needs a doctor follow-up." },
    ],
    opportunities: [
      "Reduce the manual re-entry step between a prescription and a usable reminder schedule.",
      "Give one caregiver a single view across multiple family members' medicines, not one silo per person.",
      "Surface refill timing before it becomes urgent, rather than after a dose is missed.",
    ],
    solution: [
      "Prescription capture: photograph or forward a prescription; an AI reminder agent extracts medicine name, dosage, and schedule for the caregiver to confirm.",
      "Family Mode: one dashboard covering every dependent's medicines, with per-person reminder threads.",
      "Smart refill nudges: reorder prompts timed against remaining supply, not a fixed calendar interval.",
    ],
    mvp: [
      "Manual + AI-assisted prescription entry with confirmation step (no auto-apply without caregiver review).",
      "Per-person dosage reminders with snooze and 'taken/skipped' logging.",
      "Refill countdown based on quantity and dosage frequency entered at setup.",
    ],
    metrics: [
      { metric: "% of scheduled doses marked taken on time (target north-star for adherence)", type: "north star" },
      { metric: "Time from prescription photo to confirmed reminder schedule", type: "supporting" },
      { metric: "% of refill nudges acted on before supply runs out", type: "supporting" },
    ],
    risks: [
      "AI extraction from handwritten prescriptions will have real error rates — the confirmation step exists specifically to catch this, not as a formality.",
      "Reminder fatigue: too many notifications across a family reduces trust in all of them.",
      "This is a prototype exploring the interaction model, not a validated clinical or regulated product — it does not replace a pharmacist's or doctor's guidance.",
    ],
    assumptionsNote:
      "This case study is a self-directed product exercise. User research described above is framed as assumptions, not findings from real interviews, and metrics are proposed targets rather than measured results.",
  },
  {
    slug: "google-maps-refueling",
    title: "Google Maps — Smarter Refueling Decisions",
    category: "Product Sense",
    tags: ["Product Sense", "Mobility", "Decision Support"],
    oneLiner: "How might Google Maps help drivers make better refueling decisions?",
    description:
      "A product-sense exercise exploring how Google Maps could reduce the small daily friction of deciding when and where to refuel — balancing price, detour cost, and running-out risk.",
    prototypeUrl: "https://active-nav-highway-fuel-route-trade-off.ai.studio/",
    featured: true,
    problem:
      "\"How might Google Maps help drivers make better refueling decisions?\" Drivers today decide when to refuel using a rough mental model — remaining range, how familiar the route is, and habit — rather than any structured trade-off between price, detour time, and risk of running low. On long or unfamiliar routes, this becomes a real decision problem: refuel now at a known but pricier station, or risk finding a cheaper one further ahead.",
    primaryUsers: "Long-distance and highway drivers navigating with Google Maps",
    secondaryUsers: "Daily commuters optimizing routine fuel costs",
    journey: [
      { stage: "Notice", detail: "Driver glances at remaining fuel range mid-route." },
      { stage: "Weigh", detail: "Mentally compares nearby stations on price, detour distance, and confidence in reaching the next one." },
      { stage: "Decide", detail: "Stops now, or defers and hopes a better option appears." },
      { stage: "Regret / relief", detail: "Outcome reinforces or corrects the driver's mental model for next time." },
    ],
    opportunities: [
      "Surface the trade-off explicitly on the route (price vs. detour vs. risk) instead of leaving it to a driver's estimate.",
      "Use route context (remaining range, upcoming station density) to flag when 'wait for a better price' is actually risky.",
      "Keep the feature lightweight — this is a supporting decision, not a new destination to plan around.",
    ],
    solution: [
      "An in-route fuel trade-off panel: shows the current station's price and detour cost against the best likely option further along the route, with a confidence indicator based on station density ahead.",
      "A single, dismissible surface — not a persistent widget — so it respects that refueling is a secondary task during navigation.",
    ],
    mvp: [
      "Trigger the panel only when remaining range crosses a threshold relative to distance to the next known station cluster.",
      "Show two options: nearest station now vs. best-priced option within an acceptable detour, with clear price and distance deltas.",
      "No route replanning required to accept a suggestion — it should slot into the existing route.",
    ],
    metrics: [
      { metric: "% of drivers who engage with the panel when it's shown (proposed)", type: "north star" },
      { metric: "Reported/estimated fuel cost saved per accepted suggestion (proposed)", type: "supporting" },
      { metric: "False-alarm rate — panel shown but driver had ample range (proposed)", type: "supporting" },
    ],
    rollout: [
      "Start on long-haul highway routes only, where the decision stakes and station spacing make the trade-off meaningful.",
      "Expand to daily commute routes only if the highway version shows real engagement, since the trade-off is far smaller there.",
    ],
    risks: [
      "Price data staleness could erode trust quickly if a shown price is wrong at the pump.",
      "Over-triggering on routes where range risk is actually low would make drivers start ignoring the panel.",
    ],
    assumptionsNote:
      "This is a product-sense exercise built without access to Google's internal usage data. The user journey, opportunity framing, and metrics are my own structured reasoning, not measured research.",
  },
  {
  slug: "travelsouls",
  title: "TravelSouls",
  category: "Multi-Agent AI",
  tags: ["Multi-Agent AI", "Travel Planning"],

  oneLiner:
    "A multi-agent AI travel planning platform that simplifies research, itinerary generation, budget tracking, booking discovery, and contextual recommendations.",

  description:
    "TravelSouls is a BITSoM capstone group project developed collaboratively with my fellow teammates. The platform explores how a multi-agent AI system can simplify the complete travel-planning journey—from discovering destinations and comparing options to creating editable itineraries, managing budgets, exploring booking options, and sharing travel plans. The experience is coordinated by Orchestrator Agent 'Neo', which connects specialized agents for research, budgeting, booking, and recommendations.",

  prototypeUrl:
    "https://travelsouls-262238454554.asia-southeast1.run.app/",

  featured: true,

  highlights: [
    "Group capstone project — collaboratively developed with fellow teammates as part of the BITSoM Product Management with Generative & Agentic AI program.",

    "Orchestrator Agent — acts as the central hub that coordinates the research, budget, booking, and recommendation agents into one coherent travel-planning workflow.",

    "One-prompt trip planning — allows users to describe their travel requirements in natural language and receive an AI-generated travel plan.",

    "AI itinerary generation — creates an editable day-by-day itinerary with timings, local tips, hidden gems, and contextual recommendations.",

    "Real-time budget tracking — helps users monitor spending across flights, hotels, food, and activities, with budget alerts and visible trade-offs.",

    "AI reasoning transparency — provides a 'Why did AI pick this?' explanation for recommendations using signals such as price, reviews, and personalization.",

    "Family Mode and shareable itineraries — supports family and multi-generational travel planning and allows users to share complete itineraries with others.",

    "Working prototype — demonstrates the core product direction, user flows, multi-agent experience, and planned MVP features.",
  ],

  opportunities: [
    "Reduce the number of open tabs and disconnected tools travelers use when researching destinations, comparing options, planning activities, and making bookings.",

    "Make travel-budget trade-offs visible and adjustable throughout the planning process instead of discovering unexpected costs later.",

    "Reduce the time required to move from a broad travel idea to a practical, personalized, and editable itinerary.",

    "Improve user trust in AI-generated recommendations through transparent reasoning, live price validation, and clear communication when the AI is uncertain.",

    "Support different travel contexts, including solo travel, family trips, and multi-generational journeys, through contextual recommendations and flexible planning.",
  ],

  assumptionsNote:
    "TravelSouls is a BITSoM capstone group project developed with fellow teammates. The case study reflects the current product direction, research findings, prototype, and proposed MVP. The prototype is a demonstration of the concept and should not be interpreted as a production-ready booking platform or as evidence of live commercial performance.",
},
  {
    slug: "meta-storyteller",
    title: "Meta Storyteller",
    category: "AR/VR",
    tags: ["AR/VR", "Spatial Audio", "Immersive Experiences"],
    oneLiner:
      "An immersive audiobook concept that turns traditional listening into a spatial, interactive AR/VR experience.",
    description:
      "An immersive audiobook concept that transforms traditional listening into an AR/VR experience through spatial audio and interactive storytelling — exploring what a book sounds like when scenes move around the listener instead of playing linearly through a single channel.",
    problem:
      "Audiobooks today are a passive, single-channel experience — the format hasn't changed much even as spatial audio and AR/VR hardware have matured. There's a gap between what's technically possible (sound that moves with a scene, choices that branch a narrative) and what most listeners can access today.",
    opportunities: [
      "Use spatial audio to make scene changes and multi-character dialogue physically legible — sound arriving from a direction, not just a change in volume.",
      "Let a listener's small physical choices (turning toward a sound) become part of how a scene reveals itself, without requiring a full game-like interface.",
    ],
    assumptionsNote:
      "This is an early-stage concept exercise, not a built or user-tested product. It's included to show product thinking applied to an emerging-hardware space.",
  },
  {
    slug: "geo-product-discovery",
    title: "GEO for Product Discovery",
    category: "AI Search",
    tags: ["AI Search", "Product Discovery"],
    oneLiner:
      "How can businesses improve product discoverability across AI-powered search experiences?",
    description:
      "A product concept exploring how businesses can improve product discoverability across AI-powered search experiences — as answers increasingly come from a generated summary rather than a list of ranked links.",
    problem:
      "As search shifts from a list of links to a single generated answer, a product can rank well in traditional SEO and still never be mentioned in the answer a user actually reads. Businesses don't yet have a clear, structured way to understand or influence how they're represented inside AI-generated responses.",
    opportunities: [
      "Give businesses visibility into when and how they're being cited (or omitted) in AI-generated answers for relevant queries.",
      "Translate that visibility into concrete content and structured-data changes, rather than leaving 'generative engine optimization' as a vague best-practice list.",
    ],
    assumptionsNote:
      "This is an early-stage concept exercise reasoning through a fast-moving space (generative engine optimization). It is not a built product, and the underlying platform behaviors it discusses can change quickly.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}

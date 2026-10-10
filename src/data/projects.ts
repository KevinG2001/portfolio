export type Status = "ARRIVED" | "IN SERVICE" | "BOARDING" | "IN DEPOT";

export type ProjectLinks = {
	repo: string | null;
	live: string | null;
	demo: string | null;
};

export type MetaItem = {
	label: string;
	value: string;
};

export type JourneyStop = {
	title: string;
	body: string;
};

export type CallingAtItem = {
	name: string;
	role: string;
};

export type Project = {
	slug: string;
	route: string;
	name: string;
	status: Status;
	stack: string[];
	shortDescription: string;
	description: string;
	image?: string;
	featured?: boolean;
	links: ProjectLinks;
	meta: MetaItem[];
	journey: JourneyStop[];
	callingAt: CallingAtItem[];
};

export const projects: Project[] = [
	{
		slug: "trackitdown",
		route: "01",
		name: "TrackItDown",
		status: "ARRIVED",
		stack: ["React", "Node.js", "PostgreSQL"],
		shortDescription:
			"Lost-and-found management system for a real gap I saw at Dublin Bus. Final-year project.",
		description:
			"TrackItDown is a full-stack lost-and-found management system I built as my final-year Computing project. Working at Dublin Bus, I saw first-hand how lost property was handled with no proper system behind it, so I designed one: staff can log found items, passengers can report what they've lost, and the two are matched up so items actually make it back to their owners.",
		image: "/images/projects/trackitdown.png",
		featured: true,
		links: {
			repo: null,
			live: null,
			demo: null,
		},
		meta: [
			{ label: "Role", value: "Solo — design, build, testing" },
			{ label: "Status", value: "Complete" },
			{ label: "Context", value: "Final-year project, BSc (Hons) Computing" },
			{ label: "Core", value: "React · Express · PostgreSQL" },
		],
		journey: [
			{
				title: "Why it exists",
				body: "Working at Dublin Bus, I saw how lost property was handled with no proper system behind it. Items came in, and were put into a spreadsheet with no real system, So I decided to build one",
			},
			{
				title: "What it does",
				body: "Staff log found items with a category, description and what route they were found on. Passengers filled in a form describing their item and the system would compare them and if there was a potential match it would flag it.",
			},
			{
				title: "How it's built",
				body: "A react frontend talks to an express rest api which stored everything in postgresql. Staff and passengers had seperate portals so customers couldnt see all the items that were on the system.",
			},
			{
				title: "Things that bit",
				body: "Matching was hard to setup because it would miss obvious matches like black wallet vs dark leather wallet so I planned on adding category filters / fuzzy matching and a scoring system.",
			},
			{
				title: "What I'd do next",
				body: "I have so many ideas that I want to add onto this and once I get some time I will end up going back to it but to name a few it would be, item recognition so when you take a picture of the item it would fill out the form for you and you would just need to double check it.",
			},
		],
		callingAt: [
			{ name: "React", role: "Staff and passenger portals" },
			{ name: "Backend", role: "REST API for items, reports and matches" },
			{
				name: "Styling",
				role: "Swapped to MUI for faster workflow half way through",
			},
			{ name: "PostgreSQL", role: "Items, reports and matches" },
			{ name: "JWT", role: "Separate staff / public logins" },
			{ name: "Hosting", role: "Hosted on AWS for live demo" },
			{
				name: "Nodemailer",
				role: "Tells passengers when an item matches.",
			},
		],
	},
];

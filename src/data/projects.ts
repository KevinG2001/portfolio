export type Status = "ARRIVED" | "IN SERVICE" | "BOARDING" | "En Route";

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
	{
		slug: "selfhealth",
		route: "02",
		name: "SelfHealth",
		status: "En Route",
		stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
		shortDescription:
			"A self-hosted health app for tracking food, workouts and journalling in one place.",
		description:
			"SelfHealth is a self-hosted app that helps people stay on top of their own health. Users can track calories and macros against their own weight goals, log workouts with sets, reps and rest times, build workout templates from an exercise library, and journal about their day. It's built to run on a homelab, so your health data stays on your own hardware.",
		image: "/images/projects/selfhealth.png",
		featured: true,
		links: {
			repo: null,
			live: null,
			demo: null,
		},
		meta: [
			{ label: "Role", value: "Solo — design, build, testing" },
			{ label: "Status", value: "Work in progress" },
			{
				label: "Context",
				value: "Personal project — an app I wanted to use myself",
			},
			{ label: "Core", value: "React · Express · PostgreSQL" },
		],
		journey: [
			{
				title: "Why it exists",
				body: "While I was getting fit, I noticed most health apps were always missing something. One was great for food, another for workouts, but none did it all. So I decided to build my own that combines the best parts of each, with a few ideas of my own.",
			},
			{
				title: "What it does",
				body: "It brings food, training and journalling into one place, so users can manage their health themselves and stay accountable. Because it's self-hosted, the data never leaves your own server.",
			},
			{
				title: "How it's built",
				body: "It's a TypeScript monorepo. A React frontend talks to an Express REST API, which stores everything in PostgreSQL. A shared package holds the types and API calls, so a future mobile app can reuse them instead of duplicating work. The whole stack runs with Docker Compose, so self-hosting is just clone, fill in the .env, and docker compose up.",
			},
			{
				title: "Things that bit",
				body: "Figuring out the best way to develop a web app and a mobile app, As I have never done it, its a bit of a learning curve so I am trying to get a consistent design accross both and trying to make it stuff as reusable as possible",
			},
			{
				title: "What I'd do next",
				body: "I have a lot of ideas to add once I get the time. The big one is item recognition: take a photo of your food and it fills out the nutritional values for you, so you only need to double-check it. After that, a React Native mobile app that connects to your own server.",
			},
		],
		callingAt: [
			{ name: "React", role: "Card-based web dashboard" },
			{ name: "MUI", role: "Component library for the web UI" },
			{ name: "Express", role: "REST API for workouts, nutrition and journal" },
			{ name: "PostgreSQL", role: "Multi-user data storage" },
			{ name: "JWT", role: "Multi-user authentication" },
			{
				name: "Shared package",
				role: "Types and API calls reused across frontends",
			},
			{ name: "Docker Compose", role: "One-command self-hosting" },
		],
	},
];

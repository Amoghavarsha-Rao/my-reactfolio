const buildImgShieldLink = (techName, bgColor, logoColor, logoName) => {
	return `https://img.shields.io/badge/-${techName}-${bgColor}?logo=${
		logoName
			? logoName
			: techName
					.toLowerCase()
					.replace(/[^a-zA-Z0-9\s.]/g, "")
					.split(" ")
					.join("")
	}&logoColor=${logoColor}&style=for-the-badge&logoWidth=30`;
};

const defaultbgColor = "141414";

const INFO = {
	main: {
		title: "Amoghavarsha Rao",
		name: "Amoghavarsha Rao",
		email: "amoghavarsharao99@gmail.com",
		logo: "../avatar.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/Amoghavarsha-Rao",
		linkedin: "https://www.linkedin.com/in/amoghavarsharao/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Hi! I'm Amogh!",
		description1:
			"Welcome to my professional portfolio! I am a student currently pursuing a Master’s degree in Business Analytics at UT Dallas. My experience includes developing software solutions to enhance system efficiency and optimizing data pipelines for faster processing.",
		description2:
			"My core competencies lie in Python, PySpark, SQL, and cloud tools like Azure Synapse and Power BI, and I hold certifications in Applied Machine Learning and Google Data Analytics. I have also led projects focused on analyzing large datasets and creating dynamic databases to uncover actionable insights.",
			description3:
			"Please feel free to look around, I’d always be interested in hearing any thoughts or suggestions!",
		},
	about: {
		title: "Career Path",
		description:
			"My journey – from academic milestones to professional endeavours.",
		download: {
			link: "https://dl.dropboxusercontent.com/scl/fi/piecj287psmll1hq3z77c/Resume2024-8.pdf?rlkey=l6tb15nseflk0ms9kh2dmuhts&st=io6fpnqy&dl=0",
			title: "My Resumé",
		},
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: {
		title: "My Projects",
		description:
			"A few projects that I've worked on over the years, each project highlights my approach to addressing various challenges utilizing various technologies and providing meaningful insights.",
		list: [
			{
				title: "Textful",
				description:
					"Textful is a web-based application, made using React, Node.js and MongoDb that enables its users to exchange text messages directly.",
				tech: [
					buildImgShieldLink("JavaScript", defaultbgColor, "F7DF1E"),
					buildImgShieldLink("React", defaultbgColor, "61DAFB"),
					buildImgShieldLink("MongoDB", defaultbgColor, "47A248"),
					buildImgShieldLink("CSS3", defaultbgColor, "1572B6"),
					buildImgShieldLink(
						"NodeJS",
						defaultbgColor,
						"339933",
						"node.js"
					),
					buildImgShieldLink("Express", defaultbgColor, "FFFFFF"),
				],
				linkText: "View Project",
				link: "https://github.com/rumanstheddy/project-textful",
			},

			{
				title: "Playscore Pal",
				description:
					"Playscore Pal is a web-based platform built with Next.js, Node.js, Express, GraphQL, and MongoDB, utilizing the IGDB API. It empowers users to rate, review, and recommend games.",
				tech: [
					buildImgShieldLink("Typescript", defaultbgColor, "3178C6"),
					buildImgShieldLink(
						"Next.js",
						defaultbgColor,
						"FFFFFF",
						"next.js"
					),
					buildImgShieldLink("MongoDB", defaultbgColor, "47A248"),
					buildImgShieldLink("GraphQL", defaultbgColor, "DA0393"),
					buildImgShieldLink(
						"Tailwind CSS",
						defaultbgColor,
						"06B6D4"
					),
					buildImgShieldLink(
						"NodeJS",
						defaultbgColor,
						"339933",
						"node.js"
					),
				],
				linkText: "View Project",
				link: "https://github.com/rumanstheddy/ss-play-score-pal",
			},

			{
				title: "Meteoscope",
				description:
					"Meteoscope is a weather forecast app I made using React, Chakra UI and Open Meteo API.",
				tech: [
					buildImgShieldLink("JavaScript", defaultbgColor, "F7DF1E"),
					buildImgShieldLink("React", defaultbgColor, "61DAFB"),
					buildImgShieldLink("chakra--ui", defaultbgColor, "67C9CB"),
					buildImgShieldLink(
						"NodeJS",
						defaultbgColor,
						"339933",
						"node.js"
					),
				],
				linkText: "View Project",
				link: "https://github.com/rumanstheddy/meteoscope",
			},

			{
				title: "AngularChrono",
				description:
					"Exploring Angular basics and SASS, I built a hands-on mobile-responsive Stop Watch web app.",
				tech: [
					buildImgShieldLink("Angular", defaultbgColor, "D70230"),
					buildImgShieldLink("Typescript", defaultbgColor, "3178C6"),
					buildImgShieldLink("Sass", defaultbgColor, "CC6699"),
					buildImgShieldLink(
						"NodeJS",
						defaultbgColor,
						"339933",
						"node.js"
					),
				],
				linkText: "View Project",
				link: "https://github.com/rumanstheddy/Ang-Stop-Watch",
			},
		],
	},
};

export default INFO;

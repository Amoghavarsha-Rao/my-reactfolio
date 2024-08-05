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

const INFO = {
	main: {
		title: "Sumanth Chinnaobireddy",
		name: "Tharindu N.",
		email: "sumanthcob@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/rumanstheddy",
		linkedin: "https://www.linkedin.com/in/sumanthcob/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Sumanth Chinnaobireddy",
		description:
			"I'm a Software Developer specializing in React.js and Node.js. Proficient in crafting scalable, secure, and dependable web applications, I leverage various frameworks and technologies. I thrive on tackling intricate challenges and acquiring new skills. My passion lies in producing high-quality code adhering to best practices and industry standards. Eager for fresh challenges, I continually seek opportunities to enhance my skills and evolve as a developer.",
	},
	about: {
		title: "Career Path",
		description:
			"Dive into my journey – from academic milestones to professional endeavours. Discover my story in a resumé format.",
		download: {
			link: "https://dl.dropboxusercontent.com/scl/fi/piecj287psmll1hq3z77c/Resume2024-8.pdf?rlkey=l6tb15nseflk0ms9kh2dmuhts&st=io6fpnqy&dl=0",
			title: "My Resumé",
			// description: "",
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
			"I've been involved in diverse projects throughout my career, and I take pride in the strides we've made. If any of these projects catch your interest, explore the code and share any suggestions for improvements or enhancements. Collaboration is a fantastic opportunity for learning and development, and I welcome new ideas and feedback with open arms. Feel free to connect and share your insights!",
		list: [
			{
				title: "Textful",
				description:
					"Textful is a web-based application, made using React, Node.js and MongoDb that enables its users to exchange text messages directly.",
				tech: [
					buildImgShieldLink("JavaScript", "090909", "F7DF1E"),
					buildImgShieldLink("React", "090909", "61DAFB"),
					buildImgShieldLink("MongoDB", "090909", "47A248"),
					buildImgShieldLink("CSS3", "090909", "1572B6"),
					buildImgShieldLink("NodeJS", "090909", "339933", "node.js"),
					buildImgShieldLink("Express", "090909", "FFFFFF"),
				],
				linkText: "View Project",
				link: "https://github.com/rumanstheddy/project-textful",
			},

			{
				title: "Playscore Pal",
				description:
					"Playscore Pal is a web-based platform built with Next.js, Node.js, Express, GraphQL, and MongoDB, utilizing the IGDB API. It empowers users to rate, review, and recommend games.",
				tech: [
					buildImgShieldLink("Typescript", "090909", "3178C6"),
					buildImgShieldLink(
						"Next.js",
						"090909",
						"FFFFFF",
						"next.js"
					),
					buildImgShieldLink("MongoDB", "090909", "47A248"),
					buildImgShieldLink("GraphQL", "090909", "DA0393"),
					buildImgShieldLink("Tailwind CSS", "090909", "06B6D4"),
					buildImgShieldLink("NodeJS", "090909", "339933", "node.js"),
				],
				linkText: "View Project",
				link: "https://github.com/rumanstheddy/ss-play-score-pal",
			},

			{
				title: "Meteoscope",
				description:
					"Meteoscope is a weather forecast app I made using React, Chakra UI and Open Meteo API.",
				tech: [
					buildImgShieldLink("JavaScript", "090909", "F7DF1E"),
					buildImgShieldLink("React", "090909", "61DAFB"),
					buildImgShieldLink("chakra--ui", "090909", "67C9CB"),
					buildImgShieldLink("NodeJS", "090909", "339933", "node.js"),
				],
				linkText: "View Project",
				link: "https://github.com/rumanstheddy/meteoscope",
			},

			{
				title: "AngularChrono",
				description:
					"Exploring Angular basics and SASS, I built a hands-on mobile-responsive Stop Watch web app.",
				tech: [
					buildImgShieldLink("Angular", "090909", "D70230"),
					buildImgShieldLink("Typescript", "090909", "3178C6"),
					buildImgShieldLink("Sass", "090909", "CC6699"),
					buildImgShieldLink("NodeJS", "090909", "339933", "node.js"),
				],
				linkText: "View Project",
				link: "https://github.com/rumanstheddy/Ang-Stop-Watch",
			},
		],
	},
};

export default INFO;

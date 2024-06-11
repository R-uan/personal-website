export const Featured_Repositories: { name: string; description: string; url: string; tags: string[]; image: string }[] = [
	{
		name: "Basic Authentication API",
		url: "https://github.com/R-uan/BasicAuthenticationAPI",
		image: "/screenshots/dotnet.png",
		description: "Basic User Authentication Project using JSON Web Tokens and PostgreSQL in C# using ASP.NET Core",
		tags: ["C#", "ASP.NET Core", "Postgres", "JWT", "Entity Framework"],
	},
	{
		name: "Art Gallery",
		url: "https://github.com/R-uan/art-gallery",
		image: "/screenshots/artgallery.png",
		description: "Digital Art Gallery Front-end to consume a custom REST API.",
		tags: ["NextJS", "ReactJS", "SASS", "TailwindCSS"],
	},
	{
		name: "Art Gallery API",
		url: "https://github.com/R-uan/ArtGalleryWebApi",
		image: "/screenshots/dotnet.png",
		description:
			"Web API using ASP.NET Core for an digital art gallery. Has authentication with JWT, Caching with Redis and uses PostgreSQL as the database.",
		tags: ["C#", "ASP.NET Core", "Postgres", "JWT", "Redis"],
	},
];

export const Other_Repositories: { name: string; description: string; tags: string[]; link: string }[] = [
	{
		name: "Manga Collection Backend",
		tags: ["NodeJS", "MongoDB", "MongooseJS", "ExpressJS"],
		description: "Simple Backend API for CRUD Operations on a MongoDB database using ExpressJS and MongooseJS.",
		link: "https://github.com/R-uan/manga-collection-api",
	},
	{
		name: "User Athentication System",
		tags: ["Java", "Spring Framework", "JWT", "Spring Security", "Postgres"],
		description: "API with endpoints for use authentication system using Spring Security, JSON web tokens and PostgreSQL as database.",
		link: "https://github.com/R-uan/user-authentication-system",
	},
	{
		name: "Raw Audio Playlist",
		tags: ["NextJS", "Tailwind", "ReactJS", "Redux"],
		description:
			"Web application that for creating playlists with raw audio links. Mostly serves as an extension for the soundgasm and kemono website. Backend has form to extract the raw audio url from soundgasm.",
		link: "https://github.com/R-uan/soundgasm-playlist",
	},
];
type Site = {
  name: string;
  app_name: string;
  url: string;
  title: string;
  description: string;
  keywords: string[];
  authors: { name: string; url: string }[];
};

const site: Site = {
  name: "9d8 Next.js Starter",
  app_name: "9d8 Starter",
  url: "https://starter.9d8.dev", // don't end with a slash (/)
  title: "9d8 Starter | Opinionated Next JS Starter",
  description:
    "9d8 Starter is an opinionated Next JS starter. It's built to be a solid, SEO-first, foundation for your next project.",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "9d8", url: "https://9d8.dev" }],
};

export default site;

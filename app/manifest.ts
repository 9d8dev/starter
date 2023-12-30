import { MetadataRoute } from "next";
import site from "@/site.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.app_name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

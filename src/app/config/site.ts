export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Nameless, Faceless",
  description: "Website for the graphic novel Nameless, Faceless",
  url: "https://nameless-faceless.vercel.app",
  ogImage: "https://nameless-faceless.vercel.app/og.jpg",
  links: {
    twitter: "https://twitter.com/namelessfaceless",
    github: "https://github.com/lumamontes/graphic-novel-demo-website",
  },
};

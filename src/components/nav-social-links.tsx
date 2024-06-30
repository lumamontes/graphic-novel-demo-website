import Image from "next/image";

type SocialLink = {
  alt: string;
  src: string;
  href: string;
};
const links: SocialLink[] = [
  {
    alt: "Instagram",
    src: "/instagram.svg",
    href: "https://www.instagram.com/_namelessfaceless",
  },
  {
    alt: "Twitter",
    src: "/twitter.svg",
    href: "https://x.com/namefaceless_",
  },
  {
    alt: "Email",
    src: "/envelope.svg",
    href: "mailto:luanagoesmontes@gmail.com",
  },
];

export default function NavSocialLinks() {
  return (
    <nav className=" md:fixed bottom-16 right-12 p-4">
      <ul className="flex justify-center items-center gap-4 md:flex-col">
        {links.map((link, index) => (
          <li key={index} className="list-none">
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <Image
                src={link.src}
                alt={link.alt}
                width={20}
                height={20}
                className="p-1 hover:bg-neutral-100 rounded-md transition-colors duration-300 w-7 h-7"
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

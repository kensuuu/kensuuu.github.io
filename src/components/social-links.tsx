import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiZenn } from "react-icons/si";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/kensuuu/",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kensuuu11/",
    icon: FaLinkedin,
  },
  {
    name: "Zenn",
    url: "https://zenn.dev/kensuuu/",
    icon: SiZenn,
  },
];

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((social) => (
        <Button
          key={social.name}
          variant="ghost"
          size="icon"
          asChild
          className="hover:bg-muted"
        >
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <social.icon className="h-5 w-5" />
          </a>
        </Button>
      ))}
    </div>
  );
} 
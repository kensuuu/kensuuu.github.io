import { Button } from "@/components/ui/button";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiQiita, SiZenn } from "react-icons/si";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: FaGithub,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: FaTwitter,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: FaLinkedin,
  },
  {
    name: "Qiita",
    url: "https://qiita.com/yourusername",
    icon: SiQiita,
  },
  {
    name: "Zenn",
    url: "https://zenn.dev/yourusername",
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
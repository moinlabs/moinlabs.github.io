import type { SocialLink } from "@/types";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiEdit3 } from "react-icons/fi";

// TODO: replace every URL below with your real profiles.
export const socials: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/USERNAME", icon: FiGithub, todo: true },
  { label: "LinkedIn", url: "https://linkedin.com/in/USERNAME", icon: FiLinkedin, todo: true },
  { label: "Twitter / X", url: "https://x.com/USERNAME", icon: FiTwitter, todo: true },
  { label: "Medium", url: "https://medium.com/@USERNAME", icon: FiEdit3, todo: true },
  { label: "Email", url: "mailto:TODO@example.com", icon: FiMail, todo: true },
];

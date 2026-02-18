import { LinkedinIcon, MailIcon, GithubIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <p className="text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} Hoi. All rights reserved.
      </p>
    </footer>
  );
}
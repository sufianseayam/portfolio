import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 text-center text-sm text-muted">
      <p>© {new Date().getFullYear()} {site.name}. Built with Next.js and Tailwind CSS.</p>
    </footer>
  );
}

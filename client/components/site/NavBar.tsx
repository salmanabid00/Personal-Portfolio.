import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import ResumeDialog from "./ResumeDialog";

const RESUME_URL = "https://cdn.builder.io/o/assets%2F96021ce717ed4afeb188a0463989cea6%2F2bcd98aec3004ad697d2f828699d44c1?alt=media&token=8f47794b-634d-43d6-9c67-b6a1ba49cea9&apiKey=96021ce717ed4afeb188a0463989cea6";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur border-b border-border/60 bg-[hsl(var(--background))]/80">
      <nav className="container-section py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-extrabold tracking-tight">
          <span className="text-[hsl(var(--primary))]">Salman</span>
          <span className="text-white">.dev</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-link">
              {item.label}
            </a>
          ))}
          <button onClick={() => setOpen(true)} className="btn-yellow h-9 px-4">
            Resume
          </button>
        </div>
        <div className="md:hidden flex items-center gap-3">
          <a href="https://github.com/salmanabid00" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github className="text-white/80 hover:text-white w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/salmanmerndev/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="text-white/80 hover:text-white w-5 h-5" />
          </a>
          <a href="mailto:salmanabid206@gmail.com" aria-label="Email">
            <Mail className="text-white/80 hover:text-white w-5 h-5" />
          </a>
        </div>
      </nav>
      <ResumeDialog open={open} onOpenChange={setOpen} pdfUrl={RESUME_URL} />
    </header>
  );
}

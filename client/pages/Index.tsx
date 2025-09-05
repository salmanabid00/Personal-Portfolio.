import React, { useMemo, useState } from "react";
import NavBar from "@/components/site/NavBar";
import ContactForm from "@/components/site/ContactForm";
import Footer from "@/components/site/Footer";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function Index() {
  const projects = useMemo(
    () => [
      {
        title: "E-commerce Website",
        desc:
          "Responsive online store with cart, checkout and payment integration.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        tags: ["React", "Tailwind", "Redux", "MongoDB"],
        live: "#",
        github: "https://github.com/salmanabid00/Mern-e-Commerce-store",
        featured: true,
      },
      {
        title: "Task Manager App",
        desc:
          "Create, edit, delete tasks with auth and local storage sync.",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
        tags: ["React", "Node", "MongoDB"],
        live: "#",
        github: "https://github.com/salmanabid00/Task-Manager-App",
        featured: true,
      },
      {
        title: "Real-time Resume Builder",
        desc: "Instant resume builder and PDF export.",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
        tags: ["Next.js", "Tailwind"],
        live: "#",
        github: "https://github.com/salmanabid00/startup-resume-craftsman",
        featured: true,
      },
      {
        title: "Clothing Website",
        desc: "Responsive clothing store with filtering & sorting.",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
        tags: ["React", "Tailwind"],
        live: "#",
        github: "https://github.com/salmanabid00/Clothing-website",
        featured: false,
      },
      {
        title: "Voting App",
        desc: "Real-time voting and results.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
        tags: ["Node", "WebSocket"],
        live: "#",
        github: "https://github.com/salmanabid00/Voting-App",
        featured: false,
      },
      {
        title: "Real-time Chat App",
        desc: "Live messaging app with WebSocket.",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
        tags: ["React", "Node", "WebSocket"],
        live: "#",
        github: "https://github.com/salmanabid00/Real-Time-chat-App",
        featured: false,
      },
      {
        title: "Event Booking App",
        desc: "Book & manage events online.",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
        tags: ["React", "MongoDB"],
        live: "#",
        github: "https://github.com/salmanabid00/Event-Booking-App",
        featured: false,
      },
      {
        title: "Portfolio",
        desc: "This personal portfolio site.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        tags: ["React", "Tailwind"],
        live: "#",
        github: "https://github.com/salmanabid00",
        featured: true,
      },
    ],
    [],
  );

  const [filter, setFilter] = React.useState<"all" | "featured">("all");
  const filtered = projects.filter((p) => (filter === "featured" ? p.featured : true));

  return (
    <div id="home" className="min-h-screen">
      <NavBar />

      {/* Hero */}
      <section className="pt-28 md:pt-32 container-section text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
          Hi, I am <span className="text-[hsl(var(--primary))]">Salman Abid</span>
        </h1>
        <p className="mt-3 text-lg md:text-xl text-white/90">MERN Stack Developer</p>
        <p className="mt-4 max-w-3xl mx-auto text-white/70">
          Building scalable web applications and creating intuitive user experiences.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#projects" className="btn-yellow">View My Work</a>
          <a href="#contact" className="border border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10 rounded-md px-4 py-2 font-semibold">Get In Touch</a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-5">
          <a href="https://github.com/salmanabid00" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/80 hover:text-white">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/salmanmerndev/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/80 hover:text-white">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:salmanabid206@gmail.com" aria-label="Email" className="text-white/80 hover:text-white">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="mt-12 flex flex-col items-center text-white/70">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </section>

      {/* Divider */}
      <div className="container-section mt-12">
        <div className="h-[2px] bg-[hsl(var(--primary))] w-full" />
      </div>

      {/* About */}
      <section id="about" className="container-section mt-14">
        <h2 className="section-title text-center yellow-underline mx-auto">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8 items-start">
          <div className="md:col-span-2 surface p-6">
            <p className="text-white/80 leading-relaxed">
              I am a passionate MERN Stack Developer with a strong foundation in creating responsive, scalable, and user-friendly applications. I specialize in building full-stack applications using MongoDB, Express.js, React.js, and Node.js, with a keen interest in UI/UX design and performance optimization. With 2+ years of learning experience, I have developed multiple personal and internship projects, including E-commerce platforms, real-time applications, and automation tools. I am committed to writing clean, maintainable code and constantly improving my skills.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-6 text-sm">
              <div>
                <h4 className="text-white font-semibold mb-2">Contact</h4>
                <p className="text-white/80">Email: salmanabid206@gmail.com</p>
                <p className="text-white/80">Phone: +92 336 7687681</p>
                <p className="text-white/80">Location: Lahore, Pakistan</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Education</h4>
                <p className="text-white/80">BS Computer Science — Islamia University of Bahawalpur (2020–2024)</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 flex items-center justify-center">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F96021ce717ed4afeb188a0463989cea6%2F571675fc9e1d4ddb80de6637abcafe35?format=webp&width=800" alt="Salman Abid" className="w-48 h-48 rounded-full object-cover ring-4 ring-[hsl(var(--primary))] bg-white/5 avatar-hover" />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container-section mt-20">
        <h2 className="section-title text-center yellow-underline mx-auto">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {([
            { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "React.js", "Next.js"] },
            { title: "Backend", items: ["Node.js", "Express.js", "REST API", "GraphQL"] },
            { title: "Database", items: ["MongoDB", "MySQL", "Firebase"] },
            { title: "UI/UX Design", items: ["Figma", "Wireframing", "Prototyping"] },
          ] as { title: string; items: string[] }[]).map((group) => (
            <div key={group.title} className="surface p-5">
              <h3 className="font-semibold text-white mb-3">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/85">
                    <span className="h-2 w-2 rounded-full bg-[hsl(var(--primary))]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="container-section mt-20">
        <h2 className="section-title text-center yellow-underline mx-auto">Experience</h2>
        <div className="surface p-6 mt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <p className="text-xs text-white/60 uppercase tracking-wider">Sep 2024 – Nov 2024</p>
              <h3 className="text-xl font-semibold text-white">Front-End Developer @ Social Swirl</h3>
            </div>
            <div className="text-[hsl(var(--primary))] font-semibold">Internship</div>
          </div>
          <ul className="mt-4 space-y-2 text-white/85 list-disc pl-5">
            <li>Developed responsive UI for multiple platforms.</li>
            <li>Integrated REST APIs with React, Node.js, and MongoDB.</li>
            <li>Collaborated with team on real-time projects ensuring timely delivery and high quality.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container-section mt-20">
        <h2 className="section-title text-center yellow-underline mx-auto">Projects</h2>
        <div className="flex items-center justify-center gap-3 mt-6">
          <button onClick={() => setFilter("all")} className={`px-4 py-2 rounded-md border ${
            filter === "all" ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]" : "border-border text-white/80 hover:bg-white/5"
          }`}>All Projects</button>
          <button onClick={() => setFilter("featured")} className={`px-4 py-2 rounded-md border ${
            filter === "featured" ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]" : "border-border text-white/80 hover:bg-white/5"
          }`}>Featured</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filtered.map((p) => (
            <div key={p.title} className="surface project-card p-5 flex flex-col">
              <div className="aspect-[16/9] rounded-lg overflow-hidden border border-border">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.onerror = null;
                    img.src = `https://picsum.photos/seed/${encodeURIComponent(p.title)}/800/600`;
                  }}
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-white">{p.title}</h3>
              <p className="text-white/80 mt-2 flex-1">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 border border-border text-white/80">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <a href={p.github} target="_blank" rel="noreferrer" className="nav-link underline-offset-4 hover:underline">GitHub</a>
                {p.live !== "#" ? (
                  <a href={p.live} target="_blank" rel="noreferrer" className="nav-link underline-offset-4 hover:underline">Live</a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a href="https://github.com/salmanabid00" target="_blank" rel="noreferrer" className="text-[hsl(var(--primary))] font-semibold">View more on GitHub →</a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container-section mt-20">
        <h2 className="section-title text-center yellow-underline mx-auto">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="surface p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Let’s Talk</h3>
            <p className="text-white/80">
              Have a project in mind or just want to say hello? Feel free to reach out via email or phone. I am open to freelance, remote, or full-time opportunities.
            </p>
            <div className="mt-6 space-y-2 text-white/85">
              <p>Email: <a href="mailto:salmanabid206@gmail.com" className="text-[hsl(var(--primary))]">salmanabid206@gmail.com</a></p>
              <p>Phone: <a href="tel:+923367687681" className="text-[hsl(var(--primary))]">+92 336 7687681</a></p>
              <p>Location: Lahore, Pakistan</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

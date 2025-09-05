import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!name || !email || !subject || !message) {
      setStatus({ ok: false, msg: "Please fill all fields." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({ ok: true, msg: "Message sent successfully." });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus({ ok: false, msg: data.error || "Failed to send message." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ ok: false, msg: "Network error. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="surface p-6 grid grid-cols-1 gap-4"
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Name"
        className="w-full rounded-md bg-white/5 border border-border px-3 py-2 outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
        placeholder="Email"
        className="w-full rounded-md bg-white/5 border border-border px-3 py-2 outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
      />
      <input
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
        placeholder="Subject"
        className="w-full rounded-md bg-white/5 border border-border px-3 py-2 outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        placeholder="Message"
        rows={5}
        className="w-full rounded-md bg-white/5 border border-border px-3 py-2 outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
      />

      {status ? (
        <div className={`text-sm ${status.ok ? "text-green-400" : "text-rose-400"}`}>{status.msg}</div>
      ) : null}

      <div>
        <button type="submit" disabled={loading} className="btn-yellow">
          {loading ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}

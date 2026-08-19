import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { Section, SubHead, Tags } from "@/components/Section";
import {
  profile, contact, stats, experience, skills,
  earlierProjects, personalProjects, education, internships, beyondCode, achievements,
} from "@/lib/resume";

const card = "rounded-xl border border-line bg-surface p-5 shadow-sm";

export default function Home() {
  return (
    <>
      <Nav />

      {/* ---------------- HERO ---------------- */}
      <section id="top" className="hero-grid-bg relative py-16 md:py-[70px]">
        <div className="mx-auto grid w-[92vw] max-w-[1080px] items-center gap-9 md:grid-cols-[1.35fr_0.85fr] md:gap-13">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-[0.72rem] font-medium text-ink-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
              </span>
              {profile.status}
            </p>
            <p className="mb-4 font-mono text-[0.76rem] font-medium uppercase tracking-[0.14em] text-accent">
              {profile.title} · {profile.location}
            </p>
            <h1 className="mb-4 text-[clamp(2rem,4.6vw,3.15rem)] font-extrabold leading-[1.12] tracking-[-0.022em]">
              I build backend systems<br className="hidden sm:block" /> that move video at scale.
            </h1>
            <p className="max-w-[56ch] text-[clamp(1rem,1.6vw,1.09rem)] text-ink-2">
              Around <strong className="font-semibold text-ink">two years</strong> at{" "}
              <a href="#experience" className="text-accent hover:underline">Digivive</a>{" "}
              building production services for an OTT streaming platform — a multi-profile{" "}
              <strong className="font-semibold text-ink">video transcoding pipeline</strong> in Java and
              Spring Boot, and a full{" "}
              <strong className="font-semibold text-ink">content management system</strong> in Laravel and
              PostgreSQL.
            </p>

            <div className="my-6 flex flex-wrap gap-3">
              <a href="#experience"
                 className="rounded-lg border border-accent bg-accent px-5 py-2.5 text-[0.94rem] font-semibold text-white transition hover:bg-accent-2">
                See my work
              </a>
            </div>

            <div className="flex gap-4 text-[0.9rem]">
              {[
                { href: contact.github, label: "GitHub" },
                { href: contact.linkedin, label: "LinkedIn" },
                { href: `mailto:${contact.email}`, label: "Email" },
              ].map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                   className="font-medium text-ink-3 transition-colors hover:text-accent">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid justify-items-start gap-5 md:justify-items-center">
            <div className="relative">
              <div className="absolute -inset-2 rounded-[22px] bg-accent/10" aria-hidden="true" />
              <div className="relative aspect-4/5 w-[200px] overflow-hidden rounded-[18px] border border-line bg-surface-2 shadow-lg">
                <Image src={profile.photo} alt={`Portrait of ${profile.name}`}
                       width={346} height={447} priority
                       className="h-full w-full object-cover object-[50%_8%]" />
              </div>
            </div>
            <dl className="grid w-full max-w-[420px] grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface px-3.5 py-3">
                  <dt className="font-mono text-[0.67rem] font-medium uppercase tracking-[0.08em] text-ink-3">{s.label}</dt>
                  <dd className="mt-0.5 text-[1.28rem] font-bold tracking-tight">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ---------------- EXPERIENCE ---------------- */}
      <Section id="experience" title="Experience" sub="What I do day to day, and what I've shipped.">
        {experience.map((job) => (
          <Reveal key={job.company}>
            <article className={card}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-[1.24rem] font-bold tracking-tight">{job.company}</h3>
                  <p className="mt-0.5 text-[0.97rem] font-semibold text-accent">{job.role}</p>
                </div>
                <p className="text-[0.87rem] font-medium text-ink-3 md:text-right">
                  {job.period}<br /><span>{job.location}</span>
                </p>
              </div>
              <p className="mt-4 max-w-[78ch] text-[0.98rem] text-ink-2">{job.scope}</p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {job.work.map((w) => (
                  <div key={w.name} className="rounded-xl border border-line bg-surface-2 p-4">
                    <h4 className="mb-2 text-[1.02rem] font-bold">{w.name}</h4>
                    <Tags items={w.stack} />
                    <ul className="mt-3 space-y-1.5">
                      {w.bullets.map((b) => (
                        <li key={b} className="relative pl-4 text-[0.925rem] text-ink-2
                                               before:absolute before:left-0.5 before:top-[0.62em]
                                               before:h-[5px] before:w-[5px] before:rounded-full before:bg-accent">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}

      </Section>

      {/* ---------------- SKILLS ---------------- */}
      <Section id="skills" title="Technical Skills" sub="Ordered by what I actually reach for most." alt>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={Math.min(i, 5) * 45}>
              <div className={`${card} h-full`}>
                <h3 className="mb-3 font-mono text-[0.72rem] font-medium uppercase tracking-[0.12em] text-ink-3">{g.group}</h3>
                <ul className="flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <li key={s.name}
                        className={`rounded-lg px-2.5 py-1 text-[0.855rem] ${
                          "core" in s && s.core
                            ? "border border-accent bg-accent font-semibold text-white"
                            : "border border-line bg-surface text-ink-2"
                        }`}>
                      {s.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- PROJECTS ---------------- */}
      <Section id="projects" title="Projects" sub="Production work first, earlier builds below.">
        <SubHead>In production · at Digivive</SubHead>
        <div className="grid gap-4 md:grid-cols-2">
          {experience[0].work.map((w, i) => (
            <Reveal key={w.name} delay={i * 45}>
              <article className={`${card} h-full border-l-[3px] border-l-accent`}>
                <span className="mb-2.5 inline-block rounded-full bg-live-soft px-2.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-live">
                  Production
                </span>
                <h4 className="mb-2 text-[1.06rem] font-bold tracking-tight">{w.name}</h4>
                <p className="mb-3.5 text-[0.93rem] text-ink-2">{w.blurb}</p>
                <Tags items={w.stack} />
              </article>
            </Reveal>
          ))}
        </div>

        <SubHead>Also built · in production</SubHead>
        <div className="grid gap-4 md:grid-cols-2">
          {personalProjects.map((p, i) => (
            <Reveal key={p.name} delay={i * 45}>
              <article className={`${card} flex h-full flex-col border-l-[3px] border-l-live`}>
                <div className="mb-2.5 flex items-center gap-2">
                  <span className="inline-block rounded-full bg-live-soft px-2.5 py-0.5 font-mono text-[0.68rem] font-medium uppercase tracking-[0.1em] text-live">
                    Live
                  </span>
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink-3">
                    Backend
                  </span>
                </div>

                <h4 className="text-[1.06rem] font-bold tracking-tight">{p.name}</h4>
                <p className="mb-2.5 font-mono text-[0.76rem] text-accent">{p.tagline}</p>

                <p className="mb-3 text-[0.92rem] text-ink-2">{p.context}</p>

                <p className="mb-3.5 border-l-2 border-line pl-3 text-[0.92rem] text-ink-2">
                  <span className="font-semibold text-ink">My part — </span>
                  {p.contribution}
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-3">
                  <Tags items={p.stack} />
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer"
                       className="font-mono text-[0.78rem] font-medium text-accent hover:underline">
                      Visit →
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <SubHead>Earlier projects</SubHead>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {earlierProjects.map((p, i) => (
            <Reveal key={p.name} delay={i * 45}>
              <article className={`${card} h-full`}>
                <h4 className="mb-2 text-[1.06rem] font-bold tracking-tight">{p.name}</h4>
                <p className="mb-3.5 text-[0.93rem] text-ink-2">{p.blurb}</p>
                <Tags items={p.stack} />
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- EDUCATION ---------------- */}
      <Section id="education" title="Education & Early Experience" alt>
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line">
            {education.map((e) => (
              <div key={e.what} className="grid gap-1.5 bg-surface px-5 py-5 md:grid-cols-[150px_1fr] md:gap-5">
                <div className="pt-0.5 text-[0.85rem] font-semibold text-accent">{e.when}</div>
                <div>
                  <h3 className="text-[1.04rem] font-bold">{e.what} — {e.result}</h3>
                  <p className="mt-0.5 text-[0.93rem] text-ink-2">
                    <a href={e.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{e.where}</a>
                  </p>
                  {"note" in e && e.note && (
                    <p className="mt-1 text-[0.87rem] italic text-ink-3">{e.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <SubHead>Internships</SubHead>
        <div className="grid gap-4 sm:grid-cols-3">
          {internships.map((it, i) => (
            <Reveal key={it.org} delay={i * 45}>
              <article className={`${card} h-full`}>
                <h4 className="mb-1 text-[1.02rem] font-bold">{it.org}</h4>
                <p className="text-[0.93rem] text-ink-2">{it.role}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <SubHead>Achievements &amp; beyond code</SubHead>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <Reveal key={a} delay={i * 45}>
              <article className={`${card} h-full border-l-[3px] border-l-accent`}>
                <p className="text-[0.93rem] text-ink-2">{a}</p>
              </article>
            </Reveal>
          ))}
          {beyondCode.map((b, i) => (
            <Reveal key={b.title} delay={(i + 1) * 45}>
              <article className={`${card} h-full`}>
                <h4 className="mb-1 text-[0.98rem] font-bold">{b.title}</h4>
                <p className="text-[0.9rem] text-ink-2">{b.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- CONTACT ---------------- */}
      <Section id="contact" title="Get in touch"
               sub={`${profile.openTo} ${profile.noticePeriod} notice.`}>
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
            { label: "Phone", value: contact.phone, href: contact.phoneHref },
            { label: "LinkedIn", value: contact.linkedinLabel, href: contact.linkedin },
            { label: "GitHub", value: contact.githubLabel, href: contact.github },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 45}>
              <a href={c.href} target="_blank" rel="noopener noreferrer"
                 className={`${card} grid h-full min-w-0 gap-1 transition hover:border-accent`}>
                <span className="font-mono text-[0.67rem] font-medium uppercase tracking-[0.1em] text-ink-3">{c.label}</span>
                <span className="min-w-0 text-[0.97rem] font-semibold text-ink [overflow-wrap:anywhere]">{c.value}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="mt-auto border-t border-line bg-surface py-6">
        <div className="mx-auto flex w-[92vw] max-w-[1080px] flex-wrap items-center justify-between gap-4">
          <p className="text-[0.88rem] text-ink-3">© {new Date().getFullYear()} {profile.name}</p>
          <p className="flex gap-4 text-[0.88rem]">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="font-medium text-ink-3 hover:text-accent">GitHub</a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium text-ink-3 hover:text-accent">LinkedIn</a>
          </p>
        </div>
      </footer>
    </>
  );
}

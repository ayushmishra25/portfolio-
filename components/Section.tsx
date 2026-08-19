import Reveal from "./Reveal";

export function Section({
  id, title, sub, alt = false, children,
}: { id: string; title: string; sub?: string; alt?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={`border-t border-line py-16 ${alt ? "bg-surface-2" : ""}`}>
      <div className="mx-auto w-[92vw] max-w-[1080px]">
        <Reveal>
          <div className="mb-8">
            <h2 className="relative pl-4 text-[clamp(1.5rem,2.7vw,1.95rem)] font-extrabold tracking-tight before:absolute before:left-0 before:top-[0.18em] before:h-[0.78em] before:w-[3px] before:rounded-full before:bg-accent">{title}</h2>
            {sub && <p className="mt-1.5 pl-4 text-[0.98rem] text-ink-3">{sub}</p>}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function SubHead({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 mt-9 font-mono text-[0.72rem] font-medium uppercase tracking-[0.12em] text-ink-3 first:mt-0">
      {children}
    </h3>
  );
}

export function Tags({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <li key={t} className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[0.7rem] font-medium text-accent">
          {t}
        </li>
      ))}
    </ul>
  );
}

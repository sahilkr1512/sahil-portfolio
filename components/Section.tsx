import Reveal from "./Reveal";

export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} data-character-section="true" className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-16">
      <Reveal>
        <div className="section-shell">
          <div className="section-kicker">{title}</div>
          <h2 className="section-title">{title}</h2>
          {children}
        </div>
      </Reveal>
    </section>
  );
}

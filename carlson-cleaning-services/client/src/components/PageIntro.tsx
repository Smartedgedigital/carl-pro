// Reference-fidelity design system: left-aligned editorial page intros with a saffron rule and visible next action.

import { ReactNode } from "react";

export default function PageIntro({ eyebrow, title, description, children }: { eyebrow: string; title: ReactNode; description: string; children?: ReactNode }) {
  return (
    <section className="page-intro">
      <div className="page-intro__line" />
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-intro__description">{description}</p>
      {children ? <div className="page-intro__actions">{children}</div> : null}
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow?: string; title: ReactNode; description?: string; align?: "left" | "right" }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

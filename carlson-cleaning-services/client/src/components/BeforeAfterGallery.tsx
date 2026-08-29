// Reference-fidelity design system: evidence-led before-and-after storytelling, navy captions, saffron markers, and no invented customer claims.

import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { beforeAfterFloorImage, beforeAfterUpholsteryImage } from "@/lib/site";

type BeforeAfterItem = { image: string; title: string; description: string; label: string };

const items: BeforeAfterItem[] = [
  { image: beforeAfterUpholsteryImage, title: "Upholstery reset", description: "Fabric and leather sofa or armchair cleaning with methods matched to the material and its condition.", label: "Sofa & upholstery" },
  { image: beforeAfterFloorImage, title: "Floors brought back", description: "Terrazzo, tile, wooden and concrete floors cleaned and finished appropriately for the surface.", label: "Tile & floor cleaning" },
];

export default function BeforeAfterGallery() {
  return <section className="before-after-section"><div className="section-topline"><span className="eyebrow eyebrow--light">See the difference</span><span>Before / After</span></div><div className="before-after-heading"><div><h2>Proof lives in the <em>finish.</em></h2><p>Every space starts in a different condition. These examples show the kind of detail our specialist cleaning is designed to address.</p></div><Link className="button button--outline-light" href="/contact">Ask about your space <ArrowRight size={17} /></Link></div><div className="before-after-grid">{items.map((item) => <article className="before-after-card" key={item.title}><div className="before-after-card__image"><img src={item.image} alt={`${item.title} before and after cleaning`} /><div className="before-after-card__labels"><span>Before</span><span>After</span></div></div><div className="before-after-card__copy"><p className="eyebrow eyebrow--light">{item.label}</p><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div></section>;
}

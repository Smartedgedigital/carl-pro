// Reference-fidelity design system: practical service rows, numbered service taxonomy, and navy/saffron conversion surfaces.

import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Service, serviceWhatsappLink, services } from "@/lib/site";

export function ServiceRow({ service, index, showLink = false }: { service: Service; index: number; showLink?: boolean }) {
  return (
    <article className="service-row">
      <span className="service-row__number">{String(index + 1).padStart(2, "0")}</span>
      <div className="service-row__copy">
        <div className="service-row__meta"><span>{service.group}</span><span className="service-row__dot" /></div>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
      </div>
      {showLink ? <a className="service-row__link" href={serviceWhatsappLink(service.name)} target="_blank" rel="noreferrer" aria-label={`Ask about ${service.name}`}>Ask about this service <ArrowRight size={17} /></a> : null}
    </article>
  );
}

export function ServiceList({ limit, grouped = false, showLink = false }: { limit?: number; grouped?: boolean; showLink?: boolean }) {
  if (grouped) {
    return <div className="service-groups">
      {(["Residential", "Commercial", "Specialist"] as const).map((group) => (
        <div className="service-group" key={group}>
          <div className="service-group__heading"><span className="eyebrow">{group} cleaning</span><span>{services.filter((service) => service.group === group).length} services</span></div>
          <div>{services.filter((service) => service.group === group).map((service) => <ServiceRow key={service.name} service={service} index={services.indexOf(service)} showLink={showLink} />)}</div>
        </div>
      ))}
    </div>;
  }

  const visibleServices = limit ? services.slice(0, limit) : services;
  return <div className="service-list">{visibleServices.map((service) => <ServiceRow key={service.name} service={service} index={services.indexOf(service)} />)}</div>;
}

export function ConversionBand({ title, description, primaryLabel = "Request a quote", secondaryLabel = "Check your area" }: { title: string; description: string; primaryLabel?: string; secondaryLabel?: string }) {
  return (
    <section className="conversion-band">
      <div className="conversion-band__accent"><Sparkles size={18} /></div>
      <div>
        <p className="eyebrow eyebrow--light">Ready when you are</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="conversion-band__actions">
        <a className="button button--saffron" href="https://wa.me/233554878672?text=Hello%20Carlson%20Cleaning%20Services%2C%20I%20would%20like%20a%20cleaning%20quote." target="_blank" rel="noreferrer">{primaryLabel} <ArrowRight size={17} /></a>
        <Link className="button button--outline-light" href="/service-areas">{secondaryLabel}</Link>
      </div>
    </section>
  );
}

export function Checklist({ items }: { items: string[] }) {
  return <ul className="checklist">{items.map((item) => <li key={item}><span><Check size={14} /></span>{item}</li>)}</ul>;
}

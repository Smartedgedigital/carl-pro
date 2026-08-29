// Reference-fidelity design system: conversion-first contact page with clean form controls, direct WhatsApp handoff, and Accra location rail.

import { FormEvent, useState } from "react";
import { ArrowRight, Check, Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import SiteFooter, { LocationPanel } from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import PageIntro from "@/components/PageIntro";
import { DIRECTIONS_URL, PRIMARY_PHONE, SECONDARY_PHONE, services, whatsappLink } from "@/lib/site";

export default function Contact() {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [service, setService] = useState(services[0].name);
  const [details, setDetails] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Hello Carlson Cleaning Services, my name is ${name || "a customer"}. I am in ${area || "Accra"} and need ${service}. ${details || "Please let me know availability and pricing."}`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return <div className="site-shell"><SiteHeader /><main id="main-content">
    <div className="container"><PageIntro eyebrow="Contact" title={<>Request a cleaning <em>quote.</em></>} description="Reach us by phone or WhatsApp, or fill in the short form below and it will open WhatsApp with your details ready to send." /></div>
    <section className="section section--contact"><div className="container contact-grid"><div className="quote-form-wrap"><div className="section-topline"><span className="eyebrow">Tell us about the job</span><span>Reply in WhatsApp</span></div><form className="quote-form" onSubmit={handleSubmit}><label htmlFor="name">Your name<input id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="e.g. Ama Mensah" /></label><label htmlFor="area">Area in Accra<input id="area" name="area" value={area} onChange={(event) => setArea(event.target.value)} placeholder="e.g. East Legon" /></label><label htmlFor="service">Service needed<select id="service" name="service" value={service} onChange={(event) => setService(event.target.value)}>{services.map((item) => <option key={item.name} value={item.name}>{item.name}</option>)}</select></label><label htmlFor="details">Details<textarea id="details" name="details" value={details} onChange={(event) => setDetails(event.target.value)} placeholder="Tell us about the space, its condition and when you need it." rows={5} /></label><button className="button button--whatsapp" type="submit"><MessageCircle size={17} /> Send on WhatsApp <ArrowRight size={17} /></button><p className="form-note"><Check size={15} /> This form does not store anything on this website — it simply opens WhatsApp with your message so you can review and send it.</p></form></div><aside className="contact-rail"><div className="contact-rail__heading"><p className="eyebrow eyebrow--light">Direct contact</p><h2>Let’s talk about what the space needs.</h2></div><div className="contact-rail__numbers"><a href="tel:+233554878672"><span>Primary</span><strong>{PRIMARY_PHONE}</strong></a><a href="tel:+233538125410"><span>Secondary</span><strong>{SECONDARY_PHONE}</strong></a></div><div className="contact-rail__links"><a href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp {PRIMARY_PHONE}</a><a href={whatsappLink().replace("233554878672", "233538125410")} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp {SECONDARY_PHONE}</a></div><div className="contact-rail__hours"><Clock3 size={18} /><div><strong>Open 24 hours</strong><span>Service appointments are subject to availability and scheduling.</span></div></div><div className="contact-rail__address"><MapPin size={18} /><span>Martino Residence<br />Accra, Greater Accra, Ghana</span></div><a className="contact-rail__map" href={DIRECTIONS_URL} target="_blank" rel="noreferrer">Get directions <ArrowRight size={17} /></a></aside></div></section>
  </main><SiteFooter /></div>;
}

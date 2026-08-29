// Reference-fidelity design system: service taxonomy as an editorial field guide with clear scope-led descriptions and direct WhatsApp actions.

import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import SiteFooter from "@/components/SiteFooter";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import SiteHeader from "@/components/SiteHeader";
import PageIntro from "@/components/PageIntro";
import { ConversionBand, ServiceList } from "@/components/ServiceBlocks";
import { whatsappLink } from "@/lib/site";

export default function Services() {
  return <div className="site-shell"><SiteHeader /><main id="main-content">
    <div className="container"><PageIntro eyebrow="Services" title={<>15 cleaning services for homes and businesses <em>in Accra.</em></>} description="Every job starts with a short conversation about the space and its condition. We then confirm the scope, the timing and the price before any cleaning begins."><a className="button button--whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Get a quote on WhatsApp</a><a className="button button--outline-navy" href="tel:+233554878672">+233 55 487 8672</a></PageIntro></div>
    <section className="section section--service-directory"><div className="container"><ServiceList grouped showLink /></div></section>
    <div className="container"><BeforeAfterGallery /></div>
    <div className="container"><ConversionBand title="Not sure which service you need?" description="Describe the space — how large it is, what state it is in, and when you need it done. We will recommend the right service and confirm the price." primaryLabel="Contact Carlson" secondaryLabel="See areas we cover" /></div>
  </main><SiteFooter /></div>;
}

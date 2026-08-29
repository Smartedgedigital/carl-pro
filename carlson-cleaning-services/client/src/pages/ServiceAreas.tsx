// Reference-fidelity design system: geographic field guide layout, navy location card, saffron markers, and clear three-step booking flow.

import { ArrowRight, Check, MapPin, Navigation, Route } from "lucide-react";
import { Link } from "wouter";
import SiteFooter, { LocationPanel } from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import PageIntro from "@/components/PageIntro";
import { ConversionBand } from "@/components/ServiceBlocks";
import { DIRECTIONS_URL, serviceAreas, whatsappLink } from "@/lib/site";

export default function ServiceAreas() {
  return <div className="site-shell"><SiteHeader /><main id="main-content">
    <div className="container"><PageIntro eyebrow="Service areas" title={<>Cleaning across Accra and <em>surrounding areas.</em></>} description="We are based at Martino Residence, Accra, Ghana and travel to homes and businesses throughout Greater Accra. Availability for a specific date and neighbourhood is confirmed when you book."><a className="button button--whatsapp" href={whatsappLink("Hello Carlson Cleaning Services, do you cover my area in Accra? I need a cleaning quote.")} target="_blank" rel="noreferrer">Ask about your area <ArrowRight size={17} /></a><a className="button button--outline-navy" href={DIRECTIONS_URL} target="_blank" rel="noreferrer">Get directions</a></PageIntro></div>

    <section className="section section--areas"><div className="container areas-grid"><div className="areas-list"><p className="eyebrow">Communities we regularly serve</p><p className="areas-list__intro">If your area is not listed, ask anyway — we often cover neighbouring communities in Greater Accra.</p><div className="area-tags">{serviceAreas.map((area, index) => <span key={area}><b>{String(index + 1).padStart(2, "0")}</b>{area}</span>)}</div><p className="areas-list__note">Travel outside these areas may affect scheduling and pricing. We will always tell you before confirming a booking.</p></div><LocationPanel /></div></section>

    <section className="section section--booking"><div className="container"><div className="booking-heading"><p className="eyebrow">Booking in your area</p><h2>Three simple steps to a cleaner space.</h2></div><div className="booking-steps"><article><span className="booking-steps__icon"><MapPin size={21} /></span><b>01</b><h3>Tell us where</h3><p>Send your location, the type of space and the cleaning you need.</p></article><article><span className="booking-steps__icon"><Route size={21} /></span><b>02</b><h3>We confirm the plan</h3><p>We confirm availability, the scope of work and the price.</p></article><article><span className="booking-steps__icon"><Check size={21} /></span><b>03</b><h3>We arrive ready</h3><p>Our team arrives at the agreed time with the right equipment.</p></article></div></div></section>

    <div className="container"><ConversionBand title="Does Carlson cover your neighbourhood?" description="Send your area and the type of cleaning you need. We will confirm availability and next steps." primaryLabel="Start your booking" secondaryLabel="View our services" /></div>
  </main><SiteFooter /></div>;
}

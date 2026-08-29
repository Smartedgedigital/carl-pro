// Reference-fidelity design system: deep navy hero, Carlson saffron emphasis, left-aligned editorial hierarchy, and service-first conversion paths.

import { ArrowDownRight, ArrowRight, Check, Clock3, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import SiteFooter from "@/components/SiteFooter";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import SiteHeader from "@/components/SiteHeader";
import { ConversionBand, ServiceList } from "@/components/ServiceBlocks";
import { SectionHeading } from "@/components/PageIntro";
import { commercialImage, heroImage, MAP_SEARCH_URL, PRIMARY_PHONE, upholsteryImage, whatsappLink } from "@/lib/site";

const reasons = [
  { icon: ShieldCheck, title: "Trained cleaning teams", copy: "Every job is handled by briefed cleaners who know the scope agreed with you before they arrive." },
  { icon: Clock3, title: "Scheduling around you", copy: "Open 24 hours for enquiries. Service appointments are subject to availability and scheduling." },
  { icon: Sparkles, title: "Careful with your space", copy: "Methods matched to the surface — fabric, leather, tile, terrazzo, wood or glass." },
  { icon: MapPin, title: "Accra and nearby", copy: "Accra and surrounding areas, from East Legon and Spintex to Adenta and Pokuase." },
];

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content">
        <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(5, 18, 53, .97) 0%, rgba(10, 34, 86, .88) 48%, rgba(7, 23, 57, .52) 100%), url(${heroImage})` }}>
          <div className="container hero__inner">
            <div className="hero__copy reveal-up">
              <p className="eyebrow eyebrow--light"><Sparkles size={14} /> House cleaning service · Accra</p>
              <h1>Professional cleaning across Accra. <em>We clean, you relax.</em></h1>
              <p className="hero__description">Homes, offices and commercial premises cleaned properly — routine cleaning, deep cleaning, upholstery and carpets, windows and glass, post-construction clean-ups and fumigation.</p>
              <div className="hero__actions">
                <a className="button button--whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp for a Quote</a>
                <a className="button button--saffron" href="tel:+233554878672"><Phone size={17} /> Call {PRIMARY_PHONE}</a>
              </div>
              <div className="hero__stats" aria-label="Business highlights">
                <div><span>Services</span><strong>15+</strong></div>
                <div><span>Enquiries</span><strong>Open 24 hours</strong></div>
                <div><span>Based in</span><strong>Accra</strong></div>
              </div>
            </div>
            <a className="hero__scroll" href="#why-carlson"><span>Scroll to explore</span><ArrowDownRight size={19} /></a>
          </div>
        </section>

        <section className="section section--reasons" id="why-carlson">
          <div className="container">
            <div className="section-topline"><span className="eyebrow">The Carlson standard</span><span>01 / 04</span></div>
            <SectionHeading title="Why customers choose Carlson" description="A straightforward process, careful teams and cleaning methods matched to the space in front of us." />
            <div className="reason-grid">
              {reasons.map(({ icon: Icon, title, copy }, index) => (
                <article className="reason-card" key={title}>
                  <span className="reason-card__index">0{index + 1}</span>
                  <Icon className="reason-card__icon" size={25} strokeWidth={1.6} />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--services">
          <div className="container">
            <div className="services-intro">
              <SectionHeading eyebrow="What we do" title={<>Cleaning services <em>in Accra</em></>} description="Tell us the space and the condition it is in, and we will confirm the scope and price before any work begins." />
              <Link className="text-link" href="/services">See all services <ArrowRight size={17} /></Link>
            </div>
            <ServiceList limit={6} />
          </div>
        </section>

        <section className="section section--detail">
          <div className="container detail-grid">
            <div className="detail-image-wrap">
              <img src={upholsteryImage} alt="Cleaner treating an upholstered armchair" className="detail-image" />
              <div className="image-note"><span>01</span><span>Detail work, not a quick wipe</span></div>
            </div>
            <div className="detail-copy">
              <p className="eyebrow">Material-aware cleaning</p>
              <h2>Careful work shows in the details.</h2>
              <p>From sofas and dining chairs to carpets, tiles and building facades, we bring the right equipment and cleaning agents for the material in front of us. Fabric and leather are treated differently, grout gets its own attention, and glass is finished streak-free.</p>
              <ul className="checklist">
                <li><span><Check size={14} /></span>Scope and price agreed before we start</li>
                <li><span><Check size={14} /></span>Preparation and re-entry guidance for fumigation jobs</li>
                <li><span><Check size={14} /></span>Post-construction dust, residue and debris cleared</li>
              </ul>
              <div className="detail-copy__actions"><Link className="button button--navy" href="/contact">Request a quote <ArrowRight size={17} /></Link><Link className="text-link" href="/service-areas">Check your area <ArrowRight size={16} /></Link></div>
            </div>
          </div>
        </section>

        <div className="container"><BeforeAfterGallery /></div>

        <section className="section section--proof">
          <div className="container proof-grid">
            <div className="proof-copy">
              <p className="eyebrow">Local and easy to find</p>
              <h2>Find Carlson Cleaning Services on Google.</h2>
              <p>Carlson Cleaning Services has a verified Google Business Profile listed as a house cleaning service in Accra. You can see our location, opening hours and customer reviews directly on Google — reviews there are written by real customers and are not reproduced on this website.</p>
              <p className="proof-note">5.0 from 6 Google reviews as displayed on our Google Business Profile in August 2026. Ratings change as new reviews arrive — please check Google for the current figure.</p>
              <div className="proof-copy__actions"><a className="button button--navy" href={MAP_SEARCH_URL} target="_blank" rel="noreferrer">Open our Google listing <ArrowRight size={17} /></a><a className="text-link" href={MAP_SEARCH_URL} target="_blank" rel="noreferrer">Read or leave a Google review <ArrowRight size={16} /></a></div>
            </div>
            <div className="map-card">
              <div className="map-card__surface">
                <div className="map-grid-lines" />
                <div className="map-road map-road--one" /><div className="map-road map-road--two" /><div className="map-road map-road--three" />
                <div className="map-pin"><MapPin size={21} fill="currentColor" /></div>
                <span className="map-label map-label--one">East Legon</span><span className="map-label map-label--two">Accra</span><span className="map-label map-label--three">Martino Residence</span>
              </div>
              <div className="map-card__caption"><div><strong>Carlson Cleaning Services</strong><span>Martino Residence, Accra, Ghana</span></div><a href={MAP_SEARCH_URL} target="_blank" rel="noreferrer" aria-label="View Carlson Cleaning Services on Google Maps"><ArrowUpRightIcon /></a></div>
            </div>
          </div>
        </section>

        <section className="section section--commercial">
          <div className="container commercial-grid">
            <div className="commercial-copy"><span className="eyebrow eyebrow--light">For business spaces</span><h2>A clean workspace changes the way a place feels.</h2><p>We schedule around your working hours and bring a practical plan for offices, shops, guest houses, clinics and other commercial premises.</p><Link className="button button--saffron" href="/services">Explore commercial cleaning <ArrowRight size={17} /></Link></div>
            <img src={commercialImage} alt="Cleaner polishing glass in a contemporary office" />
          </div>
        </section>

        <div className="container"><ConversionBand title="Ready for a cleaner space?" description="Send us the location, the kind of space and what it needs. We will take it from there." primaryLabel="Start on WhatsApp" secondaryLabel="See where we work" /></div>
      </main>
      <SiteFooter />
    </div>
  );
}

function ArrowUpRightIcon() {
  return <ArrowRight size={19} />;
}

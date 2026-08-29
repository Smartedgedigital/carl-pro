// Reference-fidelity design system: navy footer, compact practical link columns, saffron rule, and human contact details.

import { ArrowUpRight, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import { DIRECTIONS_URL, FACEBOOK_URL, INSTAGRAM_URL, MAP_SEARCH_URL, markImage, PRIMARY_PHONE, SECONDARY_PHONE, whatsappLink } from "@/lib/site";

export function LocationPanel({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`location-panel ${compact ? "location-panel--compact" : ""}`}>
      <div className="location-panel__topline"><MapPin size={17} /> <span>Find us in Accra</span></div>
      <h3>Carlson Cleaning Services</h3>
      <p>Martino Residence<br />Accra, Ghana</p>
      <div className="location-panel__actions">
        <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer">Get Directions <ArrowUpRight size={15} /></a>
        <a href={MAP_SEARCH_URL} target="_blank" rel="noreferrer">View on Google Maps <ArrowUpRight size={15} /></a>
      </div>
      <small>Open 24 hours<br />Service appointments are subject to availability and scheduling.</small>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__main">
        <div className="site-footer__brand">
          <Link href="/" className="brand brand--footer" aria-label="Carlson Cleaning Services home">
            <img src={markImage} alt="Carlson Cleaning Services" className="brand__official-logo" />
          </Link>
          <p>We clean, you relax.</p>
          <span className="footer-kicker">House Cleaning Service serving Accra and surrounding areas.</span>
          <div className="social-links">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Carlson Cleaning Services on Instagram"><Instagram size={18} /></a>
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Carlson Cleaning Services on Facebook"><Facebook size={18} /></a>
          </div>
        </div>

        <div className="site-footer__column">
          <span className="footer-heading">Explore</span>
          <Link href="/services">Services</Link>
          <Link href="/about">About Carlson</Link>
          <Link href="/service-areas">Service Areas</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
        </div>

        <div className="site-footer__column">
          <span className="footer-heading">Talk to us</span>
          <a href="tel:+233554878672"><Phone size={15} />{PRIMARY_PHONE}</a>
          <a href="tel:+233538125410"><Phone size={15} />{SECONDARY_PHONE}</a>
          <a href={whatsappLink()} target="_blank" rel="noreferrer">WhatsApp {PRIMARY_PHONE}</a>
          <a href={whatsappLink().replace("233554878672", "233538125410")} target="_blank" rel="noreferrer">WhatsApp {SECONDARY_PHONE}</a>
        </div>

        <LocationPanel compact />
      </div>
      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} Carlson Cleaning Services</span>
        <span>Accra, Ghana</span>
      </div>
    </footer>
  );
}

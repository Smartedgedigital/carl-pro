// Reference-fidelity design system: white utility header, navy wordmark, saffron active details, and direct local-service CTAs.

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, Phone, X } from "lucide-react";
import { markImage, PRIMARY_PHONE, whatsappLink } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Carlson Cleaning Services home">
            <img src={markImage} alt="Carlson Cleaning Services" className="brand__official-logo" />
          </Link>

          <nav className={`site-nav ${open ? "site-nav--open" : ""}`} aria-label="Primary navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={location === link.href ? "is-active" : ""}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-phone" href="tel:+233554878672"><Phone size={15} /> <span>{PRIMARY_PHONE}</span></a>
            <a className="button button--saffron button--small" href={whatsappLink()} target="_blank" rel="noreferrer">Get a Quote</a>
          </div>

          <button className="menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
    </>
  );
}

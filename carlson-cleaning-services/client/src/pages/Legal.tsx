// Reference-fidelity design system: quiet legal reading layout with the same editorial typography, spacing, and footer navigation as the public pages.

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import PageIntro from "@/components/PageIntro";

export function PrivacyPolicy() {
  return <LegalLayout eyebrow="Privacy policy" title="A clear, simple approach to your information."><p>This website does not collect or store quote requests. When you use the quote form, it prepares a message and opens WhatsApp so you can review it before choosing whether to send it.</p><h2>Information you choose to share</h2><p>If you contact Carlson Cleaning Services by phone or WhatsApp, the details you provide are handled through those services so we can respond to your enquiry. We do not sell your personal information.</p><h2>Third-party services</h2><p>Links to WhatsApp, Google Maps, Instagram and Facebook take you to external services with their own privacy practices. Please review their policies when you use those services.</p><h2>Questions</h2><p>For questions about this policy, contact Carlson Cleaning Services on +233 55 487 8672.</p></LegalLayout>;
}

export function TermsAndConditions() {
  return <LegalLayout eyebrow="Terms & conditions" title="Clear expectations before every booking."><p>By requesting a cleaning service, you agree that the scope, timing, availability and price will be confirmed with Carlson Cleaning Services before work begins.</p><h2>Bookings and availability</h2><p>Opening hours for enquiries are 24 hours. Service appointments are subject to availability and scheduling. Travel outside our regular service areas may affect scheduling and pricing.</p><h2>Scope of work</h2><p>We agree the cleaning requirements with you in advance. If the condition of a space or a material requires a different method, we will explain the adjustment before proceeding.</p><h2>Fumigation and specialist work</h2><p>Where a service requires preparation or re-entry guidance, those instructions will be confirmed before the visit. Please follow all safety instructions provided by the team.</p><h2>Contact</h2><p>Questions about a booking can be discussed on WhatsApp or by phone at +233 55 487 8672.</p></LegalLayout>;
}

function LegalLayout({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <div className="site-shell"><SiteHeader /><main id="main-content"><div className="container"><PageIntro eyebrow={eyebrow} title={title} description="Information for visitors and customers of Carlson Cleaning Services." /><article className="legal-copy">{children}</article></div></main><SiteFooter /></div>;
}

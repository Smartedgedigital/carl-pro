# Carlson Cleaning Services Ghana — Rebuild Design Specification

## Ground-truth reference

This project recreates the user-provided Carlson Cleaning Services website. Fidelity to the supplied reference is the primary design constraint. The rebuilt site should preserve the existing information architecture, service content, Accra-focused positioning, contact flows, and recognizable visual language while being implemented as clean standalone code.

The reference includes these public routes: `/`, `/about`, `/services`, `/service-areas`, `/contact`, `/privacy-policy`, and `/terms-and-conditions`. The primary conversion actions are WhatsApp quote requests, phone calls, Google Maps listing access, and directions. The contact form composes a WhatsApp message rather than storing submissions.

The rebuild must remove all third-party builder material, including visible editor badges, project links, builder asset paths, builder metadata, and any platform-specific tracking or branding. No public-facing copy should mention the original builder.

## Chosen direction: Reference fidelity with polished local-service editorial design

### Design Movement
Contemporary service-brand editorial design with a restrained Swiss grid, premium hospitality cues, and a Ghanaian urban service context. The visual language is confident and practical rather than ornamental: deep navy, warm saffron, generous white space, crisp typography, and photographic evidence of careful work.

### Core Principles
1. Preserve the reference hierarchy and content so returning visitors recognize the business immediately.
2. Use an intentional asymmetrical composition: strong left-aligned headlines, offset content blocks, and visual anchors rather than repetitive centered cards.
3. Make trust and action visible at every stage through clear phone, WhatsApp, hours, location, and scope-before-price messaging.
4. Keep every interaction fast, understandable, and mobile-friendly.

### Color Philosophy
Deep navy communicates dependability, cleanliness, and professional control; warm saffron signals energy and human service; white and pale blue-grey give the interface a fresh, hygienic atmosphere. Saffron should be used as the ownable accent for emphasis, active states, and primary conversion moments rather than as a decorative gradient.

### Layout Paradigm
A wide, editorial layout with a compact navigation bar, deep full-bleed hero band, asymmetric text measures, and alternating split sections. Pages should use controlled max-widths but avoid a single centered stack. Service groups should feel like an organized field guide with numbered or tagged rows, not a generic card wall.

### Signature Elements
- A saffron “cleaning detail” rule and small uppercase eyebrow labels that echo the reference’s operational clarity.
- Navy panels with thin low-contrast lines and soft image overlays for trust-building sections.
- Rounded-but-not-pill action buttons: green WhatsApp for direct messaging and saffron for phone/call actions.

### Interaction Philosophy
Interactions should reduce hesitation. Navigation exposes the next relevant page, quote CTAs open WhatsApp with a prefilled message, phone links call directly, and the contact form lets the visitor review the message before sending. Hover states should lift buttons and reveal intent without theatrical effects. The mobile menu must be keyboard accessible and close after navigation.

### Animation
Use short, purposeful motion: 180–240ms ease-out for button hover/press, a gentle 500ms hero content reveal, and 30–60ms staggered entrances for service rows when motion is available. Never animate layout dimensions or rely on motion to convey meaning. Respect `prefers-reduced-motion` by disabling non-essential reveals.

### Typography System
Use `DM Sans` for the body and utility text because it is open, legible, and practical; pair it with `Manrope` for display headlines and brand statements to create a more deliberate editorial voice. Headlines are tight, bold, and left-aligned. Eyebrows and tags are uppercase with increased tracking. Body copy stays at a comfortable reading measure with generous line height.

### Brand Essence
Carlson Cleaning Services is the dependable Accra cleaning partner for homes, offices, and commercial spaces that want the job handled properly, with scope and price agreed before work begins. Personality: **dependable, careful, direct**.

### Brand Voice
Headlines are confident and concrete. CTAs are action-first and human. Microcopy explains what happens next without promising more than the business can deliver.

Example lines:
- “Professional cleaning across Accra. We clean, you relax.”
- “Tell us the space and the condition it is in. We will confirm the scope and price before any work begins.”

### Wordmark & Logo
Use the user-provided official Carlson Cleaning Services logo artwork, displayed clearly in the header, footer, and favicon. Preserve the supplied crest, cleaning tools, blue wordmark, and saffron arc exactly rather than approximating it with a generated symbol.

### Signature Brand Color
**Carlson Saffron — `#F5BE24`**, used for emphasized headline fragments, active navigation details, key labels, and phone-call actions.

## Implementation reminders

Every authored CSS, component, and page file should begin with a short comment identifying this reference-fidelity design system. Use generated visual assets only for prominent hero/support imagery and keep imagery distinct by section. The homepage and Services page now include an evidence-led before-and-after gallery for upholstery and floor cleaning, with captions and labels rendered in code rather than invented customer claims. All assets must be referenced from managed asset URLs; no local image files should be placed inside the project. The final code must be suitable for GitHub and Netlify, with client-side route fallback handled for direct page visits.

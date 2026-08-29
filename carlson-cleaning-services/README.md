# Carlson Cleaning Services Ghana

A clean, standalone React website for Carlson Cleaning Services in Accra, Ghana. This project recreates the supplied service website’s information architecture and conversion flows without third-party builder branding or platform-specific overlays.

## What is included

The site includes the home page and the `/about`, `/services`, `/service-areas`, `/contact`, `/privacy-policy`, and `/terms-and-conditions` routes. WhatsApp buttons open pre-filled messages, phone links use the device dialer, Google listing and directions links open Google Maps, and the quote form hands the visitor’s details to WhatsApp without storing them on the site.

## Local development

```bash
pnpm install
pnpm dev
```

The project is a React 19 + Vite + Tailwind 4 frontend using the supplied static web scaffold. The production build is generated with:

```bash
pnpm build
```

## Netlify deployment

Push the repository to GitHub, then create a new Netlify site from that repository. The included `netlify.toml` already sets the build command to `pnpm build`, the publish directory to `dist/public`, and the SPA fallback needed for direct visits to inner routes. No third-party builder account, project badge, or runtime is required.

## Brand and contact details

The current public contact actions point to Carlson Cleaning Services’ supplied numbers: +233 55 487 8672 and +233 53 812 5410. The site references Martino Residence, Accra, Ghana and the supplied Instagram, Facebook, and Google Maps destinations. Update `client/src/lib/site.ts` if those business details change.

## Asset handling

Large visual assets are referenced from managed project storage URLs in `client/src/lib/site.ts`, rather than being bundled inside `client/public`. The `client/public` directory contains only small web configuration files such as `_redirects`.

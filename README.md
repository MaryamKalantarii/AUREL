# AUREL — Objects of Light.

<p align="center">
  <img src="public/images/hero-ring.png" alt="AUREL — Objects of Light" width="100%" />
</p>

<h3 align="center">A Digital Experience for a Modern Luxury Jewelry House</h3>

<p align="center">
  AUREL is a cinematic luxury jewelry e-commerce experience where sculptural design, light, motion, and modern web technology come together.
</p>

<p align="center">
  <a href="https://aurel-z71t.onrender.com">Live Demo</a>
  ·
  <a href="https://github.com/mhidusti/AUREL">Repository</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.5.0-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-149ECA?style=flat-square&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-Enabled-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Deployment-Render-46E3B7?style=flat-square&logo=render&logoColor=black" alt="Render" />
</p>

---

## Overview

**AUREL — Objects of Light.** is a fictional luxury jewelry brand and a modern e-commerce web experience designed around the relationship between precious materials, sculptural forms, light, and digital storytelling.

Rather than following the conventions of a traditional online jewelry store, AUREL approaches commerce as an editorial experience. Cinematic imagery, restrained typography, immersive compositions, and carefully orchestrated motion create a digital environment inspired by contemporary luxury, architectural minimalism, and high-fashion art direction.

The project combines a premium visual identity with a multi-page storefront, product discovery, shopping flows, and account-related interfaces.

**Live Website:** https://aurel-z71t.onrender.com

## Design Philosophy

AUREL is built around a simple principle:

> Objects of light. Designed to be experienced.

The visual direction emphasizes:

- **Quiet luxury** — refined typography, restrained colors, and intentional negative space.
- **Sculptural minimalism** — jewelry presented as an object of design rather than a conventional product listing.
- **Cinematic art direction** — dark architectural environments, atmospheric lighting, and material-focused imagery.
- **Motion with purpose** — animation and transitions designed to support storytelling and navigation.
- **Editorial composition** — oversized typography, asymmetric layouts, and a strong visual hierarchy.
- **Digital craftsmanship** — attention to detail across page layouts, interactions, responsive behavior, and reusable components.

### Visual Identity

| Element | Direction |
| --- | --- |
| Brand | AUREL |
| Tagline | OBJECTS OF LIGHT. |
| Primary palette | Pearl, Soft Stone, Silver, Graphite, Black |
| Art direction | Contemporary luxury × digital art × editorial design |
| Experience | Cinematic, immersive, minimal, and refined |

## Features

### Shopping Experience

- Luxury-inspired homepage and brand introduction
- Collection discovery and product browsing
- Individual product detail pages
- Dynamic product routes using slugs
- Product imagery and editorial brand storytelling
- Shopping cart interface
- Checkout interface
- Customer account and profile pages
- Order history and individual order detail routes
- Login and registration interfaces
- Dedicated contact page

### Motion & Interaction

- Animated visual compositions
- Scroll-driven storytelling and transitions
- Interactive interface elements
- Motion-enhanced product and editorial sections
- Carefully considered hover and navigation states
- Responsive layouts for desktop and mobile screens

### Engineering

- Component-based React architecture
- TypeScript for static type checking
- Next.js App Router
- Dynamic route handling
- Reusable UI components
- Centralized product data
- Production build validation
- Deployment through Render

> Note: Feature availability depends on the current implementation. Backend integrations, payment processing, persistent cart storage, authentication providers, and transactional email should be considered separate capabilities unless explicitly configured.

## Technology Stack

| Technology | Purpose |
| --- | --- |
| Next.js 15 | React framework, routing, and production rendering |
| React 19 | Component-based user interface |
| TypeScript | Type safety and maintainable application code |
| Tailwind CSS 4 | Utility-first styling |
| CSS | Custom visual styling and animations |
| Framer Motion | Motion and interactive transitions |
| GSAP | Advanced animation and scroll-based effects |
| React Three Fiber | React-based 3D rendering |
| Drei | Helpers and abstractions for React Three Fiber |
| Lucide React | Interface icons |
| ESLint | Code quality and linting |
| Render | Hosting and deployment |

## Application Pages

| Route | Description |
| --- | --- |
| `/` | Homepage and brand introduction |
| `/about` | Brand philosophy and editorial storytelling |
| `/collection` | Collection discovery |
| `/product` | Product browsing |
| `/product/[slug]` | Individual product details |
| `/cart` | Shopping cart interface |
| `/checkout` | Checkout interface |
| `/account` | Customer account |
| `/account/orders/[id]` | Individual order details |
| `/contact` | Contact information and inquiry form |
| `/login` | Customer sign-in interface |
| `/signup` | Customer registration interface |

## Project Structure

```text
AUREL/
├── public/
│   └── images/
│       ├── about/
│       ├── products/
│       └── ...
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── account/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── collection/
│   │   ├── contact/
│   │   ├── login/
│   │   ├── product/
│   │   ├── signup/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── about/
│   │   ├── account/
│   │   ├── collection/
│   │   ├── product-detail/
│   │   └── sections/
│   └── data/
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── README.md
```

*The structure above highlights the main application areas; individual files and directories may evolve during development.*

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js — a version compatible with the project's Next.js requirements
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/mhidusti/AUREL.git
cd AUREL
```

### 2. Install Dependencies

This repository contains both `package.json` and a pnpm lockfile. For a reproducible installation, use the package manager and lockfile maintained by the project.

Using npm:

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Create a Production Build

```bash
npm run build
```

### 5. Run the Production Server Locally

```bash
npm run start
```

Build the application before running the production server.

## Deployment

AUREL is deployed on Render as a Next.js web service.

**Live URL:** https://aurel-z71t.onrender.com

Typical service configuration:

| Setting | Value |
| --- | --- |
| Runtime | Node.js |
| Build command | `npm install && npm run build` |
| Start command | `npm run start` |
| Application port | Provided by the hosting environment |

For production deployments, keep dependency versions and lockfiles synchronized. Use a supported, security-patched Next.js release and review dependency advisories before updating the deployment.

## Responsive Design

The interface is designed with multiple screen sizes in mind, including:

- Desktop and large-screen editorial layouts
- Tablet-friendly content arrangements
- Mobile navigation and content flow
- Responsive typography and spacing
- Adaptable imagery and product presentations

Responsive behavior should be validated on actual devices and browsers as the interface evolves.

## Performance & Code Quality

The project uses Next.js production builds and TypeScript checks to validate the application before deployment.

Recommended ongoing improvements include:

- Optimize large images and use responsive image delivery.
- Review accessibility, keyboard navigation, and color contrast.
- Reduce unnecessary client-side JavaScript.
- Test navigation, forms, and shopping flows end to end.
- Keep dependencies updated and resolve security advisories.
- Test production behavior after every deployment.

## Roadmap

Potential future improvements include:

- [ ] Complete accessibility and keyboard-navigation audits
- [ ] Optimize image loading and delivery
- [ ] Refine mobile-specific motion and interactions
- [ ] Integrate persistent cart and wishlist storage
- [ ] Connect authentication to a secure backend
- [ ] Integrate a payment provider and order processing
- [ ] Add product search, filtering, and sorting
- [ ] Expand automated testing and error handling
- [ ] Improve SEO metadata and structured product data

## Contributing

This repository is primarily a personal portfolio project. Suggestions, feedback, and ideas for improvement are welcome.

If you would like to contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test the application and production build.
5. Open a pull request describing the proposed changes.

## License

Unless a license file is added to this repository, all rights are reserved by the project owner. Please contact the owner before redistributing or using project assets commercially.

## Author

**Mohadese Doosti**  
IT Developer · Full-Stack & Web Development

- GitHub: [@mhidusti](https://github.com/mhidusti)
- Project: [AUREL — Objects of Light](https://aurel-z71t.onrender.com)

---

<p align="center">
  <strong>AUREL</strong><br />
  <em>OBJECTS OF LIGHT.</em>
  <br /><br />
  Designed to be seen. Crafted to be remembered.
</p>

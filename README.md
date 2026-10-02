# Kathlea Corla — Personal Calling Card

A simple, one-page personal calling card for **Kathlea Corla**, a Computer Science BS student at the University of Central Florida, graduating in 2027.

The page shows:

- Name and field of study (Computer Science BS, University of Central Florida)
- Expected graduation year (2027)
- A link to GitHub: [github.com/KathleaC](https://github.com/KathleaC)
- An email contact link: [kathleac@yahoo.com](mailto:kathleac@yahoo.com)

The design uses a sunset theme of violet, pink, and orange.

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [lucide-react](https://lucide.dev) icons

## Project structure

```
app/
  layout.tsx           # Fonts, metadata, and root layout
  page.tsx             # Renders the calling card
  globals.css          # Sunset theme colors and design tokens
components/
  calling-card.tsx     # The calling card component
```

## Running locally

This project uses [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
pnpm build
pnpm start
```

## Contact

Email: [kathleac@yahoo.com](mailto:kathleac@yahoo.com)

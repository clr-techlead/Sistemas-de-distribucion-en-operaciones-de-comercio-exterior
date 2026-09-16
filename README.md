# International Transport Mode Comparison for Foreign Trade

A React + TypeScript web application for comparing international transport modes — road, maritime, and air — to support logistics decisions in foreign-trade operations, with a domain-focused AI assistant.

> Built as a practical complement to my technical training in Foreign Trade Operations (SENA), combining international logistics knowledge with software development skills.

🔗 **Live demo:** https://sistemas-de-distribucion-en-operaci.vercel.app

## What it does

- **Transport mode comparison** (road, maritime, and air), with a profile for each mode covering means of transport, advantages, disadvantages, and applicable regulations.
- **Criteria-based scoring** — cost, speed, capacity, flexibility, and environmental impact — with visual high / medium / low indicators.
- **AI logistics assistant** (Gemini API) that answers questions about multimodal transport, with a focus on efficiency, costs, and international regulations.

## Tech stack

- React + TypeScript
- Vite
- Google Gemini API (`@google/genai`) for the conversational assistant

## Run locally

**Requirement:** Node.js

```bash
npm install
```

Create a `.env.local` file in the project root with your own Gemini API key:

```
API_KEY=your_api_key_here
```

```bash
npm run dev
```

> The API key is never exposed in the source code: it is read from environment variables (`process.env.API_KEY`). Anyone running the project locally must use their own key.

## Context

This project started from a real learning need: quickly understanding the differences between transport modes to make better logistics decisions. I built it to practice React, TypeScript, and AI API integration within a domain I know firsthand.

---

**Camilo Andrés León Rubriche** — Data & BI Analyst  
[LinkedIn](https://www.linkedin.com/in/caleru) · [email](mailto:camiloleonrubriche@outlook.com)

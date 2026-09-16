# Architecture

## Overview

This project is a client-side React and TypeScript application built with Vite. It presents an interactive guide to global distribution systems and transportation modes, with an optional AI assistant for logistics-related questions.

## Main layers

- **Presentation:** React components and `App.tsx` provide the user interface, navigation, cards, ratings, and assistant interaction.
- **Domain catalogue:** `constants.tsx` contains the transport-mode catalogue, while `types.ts` defines the shared TypeScript models.
- **AI integration:** `services/geminiService.ts` validates the prompt and API key, calls the Gemini API, and returns a user-friendly response.
- **Delivery:** Vite creates the production bundle. The application is deployed on Vercel.
- **Quality:** GitHub Actions installs dependencies, runs Vitest tests, and verifies the production build.

## Request flow

1. A user selects a transport mode or submits a question in the interface.
2. React reads the catalogue data or calls the Gemini service.
3. The service validates configuration and sends the request to the Gemini API when needed.
4. The response is returned to the interface with a friendly fallback message if configuration or the provider is unavailable.

## Configuration and security

For local development, define `API_KEY` in a local environment file such as `.env.local`. Configure the same variable in Vercel Project Settings for production. Never commit API keys or other secrets to the repository.

## Verification

Run the following commands locally:

```bash
npm install
npm test
npm run build
```

The Node.js CI workflow runs these checks on pushes and pull requests to the main branch.

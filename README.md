# Comparador de Modos de Transporte en Comercio Exterior

Aplicación web (React + TypeScript) que ayuda a comparar modos de transporte internacional —terrestre, marítimo y aéreo— para apoyar decisiones de logística en operaciones de comercio exterior, con un asistente de IA especializado en la materia.

> Proyecto desarrollado como complemento práctico a mi formación técnica en Operaciones de Comercio Exterior (SENA), aplicando lo aprendido en logística internacional junto con mis habilidades de desarrollo.

## Qué hace

- **Comparación de modos de transporte** (terrestre, marítimo, aéreo) con ficha por modo: medios utilizados, ventajas, desventajas y normativa aplicable.
- **Calificación por criterio** — costo, velocidad, capacidad, flexibilidad e impacto ecológico — con indicadores visuales de nivel (alto / medio / bajo).
- **Asistente de logística con IA** (Gemini API): responde preguntas del usuario sobre transporte multimodal con enfoque en eficiencia, costos y normativa internacional.

## Stack técnico

- React + TypeScript
- Vite
- Google Gemini API (`@google/genai`) para el asistente conversacional

## Cómo correrlo localmente

**Requisitos:** Node.js

```bash
npm install
```

Crea un archivo `.env.local` en la raíz con tu propia clave de la API de Gemini:

```
API_KEY=tu_clave_aqui
```

```bash
npm run dev
```

> La clave de API nunca se expone en el código: se lee desde variables de entorno (`process.env.API_KEY`). Cada persona que corra el proyecto usa su propia clave.

## Contexto

Este proyecto nació de una necesidad real de mi formación en comercio exterior: entender rápido las diferencias entre modos de transporte para tomar mejores decisiones logísticas. Lo construí como aplicación web para practicar React/TypeScript e integración con APIs de IA, aplicado a un dominio que conozco de primera mano.

---

**Camilo Andrés León Rubriche** — Data & BI Analyst
[LinkedIn](https://www.linkedin.com/in/caleru) · [correo](mailto:camiloleonrubriche@outlook.com)

import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY?.trim();
const ai = new GoogleGenAI({ apiKey: apiKey || "" });

export const getLogisticsAdvice = async (userPrompt: string): Promise<string> => {
  const prompt = userPrompt.trim();

  if (!apiKey) {
    return "El asistente no está configurado todavía. Añade API_KEY en las variables de entorno de Vercel.";
  }

  if (!prompt) {
    return "Escribe una pregunta sobre logística o transporte para comenzar.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "Eres un experto en logística y transporte multimodal. Ayuda al usuario a entender mejor los medios y modos de transporte basándote en conceptos de eficiencia, costos y normativa internacional. Responde de forma clara y profesional en español.",
        temperature: 0.7,
      },
    });

    return response.text?.trim() || "No recibí una respuesta útil. Intenta formular la pregunta de otra manera.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "No pude procesar tu consulta en este momento. Verifica la conexión e inténtalo de nuevo.";
  }
};

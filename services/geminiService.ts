
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getLogisticsAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "Eres un experto en logística y transporte multimodal. Ayuda al usuario a entender mejor los medios y modos de transporte basándote en conceptos de eficiencia, costos y normativa internacional. Responde de forma clara y profesional en español.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Lo siento, tuve un problema analizando tu consulta logística. Por favor intenta de nuevo.";
  }
};

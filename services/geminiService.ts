
import { GoogleGenAI, Type } from "@google/genai";

export async function generateFashionSummary(title: string, author: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a high-fashion magazine editor. Summarize the book "${title}" by ${author} in exactly one punchy, sophisticated, and editorial phrase. Use luxurious language. No more than 15 words.`,
      config: {
        temperature: 0.8,
        topP: 0.95,
      },
    });

    return response.text?.trim() || "A literary masterpiece for the ages.";
  } catch (error) {
    console.error("Gemini summary generation failed:", error);
    return "An essential addition to your curated collection.";
  }
}

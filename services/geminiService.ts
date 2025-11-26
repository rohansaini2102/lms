import { GoogleGenAI, Type } from "@google/genai";
import { Question } from "../types";
import { DEMO_QUESTIONS } from "../constants";

export const generateQuizQuestions = async (
  apiKey: string,
  exam: string,
  subject: string,
  topic: string
): Promise<Question[]> => {
  // FAST PATH: If no API key is present (common in demo/preview), return immediately.
  // No artificial delay needed for a smooth UI.
  if (!apiKey) {
    console.warn("No API key provided, using fast demo questions.");
    return Promise.resolve(DEMO_QUESTIONS);
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Schema definition for strictly typed JSON output
    const responseSchema = {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          text: { type: Type.STRING },
          options: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          correctAnswer: { type: Type.INTEGER, description: "Index of the correct option (0-3)" },
          explanation: { type: Type.STRING },
        },
        required: ["id", "text", "options", "correctAnswer", "explanation"],
        propertyOrdering: ["id", "text", "options", "correctAnswer", "explanation"],
      },
    };

    const prompt = `
      Create a challenging and educational quiz for the Indian Government Exam: "${exam}".
      Subject: "${subject}"
      Topic: "${topic}"
      
      Generate 10 multiple-choice questions. 
      Ensure the questions are strictly relevant to the syllabus of ${exam}.
      The content should be high quality, similar to actual past papers.
      The 'correctAnswer' must be the zero-based index of the correct string in 'options'.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.3,
      },
    });

    const jsonText = response.text;
    if (!jsonText) throw new Error("Empty response from AI");
    
    const questions = JSON.parse(jsonText) as Question[];
    return questions;

  } catch (error) {
    console.error("Failed to generate quiz with Gemini:", error);
    // Fallback to demo questions immediately if API fails
    return DEMO_QUESTIONS;
  }
};
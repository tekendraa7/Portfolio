import { Router } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = Router();

function getGenAI() {
  const apiKey = process.env["GOOGLE_GENAI_API_KEY"];
  if (!apiKey) {
    throw new Error("GOOGLE_GENAI_API_KEY environment variable is not set.");
  }
  return new GoogleGenerativeAI(apiKey);
}

const SYSTEM_PROMPT = `You are CyberShield AI, a specialized assistant focused exclusively on cybersecurity, Linux systems, and networking topics. You are knowledgeable, helpful, and precise. Keep responses concise but thorough. Format your answers with clear structure when needed. Only answer questions related to cybersecurity, Linux, networking, and related technical topics. If asked about unrelated topics, politely redirect back to your area of expertise.`;

router.post("/ask", async (req, res) => {
  try {
    const { question } = req.body as { question?: string };
    if (!question || typeof question !== "string" || question.trim().length === 0) {
      res.status(400).json({ error: "A non-empty question is required." });
      return;
    }

    const genAI = getGenAI();
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: SYSTEM_PROMPT,
    });

    const result = await model.generateContent(question.trim());
    const answer = result.response.text();
    res.json({ answer });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: `Failed to generate response: ${message}` });
  }
});

router.post("/chat", async (req, res) => {
  try {
    const { currentMessage, history } = req.body as {
      currentMessage?: string;
      history?: Array<{ role: "user" | "model"; content: string }>;
    };

    if (!currentMessage || typeof currentMessage !== "string" || currentMessage.trim().length === 0) {
      res.status(400).json({ error: "A non-empty currentMessage is required." });
      return;
    }

    const genAI = getGenAI();
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: SYSTEM_PROMPT,
    });

    const chatHistory = (history || []).map((msg) => ({
      role: msg.role,
      parts: [{ text: msg.content }],
    }));

    const chat = model.startChat({ history: chatHistory });
    const result = await chat.sendMessage(currentMessage.trim());
    const reply = result.response.text();
    res.json({ reply });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: `Failed to generate response: ${message}` });
  }
});

export default router;

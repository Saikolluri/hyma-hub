import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { prompt } = await req.json();

  // Robot-Hyma Intelligence Logic
  const lowercasePrompt = prompt.toLowerCase();
  let reply = "";

  if (lowercasePrompt.includes("legal") || lowercasePrompt.includes("register")) {
    reply = "Robot-Hyma: Our legal module handles ROC registration and document collection for startups in Andhra Pradesh. Shall I open the Briefing Panel for you?";
  } else if (lowercasePrompt.includes("budget") || lowercasePrompt.includes("cost")) {
    reply = "Robot-Hyma: We architect detailed financial models. Most MVPs under the Hyma Hub start with a 6-week provisioning budget. Do you have a specific capital range?";
  } else if (lowercasePrompt.includes("tech") || lowercasePrompt.includes("stack")) {
    reply = "Robot-Hyma: We provision elite stacks using Next.js 15, Rust, and Node.js. Our systems guarantee 99.9% uptime.";
  } else {
    reply = "Robot-Hyma: Vision received. I am analyzing the entropy of your request. How can Hyma Technologies assist your venture today?";
  }

  // Simulate network latency for "Production" feel
  await new Promise(resolve => setTimeout(resolve, 800));

  return NextResponse.json({ reply });
}

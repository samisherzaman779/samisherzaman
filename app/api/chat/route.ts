// # app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    
    const apiKey = process.env.GROQ_API_KEY?.trim();
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Chat is not configured: add GROQ_API_KEY to .env.local (get a free key from console.groq.com), then restart dev server.",
        },
        { status: 503 }
      );
    }

    const model =
      process.env.GROQ_MODEL?.trim() || "llama-3.3-70b-versatile";

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content: `You are Sami Sherzaman's AI assistant on his developer portfolio website. You help visitors learn about Sami's skills, services, projects, and availability. 

About Sami Sherzaman:
- Elite Full-Stack & AI Developer with ~3 years of professional experience in modern web & AI stacks
- Specializes in Next.js, React, TypeScript, Python, AI/ML integration
- Based in Pakistan; available for remote work worldwide
- Available for premium projects (SaaS, AI integration, custom software)
- Email: samisherzaman779@gmail.com
- Phone: +92 306 6039949 (Pakistan)
- GitHub: https://github.com/samisherzaman779
- LinkedIn: https://www.linkedin.com/in/sami-sherzaman
- X (Twitter): https://x.com/SamiSherzaman
- Services: Website Development, SaaS Development, AI Integration, Custom Software, UI/UX, Automation
- Notable skills: Next.js 16, React, TypeScript, Node.js, Python, OpenAI, LangChain, PostgreSQL, AWS, Docker, Tailwind CSS, Shadcn UI

Be professional, friendly, and concise. If asked about pricing, mention that projects start from $3,000-$15,000 depending on scope. Encourage visitors to use the contact form or book a call.`
          },
          ...messages
        ],
        temperature: 0.7,
        max_completion_tokens: 1024,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      let detail = errorText;
      try {
        const parsed = JSON.parse(errorText) as {
          error?: { message?: string };
        };
        detail =
          parsed?.error?.message ?? JSON.stringify(parsed?.error ?? parsed);
      } catch {
        // keep raw text
      }
      console.error("[chat] Groq error:", response.status, detail);
      return NextResponse.json(
        { error: `Groq API (${response.status}): ${detail}` },
        { status: response.status >= 500 ? 502 : response.status }
      );
    }

    // Stream the response
    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            controller.enqueue(value);
          }
        } catch (err) {
          controller.error(err);
        } finally {
          controller.close();
          reader.releaseLock();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
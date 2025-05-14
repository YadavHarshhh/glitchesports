import { NextResponse } from "next/server"

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL

if (!DISCORD_WEBHOOK_URL) {
  throw new Error("Missing DISCORD_WEBHOOK_URL environment variable")
}

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Create Discord embed
    const embed = {
      title: "New Contact Form Submission",
      color: 0x00ff00, // Green color
      fields: [
        {
          name: "Name",
          value: name,
          inline: true
        },
        {
          name: "Email",
          value: email,
          inline: true
        },
        {
          name: "Subject",
          value: subject,
          inline: true
        },
        {
          name: "Message",
          value: message
        }
      ],
      timestamp: new Date().toISOString()
    }

    // Send to Discord webhook
    const response = await fetch(DISCORD_WEBHOOK_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [embed]
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send to Discord")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    )
  }
} 
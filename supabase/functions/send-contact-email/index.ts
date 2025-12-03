import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  fullName: string;
  company?: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  message: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, company, email, phone, service, location, message }: ContactRequest = await req.json();

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "WE DESIGN <onboarding@resend.dev>",
        to: ["milad@wedesign-om.com", "eng.milad.mouradi@gmail.com"],
        subject: `New Contact Form: ${fullName} - ${service}`,
        html: emailHtml,
        reply_to: email,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Resend API error: ${error}`);
    }

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});

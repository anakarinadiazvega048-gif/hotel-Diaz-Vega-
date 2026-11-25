// Concierge IA para Hotel Díaz Vega. Ejecutar en Vercel (Node.js 18+).
// Configura OPENAI_API_KEY en las variables de entorno del proyecto.
// Opcional: OPENAI_MODEL. Nunca expongas la clave en el navegador.
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método no permitido" });
  }
  const message = typeof req.body?.message === "string" ? req.body.message.trim() : "";
  if (!message || message.length > 1200) return res.status(400).json({ error: "Envía una pregunta de máximo 1200 caracteres." });
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return res.status(503).json({ error: "El concierge IA aún no está configurado." });
  const instructions = [
    "Eres el concierge virtual 24/7 del Hotel Díaz Vega. Responde en español, con amabilidad, claridad y tono elegante inspirado en cuentos de princesas, sin infantilizar.",
    "El hotel tiene 100 habitaciones en total y ofrece tres categorías: NK1, NQQ y Suite.",
    "No inventes tarifas, disponibilidad, capacidad por habitación, distribución de inventario, dirección, horarios, amenidades ni políticas. Si no tienes un dato confirmado, dilo y recomienda consultarlo con recepción.",
    "Las solicitudes de reserva se envían por WhatsApp desde el formulario y quedan pendientes de confirmación del hotel. No confirmes reservas ni cobros.",
    "No solicites datos de tarjetas, contraseñas ni información financiera sensible. Mantén las respuestas breves y útiles."
  ].join(" ");
  try {
    const upstream = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { "Authorization": "Bearer " + apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({ model: process.env.OPENAI_MODEL || "gpt-4.1-mini", instructions, input: message, max_output_tokens: 300 })
    });
    const payload = await upstream.json();
    if (!upstream.ok) {
      console.error("OpenAI concierge error:", payload.error?.message || upstream.status);
      return res.status(502).json({ error: "No fue posible consultar al concierge en este momento." });
    }
    const reply = (payload.output || []).flatMap(item => item.content || []).filter(item => item.type === "output_text").map(item => item.text).join("\n").trim();
    return res.status(200).json({ reply: reply || "No pude preparar una respuesta. Inténtalo de nuevo." });
  } catch (error) {
    console.error("Concierge request failed:", error);
    return res.status(500).json({ error: "Error interno del concierge." });
  }
}
export const WHATSAPP_URL =
  "https://wa.me/5541997452053?text=quero%20uma%20hospedagem%20de%20sites";

export function buildContactUrl(data: FormData) {
  const clean = (key: string) => String(data.get(key) ?? "").trim();
  const message = [
    "Olá! Quero entrar em contato com a MyHostVIP.",
    `Nome: ${clean("nome")}`,
    clean("email") ? `E-mail: ${clean("email")}` : "",
    `Assunto: ${clean("assunto")}`,
    `Mensagem: ${clean("mensagem")}`,
  ].filter(Boolean).join("\n");
  const url = new URL(WHATSAPP_URL);
  url.searchParams.set("text", message);
  return url.toString();
}

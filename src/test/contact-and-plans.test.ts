import { describe, expect, it } from "vitest";
import { buildContactUrl, WHATSAPP_URL } from "@/lib/whatsapp";
import { hostingPlans } from "@/lib/hosting-plans";

describe("consulta de planos e contato", () => {
  it("mantém as referências de preço e armazenamento anteriores", () => {
    expect(hostingPlans.map(({name,price,storage}) => [name,price,storage])).toEqual([
      ["Starter","4,99","1 GB SSD"], ["Profissional","29,99","5 GB SSD"], ["Business","69,99","10 GB SSD"],
    ]);
  });
  it("prepara a mensagem no WhatsApp existente, sem enviar e sem exigir e-mail", () => {
    const data = new FormData();
    data.set("nome","Pessoa Teste");
    data.set("assunto","Consulta de plano");
    data.set("mensagem","Olá, projeto & condições?");
    const url = new URL(buildContactUrl(data));
    expect(url.origin + url.pathname).toBe(new URL(WHATSAPP_URL).origin + new URL(WHATSAPP_URL).pathname);
    expect(url.searchParams.get("text")).toBe("Olá! Quero entrar em contato com a MyHostVIP.\nNome: Pessoa Teste\nAssunto: Consulta de plano\nMensagem: Olá, projeto & condições?");
    expect(url.searchParams.get("text")).not.toContain("E-mail:");
  });
});

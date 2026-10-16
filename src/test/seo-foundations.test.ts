import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const read = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");

describe("compatibilidade e descoberta", () => {
  it("contém permissão explícita de busca no ChatGPT e sitemap canônico", () => {
    expect(read("public/robots.txt")).toContain("User-agent: OAI-SearchBot");
    expect(read("public/robots.txt")).toContain("Sitemap: https://myhostvip.com/sitemap.xml");
    expect(read("public/sitemap.xml")).toContain("<loc>https://myhostvip.com/</loc>");
  });

  it("não anuncia rota de busca ausente nem imagem com link temporário", () => {
    const html = read("index.html");
    expect(html).not.toContain("SearchAction");
    expect(html).not.toContain("gpt-engineer-file-uploads");
    expect(html).toContain('"@type": "Organization"');
    expect(html).toContain('rel="canonical" href="https://myhostvip.com"');
  });
});

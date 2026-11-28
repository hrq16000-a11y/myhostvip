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
  it("emite imagem social própria, estável, acessível e de dimensões reais", () => {
    const html = read("index.html");
    const file = readFileSync(resolve(process.cwd(), "public/social-preview.png"));
    expect(file.subarray(0, 8).toString("hex")).toBe("89504e470d0a1a0a");
    expect(file.readUInt32BE(16)).toBe(1200);
    expect(file.readUInt32BE(20)).toBe(630);
    expect(file.length).toBeLessThan(150_000);
    expect(html.match(/property="og:image"/g)).toHaveLength(1);
    expect(html.match(/name="twitter:image"/g)).toHaveLength(1);
    expect(html).toContain('property="og:image" content="https://myhostvip.com/social-preview.png"');
    expect(html).toContain('name="twitter:image" content="https://myhostvip.com/social-preview.png"');
    expect(html).toContain('name="twitter:card" content="summary_large_image"');
    expect(html).toContain('property="og:image:alt"');
    expect(html).toContain('name="twitter:image:alt"');
  });
});

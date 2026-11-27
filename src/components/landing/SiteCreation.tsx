import { Layout, FileText, ShoppingCart, Megaphone, PenTool, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const siteTypes = [
  { icon: Layout, title: "Sites profissionais", desc: "Presença institucional e corporativa." },
  { icon: FileText, title: "Landing pages", desc: "Páginas para apresentar um serviço e capturar interesse." },
  { icon: PenTool, title: "Blogs", desc: "Publicação de artigos e conteúdo editorial." },
  { icon: ShoppingCart, title: "Páginas de vendas", desc: "Apresentação de produtos e serviços." },
  { icon: Megaphone, title: "Páginas para Google Ads", desc: "Destinos de campanhas com objetivo definido." },
];

const SiteCreation = () => (
  <section className="hosting-section border-t border-border" aria-labelledby="creation-title">
    <div className="section-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <div><p className="hosting-eyebrow mb-3">04 / Criação</p><h2 id="creation-title" className="hosting-section-title mb-4">Uma ideia, muitas formas de publicar.</h2>
        <p className="text-body mb-6 max-w-lg">Planeje o formato do seu projeto e confirme os requisitos de hospedagem, WordPress e modelos antes de contratar.</p>
        <Button asChild variant="heroOutline" size="lg" className="min-h-11 hosting-press"><Link to="/criador-de-sites">Conhecer o criador de sites <ArrowRight aria-hidden="true"/></Link></Button>
      </div>
      <ul className="divide-y divide-border border-y border-border">
        {siteTypes.map((item, i) => (<li key={item.title} className="flex gap-4 items-start py-4"><span className="text-xs font-mono-data text-muted-foreground mt-1">0{i+1}</span><item.icon className="h-5 w-5 text-primary shrink-0 mt-1" aria-hidden="true"/><div><h3 className="font-semibold">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed mt-1">{item.desc}</p></div></li>))}
      </ul>
    </div>
  </section>
);

export default SiteCreation;

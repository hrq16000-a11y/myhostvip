import { Gauge, HardDrive, Globe, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  { icon: HardDrive, title: "Ambiente", desc: "Tipo de armazenamento, servidor web, versões de software e limites." },
  { icon: Globe, title: "Entrega", desc: "Região da infraestrutura, cache, protocolos e disponibilidade de CDN." },
  { icon: Gauge, title: "Medição", desc: "Tempo de resposta e estabilidade do seu próprio site, em condições reais." },
  { icon: ShieldCheck, title: "Operação", desc: "Termos de disponibilidade, backup, restauração e suporte." },
];

const Performance = () => (
  <section className="hosting-section border-t border-border bg-card/25" aria-labelledby="performance-title">
    <div className="section-container grid gap-10 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="hosting-eyebrow mb-3">03 / Infraestrutura</p>
        <h2 id="performance-title" className="hosting-section-title mb-4">Velocidade que pode ser avaliada.</h2>
        <p className="text-body max-w-lg mb-6">A performance depende do ambiente, do código, das imagens e do cache. Em vez de prometer números genéricos, confirme a estrutura disponível e meça o seu projeto.</p>
        <Link to="/hospedagem" className="min-h-11 inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4">Conhecer a hospedagem <ArrowRight className="h-4 w-4" aria-hidden="true"/></Link>
      </div>
      <ol className="hosting-console p-5 sm:p-7 rounded-xl border border-border">
        <li className="list-none pb-4 border-b border-border mb-1 font-mono-data uppercase tracking-widest text-xs text-muted-foreground">Roteiro de avaliação técnica</li>
        {steps.map((item, i) => (
          <li key={item.title} className="flex gap-4 items-start py-4 border-b border-border last:border-b-0">
            <span className="font-mono-data text-xs text-primary mt-1 shrink-0">0{i+1}</span>
            <item.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
            <div><h3 className="font-semibold mb-1">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p></div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Performance;

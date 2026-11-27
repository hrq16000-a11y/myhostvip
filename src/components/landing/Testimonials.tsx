import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// No verified testimonial source was found in the commercial matrix.
// Keep the section useful without presenting unverified reviews as fact.
const DecisionGuide = () => (
  <section className="hosting-section border-t border-border bg-card/20" aria-labelledby="guide-title">
    <div className="section-container grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
      <div><p className="hosting-eyebrow mb-3">05 / Confiança</p><h2 id="guide-title" className="hosting-section-title mb-4">Escolha com clareza.</h2><p className="text-body">Perguntas que vale fazer antes de contratar uma hospedagem.</p></div>
      <div className="divide-y divide-border border-y border-border">
        {[
          { q: "Qual plano atende meu projeto?", a: "Compare recursos, armazenamento, e-mails e os limites de cada opção com a equipe." },
          { q: "Como funciona a migração?", a: "Consulte se a migração está disponível e quais são os prazos, requisitos e custos envolvidos." },
          { q: "Como confirmar segurança e suporte?", a: "Solicite as condições de SSL, backups, disponibilidade e atendimento antes de assinar." },
        ].map((item) => (
          <details key={item.q} className="py-3"><summary className="cursor-pointer font-semibold min-h-11 py-3">{item.q}</summary><p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.a}</p></details>
        ))}
        <Link to="/base-de-conhecimento" className="min-h-11 py-3 text-primary inline-flex items-center gap-2 font-semibold text-sm hover:underline">Consultar base de conhecimento <ArrowRight className="w-4 h-4" aria-hidden="true"/></Link>
      </div>
    </div>
  </section>
);

export default DecisionGuide;

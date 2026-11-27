import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hostingPlans } from "@/lib/hosting-plans";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const inquiryUrl = (name: string) => {
  const url = new URL(WHATSAPP_URL);
  url.searchParams.set("text", `Olá! Gostaria de confirmar preço, recursos e condições do plano ${name} da MyHostVIP.`);
  return url.toString();
};

export function PlanCards({ full = false, selected }: { full?: boolean; selected?: string | null }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
      {hostingPlans.map((plan, index) => (
        <article key={plan.id} id={full ? `plano-${plan.id}` : undefined}
          className={`hosting-plan-card rounded-xl border p-5 lg:p-7 min-w-0 flex flex-col ${selected === plan.id ? "border-primary bg-primary/[0.06]" : "border-border bg-card/80"}`}>
          <div className="flex justify-between items-center gap-2 mb-5">
            <span className="text-xs text-muted-foreground font-mono-data">0{index + 1} / HOSPEDAGEM</span>
            <plan.icon className="h-5 w-5 text-primary" aria-hidden="true" />
          </div>
          {full ? <h2 className="font-semibold text-2xl tracking-tight">{plan.name}</h2> : <h3 className="font-semibold text-2xl tracking-tight">{plan.name}</h3>}
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{plan.description}</p>
          <div className="mt-6 mb-5">
            <p className="text-xs text-muted-foreground">Valor de referência</p>
            <p className="font-semibold tracking-tight flex flex-wrap items-baseline gap-1 mt-1"><span className="text-lg">R$</span> <span className="text-4xl font-bold tabular-nums">{plan.price}</span> <span className="text-sm text-muted-foreground font-normal">/mês</span></p>
          </div>
          <dl className="border-y border-border py-3 space-y-3 mb-5 text-sm">
            <div className="flex items-start justify-between gap-2"><dt className="text-muted-foreground">Armazenamento</dt><dd className="font-medium text-right">{plan.storage}</dd></div>
            <div className="flex items-start justify-between gap-2"><dt className="text-muted-foreground">E-mail</dt><dd className="font-medium text-right">{plan.email}</dd></div>
          </dl>
          {full && <details className="mb-5 border-b border-border pb-3">
            <summary className="group flex items-center justify-between gap-2 cursor-pointer min-h-11 text-sm font-medium list-none">
              Outros recursos a confirmar <ChevronDown className="h-4 w-4 shrink-0 group-open:rotate-180 transition-transform duration-150" aria-hidden="true"/>
            </summary>
            <ul className="text-sm text-muted-foreground leading-relaxed space-y-2 pb-2 pl-4 list-disc">
              {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </details>}
          <div className="mt-auto">
            {selected === plan.id && <p className="text-xs font-medium text-primary mb-3">Opção que você selecionou</p>}
            {full ? (
              <Button asChild variant={selected === plan.id ? "hero" : "heroOutline"} className="w-full min-h-11 hosting-press whitespace-normal">
                <a href={inquiryUrl(plan.name)} target="_blank" rel="noopener noreferrer" aria-label={`Consultar plano ${plan.name} pelo WhatsApp`}><MessageCircle aria-hidden="true" /> Consultar plano</a>
              </Button>
            ) : (
              <Button asChild variant="heroOutline" className="w-full min-h-11 hosting-press">
                <Link to={`/planos?plano=${plan.id}`} aria-label={`Ver plano ${plan.name}`}>Ver plano <ArrowRight aria-hidden="true" /></Link>
              </Button>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

const PricingSection = () => (
  <section className="hosting-section border-t border-border bg-card/20" id="planos" aria-labelledby="pricing-title">
    <div className="section-container">
      <div className="grid gap-4 lg:grid-cols-[1fr_0.64fr] lg:items-end mb-8">
        <div><p className="hosting-eyebrow mb-3">01 / Planos</p><h2 id="pricing-title" className="hosting-section-title">Compare antes de contratar.</h2></div>
        <p className="text-body">Três opções da apresentação anterior para diferentes cenários. Valores, recursos e limites sujeitos à confirmação.</p>
      </div>
      <PlanCards />
      <div className="mt-5 flex flex-wrap items-center gap-4 justify-between text-sm text-muted-foreground">
        <span>Confirme condições, renovação e disponibilidade com a equipe.</span>
        <Link to="/planos" className="text-primary min-h-11 inline-flex gap-2 items-center font-semibold hover:underline">Ver comparação completa <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
      </div>
    </div>
  </section>
);

export default PricingSection;

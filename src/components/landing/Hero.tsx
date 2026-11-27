import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Globe, HardDrive, Layers3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hostingPlans } from "@/lib/hosting-plans";

const Hero = () => {
  const [selected, setSelected] = useState<(typeof hostingPlans)[number]["id"]>("starter");
  const plan = hostingPlans.find((item) => item.id === selected) ?? hostingPlans[0];

  return (
    <section className="hosting-hero relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16" aria-labelledby="home-hero">
      <div className="section-container relative">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 items-center">
          <div className="min-w-0">
            <p className="hosting-eyebrow mb-6"><Globe className="h-4 w-4" aria-hidden="true" /> MyHostVIP <span className="text-muted-foreground">/</span> Hospedagem</p>
            <h1 id="home-hero" className="text-[clamp(2.45rem,5.2vw,4.5rem)] font-extrabold leading-[1.04] tracking-[-0.055em]">
              Hospedagem para<br className="hidden sm:inline" />
              <span className="text-primary"> seu próximo</span><br className="hidden sm:inline" /> passo online.
            </h1>
            <p className="text-body max-w-xl mt-6">
              Hospedagem para sites, landing pages e WordPress. Compare as opções Starter, Profissional e Business e descubra quais recursos fazem sentido para o seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button asChild variant="hero" size="lg" className="h-12 gap-3 hosting-press"><Link to="/planos">Comparar planos <ArrowRight aria-hidden="true" /></Link></Button>
              <Button asChild variant="heroOutline" size="lg" className="h-12 hosting-press"><Link to="/contato">Falar com a equipe <ArrowUpRight aria-hidden="true" /></Link></Button>
            </div>
            <div className="mt-8 pt-5 border-t border-border flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="font-mono-data text-xs text-muted-foreground uppercase tracking-widest">Starter · referência</span>
              <span className="text-xl font-semibold">R$ 4,99<span className="text-sm text-muted-foreground font-normal">/mês</span></span>
              <span className="text-xs text-muted-foreground basis-full">Confirme preço vigente, recursos e condições antes de contratar.</span>
            </div>
          </div>
          <div className="hosting-console min-w-0 rounded-2xl border border-border overflow-hidden">
            <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-4 sm:px-6">
              <span className="font-mono-data uppercase text-[11px] tracking-wider text-muted-foreground">Guia de escolha</span>
              <Layers3 className="text-primary h-5 w-5" aria-hidden="true" />
            </div>
            <div className="p-5 sm:p-7">
              <p className="text-xs text-primary font-mono-data uppercase tracking-widest">01 / Seu projeto</p>
              <h2 className="font-semibold tracking-tight text-2xl mt-2 mb-5">O que você quer colocar no ar?</h2>
              <div className="space-y-2" role="group" aria-label="Tipo de projeto">
                {hostingPlans.map((option) => (
                  <button type="button" key={option.id} aria-pressed={selected === option.id} onClick={() => setSelected(option.id)}
                    className="hosting-choice hosting-press w-full text-left flex items-center gap-3 p-3 sm:p-4 rounded-lg border min-h-[52px]">
                    <option.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <span className="min-w-0 flex-1 font-medium text-sm">{option.audience}</span>
                    <span className="hosting-choice-marker h-4 w-4 rounded-full shrink-0 border" aria-hidden="true" />
                  </button>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-xs font-mono-data text-muted-foreground uppercase tracking-widest mb-2">02 / Próximo passo</p>
                <div aria-live="polite" className="min-h-[94px]">
                  <p className="text-lg font-semibold flex items-center gap-2"><HardDrive className="w-4 h-4 text-primary shrink-0" aria-hidden="true" /> Consulte o {plan.name}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{plan.question}</p>
                </div>
                <Link className="inline-flex gap-2 items-center min-h-11 text-sm font-semibold text-primary hover:underline underline-offset-4" to={`/planos?plano=${plan.id}`}>
                  Ver opção e condições <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <p className="border-t border-border px-5 sm:px-6 py-3 text-xs text-muted-foreground">Guia ilustrativo de escolha · não é uma simulação de contratação.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

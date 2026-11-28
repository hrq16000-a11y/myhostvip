import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { PlanCards } from "@/components/landing/PricingSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { hostingPlans } from "@/lib/hosting-plans";

const Plans = () => {
  const [search, setSearch] = useSearchParams();
  const selectedPlan = hostingPlans.find((p) => p.id === search.get("plano"));
  const selectPlan = (id: (typeof hostingPlans)[number]["id"]) => {
    const next = new URLSearchParams(search);
    next.set("plano", id);
    setSearch(next, { replace: true, preventScrollReset: true });
  };
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="section-container">
          <p className="hosting-eyebrow mb-4">Planos e preços / MyHostVIP</p>
          <h1 className="text-display max-w-4xl mb-5">Hospedagem para <span className="text-primary">cada tipo de projeto.</span></h1>
          <p className="text-body max-w-3xl mb-8">Compare Starter, Profissional e Business. Os preços, capacidades e recursos abaixo são referências da apresentação anterior, não ofertas contratuais confirmadas.</p>
          <section aria-labelledby="comparar-planos" className="mb-8 rounded-xl border border-border bg-card/80 p-3 sm:p-6">
            <p className="hosting-eyebrow mb-2">Decida com clareza</p>
            <h2 id="comparar-planos" className="text-xl font-semibold tracking-tight sm:text-2xl">Compare os planos lado a lado</h2>
            <p className="mt-2 mb-4 text-sm text-muted-foreground">Selecione um plano na tabela para encontrar os detalhes e consultar as condições.</p>
            <table aria-labelledby="comparar-planos" className="w-full table-fixed border-collapse text-[11px] sm:text-sm">
              <caption className="caption-bottom pt-3 text-left text-xs text-muted-foreground">Valores mensais e recursos de referência; confirme as condições e os limites antes de contratar.</caption>
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="w-[22%] px-1 py-2 text-left font-medium text-muted-foreground sm:px-3">Recurso</th>
                  {hostingPlans.map((plan) => (
                    <th key={plan.id} scope="col" className={`rounded-t-md px-0.5 py-1 align-middle sm:px-2 ${selectedPlan?.id === plan.id ? "bg-primary/10" : ""}`}>
                      <button type="button" aria-pressed={selectedPlan?.id === plan.id} aria-label={`Escolher ${plan.name}`} onClick={() => selectPlan(plan.id)}
                        className="min-h-11 w-full rounded-md px-0.5 font-semibold leading-tight [overflow-wrap:anywhere] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        {plan.name}
                        {selectedPlan?.id === plan.id && <span className="block text-[10px] font-medium text-primary">Selecionado</span>}
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Valor ref.", read: (plan: (typeof hostingPlans)[number]) => `R$ ${plan.price}` },
                  { label: "Espaço SSD", read: (plan: (typeof hostingPlans)[number]) => plan.storage },
                  { label: "E-mail", read: (plan: (typeof hostingPlans)[number]) => plan.email },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-border">
                    <th scope="row" className="px-1 py-3 text-left font-medium text-muted-foreground sm:px-3">{row.label}</th>
                    {hostingPlans.map((plan) => (
                      <td key={plan.id} className={`break-words px-1 py-3 text-center font-medium tabular-nums sm:px-3 ${selectedPlan?.id === plan.id ? "bg-primary/10" : ""}`}>{row.read(plan)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 flex min-h-11 flex-wrap items-center justify-between gap-2 rounded-lg border border-primary/40 bg-primary/[0.06] px-3 py-2 text-sm sm:px-4">
              <p aria-live="polite" className="text-foreground">{selectedPlan ? <>Opção selecionada: <strong>{selectedPlan.name}</strong></> : "Escolha uma opção para destacá-la nos cartões abaixo."}</p>
              {selectedPlan && <a href={`#plano-${selectedPlan.id}`} className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary hover:underline">Ir ao plano <ArrowRight className="w-4 h-4" aria-hidden="true" /></a>}
            </div>
          </section>
          <PlanCards full selected={selectedPlan?.id} />
          <aside className="mt-8 border border-border rounded-xl p-5 sm:p-7 grid md:grid-cols-[1fr_auto] gap-4 md:items-center">
            <div>
              <h2 className="font-semibold text-lg">Antes de escolher</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">Confirme vigência, preço de renovação, migração, taxas, limites, suporte e política de cancelamento. A consulta não cria uma assinatura.</p>
            </div>
            <Button asChild variant="hero" className="min-h-11 hosting-press"><Link to="/contato">Tirar dúvidas <ArrowRight aria-hidden="true" /></Link></Button>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Plans;

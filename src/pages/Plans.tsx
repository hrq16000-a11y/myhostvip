import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { PlanCards } from "@/components/landing/PricingSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { hostingPlans } from "@/lib/hosting-plans";

const Plans = () => {
  const [search] = useSearchParams();
  const selectedPlan = hostingPlans.find((p) => p.id === search.get("plano"));
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="section-container">
          <p className="hosting-eyebrow mb-4">Planos e preços / MyHostVIP</p>
          <h1 className="text-display max-w-4xl mb-5">Hospedagem para <span className="text-primary">cada tipo de projeto.</span></h1>
          <p className="text-body max-w-3xl mb-8">Compare Starter, Profissional e Business. Os preços, capacidades e recursos abaixo são referências da apresentação anterior, não ofertas contratuais confirmadas.</p>
          {selectedPlan && <div className="mb-5 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-primary/40 bg-primary/[0.06] px-4 py-2 text-sm"><p className="text-foreground">Opção selecionada: <strong>{selectedPlan.name}</strong></p><a href={`#plano-${selectedPlan.id}`} className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary hover:underline">Ir ao plano <ArrowRight className="w-4 h-4" aria-hidden="true" /></a></div>}
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

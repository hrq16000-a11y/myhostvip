import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ConversionBanner = () => (
  <section className="hosting-section border-t border-border" aria-labelledby="conversion-title">
    <div className="section-container">
      <div className="hosting-console rounded-2xl border border-border p-6 sm:p-10 lg:p-12 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div><p className="hosting-eyebrow mb-3">06 / Próximo passo</p><h2 id="conversion-title" className="hosting-section-title mb-3">Vamos colocar seu projeto online?</h2><p className="text-body max-w-xl">Compare as opções ou converse com a equipe sobre as condições para o seu site.</p></div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild variant="hero" className="h-12 hosting-press"><Link to="/planos">Ver planos <ArrowRight aria-hidden="true"/></Link></Button>
          <Button asChild variant="heroOutline" className="h-12 hosting-press"><Link to="/contato"><MessageCircle aria-hidden="true"/> Fale conosco</Link></Button>
        </div>
      </div>
    </div>
  </section>
);

export default ConversionBanner;

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const ease = [0.2, 0, 0, 1] as const;

const ConversionBanner = () => {
  return (
    <section className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="relative rounded-2xl overflow-hidden p-8 md:p-16 text-center"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--primary) / 0.15) 0%, hsl(var(--accent) / 0.1) 100%)',
            border: '1px solid hsl(var(--border))'
          }}
        >
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }} />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronto para começar?
            </h2>
            <p className="text-body max-w-xl mx-auto mb-8">
              Junte-se a milhares de clientes que já confiam na MyHostVIP.
              Comece hoje mesmo com nosso plano a partir de R$4,99/mês.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/planos">
                <Button variant="hero" size="lg" className="gap-2 text-base px-8 h-12">
                  <Zap className="h-4 w-4" />
                  Começar Agora
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contato">
                <Button variant="heroOutline" size="lg" className="text-base px-8 h-12">
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConversionBanner;

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Zap, Star, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const ease = [0.2, 0, 0, 1] as const;

const plans = [
  {
    name: "Starter",
    price: "4,99",
    icon: Zap,
    popular: false,
    features: [
      "1 GB de espaço SSD",
      "Landing pages (consultar limites)",
      "WordPress",
      "SSL gratuito",
      "Painel cPanel",
      "Instalador de aplicativos",
      "Ferramentas de SEO (a confirmar)",
      "Suporte técnico",
    ],
  },
  {
    name: "Profissional",
    price: "29,99",
    icon: Star,
    popular: true,
    features: [
      "5 GB SSD",
      "Landing pages (consultar limites)",
      "Instalações WordPress (consultar)",
      "Painel administrativo completo",
      "Softaculous",
      "SSL gratuito",
      "Backups automáticos",
      "LiteSpeed",
      "Ferramentas de SEO (a confirmar)",
    ],
  },
  {
    name: "Business",
    price: "69,99",
    icon: Crown,
    popular: false,
    features: [
      "10 GB SSD",
      "Landing pages (consultar limites)",
      "Instalações WordPress (consultar)",
      "LiteSpeed premium",
      "Backups diários",
      "Painel administrativo completo",
      "Instalador automático",
      "Cobertura SSL (consultar)",
      "Prioridade de suporte (consulte condições)",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-card/30" id="planos">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono-data text-primary tracking-widest uppercase mb-3">Planos</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Compare as opções de hospedagem. Valores e recursos da apresentação original devem ser confirmados antes da contratação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className={`rounded-xl p-6 hover-lift relative ${
                plan.popular
                  ? "gradient-border bg-card"
                  : "card-vip"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  Em destaque
                </div>
              )}

              <div className="text-center mb-6 pt-2">
                <plan.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">/mês*</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mb-3">Recursos a confirmar com o atendimento:</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/planos">
                <Button
                  variant={plan.popular ? "hero" : "heroOutline"}
                  className="w-full"
                >
                  Ver condições
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
            * Preços de referência; solicite proposta e termos atualizados.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;

import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Zap, Star, Crown } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const plans = [
  {
    name: "Starter",
    price: "4,99",
    icon: Zap,
    popular: false,
    desc: "Ideal para quem está começando e precisa de uma hospedagem confiável.",
    features: [
      "1 GB de espaço SSD",
      "Landing pages (consultar limites)",
      "WordPress",
      "SSL gratuito",
      "Painel cPanel",
      "Instalador de aplicativos",
      "Ferramentas de SEO (a confirmar)",
      "Suporte técnico",
      "1 conta de email",
      "Limites de tráfego (consultar)",
    ],
  },
  {
    name: "Profissional",
    price: "29,99",
    icon: Star,
    popular: true,
    desc: "Para profissionais e pequenas empresas que precisam de mais recursos.",
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
      "10 contas de email",
      "Limites de tráfego (consultar)",
      "Quantidade de subdomínios (consultar)",
    ],
  },
  {
    name: "Business",
    price: "69,99",
    icon: Crown,
    popular: false,
    desc: "Para empresas que exigem máxima performance e suporte dedicado.",
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
      "Limites de contas de email (consultar)",
      "Limites de tráfego (consultar)",
      "CloudLinux",
      "Firewall avançado",
    ],
  },
];

const Plans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-center mb-16"
          >
            <p className="text-xs font-mono-data text-primary tracking-widest uppercase mb-3">Planos e Preços</p>
            <h1 className="text-display mb-4">
              Hospedagem para <span className="gradient-text">todo projeto</span>
            </h1>
            <p className="text-body max-w-2xl mx-auto">
              Compare as opções Starter, Profissional e Business. Preços, disponibilidade, limites e recursos são referências da apresentação anterior e precisam de confirmação antes de contratar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className={`rounded-xl p-6 hover-lift relative ${
                  plan.popular ? "gradient-border bg-card" : "card-vip"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    Em destaque
                  </div>
                )}
                <div className="text-center mb-6 pt-2">
                  <plan.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h2 className="text-xl font-bold text-foreground mb-1">{plan.name}</h2>
                  <p className="text-xs text-muted-foreground mb-4">{plan.desc}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-muted-foreground">R$</span>
                    <span className="text-5xl font-extrabold text-foreground">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">/mês*</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Recursos apresentados como referência — confirme a disponibilidade:</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={`https://wa.me/5541997452053?text=${encodeURIComponent(`Olá, gostaria de confirmar o preço, os recursos e as condições do plano ${plan.name} da MyHostVIP.`)}`} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant={plan.popular ? "hero" : "heroOutline"} className="w-full">
                    Consultar este plano
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="mt-16 text-center space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
              * Valores de referência: consulte o preço vigente e as condições contratuais
            </div>
            <p className="text-xs text-muted-foreground">
              Solicite por escrito a confirmação de recursos, eventuais taxas, migração, suporte e política de cancelamento antes de contratar.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Plans;

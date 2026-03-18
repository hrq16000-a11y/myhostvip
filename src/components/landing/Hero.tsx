import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, Shield, HardDrive, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ease = [0.2, 0, 0, 1] as const;

const trustBadges = [
  { icon: HardDrive, label: "Servidores SSD" },
  { icon: Shield, label: "SSL Gratuito" },
  { icon: Zap, label: "WordPress" },
  { icon: Search, label: "SEO Otimizado" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
        backgroundSize: '64px 64px'
      }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(ellipse, hsl(var(--primary) / 0.15) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/80 text-muted-foreground text-xs font-medium tracking-tight">
            <span className="status-pip" />
            🔥 Oferta limitada — Plano Starter a partir de R$4,99/mês
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="text-display mb-6"
        >
          Hospedagem rápida e poderosa para criar{" "}
          <span className="gradient-text">sites e landing pages</span>{" "}
          ilimitadas
        </motion.h1>

        {/* Pricing highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="mb-8 inline-flex flex-col items-center"
        >
          <div className="gradient-border rounded-2xl bg-card p-6 text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Plano Starter</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-sm text-muted-foreground">a partir de</span>
              <span className="text-lg text-muted-foreground ml-1">R$</span>
              <span className="text-5xl font-extrabold gradient-text">4,99</span>
              <span className="text-sm text-muted-foreground">/mês</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Landing pages ilimitadas · WordPress · SSL grátis</p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease }}
          className="text-body max-w-2xl mx-auto mb-10"
        >
          Crie sites profissionais em minutos, com WordPress e hospedagem
          otimizada para SEO e anúncios. Servidores SSD com LiteSpeed e suporte 24/7.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/planos">
            <Button variant="hero" size="lg" className="gap-2 text-base px-8 h-12">
              <Zap className="h-4 w-4" />
              Começar Agora
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/planos">
            <Button variant="heroOutline" size="lg" className="gap-2 text-base px-8 h-12">
              Ver Planos
            </Button>
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          {trustBadges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/60 border border-border text-xs text-muted-foreground">
              <b.icon className="h-3.5 w-3.5 text-primary" />
              {b.label}
            </div>
          ))}
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { label: "Uptime", value: "99.9%", sub: "Garantido" },
            { label: "Velocidade", value: "<200ms", sub: "LiteSpeed" },
            { label: "Storage", value: "SSD NVMe", sub: "Ultra-rápido" },
            { label: "Clientes", value: "10K+", sub: "Satisfeitos" },
          ].map((m) => (
            <div key={m.label} className="card-vip-inset p-4 hover-lift text-center">
              <p className="text-xs text-muted-foreground mb-1">{m.label}</p>
              <p className="text-xl font-mono-data font-bold text-foreground">{m.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{m.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

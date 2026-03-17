import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Zap } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
        backgroundSize: '64px 64px'
      }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary text-muted-foreground text-xs font-mono-data tracking-tight mb-8">
            <span className="status-pip" />
            All systems operational
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="text-display leading-[1.05] mb-6"
        >
          Infrastructure for
          <br />
          the 0.1%.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="text-body max-w-xl mx-auto mb-10"
        >
          Provisioned in 14 seconds. Global propagation in 3 minutes.
          Dedicated resources. No shared anything.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="flex items-center justify-center gap-4"
        >
          <Button variant="hero" size="lg" className="gap-2">
            <Zap className="h-4 w-4" />
            Deploy Now
          </Button>
          <Button variant="heroOutline" size="lg" className="gap-2">
            <Shield className="h-4 w-4" />
            View Infrastructure
          </Button>
        </motion.div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {[
            { label: "Uptime SLA", value: "99.99%", sub: "Guaranteed" },
            { label: "Avg Latency", value: "12ms", sub: "Global Edge" },
            { label: "Provision", value: "14s", sub: "Full Stack" },
          ].map((m) => (
            <div key={m.label} className="card-vip-inset p-5 hover-lift">
              <p className="text-xs text-muted-foreground mb-1 tracking-tight">{m.label}</p>
              <p className="text-2xl font-mono-data text-foreground">{m.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{m.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

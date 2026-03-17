import { motion } from "framer-motion";
import { Globe, Server, Shield, Terminal, Cpu, Lock } from "lucide-react";

const ease = [0.2, 0, 0, 1];

const regions = [
  { name: "US East", location: "Virginia", latency: "8ms", status: "operational" },
  { name: "EU West", location: "Frankfurt", latency: "12ms", status: "operational" },
  { name: "AP South", location: "Singapore", latency: "18ms", status: "operational" },
  { name: "US West", location: "Oregon", latency: "11ms", status: "operational" },
];

const features = [
  {
    icon: Server,
    title: "Dedicated Hardware",
    desc: "No noisy neighbors. Bare-metal performance with full root access.",
  },
  {
    icon: Globe,
    title: "Global Edge Network",
    desc: "47 edge locations. Sub-20ms response times worldwide.",
  },
  {
    icon: Shield,
    title: "1-Click SSL",
    desc: "Automatic certificate provisioning and renewal. Zero downtime.",
  },
  {
    icon: Terminal,
    title: "VIP Concierge",
    desc: "Direct SSH support. 90-second average response time.",
  },
  {
    icon: Cpu,
    title: "Auto-Scaling",
    desc: "Scale from 1 to 10,000 instances. Pay for what you use.",
  },
  {
    icon: Lock,
    title: "SOC 2 Compliant",
    desc: "Enterprise-grade security. Full audit logs and access controls.",
  },
];

const InfraGrid = () => {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="mb-16"
      >
        <p className="text-xs font-mono-data text-primary tracking-widest uppercase mb-3">Infrastructure</p>
        <h2 className="text-3xl font-medium tracking-[-0.03em] text-foreground">
          Global. Dedicated. Measured.
        </h2>
      </motion.div>

      {/* Regions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {regions.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease }}
            className="card-vip-inset p-5 hover-lift"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono-data text-muted-foreground">{r.name}</span>
              <span className="status-pip" />
            </div>
            <p className="text-sm text-foreground font-medium">{r.location}</p>
            <p className="text-xl font-mono-data text-foreground mt-1">{r.latency}</p>
          </motion.div>
        ))}
      </div>

      {/* Features bento */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06, ease }}
            className="card-vip p-6 hover-lift group"
          >
            <f.icon className="h-5 w-5 text-primary mb-4 transition-all duration-200 group-hover:text-foreground" />
            <h3 className="text-sm font-medium text-foreground tracking-tight mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InfraGrid;

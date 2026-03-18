import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Server, HardDrive, Shield, Zap, Lock, Globe, Cpu, Database } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const infraFeatures = [
  { icon: HardDrive, title: "Servidor SSD NVMe", desc: "Armazenamento de alta velocidade com leituras de até 3.500 MB/s para máxima performance." },
  { icon: Zap, title: "LiteSpeed Web Server", desc: "O servidor web mais rápido do mercado, até 12x mais veloz que Apache com cache integrado." },
  { icon: Globe, title: "HTTP/3 + QUIC", desc: "Protocolo de última geração para conexões mais rápidas e seguras." },
  { icon: Cpu, title: "CloudLinux", desc: "Isolamento de recursos por conta, garantindo estabilidade mesmo em hospedagem compartilhada." },
  { icon: Shield, title: "Proteção Anti-DDoS", desc: "Firewall avançado que detecta e bloqueia ataques em tempo real." },
  { icon: Lock, title: "Firewall de Aplicação (WAF)", desc: "Proteção contra SQL injection, XSS e outras vulnerabilidades web." },
  { icon: Database, title: "MySQL + MariaDB", desc: "Bancos de dados otimizados para WordPress e aplicações PHP." },
  { icon: Server, title: "Backups Automáticos", desc: "Backups regulares com restauração em 1 clique. Seus dados sempre seguros." },
];

const techSpecs = [
  { label: "PHP", value: "8.0, 8.1, 8.2, 8.3+" },
  { label: "MySQL", value: "8.0" },
  { label: "MariaDB", value: "10.6+" },
  { label: "LiteSpeed", value: "6.x Enterprise" },
  { label: "CloudLinux", value: "8.x" },
  { label: "SSL", value: "Let's Encrypt Auto" },
  { label: "Softaculous", value: "400+ apps" },
  { label: "cPanel", value: "Última versão" },
];

const Hosting = () => {
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
            <p className="text-xs font-mono-data text-primary tracking-widest uppercase mb-3">Infraestrutura</p>
            <h1 className="text-display mb-4">
              Hospedagem <span className="gradient-text">profissional</span> de verdade
            </h1>
            <p className="text-body max-w-2xl mx-auto mb-8">
              Infraestrutura enterprise com SSD NVMe, LiteSpeed, CloudLinux e segurança avançada.
            </p>
            <Link to="/planos">
              <Button variant="hero" size="lg">Ver Planos</Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {infraFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease }}
                className="card-vip p-6 hover-lift group"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech Specs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="card-vip p-8 max-w-3xl mx-auto"
          >
            <h2 className="text-xl font-bold text-foreground mb-6 text-center">Especificações Técnicas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techSpecs.map((s) => (
                <div key={s.label} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <span className="text-sm text-muted-foreground">{s.label}</span>
                  <span className="text-sm font-mono-data font-semibold text-foreground">{s.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Hosting;

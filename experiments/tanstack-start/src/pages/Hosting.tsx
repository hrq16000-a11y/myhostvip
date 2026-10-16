import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Server, HardDrive, Shield, Zap, Lock, Globe, Cpu, Database } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const infraFeatures = [
  { icon: HardDrive, title: "Servidor SSD NVMe", desc: "Consulte tecnologia, capacidade e medições reais do armazenamento da oferta." },
  { icon: Zap, title: "LiteSpeed Web Server", desc: "Pergunte qual servidor HTTP e quais configurações de cache estão disponíveis." },
  { icon: Globe, title: "HTTP/3 + QUIC", desc: "Confirme se o servidor e o domínio oferecem HTTP/3 e QUIC." },
  { icon: Cpu, title: "CloudLinux", desc: "Verifique as políticas de isolamento e os limites de cada conta." },
  { icon: Shield, title: "Proteção Anti-DDoS", desc: "Consulte medidas efetivas de mitigação e limitações de proteção." },
  { icon: Lock, title: "Firewall de Aplicação (WAF)", desc: "Confirme a existência e a configuração de WAF no servidor escolhido." },
  { icon: Database, title: "MySQL + MariaDB", desc: "Verifique versões, cotas e tecnologias de banco de dados suportadas." },
  { icon: Server, title: "Backups Automáticos", desc: "Solicite periodicidade, retenção, responsabilidade e procedimento de restauração." },
];

const techSpecs = [
  { label: "PHP", value: "Consulte versões mantidas" },
  { label: "MySQL", value: "Consulte a versão" },
  { label: "MariaDB", value: "Consulte a versão" },
  { label: "LiteSpeed", value: "Consulte a edição" },
  { label: "CloudLinux", value: "Consulte a versão" },
  { label: "SSL", value: "Consulte emissão e renovação" },
  { label: "Softaculous", value: "Consulte catálogo" },
  { label: "cPanel", value: "Consulte versão e licença" },
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
              Confira as características técnicas oferecidas no plano escolhido. Os detalhes variam conforme a contratação.
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
            <h2 className="text-xl font-bold text-foreground mb-3 text-center">Especificações a confirmar</h2>
            <p className="text-sm text-muted-foreground text-center mb-6">As versões abaixo são referências históricas da apresentação do projeto; confirme disponibilidade e suporte antes de contratar.</p>
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

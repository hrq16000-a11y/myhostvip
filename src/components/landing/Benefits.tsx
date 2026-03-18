import { motion } from "framer-motion";
import {
  Globe, Server, Shield, Zap, Cpu, Lock, Search, HardDrive
} from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const benefits = [
  { icon: Globe, title: "Landing Pages Ilimitadas", desc: "Crie quantas páginas quiser sem limites. Ideal para campanhas de marketing e anúncios." },
  { icon: Zap, title: "WordPress em 1 Clique", desc: "Instalação automática do WordPress com Softaculous. Seu site pronto em segundos." },
  { icon: Search, title: "SEO Automático", desc: "Ferramentas integradas de otimização para mecanismos de busca. Apareça no Google." },
  { icon: Server, title: "LiteSpeed Ultrarrápido", desc: "Servidor web mais rápido do mercado. Até 12x mais rápido que Apache." },
  { icon: Cpu, title: "Painel cPanel", desc: "Gerencie seu site com o painel mais popular e profissional do mundo." },
  { icon: Lock, title: "Backups Automáticos", desc: "Seus dados protegidos com backups regulares. Restaure a qualquer momento." },
  { icon: Shield, title: "SSL Gratuito", desc: "Certificado SSL incluso em todos os planos. Site seguro com HTTPS." },
  { icon: HardDrive, title: "Proteção Anti-DDoS", desc: "Firewall avançado e proteção contra ataques. Seu site sempre no ar." },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono-data text-primary tracking-widest uppercase mb-3">Por que escolher a MyHostVIP?</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Hospedagem completa com ferramentas profissionais para criar, gerenciar e escalar seus projetos online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((f, i) => (
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
      </div>
    </section>
  );
};

export default Benefits;

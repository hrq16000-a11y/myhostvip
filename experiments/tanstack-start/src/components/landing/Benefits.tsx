import { motion } from "framer-motion";
import {
  Globe, Server, Shield, Zap, Cpu, Lock, Search, HardDrive
} from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const benefits = [
  { icon: Globe, title: "Landing Pages e limites", desc: "Consulte limites de sites, páginas, domínios e recursos no plano ofertado." },
  { icon: Zap, title: "WordPress em 1 Clique", desc: "Confirme o instalador, as versões suportadas e a assistência disponível." },
  { icon: Search, title: "SEO e conteúdo", desc: "SEO exige conteúdo, técnica e avaliação contínua; não há garantia de posição no Google." },
  { icon: Server, title: "Servidor e cache", desc: "Peça informações sobre servidor, cache e medições de performance." },
  { icon: Cpu, title: "Painel cPanel", desc: "Verifique a disponibilidade e o licenciamento do painel do seu plano." },
  { icon: Lock, title: "Backups Automáticos", desc: "Consulte frequência, retenção, custo e processo de recuperação." },
  { icon: Shield, title: "SSL Gratuito", desc: "Confirme emissão, cobertura e renovação de certificado SSL no contrato." },
  { icon: HardDrive, title: "Proteção Anti-DDoS", desc: "Solicite detalhes sobre controles de segurança e políticas de disponibilidade." },
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
            Recursos e critérios para escolher sua hospedagem
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Compare serviços disponíveis, limites e condições para escolher uma hospedagem adequada.
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

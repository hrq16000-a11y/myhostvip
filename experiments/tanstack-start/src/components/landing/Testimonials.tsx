import { motion } from "framer-motion";
import { ClipboardCheck, HardDrive, ShieldCheck, Headphones } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

// Editorial decision criteria, not invented testimonials or performance claims.
const criteria = [
  {
    icon: HardDrive,
    title: "Espaço e crescimento",
    description: "Compare armazenamento, limites técnicos e possibilidades de expansão de cada plano antes de escolher.",
  },
  {
    icon: ClipboardCheck,
    title: "Recursos e compatibilidade",
    description: "Confirme o suporte a WordPress, banco de dados, versões de PHP e outras ferramentas do seu projeto.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e recuperação",
    description: "Verifique as condições reais de SSL, backups, restauração e medidas de proteção disponíveis.",
  },
  {
    icon: Headphones,
    title: "Canais de atendimento",
    description: "Consulte os horários, o escopo e os canais de suporte antes de contratar uma hospedagem.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono-data text-primary tracking-widest uppercase mb-3">Guia de decisão</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            O que avaliar antes de escolher uma hospedagem
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Critérios úteis para comparar ofertas, definir prioridades e escolher com mais segurança.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {criteria.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="card-vip p-6 hover-lift"
            >
              <item.icon aria-hidden="true" className="h-5 w-5 text-primary mb-3" />
              <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

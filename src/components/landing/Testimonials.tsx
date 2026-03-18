import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Empreendedor Digital",
    text: "Criei meu site em minutos e já estou recebendo clientes. A hospedagem é muito rápida e o suporte é excelente!",
  },
  {
    name: "Ana Rodrigues",
    role: "Designer Freelancer",
    text: "O melhor custo-benefício que encontrei. Landing pages ilimitadas e WordPress funcionando perfeitamente.",
  },
  {
    name: "Marcos Oliveira",
    role: "Agência de Marketing",
    text: "Migramos 50 sites para a MyHostVIP e a performance melhorou absurdamente. LiteSpeed faz toda a diferença.",
  },
  {
    name: "Juliana Costa",
    role: "E-commerce",
    text: "O SSL gratuito e a proteção DDoS me dão total segurança. Recomendo para qualquer negócio online.",
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
          <p className="text-xs font-mono-data text-primary tracking-widest uppercase mb-3">Depoimentos</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="card-vip p-6 hover-lift"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

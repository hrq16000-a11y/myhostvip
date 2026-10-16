import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DollarSign, Link2, BarChart3, Users, Gift, TrendingUp } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const benefits = [
  { icon: DollarSign, title: "Critérios de Indicação", desc: "Entenda quais indicações podem ser aceitas, caso exista programa ativo." },
  { icon: Link2, title: "Links e Rastreio", desc: "Consulte se existe uma forma oficial de identificar indicações." },
  { icon: BarChart3, title: "Relatórios", desc: "Pergunte como os resultados são acompanhados antes de iniciar uma parceria." },
  { icon: Users, title: "Regras de Participação", desc: "Verifique restrições, elegibilidade e limites eventualmente aplicáveis." },
  { icon: Gift, title: "Condições Financeiras", desc: "Comissões, bônus e datas de pagamento dependem de confirmação formal." },
  { icon: TrendingUp, title: "Prazo e Contrato", desc: "Confirme duração, cancelamento e responsabilidades antes de começar." },
];

const steps = [
  { step: "1", title: "Converse", desc: "Peça informações sobre a disponibilidade de parcerias." },
  { step: "2", title: "Avalie as condições", desc: "Confirme regras, serviços elegíveis e eventual remuneração antes de indicar." },
  { step: "3", title: "Formalize", desc: "Só divulgue ofertas ou comissões depois de receber as condições confirmadas." },
];

const Affiliates = () => {
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
            <p className="text-xs font-mono-data text-primary tracking-widest uppercase mb-3">Programa de Afiliados</p>
            <h1 className="text-display mb-4">
              Conheça possibilidades de <span className="gradient-text">parceria</span> com a MyHostVIP
            </h1>
            <p className="text-body max-w-2xl mx-auto mb-8">
              Tem interesse em indicar clientes? Consulte diretamente a equipe sobre a existência e as condições atuais de eventuais parcerias, sem promessas de remuneração antecipadas.
            </p>
            <a href="https://wa.me/5541997452053?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20as%20condi%C3%A7%C3%B5es%20de%20parceria%20com%20a%20MyHostVIP" target="_blank" rel="noopener noreferrer"><Button variant="hero" size="lg">Consultar parcerias pelo WhatsApp</Button></a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="card-vip-inset p-6 text-center hover-lift"
              >
                <div className="text-4xl font-extrabold text-primary/30 mb-3">{s.step}</div>
                <h3 className="text-base font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease }}
                className="card-vip p-6 hover-lift group"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Affiliates;

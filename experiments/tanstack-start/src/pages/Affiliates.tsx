import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DollarSign, Link2, BarChart3, Users, Gift, TrendingUp } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const benefits = [
  { icon: DollarSign, title: "Comissão por Venda", desc: "Ganhe comissão recorrente para cada cliente que você indicar." },
  { icon: Link2, title: "Links Personalizados", desc: "Receba links exclusivos de afiliado para rastrear suas indicações." },
  { icon: BarChart3, title: "Painel de Afiliado", desc: "Acompanhe vendas, comissões e métricas em tempo real." },
  { icon: Users, title: "Sem Limite de Indicações", desc: "Indique quantos clientes quiser. Sem teto de ganhos." },
  { icon: Gift, title: "Bônus por Desempenho", desc: "Ganhe bônus extras ao atingir metas de vendas mensais." },
  { icon: TrendingUp, title: "Comissão Recorrente", desc: "Enquanto o cliente estiver ativo, você continua ganhando." },
];

const steps = [
  { step: "1", title: "Cadastre-se", desc: "Crie sua conta de afiliado gratuitamente." },
  { step: "2", title: "Compartilhe", desc: "Divulgue seu link personalizado nas redes sociais, blog ou email." },
  { step: "3", title: "Ganhe", desc: "Receba comissão por cada venda realizada através do seu link." },
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
              Ganhe dinheiro <span className="gradient-text">indicando</span> a MyHostVIP
            </h1>
            <p className="text-body max-w-2xl mx-auto mb-8">
              Torne-se um afiliado e receba comissões recorrentes por cada cliente que você trouxer para nossa plataforma.
            </p>
            <Button variant="hero" size="lg">Tornar-se Afiliado</Button>
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

import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Layout, PenTool, Palette, MousePointer, Blocks, Sparkles } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const features = [
  { icon: Layout, title: "WordPress", desc: "Conheça o uso do WordPress e confirme se o seu plano inclui instalação assistida." },
  { icon: Palette, title: "Templates Profissionais", desc: "Explore tipos de layout e pergunte quais modelos estão disponíveis." },
  { icon: PenTool, title: "Editor Visual", desc: "Considere ferramentas de edição visual compatíveis com seu site e plano." },
  { icon: MousePointer, title: "Instalação em 1 Clique", desc: "Confirme se seu painel permite instalação automática de WordPress e extensões." },
  { icon: Blocks, title: "Personalização Completa", desc: "Adapte aparência e conteúdo conforme o tema e os recursos contratados." },
  { icon: Sparkles, title: "Plugins e Extensões", desc: "Verifique compatibilidade, licenças, segurança e custo dos plugins escolhidos." },
];

const steps = [
  { step: "01", title: "Escolha seu plano", desc: "Selecione o plano que melhor atende às suas necessidades." },
  { step: "02", title: "Instale o WordPress", desc: "Confirme com o suporte como instalar e configurar WordPress no plano." },
  { step: "03", title: "Personalize seu site", desc: "Escolha um template e customize como quiser." },
  { step: "04", title: "Publique!", desc: "Revise domínio, SSL, configuração e testes antes de publicar." },
];

const SiteBuilder = () => {
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
            <p className="text-xs font-mono-data text-primary tracking-widest uppercase mb-3">Criador de Sites</p>
            <h1 className="text-display mb-4">
              Crie sites <span className="gradient-text">com WordPress</span> e ferramentas visuais
            </h1>
            <p className="text-body max-w-2xl mx-auto mb-8">
              Explore como montar um site com WordPress. O tempo, a configuração e as ferramentas dependem do projeto e do plano.
            </p>
            <Link to="/planos">
              <Button variant="hero" size="lg">Começar Agora</Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
            {features.map((f, i) => (
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

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Como funciona</h2>
            <p className="text-body max-w-xl mx-auto">Quatro etapas de referência para planejar um site.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="card-vip-inset p-6 text-center hover-lift"
              >
                <div className="text-3xl font-extrabold text-primary/30 mb-3">{s.step}</div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SiteBuilder;

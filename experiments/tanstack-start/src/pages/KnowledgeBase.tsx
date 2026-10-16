import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { BookOpen, Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const ease = [0.2, 0, 0, 1] as const;

const kbCategories = [
  {
    title: "Primeiros Passos",
    articles: [
      "Como criar sua conta na MyHostVIP",
      "Como escolher seu plano de hospedagem",
      "Como acessar o painel cPanel",
      "Como configurar seu domínio",
    ],
  },
  {
    title: "WordPress",
    articles: [
      "Como instalar WordPress em 1 clique",
      "Como escolher e instalar um tema WordPress",
      "Como instalar plugins no WordPress",
      "Como otimizar a velocidade do WordPress",
    ],
  },
  {
    title: "Landing Pages",
    articles: [
      "Como criar sua primeira landing page",
      "Como otimizar landing pages para conversão",
      "Como conectar landing pages a Google Ads",
      "Como configurar formulários de captura",
    ],
  },
  {
    title: "Email",
    articles: [
      "Como criar contas de email profissional",
      "Como configurar email no celular",
      "Como acessar o Webmail",
      "Como configurar redirecionamento de email",
    ],
  },
  {
    title: "Domínios",
    articles: [
      "Como registrar um domínio",
      "Como apontar domínio para a hospedagem",
      "Como configurar DNS",
      "Como transferir um domínio",
    ],
  },
  {
    title: "Segurança",
    articles: [
      "Como ativar o certificado SSL",
      "Como proteger seu site contra ataques",
      "Como fazer backup do seu site",
      "Como restaurar um backup",
    ],
  },
];

const KnowledgeBase = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-center mb-12"
          >
            <p className="text-xs font-mono-data text-primary tracking-widest uppercase mb-3">Central de Ajuda</p>
            <h1 className="text-display mb-4">
              Base de <span className="gradient-text">Conhecimento</span>
            </h1>
            <p className="text-body max-w-2xl mx-auto mb-8">
              Tutoriais e guias passo a passo para ajudar você a aproveitar ao máximo sua hospedagem.
            </p>

            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar artigos..."
                className="pl-10 bg-card border-border"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kbCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease }}
                className="card-vip p-6 hover-lift"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-base font-bold text-foreground">{cat.title}</h2>
                </div>
                <ul className="space-y-2">
                  {cat.articles.map((article) => (
                    <li key={article}>
                      <a href="https://wa.me/5541997452053?text=quero%20uma%20hospedagem%20de%20sites" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group py-1">
                        <ChevronRight className="h-3 w-3 text-primary group-hover:translate-x-0.5 transition-transform" />
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default KnowledgeBase;

import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { BookOpen, Search, ChevronRight } from "lucide-react";
import { useState } from "react";
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
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLocaleLowerCase("pt-BR");
  const filteredCategories = kbCategories
    .map(category => ({
      ...category,
      articles: category.articles.filter(topic =>
        topic.toLocaleLowerCase("pt-BR").includes(normalized) ||
        category.title.toLocaleLowerCase("pt-BR").includes(normalized)
      ),
    }))
    .filter(category => category.articles.length > 0);

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
              Lista de assuntos de suporte em preparação. Os títulos abaixo ainda não são artigos completos; use a busca para filtrar temas e consulte a equipe se precisar de ajuda.
            </p>

            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                aria-label="Buscar temas na base de conhecimento"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Buscar temas..."
                className="pl-10 bg-card border-border"
              />
            </div>
          </motion.div>

          <p className="text-sm text-muted-foreground mb-6" role="status">
            {filteredCategories.reduce((total, category) => total + category.articles.length, 0)} temas em preparação encontrados.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat, i) => (
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
                      <span className="flex items-center gap-2 text-sm text-muted-foreground py-1">
                        <ChevronRight className="h-3 w-3 text-primary group-hover:translate-x-0.5 transition-transform" />
                        {article}
                      </span>
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

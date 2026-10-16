import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Layout, FileText, ShoppingCart, Briefcase, Camera } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const categories = [
  {
    icon: Layout,
    title: "Landing Pages",
    count: "Exemplos de formatos",
    desc: "Páginas de captura otimizadas para conversão. Ideal para campanhas de marketing.",
    templates: ["Captura de Leads", "Lançamento de Produto", "Webinar", "E-book Download", "App Landing"],
  },
  {
    icon: FileText,
    title: "Blogs",
    count: "Exemplos de formatos",
    desc: "Templates para blogs profissionais com layouts modernos e responsivos.",
    templates: ["Blog Pessoal", "Blog Corporativo", "Magazine", "Portfólio Blog", "Travel Blog"],
  },
  {
    icon: Briefcase,
    title: "Sites Empresariais",
    count: "Exemplos de formatos",
    desc: "Sites institucionais para empresas de todos os tamanhos.",
    templates: ["Agência Digital", "Consultoria", "Escritório de Advocacia", "Contabilidade", "Startup"],
  },
  {
    icon: Camera,
    title: "Portfólios",
    count: "Exemplos de formatos",
    desc: "Mostre seu trabalho com elegância e profissionalismo.",
    templates: ["Fotógrafo", "Designer", "Desenvolvedor", "Artista", "Freelancer"],
  },
  {
    icon: ShoppingCart,
    title: "Páginas de Vendas",
    count: "Exemplos de formatos",
    desc: "Estruturas de páginas voltadas à apresentação de produtos e serviços.",
    templates: ["Produto Digital", "Curso Online", "SaaS", "E-commerce", "Serviço Local"],
  },
];

const Templates = () => {
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
            <p className="text-xs font-mono-data text-primary tracking-widest uppercase mb-3">Templates</p>
            <h1 className="text-display mb-4">
              Ideias de <span className="gradient-text">templates</span> para seu projeto
            </h1>
            <p className="text-body max-w-2xl mx-auto">
              Explore formatos e estilos que podem inspirar seu projeto. Esta página não representa um catálogo de arquivos já disponíveis para download; consulte a equipe sobre modelos e serviços.
            </p>
          </motion.div>

          <div className="space-y-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="card-vip p-6 hover-lift"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex items-center gap-4 md:w-1/3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <cat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">{cat.title}</h3>
                      <p className="text-xs font-mono-data text-primary">{cat.count}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground md:w-1/3">{cat.desc}</p>
                  <div className="md:w-1/3 flex flex-wrap gap-2">
                    {cat.templates.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-secondary text-xs text-muted-foreground border border-border">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mt-16 text-center"
          >
            <Link to="/contato">
              <Button variant="hero" size="lg">Consultar modelos disponíveis</Button>
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Templates;

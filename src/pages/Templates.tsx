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
    count: "45+ templates",
    desc: "Páginas de captura otimizadas para conversão. Ideal para campanhas de marketing.",
    templates: ["Captura de Leads", "Lançamento de Produto", "Webinar", "E-book Download", "App Landing"],
  },
  {
    icon: FileText,
    title: "Blogs",
    count: "30+ templates",
    desc: "Templates para blogs profissionais com layouts modernos e responsivos.",
    templates: ["Blog Pessoal", "Blog Corporativo", "Magazine", "Portfólio Blog", "Travel Blog"],
  },
  {
    icon: Briefcase,
    title: "Sites Empresariais",
    count: "50+ templates",
    desc: "Sites institucionais para empresas de todos os tamanhos.",
    templates: ["Agência Digital", "Consultoria", "Escritório de Advocacia", "Contabilidade", "Startup"],
  },
  {
    icon: Camera,
    title: "Portfólios",
    count: "25+ templates",
    desc: "Mostre seu trabalho com elegância e profissionalismo.",
    templates: ["Fotógrafo", "Designer", "Desenvolvedor", "Artista", "Freelancer"],
  },
  {
    icon: ShoppingCart,
    title: "Páginas de Vendas",
    count: "35+ templates",
    desc: "Templates de alta conversão para vender produtos e serviços online.",
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
              Templates <span className="gradient-text">prontos</span> para WordPress
            </h1>
            <p className="text-body max-w-2xl mx-auto">
              Mais de 185 templates profissionais para qualquer tipo de projeto. Todos responsivos e otimizados para SEO.
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
            <Link to="/planos">
              <Button variant="hero" size="lg">Acessar Templates</Button>
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Templates;

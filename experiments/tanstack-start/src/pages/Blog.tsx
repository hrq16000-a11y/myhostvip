import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Tag } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const categories = ["Hospedagem", "SEO", "Criação de Sites", "Marketing Digital", "WordPress"];

const posts = [
  {
    title: "Como escolher a melhor hospedagem para seu site",
    excerpt: "Guia completo com tudo que você precisa saber antes de contratar um serviço de hospedagem.",
    category: "Hospedagem",
    date: "15 Mar 2026",
    slug: "#",
  },
  {
    title: "10 dicas de SEO para ranquear no Google em 2026",
    excerpt: "Estratégias atualizadas de SEO para melhorar o posicionamento do seu site nos mecanismos de busca.",
    category: "SEO",
    date: "12 Mar 2026",
    slug: "#",
  },
  {
    title: "WordPress vs Site Builders: qual é melhor?",
    excerpt: "Comparativo detalhado entre WordPress e construtores de sites modernos.",
    category: "WordPress",
    date: "10 Mar 2026",
    slug: "#",
  },
  {
    title: "Como criar landing pages que convertem",
    excerpt: "Aprenda a criar páginas de captura que transformam visitantes em clientes.",
    category: "Marketing Digital",
    date: "08 Mar 2026",
    slug: "#",
  },
  {
    title: "Guia completo do cPanel para iniciantes",
    excerpt: "Tudo que você precisa saber para gerenciar seu site pelo cPanel.",
    category: "Hospedagem",
    date: "05 Mar 2026",
    slug: "#",
  },
  {
    title: "Como otimizar a velocidade do seu site WordPress",
    excerpt: "Técnicas avançadas para deixar seu WordPress ultrarrápido com LiteSpeed.",
    category: "WordPress",
    date: "02 Mar 2026",
    slug: "#",
  },
];

const Blog = () => {
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
            <p className="text-xs font-mono-data text-primary tracking-widest uppercase mb-3">Blog</p>
            <h1 className="text-display mb-4">
              Dicas e <span className="gradient-text">tutoriais</span>
            </h1>
            <p className="text-body max-w-2xl mx-auto">
              Conteúdo atualizado sobre hospedagem, SEO, WordPress e marketing digital.
            </p>
          </motion.div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium">Todos</button>
            {categories.map((c) => (
              <button key={c} className="px-4 py-2 rounded-lg bg-secondary text-muted-foreground text-xs font-medium hover:text-foreground transition-colors border border-border">
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease }}
                className="card-vip overflow-hidden hover-lift group"
              >
                <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary/20">{post.category.charAt(0)}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1 text-xs text-primary">
                      <Tag className="h-3 w-3" />{post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />{post.date}
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;

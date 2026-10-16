import { motion } from "framer-motion";
import { Layout, FileText, ShoppingCart, Megaphone, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ease = [0.2, 0, 0, 1] as const;

const siteTypes = [
  { icon: Layout, title: "Sites Profissionais", desc: "Sites institucionais e corporativos com design moderno." },
  { icon: FileText, title: "Landing Pages", desc: "Páginas para organizar campanhas, formulários e jornadas de contato." },
  { icon: PenTool, title: "Blogs", desc: "Crie um blog completo com WordPress e compartilhe conteúdo." },
  { icon: ShoppingCart, title: "Páginas de Vendas", desc: "Páginas para apresentar ofertas e orientar o próximo passo do visitante." },
  { icon: Megaphone, title: "Páginas para Google Ads", desc: "Landing pages otimizadas para campanhas de anúncios pagos." },
];

const SiteCreation = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-xs font-mono-data text-primary tracking-widest uppercase mb-3">Criador de Sites</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Planeje seu projeto de site com mais clareza
            </h2>
            <p className="text-body mb-8">
              Use WordPress e ferramentas visuais conforme suas necessidades. Confirme a disponibilidade de temas, instalação assistida e serviços incluídos no plano.
            </p>
            <Link to="/criador-de-sites">
              <Button variant="hero" size="lg">Saiba Mais</Button>
            </Link>
          </motion.div>

          <div className="space-y-3">
            {siteTypes.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="card-vip p-4 hover-lift flex items-start gap-4"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteCreation;

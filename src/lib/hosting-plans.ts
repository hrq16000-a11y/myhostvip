import { Crown, Star, Zap } from "lucide-react";

// Historical presentation values, preserved as references, not contractual offers.
export const hostingPlans = [
  {
    id: "starter", name: "Starter", price: "4,99", icon: Zap,
    audience: "Primeiro site ou landing page",
    description: "Para começar com um projeto e entender o ambiente de hospedagem.",
    storage: "1 GB SSD", email: "1 conta",
    features: ["WordPress e instalador de aplicativos", "Painel cPanel", "SSL e ferramentas de SEO", "Landing pages, tráfego e suporte (consultar limites)"],
    question: "Qual o espaço, o prazo e o suporte disponíveis para começar?",
  },
  {
    id: "profissional", name: "Profissional", price: "29,99", icon: Star,
    audience: "Negócios e campanhas",
    description: "Para quem quer organizar mais projetos e recursos de gestão.",
    storage: "5 GB SSD", email: "10 contas",
    features: ["WordPress e Softaculous", "Painel administrativo", "SSL, backups e LiteSpeed", "Landing pages, tráfego e subdomínios (consultar limites)", "Ferramentas de SEO"],
    question: "Quais limites de sites, contas de e-mail e backups atendem meu projeto?",
  },
  {
    id: "business", name: "Business", price: "69,99", icon: Crown,
    audience: "Projetos com mais demanda",
    description: "Para avaliar maior capacidade, segurança e condições de suporte.",
    storage: "10 GB SSD", email: "Consultar limites",
    features: ["WordPress e instalador", "Painel administrativo, LiteSpeed e CloudLinux", "Backups diários, SSL e firewall", "Landing pages, tráfego e suporte prioritário (consultar condições)"],
    question: "Quais são os recursos, o suporte e as condições de expansão disponíveis?",
  },
] as const;

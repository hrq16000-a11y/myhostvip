import { Link } from "react-router-dom";
import { Shield, Lock, Zap } from "lucide-react";
import logo from "@/assets/logo-myhostvip.png";

const footerLinks = {
  Hospedagem: [
    { label: "Planos", href: "/planos" },
    { label: "Hospedagem WordPress", href: "/hospedagem" },
    { label: "Criador de Sites", href: "/criador-de-sites" },
    { label: "Recursos", href: "/recursos" },
  ],
  Recursos: [
    { label: "Templates", href: "/templates" },
    { label: "Blog", href: "/blog" },
    { label: "Base de Conhecimento", href: "/base-de-conhecimento" },
    { label: "Programa de Afiliados", href: "/afiliados" },
  ],
  Empresa: [
    { label: "Sobre Nós", href: "https://wa.me/5541997452053?text=quero%20uma%20hospedagem%20de%20sites" },
    { label: "Contato", href: "/contato" },
    { label: "Termos de Uso", href: "https://wa.me/5541997452053?text=quero%20uma%20hospedagem%20de%20sites" },
    { label: "Política de Privacidade", href: "https://wa.me/5541997452053?text=quero%20uma%20hospedagem%20de%20sites" },
  ],
};

const badges = [
  { icon: Shield, label: "SSL Grátis" },
  { icon: Lock, label: "Anti-DDoS" },
  { icon: Zap, label: "LiteSpeed" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="MyHostVIP" className="h-9" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Hospedagem profissional com performance SSD, LiteSpeed e suporte WordPress completo.
            </p>
            <div className="flex gap-3">
              {badges.map((b) => (
                <div key={b.label} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-secondary text-xs text-muted-foreground">
                  <b.icon className="h-3 w-3 text-primary" />
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 MyHostVIP. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            CNPJ: 00.000.000/0001-00 · myhostvip.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import { WHATSAPP_URL } from "@/lib/whatsapp";
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
    { label: "Sobre a MyHostVIP (consulta)", href: "/contato" },
    { label: "Contato", href: "/contato" },
    { label: "Solicitar termos de uso", href: WHATSAPP_URL },
    { label: "Solicitar política de privacidade", href: WHATSAPP_URL },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="section-container pt-12 pb-24 sm:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="MyHostVIP" className="h-9" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Hospedagem para sites e landing pages. Consulte os recursos e condições do plano antes de contratar.
            </p>

          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
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
            MyHostVIP · Informações comerciais sob consulta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

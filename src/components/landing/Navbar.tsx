import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-myhostvip.png";

const navLinks = [
  { label: "Hospedagem", href: "/hospedagem" },
  { label: "Planos", href: "/planos" },
  { label: "Criador de Sites", href: "/criador-de-sites" },
  { label: "Recursos", href: "/recursos" },
  { label: "Templates", href: "/templates" },
  { label: "Afiliados", href: "/afiliados" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <nav aria-label="Navegação principal" onKeyDown={(event) => { if (event.key === "Escape" && mobileOpen) { setMobileOpen(false); menuButton.current?.focus(); } }} className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95">
      <div className="section-container h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MyHostVIP" className="h-9 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.slice(0, 6).map((link) => (
            <Link
              key={link.href}
              to={link.href}
              aria-current={location.pathname === link.href ? "page" : undefined}
              className={`px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                location.pathname === link.href
                  ? "text-foreground bg-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="hero" size="sm" className="gap-1.5 min-h-11 hosting-press"><Link to="/planos">Começar Agora</Link></Button>
        </div>

        <button
          type="button" ref={menuButton} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden size-11 flex items-center justify-center text-foreground hover:text-primary hosting-press"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
          <div id="mobile-navigation" className="lg:hidden border-t border-border bg-background max-h-[calc(100dvh-64px)] overflow-y-auto">
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={location.pathname === link.href ? "page" : undefined}
                  className={`px-3 py-3 min-h-11 text-sm rounded-md transition-colors ${
                    location.pathname === link.href
                      ? "text-foreground bg-secondary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-border mt-2">
                <Button asChild variant="hero" className="w-full min-h-11"><Link to="/planos" onClick={() => setMobileOpen(false)}>Começar Agora</Link></Button>
              </div>
            </div>
          </div>
        )}
    </nav>
  );
};

export default Navbar;

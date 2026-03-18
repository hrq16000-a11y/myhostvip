import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-myhostvip.png";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="section-container h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <Server className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-base font-bold tracking-tight text-foreground">MyHostVIP</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.slice(0, 6).map((link) => (
            <Link
              key={link.href}
              to={link.href}
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
          <Link to="/planos">
            <Button variant="hero" size="sm" className="gap-1.5">
              Começar Agora
            </Button>
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2.5 text-sm rounded-md transition-colors ${
                    location.pathname === link.href
                      ? "text-foreground bg-secondary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-border mt-2">
                <Link to="/planos" onClick={() => setMobileOpen(false)}>
                  <Button variant="hero" className="w-full">Começar Agora</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

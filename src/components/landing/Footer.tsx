import { Server } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Server className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium tracking-tight text-foreground">MyHostVIP</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 MyHostVIP. Infrastructure for the 0.1%.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

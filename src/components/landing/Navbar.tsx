import { Button } from "@/components/ui/button";
import { Server } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Server className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium tracking-tight text-foreground">MyHostVIP</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200">Infrastructure</a>
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200">Pricing</a>
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200">Documentation</a>
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200">Status</a>
        </div>
        <Button variant="hero" size="sm">Deploy</Button>
      </div>
    </nav>
  );
};

export default Navbar;

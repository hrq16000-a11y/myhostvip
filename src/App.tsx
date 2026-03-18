import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhatsAppFloat from "./components/WhatsAppFloat";

const Plans = lazy(() => import("./pages/Plans"));
const SiteBuilder = lazy(() => import("./pages/SiteBuilder"));
const Hosting = lazy(() => import("./pages/Hosting"));
const Resources = lazy(() => import("./pages/Resources"));
const Templates = lazy(() => import("./pages/Templates"));
const Affiliates = lazy(() => import("./pages/Affiliates"));
const Blog = lazy(() => import("./pages/Blog"));
const KnowledgeBase = lazy(() => import("./pages/KnowledgeBase"));
const Contact = lazy(() => import("./pages/Contact"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/planos" element={<Plans />} />
            <Route path="/criador-de-sites" element={<SiteBuilder />} />
            <Route path="/hospedagem" element={<Hosting />} />
            <Route path="/recursos" element={<Resources />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/afiliados" element={<Affiliates />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/base-de-conhecimento" element={<KnowledgeBase />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <WhatsAppFloat />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { type FormEvent } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, ArrowUpRight, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { WHATSAPP_URL, buildContactUrl } from "@/lib/whatsapp";

const Contact = () => {
  const handleWhatsApp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    // Explicit interaction only. Opens the existing recipient, with the message
    // pre-filled for review; no lead, backend or automatic send.
    window.location.assign(buildContactUrl(new FormData(event.currentTarget)));
  };
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-x-16 lg:gap-y-6 lg:grid-rows-[auto_1fr]">
            <div className="lg:col-start-1 lg:row-start-1">
              <p className="hosting-eyebrow mb-4">Contato / MyHostVIP</p>
              <h1 className="text-display mb-4">Vamos conversar sobre <span className="text-primary">seu projeto.</span></h1>
              <p className="text-body max-w-xl">Seja para começar um site, confirmar um plano ou tirar dúvidas técnicas, conte o que você precisa.</p>
            </div>
            <section className="border border-border bg-card rounded-2xl p-5 sm:p-8 lg:p-10 min-w-0 lg:col-start-2 lg:row-start-1 lg:row-span-2" aria-labelledby="contact-form-title">
              <h2 id="contact-form-title" className="text-2xl font-semibold tracking-tight mb-2">Prepare sua mensagem.</h2>
              <p className="text-sm text-muted-foreground mb-6">Preencha as informações e revise a mensagem no WhatsApp antes de enviá-la.</p>
              <form className="space-y-5" onSubmit={handleWhatsApp}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="min-w-0"><label htmlFor="contact-name" className="text-sm font-medium mb-2 block">Nome</label><Input id="contact-name" name="nome" autoComplete="name" required maxLength={120} placeholder="Seu nome" className="h-12 bg-background border-border"/></div>
                  <div className="min-w-0"><label htmlFor="contact-email" className="text-sm font-medium mb-2 block">E-mail <span className="text-muted-foreground font-normal">(opcional)</span></label><Input id="contact-email" name="email" type="email" autoComplete="email" maxLength={200} placeholder="Seu e-mail" className="h-12 bg-background border-border"/></div>
                </div>
                <div><label htmlFor="contact-subject" className="text-sm font-medium mb-2 block">Assunto</label><Input id="contact-subject" name="assunto" required maxLength={180} placeholder="Como podemos ajudar?" className="h-12 bg-background border-border"/></div>
                <div><label htmlFor="contact-message" className="text-sm font-medium mb-2 block">Mensagem</label><Textarea id="contact-message" name="mensagem" required maxLength={3000} placeholder="Descreva seu projeto ou sua dúvida..." className="min-h-[140px] bg-background border-border"/></div>
                <Button variant="hero" className="w-full h-12 hosting-press" type="submit"><MessageCircle aria-hidden="true"/> Continuar no WhatsApp <ArrowRight aria-hidden="true"/></Button>
                <p className="text-xs text-muted-foreground leading-relaxed" role="note">Nada é enviado automaticamente. Não inclua senhas, chaves de acesso ou outros dados sensíveis.</p>
              </form>
            </section>
              <div className="hosting-console border border-border rounded-xl p-5 space-y-5 self-start lg:col-start-1 lg:row-start-2">
                <div className="flex gap-3"><MessageCircle className="w-5 h-5 text-primary shrink-0 mt-1" aria-hidden="true"/><div><h2 className="font-semibold">WhatsApp</h2><p className="text-sm text-muted-foreground mt-1">Canal informado pela MyHostVIP.</p><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-primary inline-flex items-center gap-2 min-h-11 font-medium text-sm hover:underline">Abrir conversa <ArrowUpRight className="w-4 h-4" aria-hidden="true"/></a></div></div>
                <div className="flex gap-3 border-t border-border pt-5"><Clock className="w-5 h-5 text-primary shrink-0 mt-1" aria-hidden="true"/><div><h2 className="font-semibold">Disponibilidade</h2><p className="text-sm text-muted-foreground mt-1">Consulte os horários de atendimento e condições de suporte.</p></div></div>
                <div className="flex gap-3 border-t border-border pt-5"><ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-1" aria-hidden="true"/><div><h2 className="font-semibold">Condições comerciais</h2><p className="text-sm text-muted-foreground mt-1">Confirme os recursos do plano antes de contratar.</p><Link to="/planos" className="text-primary inline-flex gap-2 items-center min-h-11 text-sm font-medium hover:underline">Comparar planos <ArrowRight className="w-4 h-4" aria-hidden="true"/></Link></div></div>
              </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Contact;

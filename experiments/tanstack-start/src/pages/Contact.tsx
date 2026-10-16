import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Clock, MapPin } from "lucide-react";
import type { FormEvent } from "react";

const ease = [0.2, 0, 0, 1] as const;

const contactInfo = [
  { icon: Mail, title: "Email", value: "suporte@myhostvip.com", desc: "Consulte este endereço para atendimento por e-mail." },
  { icon: MessageSquare, title: "WhatsApp", value: "(41) 99745-2053", desc: "Solicite informações e converse diretamente com a equipe." },
  { icon: Clock, title: "Disponibilidade", value: "Sob consulta", desc: "Confirme os horários de atendimento antes de contratar." },
  { icon: MapPin, title: "Atendimento", value: "Online", desc: "Consulte a cobertura e a localização da infraestrutura." },
];

const Contact = () => {
  // Explicit user action opens WhatsApp with the filled message. No backend,
  // misleading success state, hidden submission or API key is required.
  const handleWhatsApp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const clean = (key: string) => String(data.get(key) ?? "").trim();
    const message = [
      "Olá! Quero entrar em contato com a MyHostVIP.",
      `Nome: ${clean("nome")}`,
      `Email: ${clean("email")}`,
      `Assunto: ${clean("assunto")}`,
      `Mensagem: ${clean("mensagem")}`,
    ].join("\n");
    const url = `https://wa.me/5541997452053?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-center mb-16"
          >
            <p className="text-xs font-mono-data text-primary tracking-widest uppercase mb-3">Contato</p>
            <h1 className="text-display mb-4">
              Fale <span className="gradient-text">conosco</span>
            </h1>
            <p className="text-body max-w-2xl mx-auto">
              Preencha os dados para preparar sua mensagem e abrir uma conversa no WhatsApp. Você confere e envia a mensagem por lá.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease }}
              className="card-vip p-8"
            >
              <h2 className="text-xl font-bold text-foreground mb-6">Prepare sua mensagem</h2>
              <form className="space-y-4" onSubmit={handleWhatsApp}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="myhostvip-contato-nome" className="text-sm text-muted-foreground mb-1.5 block">Nome</label>
                    <Input id="myhostvip-contato-nome" name="nome" autoComplete="name" required maxLength={120} placeholder="Seu nome" className="bg-background border-border" />
                  </div>
                  <div>
                    <label htmlFor="myhostvip-contato-email" className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                    <Input id="myhostvip-contato-email" name="email" type="email" autoComplete="email" required maxLength={200} placeholder="seu@email.com" className="bg-background border-border" />
                  </div>
                </div>
                <div>
                  <label htmlFor="myhostvip-contato-assunto" className="text-sm text-muted-foreground mb-1.5 block">Assunto</label>
                  <Input id="myhostvip-contato-assunto" name="assunto" required maxLength={180} placeholder="Como podemos ajudar?" className="bg-background border-border" />
                </div>
                <div>
                  <label htmlFor="myhostvip-contato-mensagem" className="text-sm text-muted-foreground mb-1.5 block">Mensagem</label>
                  <Textarea id="myhostvip-contato-mensagem" name="mensagem" required maxLength={3000} placeholder="Descreva sua dúvida ou solicitação..." className="bg-background border-border min-h-[120px]" />
                </div>
                <Button variant="hero" className="w-full" type="submit">
                  Continuar no WhatsApp
                </Button>
                <p className="text-xs text-muted-foreground" role="note">
                  Nada é enviado automaticamente. O WhatsApp abre uma mensagem pronta; você decide se deseja enviá-la.
                </p>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease }}
              className="space-y-4"
            >
              {contactInfo.map((info) => (
                <div key={info.title} className="card-vip p-6 hover-lift flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">{info.title}</h3>
                    <p className="text-base font-medium text-foreground">{info.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{info.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;

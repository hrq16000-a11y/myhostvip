import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Clock, MapPin } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const contactInfo = [
  { icon: Mail, title: "Email", value: "suporte@myhostvip.com", desc: "Resposta em até 24 horas." },
  { icon: MessageSquare, title: "Chat ao Vivo", value: "Disponível 24/7", desc: "Fale com nossa equipe em tempo real." },
  { icon: Clock, title: "Horário", value: "24/7/365", desc: "Suporte técnico todos os dias, 24 horas." },
  { icon: MapPin, title: "Localização", value: "São Paulo, Brasil", desc: "Data center no Brasil." },
];

const Contact = () => {
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
              Estamos aqui para ajudar. Entre em contato pelo formulário ou pelos nossos canais de atendimento.
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
              <h2 className="text-xl font-bold text-foreground mb-6">Envie uma mensagem</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Nome</label>
                    <Input placeholder="Seu nome" className="bg-background border-border" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                    <Input type="email" placeholder="seu@email.com" className="bg-background border-border" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Assunto</label>
                  <Input placeholder="Como podemos ajudar?" className="bg-background border-border" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Mensagem</label>
                  <Textarea placeholder="Descreva sua dúvida ou solicitação..." className="bg-background border-border min-h-[120px]" />
                </div>
                <Button variant="hero" className="w-full" type="button">
                  Enviar Mensagem
                </Button>
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

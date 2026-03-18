import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import {
  Cpu, FolderOpen, Upload, Database, Mail, Globe,
  Terminal, Settings, Shield, HardDrive, Code, FileText
} from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const resources = [
  { icon: Cpu, title: "cPanel Completo", desc: "Painel de controle profissional para gerenciar todos os aspectos do seu servidor." },
  { icon: FolderOpen, title: "Gerenciador de Arquivos", desc: "Upload, edição e organização de arquivos diretamente pelo navegador." },
  { icon: Upload, title: "Acesso FTP/SFTP", desc: "Transferência segura de arquivos com suporte a FTP e SFTP." },
  { icon: Database, title: "Bancos de Dados MySQL", desc: "Crie e gerencie bancos de dados com phpMyAdmin integrado." },
  { icon: Mail, title: "Contas de Email", desc: "Crie emails profissionais @seudominio.com com webmail incluso." },
  { icon: Globe, title: "Webmail", desc: "Acesse seus emails de qualquer lugar pelo navegador." },
  { icon: Terminal, title: "Softaculous", desc: "Instalador automático com mais de 400 aplicativos disponíveis." },
  { icon: Code, title: "PHP Configurável", desc: "Escolha a versão do PHP e configure parâmetros personalizados." },
  { icon: Shield, title: "SSL Gratuito", desc: "Certificado Let's Encrypt automático para todos os domínios." },
  { icon: HardDrive, title: "Backup Manager", desc: "Faça e restaure backups do seu site com facilidade." },
  { icon: Settings, title: "DNS Manager", desc: "Gerencie registros DNS diretamente pelo painel." },
  { icon: FileText, title: "Logs de Acesso", desc: "Monitore visitantes e erros com logs detalhados." },
];

const Resources = () => {
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
            <p className="text-xs font-mono-data text-primary tracking-widest uppercase mb-3">Recursos</p>
            <h1 className="text-display mb-4">
              Todos os <span className="gradient-text">recursos</span> que você precisa
            </h1>
            <p className="text-body max-w-2xl mx-auto">
              Ferramentas profissionais para gerenciar seu site, emails, bancos de dados e muito mais.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04, ease }}
                className="card-vip p-6 hover-lift group"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <r.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Resources;

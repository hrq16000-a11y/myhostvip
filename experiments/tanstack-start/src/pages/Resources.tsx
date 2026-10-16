import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import {
  Cpu, FolderOpen, Upload, Database, Mail, Globe,
  Terminal, Settings, Shield, HardDrive, Code, FileText
} from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const resources = [
  { icon: Cpu, title: "cPanel Completo", desc: "Ferramenta de administração usada em hospedagem; confirme se o plano escolhido oferece cPanel." },
  { icon: FolderOpen, title: "Gerenciador de Arquivos", desc: "Recurso para gerenciar arquivos; consulte o painel e os acessos disponíveis." },
  { icon: Upload, title: "Acesso FTP/SFTP", desc: "Confirme quais protocolos de transferência estão habilitados no seu plano." },
  { icon: Database, title: "Bancos de Dados MySQL", desc: "Verifique limites, tecnologias e ferramentas de administração do banco de dados." },
  { icon: Mail, title: "Contas de Email", desc: "Consulte contas e armazenamento de e-mail contratáveis no plano." },
  { icon: Globe, title: "Webmail", desc: "Verifique o serviço e endereço de webmail disponíveis." },
  { icon: Terminal, title: "Softaculous", desc: "Consulte a disponibilidade do instalador e a lista atual de aplicativos." },
  { icon: Code, title: "PHP Configurável", desc: "Confirme versões de PHP suportadas e permissões de configuração." },
  { icon: Shield, title: "SSL Gratuito", desc: "Verifique cobertura, renovação e implantação de SSL conforme o plano." },
  { icon: HardDrive, title: "Backup Manager", desc: "Confirme frequência, retenção, custo e responsabilidade pela restauração." },
  { icon: Settings, title: "DNS Manager", desc: "Verifique onde a zona DNS é administrada e quais permissões você terá." },
  { icon: FileText, title: "Logs de Acesso", desc: "Consulte quais registros ficam acessíveis e por quanto tempo." },
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
              Recursos para <span className="gradient-text">avaliar</span> na hospedagem
            </h1>
            <p className="text-body max-w-2xl mx-auto">
              Conheça ferramentas comuns no mercado de hospedagem. A disponibilidade de cada recurso deve ser confirmada para o plano e servidor contratados.
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

import { Globe, Server, Shield, Zap, Cpu, Lock, Search, HardDrive } from "lucide-react";

const benefits = [
  { icon: Globe, title: "Sites e landing pages", desc: "Confirme quantidade de sites, limites de arquivos e tráfego para suas campanhas." },
  { icon: Zap, title: "WordPress e instalação", desc: "Verifique versões e disponibilidade de instalador no plano." },
  { icon: Search, title: "SEO", desc: "Avalie requisitos técnicos de indexação, desempenho e ferramentas disponíveis." },
  { icon: Server, title: "LiteSpeed e cache", desc: "Confirme a tecnologia do servidor e as opções de cache." },
  { icon: Cpu, title: "Painel de controle", desc: "Consulte como gerenciar arquivos, domínios e e-mails." },
  { icon: Lock, title: "Backups", desc: "Pergunte pela frequência, retenção e processo de restauração." },
  { icon: Shield, title: "SSL e HTTPS", desc: "Verifique a cobertura, renovação e configuração de certificados." },
  { icon: HardDrive, title: "Proteção e armazenamento", desc: "Confirme cotas, proteção de infraestrutura e políticas de uso." },
];

const Benefits = () => (
  <section className="hosting-section border-t border-border" aria-labelledby="benefits-title">
    <div className="section-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
      <div>
        <p className="hosting-eyebrow mb-3">02 / Recursos</p>
        <h2 id="benefits-title" className="hosting-section-title mb-4">O que faz uma boa hospedagem?</h2>
        <p className="text-body max-w-md">Use estes pontos técnicos para avaliar o plano com a equipe antes de publicar seu site.</p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 border-t border-border">
        {benefits.map((item) => (
          <li key={item.title} className="flex gap-3 py-5 border-b border-border">
            <item.icon className="h-5 w-5 shrink-0 text-primary mt-1" aria-hidden="true" />
            <div><h3 className="font-semibold mb-1">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p></div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Benefits;

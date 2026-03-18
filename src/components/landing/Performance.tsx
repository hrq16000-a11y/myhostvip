import { motion } from "framer-motion";
import { Gauge, HardDrive, Globe, Zap } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const specs = [
  { icon: Zap, label: "LiteSpeed Web Server", value: "12x mais rápido", desc: "Servidor web de última geração com cache integrado." },
  { icon: HardDrive, label: "SSD NVMe", value: "3.500 MB/s", desc: "Armazenamento ultrarrápido para leitura e escrita." },
  { icon: Globe, label: "HTTP/3 + QUIC", value: "Latência mínima", desc: "Protocolo mais moderno para conexões mais rápidas." },
  { icon: Gauge, label: "CDN Opcional", value: "Global", desc: "Distribua conteúdo em servidores ao redor do mundo." },
];

const Performance = () => {
  return (
    <section className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono-data text-primary tracking-widest uppercase mb-3">Performance</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Velocidade que faz diferença
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Infraestrutura de ponta com os melhores componentes do mercado para garantir a máxima velocidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {specs.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="card-vip-inset p-6 hover-lift flex gap-5"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-sm font-semibold text-foreground">{s.label}</h3>
                  <span className="text-xs font-mono-data text-primary bg-primary/10 px-2 py-0.5 rounded-full">{s.value}</span>
                </div>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-12 card-vip p-6"
        >
          <h3 className="text-sm font-semibold text-foreground mb-6">Comparativo de Velocidade</h3>
          <div className="space-y-4">
            {[
              { label: "MyHostVIP (LiteSpeed)", pct: 95, color: "bg-primary" },
              { label: "Hospedagem Convencional (Apache)", pct: 35, color: "bg-muted-foreground/30" },
              { label: "Hospedagem Gratuita", pct: 15, color: "bg-muted-foreground/20" },
            ].map((bar) => (
              <div key={bar.label}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground">{bar.label}</span>
                  <span className="font-mono-data text-foreground">{bar.pct}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease }}
                    className={`h-full rounded-full ${bar.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Performance;

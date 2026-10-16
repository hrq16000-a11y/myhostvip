import { motion } from "framer-motion";
import { Gauge, HardDrive, Globe, Zap } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const specs = [
  { icon: Zap, label: "LiteSpeed Web Server", value: "Consulte", desc: "Confira o servidor e as configurações de cache contratáveis." },
  { icon: HardDrive, label: "SSD NVMe", value: "Consulte", desc: "Peça especificações reais de armazenamento e métricas de I/O." },
  { icon: Globe, label: "HTTP/3 + QUIC", value: "Verifique", desc: "Verifique suporte a HTTP/3 e QUIC em seu ambiente." },
  { icon: Gauge, label: "CDN Opcional", value: "Opcional", desc: "Verifique se há integração de CDN, custos e cobertura." },
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
            Compare características técnicas e resultados medidos. Não existem métricas de desempenho garantidas sem um teste do ambiente contratado.
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
          <h3 className="text-sm font-semibold text-foreground mb-6">Como avaliar a performance</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>Peça testes de tempo de resposta, indicadores de disponibilidade e limites de recursos do plano.</p>
            <p>Compare as opções sob condições semelhantes de página, localização, cache e rede.</p>
            <p>Percentuais ilustrativos não representam medição de servidores reais.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Performance;

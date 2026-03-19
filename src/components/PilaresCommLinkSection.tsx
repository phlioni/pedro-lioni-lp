"use client";

import { motion } from "framer-motion";

const PILARES = [
  {
    id: "resolver",
    label: "Resolver",
    content: (
      <>
        Entregar soluções que <span className="text-white font-semibold">resolvem dores reais</span> — do discovery ao delivery, com foco em <span className="text-accent-green font-medium">valor e impacto no negócio</span>.
      </>
    ),
  },
  {
    id: "liderar",
    label: "Liderar",
    content: (
      <>
        Desenvolver pessoas e <span className="text-white font-semibold">times multidisciplinares</span>, alinhando visão técnica e de produto para <span className="text-accent-green font-medium">resultados sustentáveis</span>.
      </>
    ),
  },
  {
    id: "proteger",
    label: "Proteger",
    content: (
      <>
        Garantir qualidade, alinhamento com stakeholders e <span className="text-white font-semibold">arquiteturas viáveis</span> que <span className="text-accent-green font-medium">escalem e se mantenham no tempo</span>.
      </>
    ),
  },
  {
    id: "prosperar",
    label: "Prosperar",
    content: (
      <>
        Gerar resultado para o negócio e crescimento para as pessoas — <span className="text-white font-semibold">a ponte entre o código e o lucro</span>.
      </>
    ),
  },
];

const WHATSAPP_LINK = "https://wa.me/5513988386596";
const LINKEDIN_URL = "https://www.linkedin.com/in/pedro-lioni-2b2a5759/";
const INSTAGRAM_URL = "https://www.instagram.com/lionipedro/?utm_source=ig_web_button_share_sheet";

export function PilaresCommLinkSection() {
  return (
    <section
      id="pilares-commlink"
      className="relative py-24 px-6 bg-industrial-dark"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-sans text-3xl md:text-4xl font-bold text-white text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Os Quatro Pilares
        </motion.h2>
        <motion.p
          className="text-zinc-500 text-center text-sm mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Valores que guiam minha atuação como Product Manager e líder de soluções.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {PILARES.map((pilar, i) => (
            <motion.div
              key={pilar.id}
              className="rounded-xl border border-industrial-border bg-industrial-panel p-5 md:p-6 text-center hover:border-accent-green/40 transition-colors flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
            >
              <span className="font-sans text-xl md:text-2xl font-bold text-accent-green block mb-3">
                {pilar.label}
              </span>
              <p className="text-zinc-400 text-sm leading-relaxed flex-1">
                {pilar.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-zinc-300 text-center text-lg max-w-2xl mx-auto mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Ainda não cheguei onde sei que posso, mas hoje estou exatamente onde sempre quis estar:{" "}
          <span className="text-white font-bold">construindo o futuro</span>.
        </motion.p>
        <motion.p
          className="text-zinc-400 text-center text-base max-w-2xl mx-auto mb-16 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-accent-green font-semibold">Busco meu próximo desafio em Product Management</span>, com
          <span className="text-white font-semibold"> visão 360° — técnica, negócio e usuário</span> — para construir produtos <span className="text-accent-green font-medium">escaláveis e de sucesso</span>.
        </motion.p>

        <motion.div
          className="max-w-md mx-auto text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto text-center px-8 py-5 rounded-xl border-2 border-accent-green bg-accent-green/10 text-white font-medium hover:bg-accent-green/20 transition-colors"
          >
            <span className="block text-accent-green font-semibold mb-1">
              Conectar via WhatsApp
            </span>
            <span className="block text-white font-semibold text-sm">
              Vamos conversar?
            </span>
          </a>
        </motion.div>

        <motion.footer
          className="flex flex-wrap justify-center gap-8 border-t border-industrial-border pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white text-sm transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white text-sm transition-colors"
          >
            Instagram
          </a>
        </motion.footer>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const PILARES = [
  {
    id: "resolver",
    label: "Resolver",
    text: "Entregar soluções que resolvem dores reais — do discovery ao delivery, com foco em valor e impacto no negócio.",
  },
  {
    id: "liderar",
    label: "Liderar",
    text: "Desenvolver pessoas e times multidisciplinares, alinhando visão técnica e de produto para resultados sustentáveis.",
  },
  {
    id: "proteger",
    label: "Proteger",
    text: "Garantir qualidade, alinhamento com stakeholders e arquiteturas viáveis que escalem e se mantenham no tempo.",
  },
  {
    id: "prosperar",
    label: "Prosperar",
    text: "Gerar resultado para o negócio e crescimento para as pessoas — a ponte entre o código e o lucro.",
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
                {pilar.text}
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
          <span className="text-white font-semibold">construindo o futuro</span>.
        </motion.p>
        <motion.p
          className="text-zinc-400 text-center text-base max-w-2xl mx-auto mb-16 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-accent-green font-semibold">Busco meu próximo desafio em Product Management</span>, com
          visão 360° — técnica, negócio e usuário — para construir produtos escaláveis e de sucesso.
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
              Disponível para novos desafios
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

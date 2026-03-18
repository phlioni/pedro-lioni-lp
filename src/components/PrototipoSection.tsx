"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const diagramPath = "M 20 80 Q 80 20, 140 80 T 260 80";
const diagramPath2 = "M 40 120 L 120 40 L 200 120 L 280 40";

export function PrototipoSection() {
  return (
    <section
      id="prototipo"
      className="relative min-h-screen flex flex-col items-center justify-center py-24 px-6 wood-texture overflow-hidden"
    >
      <div className="absolute inset-0 bg-industrial-dark/70" />

      <motion.div
        className="relative z-10 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-white text-center mb-6">
          O Protótipo: A Parede de Giz
        </h2>

        <div className="space-y-6 text-zinc-300 leading-relaxed max-w-3xl mx-auto mb-10">
          <p className="text-center text-base md:text-lg">
            No almoxarifado existia um processo totalmente manual: todos os dias os técnicos
            tinham que vir, pegar um papel e preencher com os componentes que necessitavam para
            trabalhar no próximo dia. Nós pegávamos aqueles papéis, montávamos os kits e
            colocávamos nos armários de cada um. Uma pilha enorme de caixas com papel preenchia
            um espaço considerável da nossa área de trabalho.
          </p>
          <p className="text-center text-base md:text-lg">
            Quando vi aquilo decidi que mudaria esse processo. No outro dia, entre os trabalhos,
            fiz um desenho de um diagrama de sequência pelas paredes de madeira do próprio
            almoxarifado. Quem entrava achava aquilo uma loucura; outro dizia que poderia dar certo,
            mas que com a burocracia da empresa aquilo morreria antes de nascer. Aprendi uma lição:
            <span className="text-white font-semibold">Quando você tem convicção de que algo vai dar certo</span>,
            mesmo que as probabilidades lutem contra, você dá um jeito de fazer acontecer.
          </p>
          <p className="text-center text-base md:text-lg">
            Um mês depois consegui um tablet e um computador velho.{" "}
            <span className="text-white font-semibold">Desenvolvi minha primeira solução:</span>
            {" "}chega de papel. Tablet na porta do almoxarifado, pedidos no celular — simples, fácil e{" "}
            <span className="text-accent-green font-medium">dados importantes para a gerência</span>.
          </p>
        </div>

        <motion.svg
          className="w-full h-24 md:h-28 mx-auto mb-10 text-white/70"
          viewBox="0 0 300 160"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <motion.path
            d={diagramPath}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />
          <motion.path
            d={diagramPath2}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="2 2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
          />
        </motion.svg>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="space-y-2">
            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-industrial-border shadow-xl ring-1 ring-white/5">
              <Image
                src="/imagens/20180105_142006.jpg"
                alt="Contexto do almoxarifado antes da solução"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="text-center text-zinc-500 text-sm">Contexto no almoxarifado</p>
          </div>
          <div className="space-y-2">
            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-industrial-border shadow-xl ring-1 ring-white/5">
              <Image
                src="/imagens/20180905_144806.jpg"
                alt="Tablet na moldura de madeira - PJM Almox, primeira solução"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="text-center text-zinc-500 text-sm">Primeira solução: tablet na porta</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-10">
          {[
            "Fim dos formulários.",
            "Controle real.",
            "Visibilidade estratégica.",
          ].map((line, i) => (
            <motion.div
              key={line}
              className="text-accent-green border border-industrial-border bg-industrial-panel py-4 px-4 rounded-lg text-sm font-medium"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              {line}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

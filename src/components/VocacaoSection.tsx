"use client";

import { motion } from "framer-motion";

function GearIcon() {
  return (
    <svg
      className="w-10 h-10 text-accent-blue"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg
      className="w-10 h-10 text-accent-green"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  );
}

export function VocacaoSection() {
  return (
    <section
      id="vocacao"
      className="relative min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-industrial-panel border-y border-industrial-border"
    >
      <div className="max-w-4xl w-full space-y-10">
        <motion.h2
          className="font-sans text-3xl md:text-4xl font-bold text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          A Vocação: Hub de Negócios e Soluções
        </motion.h2>

        <motion.div
          className="flex justify-center gap-6 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <GearIcon />
          <span className="text-zinc-500">→</span>
          <BulbIcon />
        </motion.div>

        <div className="space-y-6 text-zinc-300 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Hoje lidero o <span className="text-white font-semibold">Business &amp; Solutions Hub</span> na Mosten. Atuo essencialmente como <span className="text-accent-green font-semibold">Product Manager e Arquiteto de Negócios</span> — sou a <span className="text-white font-semibold">ponte definitiva</span> entre o problema do cliente, a viabilidade técnica e a estratégia da empresa.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            Faço a <span className="text-white font-semibold">gestão de ponta a ponta</span> do ciclo de vida de múltiplas soluções digitais, desde o discovery e ideação até o delivery. Mais do que coordenar times multidisciplinares de alta performance, eu descubro que a arquitetura mais importante que construo não é a de software, é a de negócios: <span className="text-accent-green font-semibold border-l-4 border-accent-green pl-2 block mt-2">a ponte que conecta o código ao lucro.</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}

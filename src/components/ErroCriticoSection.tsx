"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ErroCriticoSection() {
  return (
    <section
      id="erro-critico"
      className="relative min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-industrial-dark overflow-hidden"
    >
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        <motion.div
          className="relative aspect-[4/5] min-h-[320px] max-h-[540px] rounded-xl overflow-hidden border border-industrial-border shadow-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/imagens/DSC_0190.jpg"
            alt="Almoxarifado - contexto de virada profissional"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark/50 to-transparent" />
        </motion.div>

        <div className="space-y-8">
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-white">
            O Erro Crítico: O Carro Clonado
          </h2>

          <div className="p-5 rounded-xl border-l-4 border-accent-red bg-industrial-panel/80">
            <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Contexto profissional</p>
            <p className="text-accent-red font-bold text-xl">40 PONTOS</p>
            <p className="text-white font-medium">Risco de demissão → virada de jogo</p>
          </div>

          <div className="space-y-4 text-zinc-300 leading-relaxed max-w-xl">
            <motion.p
              className="text-base md:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Com a participação de lucros da empresa, comprei meu primeiro carro. Seis meses depois
              descobrimos que ele tinha sido clonado: multas chegavam de lugares que eu nem sabia
              pronunciar o nome. Na empresa eu trabalhava dirigindo e a cada seis meses a companhia
              verificava se todos estavam com a CNH em dia. Quando chegou minha vez de validar, lá
              estavam 40 pontos. Eu já tinha avisado meus superiores, mas de todo modo provavelmente
              seria demitido.
            </motion.p>
            <motion.p
              className="text-base md:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-white font-semibold">O que parecia o fim foi o reboot necessário.</span>
              {" "}Percebi que o almoxarifado estava com problemas por alta demanda e apenas uma pessoa
              para dar conta. Me ofereci e fui aceito para trabalhar ali — com o risco de nunca mais
              ter um cargo mais alto, mas preocupado em manter a torneira aberta. Depois eu montaria{" "}
              <span className="text-accent-green font-medium">um plano que mudaria minha vida</span>.
              Foi ali que a tecnologia deixou de ser hobby e{" "}
              <span className="text-white font-semibold">virou sobrevivência</span>.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

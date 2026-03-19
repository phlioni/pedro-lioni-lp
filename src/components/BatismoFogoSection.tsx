"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TIMELINE_ITEMS = [
  {
    id: "net",
    company: "NET (Claro Brasil)",
    period: "Até 2020",
    side: "left" as const,
    content: (
      <>
        Com a solução do almoxarifado na <strong className="text-white">NET</strong> (empresa de telecomunicações),
        ganhei visibilidade e fui <strong className="text-white">analista de dados para os gerentes</strong>. Queria
        ser desenvolvedor, mas entrar como estagiário reduziria o salário — família crescendo, aluguel alto.{" "}
        <strong className="text-accent-green">Precisava de um plano.</strong>
        <br /><br />
        Os dados técnicos estavam em planilhas que os computadores mal abriam. Desenvolvi um projeto para{" "}
        <strong className="text-white">digitalizar tudo isso na NET</strong>. Pouco antes da entrega, um amigo me
        ligou: a empresa dele precisava de um <strong className="text-accent-green">desenvolvedor</strong>.
      </>
    ),
  },
  {
    id: "crmzen",
    company: "CRM Zen",
    period: "Liderança por sobrevivência",
    side: "right" as const,
    content: (
      <>
        Fui à <strong className="text-white">CRM Zen</strong> com o manual do sistema que tinha construído na NET.
        Sincero: conhecimentos técnicos ainda em formação, mas uma <strong className="text-white">capacidade de resolução de problemas gigantesca</strong>. Entrei como <strong className="text-accent-green">Pleno</strong>. Seis meses depois, com a saída da desenvolvedora sênior, assumi a <strong className="text-white">operação sozinho</strong>. Tive que aprender na marra o que levaria mais de um ano. A sobrevivência se transformou na minha primeira <strong className="text-accent-green">liderança técnica</strong>.
      </>
    ),
  },
  {
    id: "mosten",
    company: "ModalGR (Mosten)",
    period: "A ponte entre código e negócio",
    side: "left" as const,
    hasImage: true,
    content: (
      <>
        Entrei em 2021 como <strong className="text-accent-green">Full Stack Developer</strong>, focado em <strong className="text-white">automatizar processos e gerar produtividade</strong>. A visão de produto falou mais alto e logo assumi como <strong className="text-white">Tech Lead</strong>: passei a desenhar arquiteturas para <strong className="text-accent-green">mineradoras e portos</strong>, focando no desenvolvimento do time e na comunicação direta com o cliente para garantir que a tecnologia <strong className="text-white">resolvesse a dor certa</strong>.
        <br /><br />
        Participo de eventos da empresa, como o <strong className="text-white">IA Experience</strong> da Mosten, realizado no <strong className="text-white">JOTA CO</strong> — com palestrantes de peso, entre eles Guilherme Horn (CEO da META).
      </>
    ),
  },
];

export function BatismoFogoSection() {
  return (
    <section
      id="batismo-fogo"
      className="relative py-24 px-6 bg-industrial-dark"
    >
      <div className="w-full max-w-4xl mx-auto">
        <motion.h2
          className="font-sans text-2xl md:text-3xl font-bold text-white text-center mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Linha do tempo: da virada ao Product Management
        </motion.h2>
        <motion.p
          className="text-zinc-500 text-center text-sm mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          NET = empresa de telecom · .NET = tecnologia Microsoft
        </motion.p>

        {/* Timeline vertical */}
        <div className="relative">
          {/* Linha vertical central */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-industrial-border -translate-x-px md:-translate-x-1/2"
            aria-hidden
          />

          {TIMELINE_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] md:gap-0 gap-3 mb-10 last:mb-0 md:items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08 }}
            >
              {/* Card */}
              <div
                className={`rounded-xl border border-industrial-border bg-industrial-panel overflow-hidden md:min-h-[120px] ${
                  item.side === "left" ? "md:pr-6 order-2 md:order-1" : "md:pl-6 order-2 md:order-3"
                } ml-8 md:ml-0`}
              >
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-accent-green font-semibold">{item.company}</span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-zinc-500 text-xs uppercase tracking-wider">{item.period}</span>
                  </div>
                  <div className="text-zinc-300 text-sm md:text-base leading-relaxed">
                    {item.content}
                  </div>
                </div>
                {item.hasImage && (
                  <div className="relative w-full aspect-video border-t border-industrial-border">
                    <Image
                      src="/imagens/jota-ia-experience.jpg"
                      alt="IA Experience da Mosten em parceria com a JOTA — evento com Guilherme Horn, CEO da META, entre outros palestrantes"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-industrial-dark/85 text-xs text-zinc-400">
                      IA Experience da Mosten — realizado no JOTA CO · Guilherme Horn (CEO META) entre os palestrantes
                    </div>
                  </div>
                )}
              </div>

              {/* Nodo (mobile: sobre a linha; desktop: centro) */}
              <div className="absolute left-4 top-6 md:relative md:top-0 md:left-0 flex items-start justify-center order-1 md:order-2 pt-0.5 -translate-x-1/2 md:translate-x-0 z-10">
                <div className="w-3 h-3 rounded-full bg-accent-green border-2 border-industrial-dark shrink-0" />
              </div>

              {/* Espaço vazio na outra metade (desktop) */}
              <div className={`hidden md:block ${item.side === "left" ? "order-3" : "order-1"}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

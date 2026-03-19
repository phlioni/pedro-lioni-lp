"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const CAROUSEL_IMAGES = [
  { src: "/imagens/1763081065496.jpg", alt: "Santos Digital Week e prismIA" },
  { src: "/imagens/1763049858757.jpg", alt: "Santos Digital Week" },
  { src: "/imagens/sdw-146.jpg", alt: "Santos Digital Week" },
  { src: "/imagens/sdw-124.jpg", alt: "Pedro Lioni na Santos Digital Week" },
];

export function PrismIASection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % CAROUSEL_IMAGES.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="prismia"
      className="relative min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-industrial-dark"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="relative aspect-video w-full rounded-xl overflow-hidden border border-industrial-border shadow-xl ring-1 ring-white/5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={CAROUSEL_IMAGES[index].src}
                alt={CAROUSEL_IMAGES[index].alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-industrial-dark/90 to-transparent text-sm text-zinc-300 flex items-center justify-between">
            <span>Santos Digital Week — prismIA</span>
            <div className="flex gap-1.5">
              {CAROUSEL_IMAGES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === index ? "bg-accent-green" : "bg-zinc-500 hover:bg-zinc-400"
                  }`}
                  aria-label={`Ver imagem ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.h2
            className="font-sans text-3xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            O Produto: prismIA & FIAP
          </motion.h2>
          <motion.p
            className="text-zinc-400 leading-relaxed text-base md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Dos <span className="text-white font-semibold">diagramas de giz na madeira do almoxarifado</span> aos <span className="text-white font-semibold">palcos de inovação</span>. A primeira solução de ponta a ponta que conduzi com <span className="text-accent-green font-medium">estratégia, execução e impacto real</span> foi o <span className="text-accent-green font-semibold">prismIA</span>, um projeto focado em inteligência e experiência no ecossistema digital, apresentado no palco do Santos Digital Week.
          </motion.p>
          <motion.p
            className="text-zinc-300 leading-relaxed text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Para elevar toda essa bagagem prática ao estado da arte, estou cursando a <span className="text-white font-semibold">pós-graduação em Digital Product Management na FIAP</span>. É a formalização acadêmica da visão de produto que aplico todos os dias: construir soluções <span className="text-accent-green font-medium">viáveis, desejáveis e escaláveis</span>.
          </motion.p>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-industrial-border bg-industrial-panel text-accent-green text-sm font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-accent-green" />
            prismIA — Santos Digital Week
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-industrial-dark py-12 md:py-16"
    >
      {/* Imagem grande em tela cheia: Santos Digital Week (138) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imagens/sdw-138.jpg"
          alt="Pedro Lioni palestrando no Santos Digital Week"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(to top, rgba(15,15,18,0.97) 0%, rgba(15,15,18,0.7) 35%, rgba(15,15,18,0.4) 60%, transparent 100%)",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 px-6 md:px-12 lg:px-16 max-w-2xl w-full ml-0"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
          &ldquo;Inovação não pede licença. Pede atitude.&rdquo;
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 mb-5 leading-[1.65]">
          Sou Pedro Lioni. Aprendi na prática que, quando a ferramenta ideal não existe,
          quem faz a diferença é quem <span className="text-white font-semibold">constrói a que resolve o problema</span>.
        </p>
        <p className="text-base text-zinc-400 leading-[1.65] mb-10">
          Como <span className="text-white font-semibold">Product Manager e ex-desenvolvedor</span>, traduzo estratégias complexas em soluções digitais de impacto. Uno a bagagem técnica necessária para <span className="text-accent-green font-medium">dialogar com a engenharia</span> à visão de negócios indispensável para <span className="text-white font-semibold">gerar lucro e valor ao usuário</span>.
        </p>
        <motion.a
          href="#erro-critico"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          aria-label="Rolar para próxima seção"
        >
          <span className="animate-bounce">↓</span>
          <span>Conheça minha trajetória</span>
        </motion.a>
      </motion.div>
    </section>
  );
}

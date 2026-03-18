"use client";

import { motion } from "framer-motion";

const LINKEDIN_URL = "https://www.linkedin.com/in/pedro-lioni-2b2a5759/";
const INSTAGRAM_URL = "https://www.instagram.com/lionipedro/?utm_source=ig_web_button_share_sheet";

const LINKEDIN_EMBEDS = [
  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7026647070186872832?compact=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7336548853933924353?compact=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7311109935575003136?compact=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7396132627272888320?compact=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7399060070262714368?compact=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7414472873127415808?compact=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7440032555921481728?compact=1",
];

export function TacticalLogsSection() {
  return (
    <section
      id="tactical-logs"
      className="relative py-24 px-4 sm:px-6 bg-industrial-panel border-y border-industrial-border"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-sans text-3xl md:text-4xl font-bold text-white text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Conteúdo em destaque
        </motion.h2>
        <motion.p
          className="text-zinc-400 text-center max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Algumas das minhas publicações no LinkedIn: temas de produto, liderança e tecnologia.
          Acompanhe para mais.
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-industrial-border bg-industrial-dark text-zinc-300 hover:border-accent-blue hover:text-white transition-colors text-sm font-medium"
          >
            LinkedIn
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-industrial-border bg-industrial-dark text-zinc-300 hover:border-accent-blue hover:text-white transition-colors text-sm font-medium"
          >
            Instagram
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {LINKEDIN_EMBEDS.map((src, i) => (
            <motion.div
              key={src}
              className="rounded-xl border border-industrial-border bg-industrial-dark overflow-hidden hover:border-accent-blue/50 transition-colors shadow-lg"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.04 * i }}
            >
              <div className="w-full overflow-hidden bg-industrial-panel" style={{ minHeight: "420px" }}>
                <iframe
                  src={src}
                  height="480"
                  width="100%"
                  style={{ minHeight: "420px", display: "block" }}
                  frameBorder="0"
                  allowFullScreen
                  title={`Publicação LinkedIn ${i + 1}`}
                  className="w-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

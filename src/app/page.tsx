import { HeroSection } from "@/components/HeroSection";
import { ErroCriticoSection } from "@/components/ErroCriticoSection";
import { PrototipoSection } from "@/components/PrototipoSection";
import { BatismoFogoSection } from "@/components/BatismoFogoSection";
import { VocacaoSection } from "@/components/VocacaoSection";
import { PrismIASection } from "@/components/PrismIASection";
import { TacticalLogsSection } from "@/components/TacticalLogsSection";
import { PilaresCommLinkSection } from "@/components/PilaresCommLinkSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ErroCriticoSection />
      <PrototipoSection />
      <BatismoFogoSection />
      <VocacaoSection />
      <PrismIASection />
      <TacticalLogsSection />
      <PilaresCommLinkSection />
    </main>
  );
}

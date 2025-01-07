import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { UseCases } from "@/components/UseCases";
import { Integrations } from "@/components/Integrations";
import { Feedback } from "@/components/Feedback";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <Integrations />
      <Feedback />
    </main>
  );
};

export default Index;
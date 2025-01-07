import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
          Transform Your Customer Support with{" "}
          <span className="text-primary">AI Intelligence</span>
        </h1>
        <p className="text-lg sm:text-xl text-neutral max-w-2xl mx-auto">
          Automate responses, gain insights, and deliver exceptional customer service with our advanced AI chatbot solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
            Get Started Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
};
import { ArrowRight, MessageSquare, Settings, Zap } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Easy Setup",
      description: "Connect your data sources and customize your bot in minutes",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI Training",
      description: "Our AI learns from your data to provide accurate responses",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Start Chatting",
      description: "Deploy your bot and start engaging with customers instantly",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">How It Works</h2>
          <p className="mt-4 text-neutral text-lg">
            Get started with Axioma in three simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-12 w-12 bg-primary-light/10 rounded-lg flex items-center justify-center text-primary">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-neutral">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block h-6 w-6 text-primary absolute right-[-30px] top-1/2 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import { MessageSquare, User, Check } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "24/7 Customer Support",
    description: "Provide instant responses to customer queries around the clock",
  },
  {
    icon: <User className="h-6 w-6" />,
    title: "Personalized Experience",
    description: "Tailor interactions based on customer history and preferences",
  },
  {
    icon: <Check className="h-6 w-6" />,
    title: "Smart Automation",
    description: "Automate routine tasks while maintaining a human touch",
  },
];

export const Features = () => {
  return (
    <div className="py-24 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Why Choose Axioma
          </h2>
          <p className="mt-4 text-neutral text-lg">
            Powerful features to revolutionize your customer support
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-12 w-12 bg-primary-light rounded-lg flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
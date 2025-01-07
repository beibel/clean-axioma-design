import { Building2, Users, ShoppingBag, GraduationCap } from "lucide-react";

export const UseCases = () => {
  const cases = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Enterprise Support",
      description: "24/7 customer support for large organizations",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "HR & Recruitment",
      description: "Streamline candidate screening and employee onboarding",
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "E-commerce",
      description: "Product recommendations and shopping assistance",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Education",
      description: "Student support and learning assistance",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Use Cases</h2>
          <p className="mt-4 text-neutral text-lg">
            Discover how Axioma can transform your industry
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-12 w-12 bg-primary-light/10 rounded-lg flex items-center justify-center text-primary mb-4">
                {useCase.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-neutral">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
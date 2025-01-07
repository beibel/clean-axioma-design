import { Star } from "lucide-react";

export const Feedback = () => {
  const testimonials = [
    {
      quote: "Axioma has transformed our customer support operations completely.",
      author: "Sarah Johnson",
      role: "Customer Success Manager",
      company: "TechCorp",
      rating: 5,
    },
    {
      quote: "The AI accuracy and response time is impressive. Highly recommended!",
      author: "Michael Chen",
      role: "Head of Support",
      company: "CloudSystems",
      rating: 5,
    },
    {
      quote: "Setup was quick and the results were immediate. Great product!",
      author: "Emma Davis",
      role: "Operations Director",
      company: "StartupX",
      rating: 5,
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Customer Feedback</h2>
          <p className="mt-4 text-neutral text-lg">
            See what our customers are saying about Axioma
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <div className="mt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-neutral">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
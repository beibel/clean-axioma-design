import { Card, CardContent } from "@/components/ui/card";

export const Integrations = () => {
  const integrations = [
    "Slack",
    "Microsoft Teams",
    "Discord",
    "WhatsApp",
    "Telegram",
    "Zendesk",
    "Salesforce",
    "Intercom",
  ];

  return (
    <section className="py-24 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Integrations</h2>
          <p className="mt-4 text-neutral text-lg">
            Connect with your favorite platforms seamlessly
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <Card
              key={index}
              className="animate-fade-up hover:shadow-md transition-shadow duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="flex items-center justify-center p-6">
                <span className="text-lg font-semibold">{integration}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
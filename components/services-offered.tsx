import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Coins, Laptop } from "lucide-react";

const services = [
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs.",
    icon: <Code className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Blockchain Solutions",
    description: "Innovative blockchain applications for various industries.",
    icon: <Coins className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Digital Education",
    description:
      "Empowering communities through blockchain knowledge and skills.",
    icon: <Laptop className="h-8 w-8 text-blue-500" />,
  },
];

export function ServicesSection() {
  return (
    <section className="py-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover how CodeB can help you leverage technology for success.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {service.icon}
                  <span>{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

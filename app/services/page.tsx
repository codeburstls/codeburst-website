import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Coins, Laptop, UsersIcon } from "lucide-react";

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

const whyChooseCodeB = [
  {
    title: "Expert Team",
    description: "Years of industry experience and a passion for innovation.",
    icon: <UsersIcon className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "We stay ahead of the curve with the latest tools and techniques.",
    icon: <Coins className="h-8 w-8 text-blue-500" />,
  },

  {
    title: "Community Focus",
    description:
      "We're committed to empowering local communities through technology.",
    icon: <Code className="h-8 w-8 text-blue-500" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="py-16 bg-white ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Our Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Innovative Solutions for Your Digital Needs
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover how CodeB can help you leverage technology for success.
          </p>
        </div>

        <div className="mt-20  mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

        <div className="mt-20 mx-auto max-w-7xl">
          <h3 className="text-2xl font-bold text-gray-900 lg:text-center mb-10">
            Why Choose CodeB?
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseCodeB.map((reason, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    {reason.icon}
                    <span>{reason.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{reason.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const solutionCategories = [
  {
    id: "enterprise",
    title: "Enterprise Solutions",
    solutions: [
      {
        title: "Digital Transformation",
        description: "Modernize your business operations",
        content:
          "Our comprehensive digital transformation services help enterprises modernize legacy systems, implement cloud solutions, and optimize business processes for the digital age.",
      },
      {
        title: "Enterprise Resource Planning",
        description: "Streamline business operations",
        content:
          "Custom ERP solutions designed to integrate and manage core business processes in real-time, enhancing efficiency and providing actionable insights.",
      },
      {
        title: "Cybersecurity Framework",
        description: "Protect your digital assets",
        content:
          "Advanced cybersecurity solutions that safeguard your enterprise from evolving threats, ensuring data integrity and business continuity.",
      },
    ],
  },
  {
    id: "blockchain",
    title: "Blockchain Solutions",
    solutions: [
      {
        title: "Smart Contracts",
        description: "Automate agreements with code",
        content:
          "Develop and deploy secure smart contracts that automatically execute when predefined conditions are met, eliminating intermediaries and reducing costs.",
      },
      {
        title: "Supply Chain Tracking",
        description: "End-to-end visibility",
        content:
          "Blockchain-based supply chain solutions that provide real-time tracking, authentication, and transparency from manufacturer to consumer.",
      },
      {
        title: "Tokenization Platforms",
        description: "Digitize assets securely",
        content:
          "Create digital representations of real-world assets on the blockchain, enabling fractional ownership and new investment opportunities.",
      },
    ],
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    solutions: [
      {
        title: "Predictive Analytics",
        description: "Forecast future trends",
        content:
          "Leverage historical data and machine learning algorithms to predict future outcomes, identify patterns, and make data-driven decisions.",
      },
      {
        title: "Natural Language Processing",
        description: "Human-computer interaction",
        content:
          "Implement NLP solutions that enable computers to understand, interpret, and generate human language for chatbots, sentiment analysis, and more.",
      },
      {
        title: "Computer Vision",
        description: "Automated visual understanding",
        content:
          "Develop systems that can interpret and act on visual information, from facial recognition to quality control in manufacturing.",
      },
    ],
  },
  {
    id: "iot",
    title: "IoT Solutions",
    solutions: [
      {
        title: "Smart City Infrastructure",
        description: "Connected urban environments",
        content:
          "IoT solutions for cities that enhance public services, improve resource management, and create more sustainable and livable urban spaces.",
      },
      {
        title: "Industrial IoT",
        description: "Connected manufacturing",
        content:
          "Connect industrial equipment and systems to monitor performance, predict maintenance needs, and optimize production processes.",
      },
      {
        title: "Healthcare IoT",
        description: "Connected medical devices",
        content:
          "IoT solutions for healthcare that enable remote patient monitoring, improve treatment outcomes, and enhance operational efficiency in medical facilities.",
      },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-white py-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Our Solutions
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-500">
            Cutting-edge technology solutions tailored to meet the evolving
            needs of businesses in the digital era.
          </p>
        </div>

        <Tabs defaultValue="enterprise" className="mb-16">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 bg-white">
            {solutionCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:text-blue-600 bg-white"
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {solutionCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.solutions.map((solution, index) => (
                  <Card key={index} className="shadow-md">
                    <CardHeader>
                      <CardTitle className="text-blue-600">
                        {solution.title}
                      </CardTitle>
                      <CardDescription>{solution.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{solution.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="bg-gray-50 rounded-lg p-8 mb-16 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-600">
                Our Approach
              </h2>
              <p className="mb-4 text-gray-600">
                At CodeBurst, we believe in a collaborative and iterative approach
                to solution development. We work closely with our clients to
                understand their unique challenges and objectives, ensuring that
                our solutions are perfectly aligned with their business goals.
              </p>
              <p className="mb-4 text-gray-600">
                Our team of experts combines deep technical knowledge with
                industry expertise to deliver solutions that not only address
                current needs but are also scalable and adaptable to future
                requirements.
              </p>
              <p className="text-gray-600">
                We prioritize security, performance, and user experience in all
                our solutions, ensuring that they are robust, efficient, and
                intuitive to use.
              </p>
            </div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden ">
              <Image
                src="/image(4).png"
                alt="Our Approach Visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">
            Ready to Transform Your Business?
          </h2>
          <p className="mb-8 max-w-3xl mx-auto text-gray-600">
            Contact us today to discuss how our solutions can help you overcome
            challenges, seize opportunities, and achieve your business
            objectives in the digital age.
          </p>
          <button className="bg-[#3b82f6] hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}

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
    title: "Education Solutions",
    solutions: [
      {
        title: "Career Helper",
        description: "Tech stack: Dart & Flutter - Runns on Adroid & ios",
        content:
          "This platform helps high school graduates find tertiary institutes and courses they qualify for based on their LGCSE results, the system generates a list of matching institutions and programs. It also provides prospectuses for reference, simplifying the application process.",
      },
      {
        title: "Student Chat App",
        description: "Tech Stack: Dart, Flutter, Django , WebSockets.",
        content:
          "This is a cross-platform chat app (Android & iOS) for students to discuss course topics. Chats are stored securely in our database (not on devices) and serve as a reference repository. Features include real-time messaging and end-to-end encryption.",
      },
      {
        title: "E-Learn System",
        description: "Tech Stack: Vue.js , Django.",
        content:
          "A customizable eLearning solution for individuals and organizations to conduct online learning. After registration, school owners can enroll students and manage digital learning activities.",
      },
    ],
  },
  {
    id: "blockchain",
    title: "Blockchain Solutions",
    solutions: [
      {
        title: "Bokamoso Edu",
        description: "Tech Stack: Next.js, Django, Solana (Anchor Framework).",
        content:
          "This platform digitally issues and manages student scholarships using blockchain technology for secure verification via Solana's immutable ledger. Developed for clients leveraging our blockchain expertise.",
      },
      {
        title: "Bohlale Excellence Pay (BoXP)",
        description: "Tech Stack: Next.js, Solana",
        content:
          "This system will be more convenient in managing educational content that is : academic records, certifications, and projects. Using a Decentralised Autonomous Organisation (DAO) workflow framework to encourage mprove academic excellence. ",
      },
      {
        title: "",
        description: "",
        content: ""
          //"Create digital representations of real-world assets on the blockchain, enabling fractional ownership and new investment opportunities.",
      },
    ],
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    solutions: [
      {
        title: "Crime Reporting System",
        description: "Tech Stack: Next.js, Django and Python ML",
        content:
          "This platform leverages machine learning to instantly identify perpetrators and alert nearby police stations, enabling rapid crime response. By analyzing real-time data, it helps law enforcement act decisively to prevent escalation.",
      },
      {
        title: "Natural Language Processing",
        description: "Human-computer interaction",
        content:
          "Implement NLP solutions that enable computers to understand, interpret, and generate human language for chatbots, sentiment analysis, and more.",
      },
      /*{
        title: "Computer Vision",
        description: "Automated visual understanding",
        content:
          "Develop systems that can interpret and act on visual information, from facial recognition to quality control in manufacturing.",
      },*/
    ],
  },
  {
    id: "iot",
    title: "Internal Tools & Solutions",
    solutions: [
      {
        title: "Project Management System",
        description: "Tech Stack: Java, MySQL",
        content:
          "A centralized platform to streamline project development—from design to deployment—by aggregating all artifacts, processes, and workflows. Born from our team’s firsthand challenges, it eliminates fragmentation and boosts efficiency.",
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

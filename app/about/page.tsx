import { Button } from "@/components/ui/button";
import { Eye, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            About Us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Driving Digital Innovation in Lesotho
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            CodeB is at the forefront of technological advancement, bringing
            cutting-edge solutions to Lesotho and beyond.
          </p>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Our Mission
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                To empower Basotho communities through innovative technology
                solutions and education in blockchain and digital skills.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Eye className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Our Vision
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                To be the leading force in digital transformation in Lesotho,
                fostering a tech-savvy and economically empowered society.
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-20">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Our Team
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet the Innovators Behind CodeBurst
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
            <div className="flex flex-col items-center space-y-4">
              <img
                src="Kaara.jpeg"
                width={120}
                height={120}
                alt="Mr. Tlokotsi Potloane"
                className="rounded-full"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-semibold">Mr. Tlokotsi Potloane</h3>
                <p className="text-gray-500 dark:text-gray-400">
                Director of Executive Management
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  John is the visionary behind our company, leading the team
                  with his passion and expertise.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="./V.jpg"
                width={120}
                height={120}
                alt="Ms. Vikile Hata-hata"
                className="rounded-full"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-semibold">Ms. Vikile Hata-hata</h3>
                <p className="text-gray-500 dark:text-gray-400">
                Director of Information Technology
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Ms. Hata-hata brings over three years of experience in IT infrastructure, network, and system administration. She holds a diploma in Computer Systems Engineering and currently works as an IT Technician at Mothae Diamonds.

                Expanding her expertise in cybersecurity and Python, and holding certifications in Fortinet and CompTIA Security, she combines technical proficiency with a proactive approach to evolving enterprise technologies.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="verts.jpeg"
                width={120}
                height={120}
                alt="Mr. Shelile Malefetsane"
                className="rounded-full"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-semibold">Mr. Shelile Malefetsane</h3>
                <p className="text-gray-500 dark:text-gray-400">
                Director of Technology
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Mr. Shelile brings a strong background in computer engineering, holding a diploma in Computer Systems Engineering and currently pursuing a Bachelor of Engineering Technology in Computer Engineering. Career highlights include an IT internship at Mothae and teaching robotics at the Girls Coding Academy.
                  He has developed blockchain MVPs on Solana and Ethereum, and holds certifications in AI, machine learning, and Python.
                  They use their technical knowledge to promote innovative, scalable, cutting-edge solutions.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="https://placehold.co/120x120.png"
                width={120}
                height={120}
                alt="Mr. Tefelo Khoabeng"
                className="rounded-full"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-semibold">Mr. Tefelo Khoabeng</h3>
                <p className="text-gray-500 dark:text-gray-400">
                Director of UI/UX Design
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Tefelo is the creative force behind our designs, ensuring our
                  products are both beautiful and user-friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

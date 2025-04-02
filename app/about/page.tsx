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
                src="https://placehold.co/120x120.png"
                width={120}
                height={120}
                alt="John Doe"
                className="rounded-full"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Founder & CEO
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  John is the visionary behind our company, leading the team
                  with his passion and expertise.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="https://placehold.co/120x120.png"
                width={120}
                height={120}
                alt="Jane Smith"
                className="rounded-full"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Lead Designer
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Jane is the creative force behind our designs, ensuring our
                  products are both beautiful and user-friendly.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="https://placehold.co/120x120.png"
                width={120}
                height={120}
                alt="Michael Johnson"
                className="rounded-full"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-semibold">Michael Johnson</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Lead Engineer
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Michael is the technical mastermind behind our products,
                  ensuring they are built with the latest technologies and best
                  practices.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="https://placehold.co/120x120.png"
                width={120}
                height={120}
                alt="Emily Davis"
                className="rounded-full"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-semibold">Emily Davis</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Product Manager
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Emily is the driving force behind our product roadmap,
                  ensuring we deliver the features and solutions our customers
                  need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

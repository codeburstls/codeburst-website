
import { Eye, Shield } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | CodeBurst Lesotho",
  description:
    "Learn about CodeBurst Lesotho, our mission, vision, executive committee, and internal development team driving digital innovation in Lesotho.",
};
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
            CodeBurst is at the forefront of technological advancement, bringing
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
              Executive Committee - Innovators Behind CodeBurst
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-12">
            <div className="flex flex-col items-center space-y-4">
              <Image
                src={"/Kaara.jpeg"}
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
                <p className="text-sm text-gray-500 dark:text-gray-400 text-justify">
                Mr Potloane holds a Diploma in Computer Systems Engineering and is currently pursuing a B.Eng in Computer Engineering. Mr. Potloane has years of experience in full-stack web and mobile application development, with expertise spanning technologies such as React, Python, and SQL.

                Career highlights include leading blockchain (Web3) development projects on Ethereum and Solana.
                He uses his technical versatility to drive CodeB’s mission of innovative digital solutions.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/V.jpg"
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
                <p className="text-sm text-gray-500 dark:text-gray-400 text-justify hyphens-auto">
                Ms. Hata-hata brings over three years of experience in IT infrastructure, networks, and system administration. She holds a Diploma in Computer Systems Engineering and  currently serving as an IT Technician.

                Vikile is expanding her expertise with certifications in cybersecurity professional with focus on network security and DevSecOps, as well as Python for systems automation. Passionate about emerging technologies, particularly AI and blockchain,
                and commitment to continuous learning and adaptability.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/Shelile..jpg"
                width={120}
                height={120}
                alt="Mr. Shelile Malefetsane"
                className="rounded-full"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-semibold">Mr. Shelile Malefetsane</h3>
                <p className="text-gray-500 dark:text-gray-400">
                Director of Technology & Engineering
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-justify">
                Mr.Shelile is a computer engineering professional strong foundations in Computer Systems Engineering and currently completing a B.Eng Tech in Computer Engineering. He brings hands‑on experience in IT support, robotics instruction, and has delivered blockchain MVPs on Solana and Ethereum. Certified in AI, Machine Learning and Python via the Samsung Innovation Campus at Lerotholi Polytechnic, he transforms technical expertise into scalable, innovative solutions.
                </p>
              </div>
            </div>
            
          </div>
        </div>
        
        <div className="mt-10">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Internal Development Team 
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-12">
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/pheta.jpg"
                width={120}
                height={120}
                alt="Mr. Pheta Theoha"
                className="rounded-full"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-semibold">Mr. Pheta Theoha</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-justify hyphens-auto">
                 A software developer with expertise in data engineering, cloud computing, and generative AI. 
                 His skillset spans mobile development with React Native, progressive Web3 apps, and technologies such as Docker. 
                 Having worked on several remote web development projects, he values consistent communication and client-focused delivery. 
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/blom.jpg"
                width={120}
                height={120}
                alt="Ms. Bongani Blom"
                className="rounded-full"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-semibold">Mr. Bongani Blom</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-justify hyphens-auto">
                A full-stack developer with strong experience in mobile and web development.
                His skillset includes Flutter, React Native, Vue.js, and backend technologies like Python (Django, Flask, FastAPI), PHP, and Node.js. 
                He also has a background in graphic design and hardware support, with hands-on experience in microcontroller-based projects.

                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/reatile.jpg"
                width={120}
                height={120}
                alt="Mr. Reatile Masaile"
                className="rounded-full"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-semibold">Mr. Reatile Masaile</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-justify hyphens-auto">
                Skilled software developer with a Diploma in Computer Systems Engineering and solid IT experience. Certified in Artificial Intelligence, 
                Python programming, and Cybersecurity fundamentals. Currently advancing expertise in ethical hacking and blockchain technologies.
                Strong foundation in software development, security. 
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/mswati.jpg"
                width={120}
                height={120}
                alt="Mr. Mswati Tshabalala"
                className="rounded-full"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-semibold">Mr. Mswati Tshabalala</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-justify hyphens-auto">
                A dedicated and versatile software developer with over two years of experience in web and mobile app development. 
                He creates solutions that streamline business processes, and support digital transformation. 
                He holds a diploma in Computer Systems Engineering, and is currently exploring Python and data analysis to broaden his skillset.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/Hlomo.jpg"
                width={120}
                height={120}
                alt="Mr. Shelile Malefetsane"
                className="rounded-full"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="space-y-1 text-center">
                <h3 className="text-x1 font-semibold">Mr. Hlomohang Sethunts'a</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-justify hyphens-auto">
                A software delivering solutions at the forefront of modern technologies.
                He specializes in cross platform frameworks such as Flet, Flutter, and Flask.
                He holds a Diploma in Computer Systems Engineering and is certified in Python and Artificial Intelligence. 
                His expertise is supported by over two years of experience in IT support.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

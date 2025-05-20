'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Knowledge Exchange Events & Hackathons",
    description: "Secure and transparent",
    content:
     "Quarterly in‑person and virtual gatherings (“MerafoCon”) where experts present on blockchain use cases, DeFi innovations, and NFT trends—paired with workshops on smart‑contract development and token economics."
    },
  {
    title: "Community‑Owned Governance (DAO)",
    description: "Democratic decision-making",
    content:
  "A decentralized autonomous organization that gives every token holder (with special youth‑focused pools) voting rights over project roadmaps, grant allocations, and platform fees—ensuring young voices steer Merafocoins’ evolution"
    },
  {
    title: "NFT Creative Hub",
    description: "Cost-effective transfers",
    content:
"A user‑friendly minting platform where artists and musicians can tokenize their work as NFTs—complete with built‑in metadata, royalty settings, and on‑chain provenance—so emerging creators can showcase, sell, and earn ongoing royalties from anywhere."
  },
  {
    title: "Educational Resources",
    description: "Learn as you earn",
    content:
      "Access comprehensive educational materials to understand blockchain technology and cryptocurrency fundamentals while participating in the ecosystem.",
  },
];

export default function MerafocoinsPage() {
  return (
    <div className="bg-white py-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Merafocoins</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-500">
            Empowering communities through blockchain technology and digital
            currency innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-600">
              What are Merafocoins?
            </h2>
            <p className="mb-4 text-gray-600">
            Merafocoins, launched by Codeburst in Lesotho, is a pioneering Web3.0 technology venture dedicated to bridging the gap between today’s centralized Web2 platforms and the decentralized internet of tomorrow. By architecting a “meta‑internet” that operates across distributed server networks, we leverage the power of cryptocurrencies, non‑fungible tokens (NFTs), and decentralized finance (DeFi) protocols to deliver solutions that are secure, transparent, and resilient.
            </p>
            <p className="mb-6 text-gray-600">
            Our mission is to empower individuals, businesses, and communities in Lesotho—and beyond—with trustless applications that restore data sovereignty, streamline digital interactions, and unlock new economic opportunities. Through strategic partnerships, community-driven governance, and open‑source innovation, Merafocoins is committed to accelerating mainstream adoption of Web3.0 technologies and redefining the future of online collaboration.
            </p>
            <div className="flex flex-wrap gap-4">
                <Button
                className="bg-[#3b82f6] hover:bg-blue-700 rounded-full bottom-20 "
                onClick={() => {
                  window.location.href = "https://www.facebook.com/merafocoins";
                }}
                >
                Learn More
                </Button>
              {/* <a
               href="https://www.facebook.com/merafocoins"
                className="border-blue-500 text-blue-600 hover:bg-blue-50 rounded-full"
              >
                Learn More
              </a> */}
            </div>
          </div>
          <div className="relative h-80 w-full rounded-lg overflow-hidden ">
            <Image
              src="/index.jpg"
              alt="Merafocoins Visualization"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-blue-600">
                    {feature.title}
                  </CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16 shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Create Wallet
              </h3>
              <p className="text-gray-600">
                Set up your secure digital wallet to store and manage your
                Merafocoins.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Acquire Tokens
              </h3>
              <p className="text-gray-600">
                Purchase or earn Merafocoins through our platform or authorized
                exchanges.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Transact & Grow
              </h3>
              <p className="text-gray-600">
                Use Merafocoins for transactions, investments, or participate in
                governance.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">
            Join the Merafocoins Ecosystem
          </h2>
          <p className="mb-8 max-w-3xl mx-auto text-gray-600">
            Whether you are an individual looking to participate in the future of
            finance, a business seeking efficient payment solutions, or a
            developer interested in building on our platform, Merafocoins offers
            opportunities for everyone.
          </p>
          <Button className="bg-[#3b82f6] hover:bg-blue-700 rounded-full text-lg py-6 px-8">
            Join Now
          </Button>
        </div>
      </div>
    </div>
  );
}

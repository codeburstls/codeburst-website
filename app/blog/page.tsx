import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " Blog | CodeBurst Lesotho",
  description:
    "Learn about CodeBurst Lesotho's latest projects, events, and community initiatives. Stay updated with our blog.",
 
};
const blogPosts = [
  {
    title: "The Future of Blockchain in Africa",
    description:
      "Exploring the potential impact of blockchain technology on African economies.",
    date: "2025-02-15",
    readTime: "5 min read",
  },
  {
    title: "Building Scalable Software Solutions",
    description:
      "Best practices for developing software that can grow with your business.",
    date: "2025-01-20",
    readTime: "7 min read",
  },
  {
    title: "Empowering Basotho Youth Through Digital Education",
    description:
      "How CodeBurst is working to bridge the digital divide in Lesotho.",
    date: "2025-01-02",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="py-16 bg-white ">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Our Blog
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Insights and Updates from CodeBurst
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Stay informed about the latest in technology, blockchain, and
            digital innovation.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Link href="#" key={index}>
                <Card>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>
                      {post.date} • {post.readTime}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">{post.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import Commerce from "../assets/images/commerce.jpg";
import Blog from "../assets/images/blog.jpg";
import Landing from "../assets/images/saas.jpg";
import { Card, CardContent } from "@/components/ui/card";

export const Projects = () => {
  return (
    <section className="bg-[#f5f5f5] py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent>
              <div className="w-full pt-6">
                <Image
                  src={Commerce}
                  width={400}
                  height={300}
                  alt="Project 1"
                  className="rounded-lg"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project 1</h3>
                <p className="text-lg mb-4">
                  A responsive e-commerce website built with Next.js and
                  Tailwind CSS.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center h-10 px-4 rounded-md bg-[#0077b6] text-white font-medium transition-colors hover:bg-[#00b894] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894]"
                  prefetch={false}
                >
                  View Project
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="w-full pt-6">
                <Image
                  src={Landing}
                  width={400}
                  height={300}
                  alt="Project 2"
                  className="rounded-lg"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project 2</h3>
                <p className="text-lg mb-4">
                  A landing page for a SaaS product, built with Next.js and
                  Tailwind CSS.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center h-10 px-4 rounded-md bg-[#0077b6] text-white font-medium transition-colors hover:bg-[#00b894] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894]"
                  prefetch={false}
                >
                  View Project
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="w-full pt-6">
                <Image
                  src={Blog}
                  width={400}
                  height={300}
                  alt="Project 3"
                  className="rounded-lg"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project 3</h3>
                <p className="text-lg mb-4">
                  A blog website built with Next.js and Tailwind CSS.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center h-10 px-4 rounded-md bg-[#0077b6] text-white font-medium transition-colors hover:bg-[#00b894] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894]"
                  prefetch={false}
                >
                  View Project
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

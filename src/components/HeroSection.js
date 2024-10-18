import Avatar from "../assets/images/avatar.jpg";
import Image from "next/image";
import Link from "next/link";


export const HeroSection = () => {
  return (
    <section className="bg-[#4892e2] py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Hi, I am John Doe</h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white">
                I am a full-stack web developer with a passion for creating beautiful and functional websites.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-white text-[#0077b6] font-medium transition-colors hover:bg-[#00b894] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894]"
                prefetch={false}
              >
                View My Work
              </Link>
            </div>
            <div className="hidden md:block">
              <Image
                src={Avatar}
                width={500}
                height={500}
                alt="Hero Image"
                className="rounded-full"
                style={{ aspectRatio: "500/500", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
  )
}

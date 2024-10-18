import Image from "next/image";
import Work from "../assets/images/work.jpg";


export const AboutMe = () => {
  return (
    <section className="py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-gray-600">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About Me
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-8">
              I am a full-stack web developer with over 5 years of experience in
              the industry. I specialize in building responsive and
              user-friendly websites using the latest technologies.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Skills</h3>
                <ul className="space-y-2">
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>Node.js</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Experience</h3>
                <ul className="space-y-2">
                  <li>5+ years as a web developer</li>
                  <li>Worked at Acme Inc. for 3 years</li>
                  <li>Freelanced for 2 years</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src={Work}
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
  );
};

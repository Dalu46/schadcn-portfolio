import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const ContactMe = () => {
  return (
    <section className="py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          Get in Touch
        </h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Enter your name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={5}
                placeholder="Enter your message"
              />
            </div>
            <Button
              type="submit"
              className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-[#0077b6] text-white font-medium transition-colors hover:bg-[#00b894] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894]"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

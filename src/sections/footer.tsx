// import { Button } from "../components/ui/buttons";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#38332e] text-white">
      <div className="px-4 md:px-6 lg:px-8 xl:px-28 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12">
          {/* Contact Information - Left Column */}
          <div>
            <div className="font-sans text-xs tracking-[0.3em] uppercase text-white/60 mb-4">
              GET IN TOUCH
            </div>
            <div className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6">
              Let's Build Something{" "}
              <span className="italic">Extraordinary</span>
            </div>
            <div className="font-sans text-white/70 leading-relaxed mb-12 text-base">
              Transform your vision into reality. Reach out to us today and
              receive a personalized consultation tailored to your project
              needs.
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Phone className="w-5 h-5 text-[#a67b3f]" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-sans text-xs tracking-[0.2em] uppercase text-white/60 mb-2">
                    PHONE
                  </div>
                  <div className="font-sans text-white">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Mail className="w-5 h-5 text-[#a67b3f]" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-sans text-xs tracking-[0.2em] uppercase text-white/60 mb-2">
                    EMAIL
                  </div>
                  <div className="font-sans text-white">info@construct.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <MapPin
                    className="w-5 h-5 text-[#a67b3f]"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <div className="font-sans text-xs tracking-[0.2em] uppercase text-white/60 mb-2">
                    ADDRESS
                  </div>
                  <div className="font-sans text-white leading-relaxed">
                    123 Builder's Avenue, New York, NY 10001
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Column */}
          <div>
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-sans text-xs tracking-[0.2em] uppercase text-white/60 mb-3"
                  >
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-transparent border-0 border-b border-white/20 text-white placeholder-white/40 px-0 py-3 focus:outline-none focus:border-white/60 transition-colors duration-300 font-sans"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-sans text-xs tracking-[0.2em] uppercase text-white/60 mb-3"
                  >
                    PHONE
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-transparent border-0 border-b border-white/20 text-white placeholder-white/40 px-0 py-3 focus:outline-none focus:border-white/60 transition-colors duration-300 font-sans"
                    placeholder="Your Phone"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-sans text-xs tracking-[0.2em] uppercase text-white/60 mb-3"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-transparent border-0 border-b border-white/20 text-white placeholder-white/40 px-0 py-3 focus:outline-none focus:border-white/60 transition-colors duration-300 font-sans"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-sans text-xs tracking-[0.2em] uppercase text-white/60 mb-3"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-transparent border-0 border-b border-white/20 text-white placeholder-white/40 px-0 py-3 focus:outline-none focus:border-white/60 transition-colors duration-300 font-sans resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="w-full border border-white/20 text-white px-10 py-4 font-sans text-sm tracking-wide hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-sans text-sm text-white/60">
              © {new Date().getFullYear()} Construction Company. All rights
              reserved.
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="font-sans text-sm text-white/60 hover:text-[#a67b3f] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-sans text-sm text-white/60 hover:text-[#a67b3f] transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

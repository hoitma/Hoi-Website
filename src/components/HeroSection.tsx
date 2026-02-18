
import mountainArtwork from "@/components/assets/mountain.png";
import hoi from "@/components/assets/hoi.png";
import { useScrollPop } from "./ui/useScrollPop";

export function HeroSection() {
  const { ref, isVisible, animationClass } = useScrollPop();
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <div
        ref={ref as any}
        className={`relative w-full max-w-5xl overflow-hidden rounded-2xl bg-background px-8 py-10 md:px-16 md:py-14 transition-all duration-700 ${isVisible ? animationClass : 'opacity-0 translate-y-10'}`}
      >
        {/* Main content area */}
        <div className="flex items-baseline gap-6">
          {/* Image */}
          <div className="flex-shrink-0 w-20 sm:w-24 md:w-28 lg:w-32 aspect-auto translate-y-5">
            <img
              src={hoi}
              alt="Portrait"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col flex-1">
            {/* Greet */}
            <div className="flex flex-col">
              <h1 className="text-foreground font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight">
                Hi, I'm Hoi
              </h1>
            </div>
            <div className="mt-2">
              <h3 className="text-foreground text-orange-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight italic">
                Go-to-market Generalist
              </h3>
            </div>

            {/* Description */}
            <p className="font-montserrat text-muted-foreground text-xs sm:text-sm mt-6 leading-relaxed">
              Bringing a background in Business Development, Marketing and Ops.
              {" "}
              Believer in the 80/20 rule: Invest time in building the right structures and automations for the critical 20% that drives 80% of your results.
            </p>

            {/* Buttons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://drive.google.com/file/d/1OAsQjL8DxiJZ7uYJDXE2U8a6iGBwcgk3/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm-serif bg-foreground text-background text-xs sm:text-sm px-5 sm:px-7 py-2.5 sm:py-3 rounded-full hover:opacity-90 transition-opacity tracking-wide"
              >
                View My Resume
              </a>
              <a
                href="https://www.linkedin.com/in/hoi-tung-ma-955818210/"
                target="_blank"
                rel="noopener noreferrer"
                className="border font-dm-serif  border-foreground text-foreground text-xs sm:text-sm px-5 sm:px-7 py-2.5 sm:py-3 rounded-full hover:bg-foreground hover:text-background transition-all tracking-wide"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
  
export function AspiringQuote() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[hsl(270,30%,6%)] px-6 py-16 md:py-0">
      <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Mountain Artwork */}
        <div className="flex justify-center animate-fade-in rounded-2xl">
          <img
            src={mountainArtwork}
            alt="Colorful mountain artwork representing the journey"
            className="w-full max-w-md md:max-w-lg object-contain drop-shadow-2xl"
          />
        </div>

        {/* Quote */}
        <div className="animate-fade-in [animation-delay:200ms] [animation-fill-mode:both]">
          <h6 className="inline-block text-[hsl(280,60%,70%)] font-medium mb-6">
            What I believe in
          </h6>

          <blockquote className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-snug text-[hsl(0,0%,95%)]">
            <span className="block mb-4 leading-tight">
              Enjoy the{" "}
              <em className="text-[hsl(310,50%,72%)] not-italic font-medium underline underline-offset-4 decoration-[hsl(310,50%,72%)]/30">
                Journey {" "}
              </em>
              as much as the{" "}
              <em className="text-[hsl(330,55%,70%)] not-italic font-medium">
                Destination
              </em>
            </span>
          </blockquote>

          <div className="mt-10 h-px w-16 bg-gradient-to-r from-[hsl(280,60%,60%)] to-transparent" />
        </div>
      </div>
    </section>
  );
}
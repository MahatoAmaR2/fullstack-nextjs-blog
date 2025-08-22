"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

type Testimonial = {
  name: string;
  title: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Aarav Patel",
    title: "Frontend Dev",

    quote:
      "The editor is clean and fast. Publishing a post takes seconds. Love the dark mode!",
  },
  {
    name: "Sara Khan",
    title: "Technical Writer",

    quote:
      "Markdown support is excellent—exactly what I need for developer-focused articles.",
  },
  {
    name: "Rohan Gupta",
    title: "Product Designer",

    quote:
      "Beautiful defaults with room to customize. The UX feels polished throughout.",
  },
];

export function Testimonials() {
  return (
    <div className="h-[40rem] relative flex w-full flex-col items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="text-center mb-12">
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          What our readers say
        </p>

        <p className="relative z-20 bg-clip-text text-muted-foreground ">
          Real feedback that helps us keep improving.
        </p>
      </div>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

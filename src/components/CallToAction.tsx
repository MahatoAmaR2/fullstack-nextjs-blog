"use client";

import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-20 px-6 lg:px-20 bg-primary text-primary-foreground text-center rounded-2xl mx-4 md:mx-12 my-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to start writing?
      </h2>
      <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
        Join hundreds of readers and writers using <span className="font-semibold">Inkspire</span> 
        to share their stories with the world.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Button size="lg" variant="secondary">
          Start Writing
        </Button>
        <Button size="lg" variant="outline" className="dark:text-black bg-transparent dark:border-black border-white/70 text-white dark:hover:bg-black hover:bg-white hover:text-primary dark:hover:text-white">
          Learn More
        </Button>
      </div>
    </section>
  );
}

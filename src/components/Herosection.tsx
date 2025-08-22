"use client";

import Link from "next/link";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <BackgroundLines className="flex w-full items-center justify-center md:py-14 px-6 h-screen md:h-[40rem]">
      <div className=" text-center">
        <div className="md:text-7xl text-3xl font-bold flex flex-col">
          <span>Share Your Ideas.</span> <span>Inspire the World.</span>
        </div>

        <p className="mt-4 text-xl text-muted-foreground">
          Write blogs, share your thoughts, and connect with like-minded
          readers.
        </p>
        <div className="mt-8 flex gap-4 justify-center ">
          <Button asChild>
            <Link href="/create">Start Writing</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blogs">Browse Blogs</Link>
          </Button>
        </div>
      </div>
    </BackgroundLines>
  );
}

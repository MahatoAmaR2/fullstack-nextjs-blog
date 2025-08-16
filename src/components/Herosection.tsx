"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 md:py-20 px-6">
      
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight">
          Share Your Ideas. <span className="text-primary">Inspire the World.</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Write blogs, share your thoughts, and connect with like-minded readers.
        </p>
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <Button asChild>
            <Link href="/create">Start Writing</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blogs">Browse Blogs</Link>
          </Button>
        </div>
      </div>

      
      <div className="mt-10 md:mt-0 md:ml-8">
        <Image
          src="/hero-img.png" 
          alt="Blogging Illustration"
          width={600}
          height={500}
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}

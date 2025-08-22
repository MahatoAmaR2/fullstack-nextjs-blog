"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12 grid gap-8 md:grid-cols-4">
       
        <div>
          <h3 className="text-xl font-bold">Blogify</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Share your thoughts, ideas, and stories with the world.
          </p>
        </div>

        
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-primary">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/create" className="hover:text-primary">
                Create Post
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/faq" className="hover:text-primary">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-primary">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <Link href="https://github.com" target="_blank" className="hover:text-primary">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-primary ">
              <Linkedin className="h-5 w-5  " />
            </Link>
          </div>
        </div>
      </div>

      <div className=" py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Blogify. All rights reserved.
      </div>
    </footer>
  );
}

"use client";

import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: "Create Post", href: "/create" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="flex justify-between items-center p-4 border-b bg-background sticky top-0 z-50">
      <Link
        href="/"
        className="text-xl font-bold hover:text-primary transition-colors"
      >
        Blogify
      </Link>

      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-primary transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="md:flex items-center gap-3 hidden ">
        <Input type="search" placeholder="Search here..." className="hidden md:block w-48" />
        <ModeToggle />
        <Link
          href="/signin"
          className="ml-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition"
        >
          Sign in
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="flex items-center gap-2 md:hidden h-1/2">
        <ModeToggle />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-4 flex flex-col gap-4 ml-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Input type="search" placeholder="Search here..." />
              <Link
                href="/signin"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition text-center"
                onClick={() => setOpen(false)}
              >
                Sign in
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

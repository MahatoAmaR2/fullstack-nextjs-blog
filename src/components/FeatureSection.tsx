"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, MessageSquare, Heart, Shield } from "lucide-react";
import { BackgroundGradient } from "./ui/background-gradient";
export function Features() {
  const features = [
    {
      title: "Markdown Editor",
      description:
        "Write with ease using a clean markdown editor.",
      icon: PenTool,
    },
    {
      title: "Engagement",
      description: "Readers can like and comment to share feedback instantly.",
      icon: MessageSquare,
    },
    {
      title: "Personalized Experience",
      description: "Light & Dark theme support for a distraction-free reading.",
      icon: Heart,
    },
    {
      title: "Secure Authentication",
      description: "Sign in with Google, GitHub, or Email safely and securely.",
      icon: Shield,
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-20 bg-muted dark:bg-zinc-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-3">Why Blogify?</h2>
        <p className="text-muted-foreground mt-2">
          Everything you need to create, share, and enjoy blogs in one place.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <BackgroundGradient key={index}>
              <Card  className="hover:shadow-lg transition">
                <CardHeader>
                  <Icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </BackgroundGradient>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Is this platform free to use?",
    answer:
      "Yes! You can write and publish blogs for free. We may introduce premium features later, but the basic editor will always stay free.",
  },
  {
    question: "Do you support Markdown?",
    answer:
      "Absolutely. The editor is powered by Markdown, so you can format text, add code blocks, and more with ease.",
  },
  {
    question: "Can I switch between dark and light themes?",
    answer:
      "Yes, the website fully supports both light and dark mode out of the box.",
  },
  {
    question: "Is my content safe?",
    answer:
      "100%. Your drafts and published blogs are stored securely. You’ll never lose your work.",
  },
  {
    question: "Can I schedule posts?",
    answer:
      "Not yet, but scheduled publishing is on our roadmap. Stay tuned for updates!",
  },
];

export function FAQs() {
  return (
   <section className="py-16 px-6 lg:px-20 bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground mt-2">
          Answers to the most common questions about our platform.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Newsletter = () => {
  return (
    <section className="py-20 px-6 lg:px-20 bg-muted/50 text-center">
      <p className="text-sm font-medium text-primary mb-3">
        📩 Join Our Community
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Stay Updated with the Latest Blogs
      </h2>
      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
        Get the best articles, guides, and updates delivered straight to your
        inbox every week. No spam, only quality content.
      </p>

      <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto mb-6">
        <Input
          type="email"
          placeholder="Enter your email"
          className="flex-1"
          required
        />
        <Button type="submit" className="px-6">
          Subscribe
        </Button>
      </form>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <p className="text-xs text-muted-foreground cursor-help">
              ✅ Trusted by <span className="font-semibold">500+ readers</span>{" "}
              already.
            </p>
          </TooltipTrigger>
          <TooltipContent>
            <p>This is dummy data (for now 😉)</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </section>
  );
};

export default Newsletter;

import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/latestBlog";
import { Button } from "./ui/button";
const RecentPosts = () => {
  return (
    <section className="py-16 px-6 lg:px-20 bg-background">
      <h2 className="text-3xl font-bold text-center mb-12">Latest Blogs</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Blog Card */}
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-lg p-4 shadow-sm transform transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-full h-[150px] mb-4">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="rounded-md mb-4 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-muted-foreground mb-4 font-normal leading-5">
              {blog.excerpt}
            </p>
            <div className="flex justify-between items-center text-sm ">
              <span className="font-bold text-gray-500">{blog.author}</span>
              <span className="text-gray-400 font-medium">{blog.date}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button variant="outline" asChild>
          <Link href="/blogs">View All Blogs</Link>
        </Button>
      </div>
    </section>
  );
};

export default RecentPosts;

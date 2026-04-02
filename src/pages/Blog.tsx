import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  const [search, setSearch] = useState("");

  const posts = [
    {
      id: 1,
      title: "5 Tips for Writing the Perfect Freelance Profile",
      excerpt:
        "Stand out from the crowd with these proven strategies for creating a compelling freelance profile.",
      author: "Sarah Chen",
      date: "Feb 20, 2026",
      category: "Freelancing",
      readTime: "5 min read",
      image: "📝",
    },
    {
      id: 2,
      title: "How to Land Your First Freelance Job",
      excerpt:
        "A beginner's guide to securing your first project and building client relationships.",
      author: "Raj Kumar",
      date: "Feb 18, 2026",
      category: "Career Tips",
      readTime: "7 min read",
      image: "🚀",
    },
    {
      id: 3,
      title: "Remote Work Trends in 2026",
      excerpt:
        "Explore the latest trends shaping the future of remote work and freelancing.",
      author: "Priya Sharma",
      date: "Feb 15, 2026",
      category: "Trends",
      readTime: "6 min read",
      image: "📊",
    },
    {
      id: 4,
      title: "Building Your Personal Brand as a Freelancer",
      excerpt:
        "Learn how to establish and grow your personal brand in the digital marketplace.",
      author: "Alex Patel",
      date: "Feb 12, 2026",
      category: "Branding",
      readTime: "8 min read",
      image: "✨",
    },
  ];

  const filtered = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              workNexus <span className="text-gradient-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tips, trends, and stories from the freelancing world.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {filtered.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all shadow-card group cursor-pointer"
              >
                <div className="text-4xl mb-4">{post.image}</div>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {post.category}
                </span>
                <h3 className="font-display font-bold text-lg mt-3 mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {post.date}
                    </span>
                  </div>
                  <span className="text-xs text-primary">{post.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p>No articles found. Try a different search.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;

import { featuredPosts } from "@/lib/data";
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react"
import * as motion from "motion/react-client"
import Image from "next/image";

export default function FeaturedSection() {
  const posts = featuredPosts;
  console.log("post: ", posts);
  return <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y:200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
          Promo Bazar Syawal <span className="text-chart-2 text-semibold">+Diskon 20%</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-6 gap-4">
        {posts.map((post, index) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 20}}
            whileInView={{ opacity: 1, y:0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-xs py-0">
              <CardHeader className="p-0">
                <div className="relative">
                  <div className="w-full h-48 relative">
                    <Image 
                      fill
                      src={post.image} 
                      alt={post.title} 
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute top-4 left-4">
                    <Badge variant="destructive" className="bg-background/80 backdrop-blur-xs">{post.category}</Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-bold text text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  {post.harga}
                </div>
                <div className="flex items-center text-primary font-medium group-hover:underline">
                  Masuk Keranjang <ShoppingCart className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
}
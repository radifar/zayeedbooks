"use client"
import * as motion from "motion/react-client"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="min-h-[9vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-6">
              Penerbit Buku Anak <span className="text-primary italic">No 1</span> di Indonesia
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Belanja lebih hemat melalui Zayeed Partner Seluruh Indonesia.
            </p>
            <motion.div initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}>
              <Button size="lg" className="group">
                Bergabung menjadi Zayeed Partner
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8}}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
        >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl absolute -top-10 -right-1"></div>
              <div className="w-96 h-96 bg-gradient-to-tl from-secondary/30 to-primary/30 rounded-2xl transform rotate-6 shadow-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
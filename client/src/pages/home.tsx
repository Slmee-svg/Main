import { useState, useEffect } from "react";
import { products, assets, staticContent, Language, WHATSAPP_NUMBER } from "@/lib/data";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isRTL = language === 'ar';

  const sets = products.filter(p => p.type === 'set');
  const perfumes = products.filter(p => p.type === 'perfume');
  const sprays = products.filter(p => p.type === 'bodyspray');

  return (
    <div className={cn(
      "min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black", 
      isRTL ? "font-cairo" : "font-montserrat"
    )} dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5",
        scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      )}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl md:text-3xl text-white tracking-widest z-50">LUNA</a>
          
          <div className="flex items-center gap-4">
             <Button
                variant="outline"
                size="sm"
                className="hidden md:flex rounded-full border-primary/50 text-primary hover:bg-primary hover:text-black transition-colors gap-2"
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
              >
                <MessageCircle className="w-4 h-4" />
                <span className={isRTL ? "font-sans" : "font-sans"}>{staticContent.orderOnWhatsapp[language]}</span>
              </Button>
            <LanguageToggle language={language} setLanguage={setLanguage} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-90"
          >
            <source src={assets.video} type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-sm md:text-lg uppercase tracking-[0.3em] md:tracking-[0.5em] mb-4 text-white/80 font-sans">
              {staticContent.madeInFrance[language]}
            </h2>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl mb-6 tracking-tight">
              {staticContent.heroTitle[language]}
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
              {staticContent.heroSubtitle[language]}
            </p>
            
            <Button 
              size="lg" 
              className="rounded-none px-8 py-6 text-lg bg-white text-black hover:bg-primary hover:text-black border-none transition-all duration-300 font-serif"
              onClick={() => {
                const element = document.getElementById('collection');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {staticContent.shopNow[language]}
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 bg-background">
        
        {/* Sets Section */}
        <section id="collection" className="py-24 md:py-32 container mx-auto px-6">
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-center mb-16 md:mb-24"
          >
            <h2 className="font-serif text-3xl md:text-5xl text-primary mb-4">{staticContent.sets[language]}</h2>
            <div className="h-px w-24 bg-primary/30 mx-auto" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
            {sets.map((product, index) => (
              <ProductCard key={product.id} product={product} language={language} index={index} />
            ))}
          </div>
        </section>

        {/* Parallax Divider / Mood Image? Or just spacing */}
        <div className="w-full h-px bg-white/5" />

        {/* Perfumes Section */}
        <section className="py-24 md:py-32 container mx-auto px-6">
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-center mb-16 md:mb-24"
          >
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">{staticContent.perfumes[language]}</h2>
             <div className="h-px w-24 bg-white/20 mx-auto" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
            {perfumes.map((product, index) => (
              <ProductCard key={product.id} product={product} language={language} index={index} />
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-white/5" />

        {/* Body Sprays Section */}
        <section className="py-24 md:py-32 container mx-auto px-6 bg-secondary/5">
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-center mb-16 md:mb-24"
          >
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">{staticContent.bodySprays[language]}</h2>
             <div className="h-px w-24 bg-white/20 mx-auto" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
            {sprays.map((product, index) => (
              <ProductCard key={product.id} product={product} language={language} index={index} />
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-black py-12 md:py-20 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-white mb-8">LUNA</h2>
          
          <div className="flex justify-center gap-8 mb-12">
             {/* Social placeholders if needed */}
          </div>
          
          <p className="text-white/40 text-sm font-sans">
            &copy; {new Date().getFullYear()} LUNA. All rights reserved.
          </p>
        </div>
      </footer>
      
      {/* Floating WhatsApp Button (Mobile Only as navbar has one for desktop) */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <Button
          size="icon"
          className="rounded-full h-14 w-14 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg shadow-black/50"
          onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
        >
          <MessageCircle className="h-7 w-7" />
        </Button>
      </div>
    </div>
  );
}

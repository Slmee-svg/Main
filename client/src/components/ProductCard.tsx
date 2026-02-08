import { motion } from "framer-motion";
import { Product, WHATSAPP_NUMBER, staticContent, Language } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  product: Product;
  language: Language;
  index: number;
}

export function ProductCard({ product, language, index }: ProductCardProps) {
  const isRTL = language === 'ar';
  
  const handleOrder = () => {
    const message = language === 'en' 
      ? `Hello, I would like to order: ${product.name.en}`
      : `مرحبا، أود طلب: ${product.name.ar}`;
      
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-secondary/20 mb-6">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={product.image} 
          alt={product.name[language]}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Quick Order Overlay - Desktop */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/20 backdrop-blur-[2px]">
           <Button 
            onClick={handleOrder}
            size="lg"
            className="rounded-none bg-white text-black hover:bg-primary hover:text-black border-none font-serif tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            {staticContent.orderOnWhatsapp[language]}
          </Button>
        </div>
      </div>

      <div className={cn("flex flex-col flex-grow", isRTL ? "text-right" : "text-left")}>
        <div className="flex justify-between items-baseline mb-2 gap-4">
          <h3 className="font-serif text-xl md:text-2xl text-white font-medium tracking-wide">
            {product.name[language]}
          </h3>
          <span className="font-sans text-primary text-lg font-bold shrink-0">
            {product.price} <span className="text-sm font-normal text-white/60">{staticContent.aed[language]}</span>
          </span>
        </div>
        
        <p className={cn(
          "text-white/70 text-sm leading-relaxed mb-6 font-light", 
          language === 'ar' ? "font-sans" : "font-sans"
        )}>
          {product.description[language]}
        </p>
        
        {/* Mobile Only Button - Visible only on small screens */}
        <div className="mt-auto md:hidden">
          <Button 
            onClick={handleOrder}
            className="w-full rounded-none bg-white/10 hover:bg-primary hover:text-black text-white border border-white/20 transition-all duration-300 gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            {staticContent.orderOnWhatsapp[language]}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Language } from "@/lib/data";

interface LanguageToggleProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md p-1 rounded-full border border-white/10">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={cn(
          "rounded-full px-4 h-8 transition-all duration-300 font-sans text-xs font-medium tracking-widest",
          language === 'en' 
            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
            : "text-white/60 hover:text-white hover:bg-white/5"
        )}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('ar')}
        className={cn(
          "rounded-full px-4 h-8 transition-all duration-300 font-sans text-xs font-medium",
          language === 'ar' 
            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
            : "text-white/60 hover:text-white hover:bg-white/5"
        )}
      >
        عربي
      </Button>
    </div>
  );
}

import azalPerfumeImg from "@assets/image-4_1770569893657.jpg";
import lunaPerfumeImg from "@assets/image-1_1770569960546.jpg";
import azalBodySprayImg from "@assets/image-3_1770569960502.jpg";
import lunaBodySprayImg from "@assets/image_1770569960522.jpg";
import azalSetImg from "@assets/Screenshot_20260208_191208_Gallery_1770569960445.jpg";
import lunaSetImg from "@assets/Screenshot_20260208_191224_Gallery_1770569960485.jpg";
// Video
import promoVideo from "@assets/grok_video_2026-02-08-14-54-31_1770569960570.mp4";

export type Language = 'en' | 'ar';

export interface Product {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  notes?: {
    en: string;
    ar: string;
  };
  price: number;
  image: string;
  type: 'perfume' | 'bodyspray' | 'set';
}

export const WHATSAPP_NUMBER = "971507574994";

export const assets = {
  video: promoVideo,
};

export const products: Product[] = [
  {
    id: 'azal-perfume',
    name: {
      en: 'AZAL Perfume',
      ar: 'عطر أزال',
    },
    description: {
      en: 'A harmonious blend that combines sparkling citrus freshness with delicate floral notes, settling into a warm spicy and powdery base for a long-lasting, luxurious impression.',
      ar: 'مزيج متناغم يجمع بين انتعاش الحمضيات الفوارة ورقة الزهور الناعمة، ليستقر على قاعدة دافئة من التوابل والبودرة تمنحك فخامة تدوم طويلاً.',
    },
    price: 210,
    image: azalPerfumeImg,
    type: 'perfume',
  },
  {
    id: 'luna-piena-perfume',
    name: {
      en: 'LUNA PIENA Perfume',
      ar: 'عطر لونا بينا',
    },
    description: {
      en: 'Rare White Florals, Warm Amber, and a Premium Musk base.',
      ar: 'مزيج ساحر يجسد الأناقة والغموض، صُمم ليترك أثراً لا يُنسى في كل حضور. المكونات الرئيسية: زهور بيضاء نادرة، لمسات من العنبر الدافئ، وقاعدة من المسك الفاخر.',
    },
    price: 210,
    image: lunaPerfumeImg,
    type: 'perfume',
  },
  {
    id: 'azal-body-spray',
    name: {
      en: 'AZAL Body Spray',
      ar: 'معطر جسم أزال',
    },
    description: {
      en: 'A captivating blend opening with sparkling citrus freshness, leading into a heart of pure florals, and settling into the warmth of cinnamon extract and spices with a luxurious powdery finish for an unforgettable presence.',
      ar: 'توليفة ساحرة تبدأ بانتعاش الحمضيات الفوارة، تأخذك لقلب مفعم بأنقى الزهور، وتستقر بدفء خلاصة القرفة والتوابل مع لمسة بودرية فاخرة تضمن لك حضوراً لا يُنسى.',
    },
    price: 120,
    image: azalBodySprayImg,
    type: 'bodyspray',
  },
  {
    id: 'luna-piena-body-spray',
    name: {
      en: 'LUNA PIENA Body Spray',
      ar: 'معطر جسم لونا بينا',
    },
    description: {
      en: 'A unique blend where citrus freshness meets the warmth of exotic spices, anchored by a rare floral heart for a long-lasting, harmonious scent experience.',
      ar: 'تركيبة فريدة تجمع بين انتعاش الحمضيات وسحر التوابل الدافئة، ترتكز على قلب من الزهور النادرة لتمنحك تجربة عطرية متناغمة تدوم طويلاً.',
    },
    price: 120,
    image: lunaBodySprayImg,
    type: 'bodyspray',
  },
  {
    id: 'azal-set',
    name: {
      en: 'AZAL Collection Set',
      ar: 'مجموعة أزال',
    },
    description: {
      en: 'Experience the complete luxury of AZAL. Includes both the Eau de Parfum and the Body Spray.',
      ar: 'تجربة أزال الكاملة الفاخرة. تشمل العطر ومعطر الجسم.',
    },
    price: 310,
    image: azalSetImg,
    type: 'set',
  },
  {
    id: 'luna-piena-set',
    name: {
      en: 'LUNA PIENA Collection Set',
      ar: 'مجموعة لونا بينا',
    },
    description: {
      en: 'Experience the complete mystery of LUNA PIENA. Includes both the Eau de Parfum and the Body Spray.',
      ar: 'تجربة لونا بينا الكاملة والغامضة. تشمل العطر ومعطر الجسم.',
    },
    price: 310,
    image: lunaSetImg,
    type: 'set',
  },
];

export const staticContent = {
  heroTitle: {
    en: "Scent Of Memories",
    ar: "عبق الذكريات"
  },
  heroSubtitle: {
    en: "Discover the essence of elegance with LUNA",
    ar: "اكتشف جوهر الأناقة مع لونا"
  },
  shopNow: {
    en: "Shop Now",
    ar: "اطلب الآن"
  },
  perfumes: {
    en: "Perfumes",
    ar: "العطور"
  },
  bodySprays: {
    en: "Body Sprays",
    ar: "معطرات الجسم"
  },
  sets: {
    en: "Collection Sets",
    ar: "المجموعات"
  },
  orderOnWhatsapp: {
    en: "Order on WhatsApp",
    ar: "اطلب عبر واتساب"
  },
  aed: {
    en: "AED",
    ar: "درهم"
  },
  madeInFrance: {
    en: "Made in France",
    ar: "صنع في فرنسا"
  }
};

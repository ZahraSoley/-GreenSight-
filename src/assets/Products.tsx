import new1 from './products/new1.jpg'
import new2 from './products/new2.jpg'
import new3 from './products/new3.jpg'
import new4 from './products/new4.jpg'
import new5 from './products/new5.jpg'
import new6 from './products/new6.jpg'
import new7 from './products/new7.jpg'
import new8 from './products/new8.jpg'
import new9 from './products/new9.jpg'
import new10 from './products/new10.jpg'
import new11 from './products/new11.jpg'
import new12 from './products/new12.jpg'
import new13 from './products/new13.jpg'
import new14 from './products/new14.jpg'
import new15 from './products/new15.jpg'
import new16 from './products/new16.jpg'
import new17 from './products/new17.jpg'
import new18 from './products/new18.jpg'

import gift1 from './products/gift1-Photoroom.png'
import gift2 from './products/gift2-Photoroom.png'
import gift3 from './products/gift3-Photoroom.png'
import gift4 from './products/gift4-Photoroom.png'
import gift5 from './products/gift5-Photoroom.png'
import gift6 from './products/gift6-Photoroom.png'
import gift7 from './products/gift7-Photoroom.png'
import gift8 from './products/gift8-Photoroom.png'
import gift9 from './products/gift9-Photoroom.png'
import gift10 from './products/gift10-Photoroom.png'

import flower1 from './products/flower1.png'

import plant2 from './products/plant2.jpg'
import plant5 from './products/plant5.jpg'
import plant6 from './products/plant6.jpg'
import plant10 from './products/plant10.jpg'
import plant13 from './products/plant13.jpg'
import plant16 from './products/plant16.jpg'
import plant18 from './products/plant18.jpg'
import plant19 from './products/plant19.jpg'
import plant20 from './products/plant20.jpg'
import plant21 from './products/plant21.jpg'
import plant25 from './products/plant25.jpg'
import plant26 from './products/plant26.jpg'

import planter1 from './products/planter1.png'
import planter2 from './products/planter2.png'
import planter3 from './products/planter3.png'
import planter4 from './products/planter4.png'
import planter5 from './products/planter5.png'
import planter6 from './products/planter6.png'
import planter7 from './products/planter7.png'
import planter8 from './products/planter8.png'
import planter9 from './products/planter9.png'

export interface ProductsInterface {
  id: string;
  name: string;
  type: string;
  price: number;
  tagline: string;
  description: string;
  image: string;
  inStock: boolean;

  size?: string;
  care?: {
    light: string;
    water: string;
    difficulty: string;
  };
  quantity?: number
}

export const products: ProductsInterface[] = [
  {
    id: 'new1',
    name: 'Golden Cactus',
    type: 'new',
    price: 29.00,
    size: 'Small',
    tagline: 'Sunlit resilience in sculptural form.',
    description: 'A sculptural cactus with warm green tones and golden spines — perfect for modern interiors.',
    care: {
      light: 'bright',
      water: 'Water once every 3–4 weeks',
      difficulty: 'Easy'
    },
    image: new1,
    inStock: true
  },
  {
    id: 'new2',
    name: 'Gasteria Succulent',
    type: 'new',
    price: 25.00,
    size: 'Small',
    tagline: 'Quiet beauty that thrives on simplicity.',
    description: 'A compact succulent with thick, speckled leaves that thrive on neglect and bright shade.',
    care: {
      light: 'medium',
      water: 'Allow soil to dry completely',
      difficulty: 'Easy'
    },
    image: new2,
    inStock: true
  },
  {
    id: 'new3',
    name: 'Baby Jade Plant',
    type: 'new',
    price: 32.00,
    size: 'Medium',
    tagline: 'Prosperity in miniature form.',
    description: 'A miniature jade plant with glossy round leaves symbolizing prosperity and balance.',
    care: {
      light: 'bright',
      water: 'Water when top soil feels dry',
      difficulty: 'Easy'
    },
    image: new3,
    inStock: true
  },
  {
    id: 'new4',
    name: 'Parlor Palm',
    type: 'new',
    price: 45.00,
    size: 'Large',
    tagline: 'Tropical calm for every corner.',
    description: 'A lush palm that brings tropical calm and soft movement to your space.',
    care: {
      light: 'low',
      water: 'Keep soil lightly moist',
      difficulty: 'Moderate'
    },
    image: new4,
    inStock: true
  },
  {
    id: 'new5',
    name: 'Spider Plant',
    type: 'new',
    price: 28.00,
    size: 'Medium',
    tagline: 'Fresh air in flowing green stripes.',
    description: 'Crisp, striped leaves that purify the air and add a refreshing touch of green.',
    care: {
      light: 'medium',
      water: 'Water once a week',
      difficulty: 'Easy'
    },
    image: new5,
    inStock: true
  },
  {
    id: 'new6',
    name: 'mini ZZ Plant',
    type: 'new',
    price: 39.00,
    size: 'Medium',
    tagline: 'Effortless greenery, endlessly glossy.',
    description: 'Elegant upright stems with glossy leaves that stay green with minimal care.',
    care: {
      light: 'low',
      water: 'Water every 2–3 weeks',
      difficulty: 'Very easy'
    },
    image: new6,
    inStock: true
  },
  {
    id: 'new7',
    name: 'Haworthia Zebra',
    type: 'new',
    price: 24.00,
    size: 'Small',
    tagline: 'Bold texture in a small frame.',
    description: 'A sculptural succulent with striking white-striped leaves — small yet eye-catching.',
    care: {
      light: 'medium',
      water: 'Water every 2–3 weeks',
      difficulty: 'Easy'
    },
    image: new7,
    inStock: true
  },
  {
    id: 'new8',
    name: 'Snake Plant Compacta',
    type: 'new',
    price: 35.00,
    size: 'Medium',
    tagline: 'Enduring grace in vertical lines.',
    description: 'Tall, architectural leaves that thrive in any light and demand almost no care.',
    care: {
      light: 'low',
      water: 'Water every 3 weeks',
      difficulty: 'Very easy'
    },
    image: new8,
    inStock: true
  },
  {
    id: 'new9',
    name: 'Aloe Vera',
    type: 'new',
    price: 30.00,
    size: 'Medium',
    tagline: 'Timeless green with a healing spirit.',
    description: 'A timeless succulent with fresh green spikes and natural healing charm.',
    care: {
      light: 'bright',
      water: 'Water every 2–3 weeks',
      difficulty: 'Easy'
    },
    image: new9,
    inStock: true
  },
  {
    id: 'new10',
    name: 'Chinese Money Plant',
    type: 'new',
    price: 33.00,
    size: 'Small',
    tagline: 'Playful balance in every coin-shaped leaf.',
    description: 'Round, coin-shaped leaves that bring playful balance and fresh energy to your home.',
    care: {
      light: 'medium',
      water: 'Water once a week',
      difficulty: 'Easy'
    },
    image: new10,
    inStock: true
  },
  {
    id: 'new11',
    name: 'Zebra Haworthia',
    type: 'new',
    price: 27.00,
    size: 'Small',
    tagline: 'Modern rhythm in black and white.',
    description: 'Bold and sculptural, this striped succulent brings modern rhythm to any shelf or desk.',
    care: {
      light: 'bright',
      water: 'Water every 2–3 weeks',
      difficulty: 'Easy'
    },
    image: new11,
    inStock: true
  },
  {
    id: 'new12',
    name: 'Rex Begonia',
    type: 'new',
    price: 36.00,
    size: 'Medium',
    tagline: 'Artful leaves with natural silver light.',
    description: 'Velvety leaves painted with silver and green veins — perfect for adding quiet drama indoors.',
    care: {
      light: 'medium',
      water: 'Keep soil lightly moist',
      difficulty: 'Moderate'
    },
    image: new12,
    inStock: true
  },
  {
    id: 'new13',
    name: 'Anthurium Clarinervium',
    type: 'new',
    price: 49.00,
    size: 'Medium',
    tagline: 'Velvet hearts with elegant structure.',
    description: 'Heart-shaped foliage with intricate white veins — elegant, structured, and timeless.',
    care: {
      light: 'medium',
      water: 'Water when top soil feels dry',
      difficulty: 'Moderate'
    },
    image: new13,
    inStock: true
  },
  {
    id: 'new14',
    name: 'Monstera Cutting',
    type: 'new',
    price: 22.00,
    size: 'Small',
    tagline: 'A minimalist start to a growing story.',
    description: 'A single Monstera cutting in glass — minimal, poetic, and ever-growing.',
    care: {
      light: 'bright',
      water: 'Change water weekly',
      difficulty: 'Easy'
    },
    image: new14,
    inStock: true
  },
  {
    id: 'new15',
    name: 'Aloe Juvenna',
    type: 'new',
    price: 29.00,
    size: 'Small',
    tagline: 'Compact vitality in fresh green spikes.',
    description: 'Compact aloe with fresh green spikes and soft white spots — perfect for clean modern interiors.',
    care: {
      light: 'bright',
      water: 'Allow soil to dry completely',
      difficulty: 'Easy'
    },
    image: new15,
    inStock: true
  },
  {
    id: 'new16',
    name: 'Mini Jade Bowl',
    type: 'new',
    price: 31.00,
    size: 'Small',
    tagline: 'Quiet strength in a rounded form.',
    description: 'A serene jade variety in a rounded pot — a symbol of calm growth and simplicity.',
    care: {
      light: 'bright',
      water: 'Water when soil feels dry',
      difficulty: 'Easy'
    },
    image: new16,
    inStock: true
  },
  {
    id: 'new17',
    name: 'Ficus Ginseng Bonsai',
    type: 'new',
    price: 55.00,
    size: 'Medium',
    tagline: 'Living sculpture in serene balance.',
    description: 'A bonsai with sculptural roots and glossy leaves — a living piece of calm design.',
    care: {
      light: 'medium',
      water: 'Keep soil slightly moist',
      difficulty: 'Moderate'
    },
    image: new17,
    inStock: true
  },
  {
    id: 'new18',
    name: 'Large Jade Plant',
    type: 'new',
    price: 58.00,
    size: 'Large',
    tagline: 'Mature calm and enduring presence.',
    description: 'Mature jade with generous green branches — a statement of stability and quiet strength.',
    care: {
      light: 'bright',
      water: 'Water every 2 weeks',
      difficulty: 'Easy'
    },
    image: new18,
    inStock: true
  },

  //  flowers

  // {
  //   id: 'flower1',
  //   name: 'Pink Hyacinth',
  //   type: 'flower',
  //   price: 34.00,
  //   tagline: 'Soft fragrance, quiet beauty.',
  //   description: 'Delicate pink hyacinth in a cream ceramic planter — adds a touch of calm freshness to any space.',
  //   image: flower1,
  //   inStock: true
  // },

  // gifts

  // {
  //   id: 'gift1',
  //   name: 'Lavender Candle Set',
  //   type: 'gift',
  //   price: 42.00,
  //   tagline: 'Soft scent, quiet evenings.',
  //   description: 'A pair of lavender-infused candles in ceramic jars — gentle fragrance for calm spaces.',
  //   image: gift1,
  //   inStock: true
  // },
  // {
  //   id: 'gift2',
  //   name: 'Botanical Tea Box',
  //   type: 'gift',
  //   price: 35.00,
  //   tagline: 'Sip slow, breathe deep.',
  //   description: 'A curated blend of herbal teas with floral notes — perfect for mindful breaks and thoughtful gifting.',
  //   image: gift2,
  //   inStock: true
  // },
  // {
  //   id: 'gift3',
  //   name: 'Bloom Mug Set',
  //   type: 'gift',
  //   price: 28.00,
  //   tagline: 'Every sip feels like morning light.',
  //   description: 'Two handcrafted mugs with a soft matte finish — perfect companions for quiet mornings.',
  //   image: gift3,
  //   inStock: true
  // },
  // {
  //   id: 'gift4',
  //   name: 'Garden Soap Collection',
  //   type: 'gift',
  //   price: 31.00,
  //   tagline: 'Nature’s scent, wrapped in calm.',
  //   description: 'A set of handmade soaps inspired by garden herbs and soft florals — gentle on skin and senses.',
  //   image: gift4,
  //   inStock: true
  // },
  {
    id: 'gift5',
    name: 'Mini Plant Duo',
    type: 'gift',
    price: 39.00,
    tagline: 'Two greens, one story of calm.',
    description: 'A pair of easy-care mini plants in white ceramic — perfect for desks or gifting small moments of peace.',
    image: gift5,
    inStock: true
  },
  // {
  //   id: 'gift6',
  //   name: 'Aroma Diffuser Kit',
  //   type: 'gift',
  //   price: 48.00,
  //   tagline: 'Light scent, soft rhythm.',
  //   description: 'Elegant glass diffuser with natural oils — crafted to bring subtle fragrance and clarity.',
  //   image: gift6,
  //   inStock: true
  // },
  // {
  //   id: 'gift7',
  //   name: 'Essential Oil Collection',
  //   type: 'gift',
  //   price: 54.00,
  //   tagline: 'Pure calm, bottled with care.',
  //   description: 'A set of essential oils for daily rituals — grounding lavender, citrus lift, and deep wood notes.',
  //   image: gift7,
  //   inStock: true
  // },
  // {
  //   id: 'gift8',
  //   name: 'Floral Notebook Set',
  //   type: 'gift',
  //   price: 27.00,
  //   tagline: 'Soft paper, blooming thoughts.',
  //   description: 'A duo of linen-covered notebooks with pressed-flower details — perfect for journaling or gifting.',
  //   image: gift8,
  //   inStock: true
  // },
  // {
  //   id: 'gift9',
  //   name: 'Bamboo Spa Basket',
  //   type: 'gift',
  //   price: 65.00,
  //   tagline: 'Gentle textures, deep rest.',
  //   description: 'A curated bamboo basket with bath salts, oils, and a linen towel — for quiet evenings of renewal.',
  //   image: gift9,
  //   inStock: true
  // },
  // {
  //   id: 'gift10',
  //   name: 'Petite Flower Diffuser',
  //   type: 'gift',
  //   price: 33.00,
  //   tagline: 'A bloom that never fades.',
  //   description: 'A glass diffuser with preserved flowers — fills the room with fragrance and calm design.',
  //   image: gift10,
  //   inStock: true
  // },
  // planters
  {
    id: 'planter1',
    name: 'Circle Planter',
    type: 'planter',
    price: 38.00,
    size: 'Small',
    tagline: 'Soft geometry, modern calm.',
    description: 'Minimal round planter with a sculptural opening — a gentle accent for small plants.',
    image: planter1,
    inStock: true
  },
  {
    id: 'planter2',
    name: 'Teardrop Planter',
    type: 'planter',
    price: 36.00,
    size: 'Medium',
    tagline: 'Organic form with subtle grace.',
    description: 'Smooth flowing lines and neutral tone — ideal for medium plants or dried flowers.',
    image: planter2,
    inStock: true
  },
  {
    id: 'planter3',
    name: 'Wave Planter',
    type: 'planter',
    price: 40.00,
    size: 'Small',
    tagline: 'Sculpted lines that breathe.',
    description: 'A soft, wave-like silhouette that blends naturally into modern interiors.',
    image: planter3,
    inStock: true
  },
  {
    id: 'planter4',
    name: 'Ribbed Cylinder',
    type: 'planter',
    price: 42.00,
    size: 'Medium',
    tagline: 'Quiet texture, timeless design.',
    description: 'A vertical rib pattern adds a subtle texture — clean, modern, and balanced.',
    image: planter4,
    inStock: true
  },
  {
    id: 'planter5',
    name: 'Double Sphere Vase',
    type: 'planter',
    price: 39.00,
    size: 'Small',
    tagline: 'Balanced curves in soft blue.',
    description: 'Rounded and contemporary, perfect for single-stem displays or small greens.',
    image: planter5,
    inStock: true
  },
  {
    id: 'planter6',
    name: 'Arch Planter',
    type: 'planter',
    price: 44.00,
    size: 'Large',
    tagline: 'Minimal symmetry, serene lines.',
    description: 'A distinctive arched design that adds calm architecture to your room.',
    image: planter6,
    inStock: true
  },
  {
    id: 'planter7',
    name: 'Round Loop Vase',
    type: 'planter',
    price: 38.00,
    size: 'Small',
    tagline: 'Pure form, soft presence.',
    description: 'A circular vase with a hollow center — subtle, sculptural, and grounding.',
    image: planter7,
    inStock: true
  },
  {
    id: 'planter8',
    name: 'U-Shape Planter',
    type: 'planter',
    price: 43.00,
    size: 'Large',
    tagline: 'Modern balance in natural tone.',
    description: 'Elegant U-shaped silhouette in a warm neutral finish — perfect for statement plants.',
    image: planter8,
    inStock: true
  },
  {
    id: 'planter9',
    name: 'Organic Bulb Vase',
    type: 'planter',
    price: 37.00,
    size: 'Medium',
    tagline: 'Soft irregularity, sculptural calm.',
    description: 'Gentle organic curves in a matte finish — ideal for calm, minimal spaces.',
    image: planter9,
    inStock: true
  },
  // plants
  {
    id: 'plant2',
    name: 'Peace Lily',
    type: 'plant',
    price: 48.00,
    size: 'Medium',
    tagline: 'Elegant white blooms, purifying presence.',
    description: 'A peaceful plant that brightens spaces with white blooms and lush green leaves.',
    care: {
      light: 'low',
      water: 'Keep soil lightly moist',
      difficulty: 'Easy'
    },
    image: plant2,
    inStock: true
  },
  {
    id: 'plant5',
    name: 'Aglaonema',
    type: 'plant',
    price: 50.00,
    size: 'Large',
    tagline: 'Lush variegated leaves with a fresh tone.',
    description: 'A soft-leaved tropical plant with elegant variegation and soothing color.',
    care: {
      light: 'low',
      water: 'Water weekly or when top inch is dry',
      difficulty: 'Easy'
    },
    image: plant5,
    inStock: true
  },
  {
    id: 'plant6',
    name: 'ZZ Plant',
    type: 'plant',
    price: 54.00,
    size: 'Large',
    tagline: 'Glossy leaves, nearly indestructible.',
    description: 'A resilient, low-maintenance plant with glossy dark green leaves.',
    care: {
      light: 'low',
      water: 'Water lightly every 2–3 weeks',
      difficulty: 'Very easy'
    },
    image: plant6,
    inStock: true
  },
  {
    id: 'plant10',
    name: 'Monstera Deliciosa',
    type: 'plant',
    price: 65.00,
    size: 'Extra Large',
    tagline: 'Iconic split leaves, bold and tropical.',
    description: 'A statement plant with natural split leaves that embody calm jungle luxury.',
    care: {
      light: 'medium',
      water: 'Keep soil slightly moist',
      difficulty: 'Moderate'
    },
    image: plant10,
    inStock: true
  },
  {
    id: 'plant13',
    name: 'Alocasia Polly',
    type: 'plant',
    price: 52.00,
    size: 'Medium',
    tagline: 'Striking dark leaves with silver veins.',
    description: 'A sculptural tropical plant that thrives in warmth and humidity.',
    care: {
      light: 'bright',
      water: 'Keep soil evenly moist',
      difficulty: 'Moderate'
    },
    image: plant13,
    inStock: true
  },
  {
    id: 'plant16',
    name: 'Snake Plant',
    type: 'plant',
    price: 49.00,
    size: 'Large',
    tagline: 'Architectural and forgiving.',
    description: 'A timeless plant with upright leaves and air-purifying power.',
    care: {
      light: 'low',
      water: 'Water sparingly every few weeks',
      difficulty: 'Very easy'
    },
    image: plant16,
    inStock: true
  },
  {
    id: 'plant18',
    name: 'Mini Monstera',
    type: 'plant',
    price: 46.00,
    size: 'Medium',
    tagline: 'Compact form, full of life.',
    description: 'A small but bold version of the Monstera, ideal for shelves and desks.',
    care: {
      light: 'medium',
      water: 'Water when top inch feels dry',
      difficulty: 'Easy'
    },
    image: plant18,
    inStock: true
  },
  {
    id: 'plant19',
    name: 'Scindapsus Pictus',
    type: 'plant',
    price: 42.00,
    size: 'Medium',
    tagline: 'Soft silver-speckled leaves, trailing beauty.',
    description: 'A calm cascading plant with matte silver spots on each leaf.',
    care: {
      light: 'medium',
      water: 'Water weekly, allow excess to drain',
      difficulty: 'Easy'
    },
    image: plant19,
    inStock: true
  },
  {
    id: 'plant20',
    name: 'Satin Pothos',
    type: 'plant',
    price: 47.00,
    size: 'Large',
    tagline: 'Elegant trailing vine, easy to grow.',
    description: 'A fast-growing vine with soft satin-like foliage, ideal for hanging pots.',
    care: {
      light: 'low',
      water: 'Water when top soil is dry',
      difficulty: 'Easy'
    },
    image: plant20,
    inStock: true
  },
  {
    id: 'plant21',
    name: 'Fiddle Leaf Fig',
    type: 'plant',
    price: 72.00,
    size: 'Large',
    tagline: 'Statement plant with bold, glossy leaves.',
    description: 'A sophisticated centerpiece plant that adds presence and warmth.',
    care: {
      light: 'bright',
      water: 'Keep soil consistently moist but not soggy',
      difficulty: 'Moderate'
    },
    image: plant21,
    inStock: true
  },
  {
    id: 'plant25',
    name: 'Philodendron',
    type: 'plant',
    price: 58.00,
    size: 'Small',
    tagline: 'Rare dark foliage with pink accents.',
    description: 'A collector’s favorite known for its dark leaves and rosy blush tones.',
    care: {
      light: 'bright',
      water: 'Water weekly when top soil dries',
      difficulty: 'Moderate'
    },
    image: plant25,
    inStock: true
  },
  {
    id: 'plant26',
    name: 'Pachira Money Tree',
    type: 'plant',
    price: 57.00,
    size: 'Large',
    tagline: 'Symbol of luck and harmony.',
    description: 'A serene tree believed to bring prosperity and calm energy.',
    care: {
      light: 'medium',
      water: 'Keep soil evenly moist',
      difficulty: 'Easy'
    },
    image: plant26,
    inStock: true
  }
];



// les produits 

import Casque from './casque.webp';
import Casque_2 from './Casque_2.webp';
import Casque_3 from './Casque_3.webp';
import iphone16_1 from './iphone16_1.webp';
import iphone16_2 from './iphone16_2.webp';
import iphone16_3 from './iphone16_3.webp';
import iphone16_4 from './iphone16_4.webp';
import samsung_1 from './samsung_1.webp';   
import samsung_2 from './samsung_2.webp';  
import tablette_1 from './tablette_1.webp';
import tablette_2 from './tablette_2.webp';
import tablette_3 from './tablette_3.webp';
import Xiaomi_1 from './Xiaomi_1.webp';
import Xiaomi_2 from './Xiaomi_2.webp';

import Xiaomi2_1 from './Xiaomi2_1.webp';
import Xiaomi2_2 from './Xiaomi2_2.webp';


// les images utlisees dans l'application

import logo from './logo.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import menu_icon from './menu_icon.png'
import dropdown_icon from './dropdown_icon.png'
import hero from './hero.png' 
import exchange_icon from './exchange_icon.png'
import support_img  from './support_img.png'

export const assets = {support_img, exchange_icon,logo, menu_icon, search_icon, profile_icon, cart_icon, bin_icon, quality_icon,dropdown_icon,hero };

export const products = [
    {
        id:1,
        name: "iPhone 16 Pro",
        description: "Découvrez l'iPhone 16 Pro, le smartphone haut de gamme d'Apple avec un design élégant, un écran Super Retina XDR, et des performances exceptionnelles.",
        price: 4499,
        image: [iphone16_1,iphone16_2,iphone16_3,iphone16_4],
        category: " Smartphones et accessoires",
        subcategory: "Smartphones",
        date: "2025-07-16",
        bestseller: true
    },
    {
        id: 2,
        name: "Samsung Galaxy A36 5G",
        description: "Le Samsung Galaxy A36 5G est un smartphone puissant avec un écran AMOLED, une caméra de haute qualité et une connectivité 5G.",
        price: 1399,
        image: [samsung_1, samsung_2],
        category: "Smartphones et accessoires",
        subcategory: "Smartphones",
        date: "2025-07-16",
        bestseller: true
    },
    {
        id: 3,
        name: "Xiaomi Redmi 13C 5G",
        description: "Le Xiaomi Redmi 13C 5G offre une expérience mobile fluide avec un écran AMOLED, une batterie longue durée et une connectivité 5G.",
        price: 619,
        image: [Xiaomi_1, Xiaomi_2],
        category: "Smartphones et accessoires",
        subcategory: "Smartphones",
        date: "2025-07-16",
        bestseller: true
    },
      {
        id: 4,
        name: "Tablette Xiaomi Redmi Pad SE 8.7 4G",
        description: "La tablette Xiaomi Redmi Pad SE 8.7 4G est idéale pour le divertissement et la productivité, avec un écran de 8.7 pouces et une connectivité 4G.",    
        price:399 ,
        image: [tablette_1,tablette_2,tablette_3],
        category: "Smartphones et accessoires",
        subcategory: "Tablettes",
        date: "2025-07-16",
        bestseller: false
    },
      {
        id: 5,
        name: "Casque sans fil circum-aural Belkin SoundForm",
        description: "Le casque sans fil circum-aural Belkin SoundForm offre une qualité sonore exceptionnelle, un confort optimal et une connectivité Bluetooth pour une expérience d'écoute sans fil.",    
        price:122 ,
        image: [Casque,Casque_2,Casque_3],
        category: "Smartphones et accessoires",
        subcategory: "accessoires",
        date: "2025-07-16",
        bestseller: false
    },
         {
        id: 6,
        name: "Xiaomi Redmi 14C",
        description: "Le Xiaomi Redmi 14C est un smartphone abordable avec un écran AMOLED, une batterie longue durée et une connectivité 5G.",    
        price:429 ,
        image: [Xiaomi2_1,Xiaomi2_2],
        category: "Smartphones et accessoires",
        subcategory: "smartphones",
        date: "2025-07-19",
        bestseller: true
    }
];
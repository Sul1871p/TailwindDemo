import starter1 from "../../assets/Images/starter1.jpg";
import starter2 from "../../assets/Images/starter2.jpg";
import starter3 from "../../assets/Images/starter3.jpg";
import starter4 from "../../assets/Images/starter4.jpg";
import starter5 from "../../assets/Images/starter5.jpg";
import starter6 from "../../assets/Images/starter6.jpg";
import starter7 from "../../assets/Images/starter7.jpg";
import starter8 from "../../assets/Images/starter8.jpg";
import starter9 from "../../assets/Images/starter9.jpg";

import dish4 from "../../assets/Images/dish4.jpg";
import dish5 from "../../assets/Images/dish5.jpg";
import main3 from "../../assets/Images/main3.jpg";
import main4 from "../../assets/Images/main4.jpg";
import main5 from "../../assets/Images/main5.jpg";
import main6 from "../../assets/Images/main6.jpg";
import main7 from "../../assets/Images/main7.jpg";
import main8 from "../../assets/Images/main8.jpg";
import main9 from "../../assets/Images/main9.jpg";
import main10 from "../../assets/Images/main10.jpg";
import main11 from "../../assets/Images/main11.jpg";
import main12 from "../../assets/Images/main12.jpg";

// Desserts
 import dessert1 from "../../assets/Images/dessert1.jpg"; 
 import dessert2 from "../../assets/Images/dessert2.jpg";
 import dessert3 from "../../assets/Images/dessert3.jpg";
 import dessert4 from "../../assets/Images/dessert4.jpg";
 import dessert5 from "../../assets/Images/dessert5.jpg";
 import dessert6 from "../../assets/Images/dessert6.jpg";
 import dessert7 from "../../assets/Images/dessert7.jpg";
 import dessert8 from "../../assets/Images/dessert8.jpg";
 import dessert9 from "../../assets/Images/dessert9.jpg";


const menuItems = [
  {
    category: 'Starters',
    items: [
      {
        name: 'Garlic Bread',
        description: 'Toasted bread with garlic butter and herbs.',
        price: '₹120',
        image: starter1,
      },
      {
        name: 'Bruschetta',
        description: 'Grilled bread with tomatoes and basil.',
        price: '₹150',
        image: starter2,
       },
      {
        name: 'Stuffed Mushrooms',
        description: 'Mushroom caps stuffed with cheese and herbs.',
        price: '₹180',
        image: starter3,
      },
      {
        name: 'Spring Rolls',
        description: 'Crispy rolls filled with vegetables and noodles.',
        price: '₹160',
        image: starter4,
      },
      {
        name: 'Tandoori Paneer Tikka',
        description: 'Chunks of paneer marinated and grilled in a tandoor.',
        price: '₹220',
        image: starter5,
      },
      {
        name: 'Crispy Corn',
        description: 'Deep-fried corn tossed in spicy masala.',
        price: '₹140',
        image: starter6,
      },
      {
        name: 'Veg Manchurian Balls',
        description: 'Crispy veg balls in a spicy Indo-Chinese sauce.',
        price: '₹190',
        image: starter7,
      },
      {
        name: 'Hara Bhara Kabab',
        description: 'Spinach and peas patties with aromatic spices.',
        price: '₹170',
        image: starter8,
      },
      {
        name: 'Cheesy Nachos',
        description: 'Tortilla chips topped with cheese and jalapeños.',
        price: '₹200',
        image: starter9,
      },
    ],
  },
  {
  category: 'Main Course',
  items: [
    {
      name: 'Butter Chicken',
      description: 'Creamy tomato-based chicken curry.',
      price: '₹320',
      image: dish4,
    },
    {
      name: 'Paneer Butter Masala',
      description: 'Cottage cheese in rich gravy.',
      price: '₹290',
      image: dish5,
    },
    {
      name: 'Dal Makhani',
      description: 'Slow-cooked black lentils in creamy tomato gravy.',
      price: '₹240',
      image: main3,
    },
    {
      name: 'Chicken Biryani',
      description: 'Aromatic basmati rice with spiced chicken.',
      price: '₹350',
      image: main4,
    },
    {
      name: 'Veg Pulao',
      description: 'Fragrant rice cooked with seasonal vegetables.',
      price: '₹220',
      image: main5,
    },
    {
      name: 'Shahi Paneer',
      description: 'Paneer in rich cashew and cream-based gravy.',
      price: '₹280',
      image: main6,
    },
    {
      name: 'Rogan Josh',
      description: 'Traditional Kashmiri mutton curry.',
      price: '₹390',
      image: main7,
    },
    {
      name: 'Chole Bhature',
      description: 'Spicy chickpeas with fluffy deep-fried bread.',
      price: '₹210',
      image: main8,
    },
    {
      name: 'Palak Paneer',
      description: 'A classic North Indian dish made with fresh spinach puree and soft paneer cubes, simmered in aromatic spices and finished with a touch of cream.',
      price: '₹260',
      image: main9,
    },
    {
      name: 'Malai Kofta',
      description: 'Cottage cheese dumplings in creamy gravy.',
      price: '₹270',
      image: main10,
    },
    {
      name: 'Egg Curry',
      description: 'Boiled eggs in onion-tomato based curry.',
      price: '₹250',
      image: main11,
    },
    {
      name: 'Fish Curry',
      description: 'Tangy and spicy fish cooked with coconut and spices.',
      price: '₹330',
      image: main12,
    },
  ],
},

  {
  category: 'Desserts',
  items: [
    {
      name: 'Gulab Jamun',
      description: 'Sweet dumplings soaked in aromatic rose syrup.',
      price: '₹100',
      image: dessert1,
    },
    {
      name: 'Chocolate Lava Cake',
      description: 'Rich chocolate cake with a molten center, served warm.',
      price: '₹180',
      image: dessert2,
    },
    {
      name: 'Rasmalai',
      description: 'Soft cheese patties soaked in saffron-flavored sweet milk.',
      price: '₹150',
      image: dessert3,
    },
    {
      name: 'Kulfi',
      description: 'Traditional Indian ice cream made with thickened milk and dry fruits.',
      price: '₹120',
      image: dessert4,
    },
    {
      name: 'Brownie with Ice Cream',
      description: 'Chocolate brownie served warm with a scoop of vanilla ice cream.',
      price: '₹200',
      image: dessert5,
    },
    {
      name: 'Fruit Custard',
      description: 'Chilled creamy custard mixed with fresh seasonal fruits.',
      price: '₹130',
      image: dessert6,
    },
    {
      name: 'Ice Cream Sundae',
      description: 'Layered scoops of ice cream with nuts, fruits, and syrup toppings.',
      price: '₹160',
      image: dessert7,
    },
    {
      name: 'Jalebi with Rabri',
      description: 'Crispy, syrupy jalebi served with thick rabri.',
      price: '₹140',
      image: dessert8,
    },
    {
      name: 'Mango Mousse',
      description: 'Light and airy mousse made with fresh mango puree.',
      price: '₹170',
      image: dessert9,
    },
  ],
},

];

export default menuItems;

interface FoodItem {
  id: number;
  name: string;
  price: number;
  description: string;
  restaurant: string;
  image_url: string;
}

const foodArray: FoodItem[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 8.99,
    description:
      "Classic Margherita with tomato sauce, mozzarella, and fresh basil.",
    restaurant: "Pizza Haven",
    image_url: "/photo/1.jpg",
  },
  {
    id: 2,
    name: "Spaghetti Carbonara",
    price: 12.5,
    description: "Spaghetti with creamy sauce, pancetta, and Parmesan cheese.",
    restaurant: "Italiano Bistro",
    image_url: "/photo/2.jpg",
  },
  {
    id: 3,
    name: "Beef Burger",
    price: 10.0,
    description:
      "Juicy beef patty with lettuce, tomato, cheese, and special sauce.",
    restaurant: "Burger Joint",
    image_url: "/photo/3.jpg",
  },
  {
    id: 4,
    name: "Chicken Caesar Salad",
    price: 9.0,
    description:
      "Grilled chicken with romaine lettuce, croutons, and Caesar dressing.",
    restaurant: "Healthy Bites",
    image_url: "/photo/4.jpg",
  },
  {
    id: 5,
    name: "Pad Thai",
    price: 11.0,
    description:
      "Thai stir-fried noodles with shrimp, tofu, peanuts, and bean sprouts.",
    restaurant: "Thai Palace",
    image_url: "/photo/5.jpg",
  },
  {
    id: 6,
    name: "Sushi Platter",
    price: 20.0,
    description:
      "Assortment of fresh sushi rolls and nigiri with wasabi and soy sauce.",
    restaurant: "Sushi World",
    image_url: "/photo/6.jpg",
  },
  {
    id: 7,
    name: "Vegan Buddha Bowl",
    price: 10.5,
    description:
      "Healthy bowl with quinoa, chickpeas, avocado, and mixed greens.",
    restaurant: "Green Eatery",
    image_url: "/photo/7.jpg",
  },
  {
    id: 8,
    name: "Tacos al Pastor",
    price: 8.0,
    description:
      "Mexican-style tacos with marinated pork, pineapple, and cilantro.",
    restaurant: "Mexicana Grill",
    image_url: "/photo/8.jpg",
  },
  {
    id: 9,
    name: "Butter Chicken",
    price: 13.0,
    description:
      "Tender chicken in a creamy, spiced tomato sauce with naan bread.",
    restaurant: "Taste of India",
    image_url: "/photo/9.jpg",
  },
  {
    id: 10,
    name: "Chocolate Lava Cake",
    price: 6.5,
    description:
      "Warm chocolate cake with a gooey chocolate center, served with vanilla ice cream.",
    restaurant: "Sweet Delights",
    image_url: "/photo/10.jpg",
  },
];

export default foodArray;
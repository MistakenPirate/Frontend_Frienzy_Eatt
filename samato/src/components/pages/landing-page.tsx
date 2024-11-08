import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  reviews: number;
  address: string;
  image_url: string;
}

const restaurantArray: Restaurant[] = [
  {
    id: 1,
    name: "Pizza Haven",
    cuisine: "Italian",
    rating: 4.5,
    reviews: 125,
    address: "123 Pizza Lane, Flavor Town",
    image_url: "/pizza.jpg",
  },
  {
    id: 2,
    name: "Italiano Bistro",
    cuisine: "Italian",
    rating: 4.2,
    reviews: 98,
    address: "456 Pasta Street, City Center",
    image_url: "/italian.jpg",
  },
  {
    id: 3,
    name: "Burger Joint",
    cuisine: "American",
    rating: 4.3,
    reviews: 320,
    address: "789 Burger Blvd, Downtown",
    image_url: "/burger.jpg",
  },
];

const categoryImages = {
  Pizza: "/pizza.jpg",
  Chinese: "/chinese.jpg",
  Desserts: "/dessert.jpg",
  Burgers: "/burger.jpg",
  Sushi: "/sushi.jpg",
  Mexican: "/mexican.jpg",
  Italian: "/italian.jpg",
  Indian: "/indian.jpg",
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-600">
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Delicious Food, Delivered to You
          </h1>
          <p className="text-xl text-white mb-8">
            Order from your favorite restaurants with just a few clicks
          </p>
          <div className="mt-4 p-4 bg-orange-400 rounded-lg">
            <Link href={"/foods"}>Order Now</Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">
            Featured Restaurants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {restaurantArray.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-gray-100 rounded-lg overflow-hidden shadow-md dark:bg-gray-700"
              >
                <Link href={"/foods"}>
                  <Image
                    src={restaurant.image_url}
                    alt={`Restaurant ${restaurant.name}`}
                    width={800}
                    height={800}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-xl mb-2 dark:text-white">
                      {restaurant.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {restaurant.cuisine} • ${restaurant.rating} •{" "}
                      {restaurant.reviews} reviews
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-orange-400 text-primary-foreground py-8 dark:bg-primary-dark dark:text-primary-foreground-dark">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Special Offer!</h2>
            <p className="text-lg">
              Get 20% off your first order with code: WELCOME20
            </p>
          </div>
          <Button className="mt-4 md:mt-0" size="lg">
            <Link href={"/foods"}>Order Now</Link>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">
            Explore by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Pizza",
              "Chinese",
              "Desserts",
              "Burgers",
              "Sushi",
              "Mexican",
              "Italian",
              "Indian",
            ].map((category) => (
              <Button
                key={category}
                variant="outline"
                className="h-24 text-lg font-semibold dark:text-white dark:border-gray-700 relative overflow-hidden"
              >
                <Link href={"/foods"}>
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{
                      backgroundImage: `url(${categoryImages[category]})`,
                    }}
                  />
                  {category}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-200 dark:bg-slate-500 dark:text-white py-8">
        <div className="max-w-6xl mx-auto px-4 flex justify-center">
          <Link href={"/foods"}>
            <Button size="lg" variant="ghost">
              Eat Our Food
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4 flex items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Eat With Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Join our community to enjoy delicious meals at the click of a
              button.
            </p>
            <Button size="lg">
              <Link href={"/foods"}>Join Now</Link>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="hidden md:block ml-8">
            <Image
              src="/burger.svg"
              alt="Eat With Us"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

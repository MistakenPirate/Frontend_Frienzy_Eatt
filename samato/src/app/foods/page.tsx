"use client";

import { useState } from "react";
import { Search, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import foodArray from "../../../public/data";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Foods() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false); // State to control checkout visibility
  const itemsPerPage = 6;

  const filteredFood = foodArray.filter(
    (food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      food.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = filteredFood.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedFood = filteredFood.slice(startIdx, startIdx + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const addToCart = (food) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === food.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...food, quantity: 1 }];
      }
    });
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleProceedToCheckout = () => {
    setShowCheckout(true); // Show the checkout form
  };

  const handlePlaceOrder = () => {
    // Handle order placement (e.g., sending data to the server)
    alert("Order placed successfully!");
    setShowCheckout(false); // Hide checkout form after placing order
    setCartItems([]); // Clear cart after order
    redirect("/order")
  };

  // Calculate total price and GST
  const calculateTotalPrice = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const gst = subtotal * 0.18; // Assuming 18% GST
    const total = subtotal + gst;
    return { subtotal, gst, total };
  };

  const { subtotal, gst, total } = calculateTotalPrice();

  return (
    <div className="min-h-screen pt-20 bg-background text-foreground dark:bg-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">All Restaurants</h1>

        <div className="flex justify-between mb-8 space-y-4 items-center flex-col md:flex-row">
          <div className="flex items-center space-x-4">
            <Button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2"
            >
              Previous
            </Button>
            <span className="text-center py-2">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2"
            >
              Next
            </Button>
          </div>
          <div className="flex">
            <Input
              type="text"
              placeholder="Search for cuisines"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="rounded-r-none"
            />
            <Button type="submit" className="rounded-l-none">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedFood.map((food) => (
            <Card
              key={food.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-2xl dark:bg-slate-800"
            >
              <Image
                src={food.image_url}
                alt={food.name}
                height={1000}
                width={1000}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{food.name}</CardTitle>
                <CardDescription>{food.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-center">
                  <Home className="h-5 w-5 text-blue-400 fill-current mr-1" />
                  <span>{food.restaurant}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span>{food.price}</span>
                <Button onClick={() => addToCart(food)}>Order Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredFood.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">
            No restaurants found. Try a different search term.
          </p>
        )}
        <div className="flex justify-center mt-8 space-x-4">
          <Button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2"
          >
            Previous
          </Button>
          <span className="text-center py-2">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2"
          >
            Next
          </Button>
        </div>

        {/* Cart Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Your cart is empty
            </p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <span>
                    {item.name} - {item.quantity} x ${item.price}
                  </span>
                  <Button
                    variant="destructive"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <div className="flex justify-between items-center mt-4">
                <span>Subtotal: ${subtotal.toFixed(2)}</span>
                <span>GST (18%): ${gst.toFixed(2)}</span>
                <span>Total: ${total.toFixed(2)}</span>
              </div>
              <div className="mt-4 text-right">
                <Button onClick={handleProceedToCheckout}>
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          )}
        </div>

        {showCheckout && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <form>
              <div className="mb-4">
                <label className="block text-lg font-semibold">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold">Address</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter your address"
                />
              </div>
              <div className="mt-4 text-right">
                <Button onClick={handlePlaceOrder}>Place Order</Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

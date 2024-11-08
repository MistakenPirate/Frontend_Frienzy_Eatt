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

export default function AllFoodsRestaurants() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
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

  return (
    <div className="min-h-screen bg-background text-foreground">
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
              className="overflow-hidden transition-all duration-300 hover:shadow-2xl"
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
                <Button>Order Now</Button>
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
      </div>
    </div>
  );
}

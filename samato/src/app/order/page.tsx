"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import Image from "next/image";

export default function OrderTracking() {
  const [orderStatus, setOrderStatus] = useState("Your order is being prepared.");
  const [orderStep, setOrderStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrderStep((prevStep) => {
        if (prevStep < 3) {
          return prevStep + 1;
        }
        clearInterval(interval);
        return prevStep;
      });
    }, 5000);

    if (orderStep === 1) {
      setOrderStatus("Your order is being prepared.");
    } else if (orderStep === 2) {
      setOrderStatus("Your order is almost ready!");
    } else if (orderStep === 3) {
      setOrderStatus("Your order is ready for pickup!");
    }

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [orderStep]);

  const handleBackToHome = () => {
    redirect("/"); 
  };

  const getOrderImage = () => {
    if (orderStep === 1) {
      return "/order.svg";
    } else if (orderStep === 2) {
      return "/order4.svg";
    } else {
      return "/order2.svg"; 
    }
  };

  const getProgressPercentage = () => {
    return (orderStep / 3) * 100;
  };

  return (
    <div className="min-h-screen pt-20 bg-background text-foreground dark:bg-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Order Tracking</h1>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <Image
            src={getOrderImage()}
            width={1000}
            height={1000}
            className="h-64 mx-auto"
            alt="Order Status"
          />
          <h2 className="text-2xl font-semibold text-center mt-4">Order Status</h2>
          <p className="mt-4 text-lg text-center">{orderStatus}</p>

          <div className="mt-6">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                    Progress
                  </span>
                </div>
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                    {Math.round(getProgressPercentage())}%
                  </span>
                </div>
              </div>
              <div className="flex mb-2">
                <div className="relative flex-1">
                  <div className="flex mb-2">
                    <div className="relative w-full">
                      <div className="flex h-2 mb-2 overflow-hidden mb-0.5 rounded-xl">
                        <div
                          className="flex flex-col justify-center text-center text-white bg-teal-500"
                          style={{ width: `${getProgressPercentage()}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Button onClick={handleBackToHome} className="w-full sm:w-auto">
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

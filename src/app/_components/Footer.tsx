"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  sparkline_in_7d: {
    price: number[];
  };
}

export default function Footer() {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const renderSparkline = (data: number[], priceChange: number) => {
    const color = priceChange >= 0 ? "#22c55e" : "#ef4444";
    return (
      <ResponsiveContainer width="100%" height={60}>
        <LineChart data={data.map((price, index) => ({ price, index }))}>
          <Line
            type="monotone"
            dataKey="price"
            stroke={color}
            strokeWidth={1}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  return (
    <footer className="bg-white mt-10 text-black py-10 pt-20 w-full px-4 sm:px-6">
      <div className="max-w-7xl mx-auto relative overflow-x-hidden">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full -mx-4 sm:mx-0 mt-10"
        >
          <h1 className="text-xl font-bold mb-4 mx-5">You May Also Like</h1>
          <CarouselContent>
            {coins.map((coin) => (
              <CarouselItem key={coin.id} className="lg:basis-1/5 basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <img
                          src={coin.image}
                          alt={coin.name}
                          className="w-6 h-6"
                        />
                        <span className="font-medium">
                          {coin.symbol.toUpperCase()}
                        </span>
                        <span
                          className={`ml-auto text-sm ${
                            coin.price_change_percentage_24h >= 0
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                      </div>
                      <div className="font-semibold">
                        ${coin.current_price.toLocaleString()}
                      </div>
                      {renderSparkline(
                        coin.sparkline_in_7d.price,
                        coin.price_change_percentage_24h
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 sm:left-0" />
          <CarouselNext className="right-4 sm:right-0" />
        </Carousel>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full -mx-4 sm:mx-0 mt-10"
        >
          <h1 className="text-xl font-bold mb-4 mx-5">Trending Coins</h1>
          <CarouselContent>
            {coins.map((coin) => (
              <CarouselItem key={coin.id} className="lg:basis-1/5 basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <img
                          src={coin.image}
                          alt={coin.name}
                          className="w-6 h-6"
                        />
                        <span className="font-medium">
                          {coin.symbol.toUpperCase()}
                        </span>
                        <span
                          className={`ml-auto text-sm ${
                            coin.price_change_percentage_24h >= 0
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                      </div>
                      <div className="font-semibold">
                        ${coin.current_price.toLocaleString()}
                      </div>
                      {renderSparkline(
                        coin.sparkline_in_7d.price,
                        coin.price_change_percentage_24h
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 sm:left-0" />
          <CarouselNext className="right-4 sm:right-0" />
        </Carousel>
      </div>
    </footer>
  );
}

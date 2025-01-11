import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import Image from "next/image";

export function TrendingCoins() {
  interface Coin {
    id: string;
    name: string;
    symbol: string;
    image: string;
    price_change_percentage_24h: number;
  }

  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Trending Coins (24h)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {coins.length > 0 ? (
          coins.map((coin: Coin) => (
            <div key={coin.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full">
                  <Image
                    src={coin.image}
                    alt={`${coin.name} logo`}
                    width={100}
                    height={100}
                    className="h-full w-full"
                  />
                </div>
                <span className="font-medium">
                  {coin.name}({coin.symbol})
                </span>
              </div>
              <div className="flex items-center gap-1 rounded bg-emerald-50 px-2 py-1 text-sm font-medium text-emerald-500">
                <span>↑</span>
                <span>{coin.price_change_percentage_24h}%</span>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p> 
        )}
      </CardContent>
    </Card>
  );
}

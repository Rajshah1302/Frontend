import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Graph from "./Graph";

const timeRanges = [
  { label: "1H", value: "1H" },
  { label: "24H", value: "24H" },
  { label: "7D", value: "7D", active: true },
  { label: "1M", value: "1M" },
  { label: "3M", value: "3M" },
  { label: "6M", value: "6M" },
  { label: "1Y", value: "1Y" },
  { label: "ALL", value: "ALL" },
];

export function CryptoCard({
  cryptoId,
  cryptoSymbol,
  cryptoName,
  price,
  marketCap,
}) {
  const [selectedRange, setSelectedRange] = useState("7D");

  return (
    <div className="max-w-6xl mx-5 sm:mx-0 sm:ml-10">
      <Card className="max-w-6xl mx-auto">
        <CardHeader className="pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F7931A]"></div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold">{cryptoName}</span>
              <span className="text-sm text-muted-foreground">
                {cryptoSymbol}
              </span>
            </div>
            {cryptoId === "bitcoin" && (
              <span className="rounded-md bg-muted px-2 py-1 text-sm bg-[#778296]">
                Rank #1
              </span>
            )}
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold">${price}</span>
              <div className="flex items-center gap-1 rounded bg-emerald-50 px-2 py-1 text-sm font-medium text-emerald-500">
                ↑ 2.51%
              </div>
              <span className="ml-1 text-muted-foreground">(24H)</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Market Cap: ${marketCap}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="block justify-between items-center sm:flex">
              <h3 className="text-sm font-medium">
                {cryptoName} Price Chart (USD)
              </h3>
              <div className="flex gap-2">
                {timeRanges.map((range) => (
                  <Button
                    key={range.value}
                    variant={
                      selectedRange === range.value ? "default" : "outline"
                    }
                    className="text-[13px] py-[2px] px-[4px] sm:text-sm sm:py-2 sm:px-4"
                    onClick={() => setSelectedRange(range.value)}
                  >
                    {range.label}
                  </Button>
                ))}
              </div>
            </div>
            <div className="h-[300px] w-full rounded-lg border">
              <Graph
                key={selectedRange}
                range={selectedRange}
                symbol={cryptoSymbol}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

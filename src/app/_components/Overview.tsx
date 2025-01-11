"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

export default function Overview() {
  return (
    <div className="rounded-lg p-6 bg-white my-5 shadow-md max-w-6xl mx-5 sm:mx-0 sm:ml-10">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="sm:grid grid-cols-7 w-full flex overflow-auto" style={{ scrollbarWidth: "none" }}>
          <TabsTrigger value="overview" className="text-sm">
            Overview    
          </TabsTrigger>
          <TabsTrigger value="fundamentals" className="text-sm">
            Fundamentals
          </TabsTrigger>
          <TabsTrigger value="news-insights" className="text-sm">
            News Insights
          </TabsTrigger>
          <TabsTrigger value="sentiments" className="text-sm">
            Sentiments
          </TabsTrigger>
          <TabsTrigger value="team" className="text-sm">
            Team
          </TabsTrigger>
          <TabsTrigger value="technicals" className="text-sm">
            Technicals
          </TabsTrigger>
          <TabsTrigger value="tokenomics" className="text-sm">
            Tokenomics
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Performance</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Today&apos;s Low</span>
                <span>Today&apos;s High</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>46,930.22</span>
                  <span>49,343.83</span>
                </div>
                <Slider
                  defaultValue={[48637.83]}
                  max={49343.83}
                  min={46930.22}
                  step={0.01}
                  className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>52W Low</span>
                <span>52W High</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>16,930.22</span>
                  <span>49,743.83</span>
                </div>
                <Slider
                  defaultValue={[35000]}
                  max={49743.83}
                  min={16930.22}
                  step={0.01}
                  className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">Fundamentals</h2>
            <HelpCircle className="w-4 h-4 text-muted-foreground" />
          </div>

          <Card className="p-6">
            <div className="sm:grid sm:grid-cols-2 gap-6 block">
              <div className="space-y-4 divide-y">
                <div className="flex justify-between pb-4">
                  <span className="text-muted-foreground">Bitcoin Price</span>
                  <span>$16,815.46</span>
                </div>
                <div className="flex justify-between py-4">
                  <span className="text-muted-foreground">
                    24h Low / 24h High
                  </span>
                  <span>$16,382.07 / $16,874.12</span>
                </div>
                <div className="flex justify-between py-4">
                  <span className="text-muted-foreground">
                    7d Low / 7d High
                  </span>
                  <span>$16,382.07 / $16,874.12</span>
                </div>
                <div className="flex justify-between py-4">
                  <span className="text-muted-foreground">Trading Volume</span>
                  <span>$23,249,202,782</span>
                </div>
                <div className="flex justify-between pt-4">
                  <span className="text-muted-foreground">Market Cap Rank</span>
                  <span>#1</span>
                </div>
              </div>

              <div className="space-y-4 divide-y">
                <div className="flex justify-between pb-4">
                  <span className="text-muted-foreground">Market Cap</span>
                  <span>$323,507,290,047</span>
                </div>
                <div className="flex justify-between py-4">
                  <span className="text-muted-foreground">
                    Market Cap Dominance
                  </span>
                  <span>38.343%</span>
                </div>
                <div className="flex justify-between py-4">
                  <span className="text-muted-foreground">
                    Volume / Market Cap
                  </span>
                  <span>0.0718</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-muted-foreground">All-Time High</span>
                  <div className="text-right">
                    <div>
                      $69,044.77
                      <span className="text-red-500 text-sm"> -75.6%</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Nov 10, 2021 (about 1 year)
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-muted-foreground">All-Time Low</span>
                  <div className="text-right">
                    <div>
                      $67.81
                      <span className="text-green-500 text-sm"> +24,729.1%</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Jul 06, 2013 (over 9 years)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}

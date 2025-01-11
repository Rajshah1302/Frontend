"use client";
import { GetStartedCard } from "./_components/GetStartedCard";
import { Navbar } from "./_components/Navbar";
import React from "react";
import { TrendingCoins } from "./_components/TrendingCoins";
import { Breadcrumb } from "./_components/Breadcrumbs";
import SentimentDashboard from "./_components/Sentiment";
import About from "./_components/About";
import Tokenomics from "./_components/Tokenomics";
import Team from "./_components/Team";
import Footer from "./_components/Footer";
import Overview from "./_components/Overview";
import { CryptoDataFetcher } from "./_components/CryptoDataFetcher";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="mx-10 mt-2">
        <Breadcrumb />
      </div>
      <div className="flex flex-wrap items-start justify-center lg:justify-between mx-0">
        <div className="w-full lg:w-[70%] mb-4 lg:mb-0">
          <CryptoDataFetcher
            cryptoId="bitcoin"
            cryptoSymbol="BTC"
            cryptoName="Bitcoin"
          />{" "}
          <Overview />
          <SentimentDashboard />
          <About />
          <Tokenomics />
          <Team />
        </div>

        <div className="w-full lg:w-[29%] flex flex-col gap-4 lg:ml-3 mx-5 sm:mx-0">
          <div className="mb-2 lg:mb-2 mr-0 lg:mr-10">
            <GetStartedCard />
          </div>
          <TrendingCoins />
        </div>
      </div>
      <Footer />
    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CryptoCard } from "./CryptoCard";

export function CryptoDataFetcher({ cryptoId, cryptoSymbol, cryptoName }) {
  const [data, setData] = useState(null); // For price and market cap
  const [details, setDetails] = useState(null); // For additional crypto details
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const priceResponse = await axios.get("/api/crypto", {
          params: {
            ids: cryptoId,
            vs_currencies: "usd",
            include_market_cap: true,
          },
        });
        setData({
          price: priceResponse.data[cryptoId]?.usd,
          marketCap: priceResponse.data[cryptoId]?.market_cap,
        });

        const options = {
          method: "GET",
          url: `https://api.coingecko.com/api/v3/coins/${cryptoId}`,
          headers: {
            accept: "application/json",
            "x-cg-pro-api-key": process.env.COINGECKO_API_KEY,
          },
        };
        const detailResponse = await axios.request(options);
        console.log('this is res' +detailResponse);
        setDetails({
          name: detailResponse.data.name,
          symbol: detailResponse.data.symbol.toUpperCase(),
          image: detailResponse.data.image.large,
        });
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cryptoId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <CryptoCard
      cryptoId={cryptoId}
      cryptoName={details?.name || cryptoName}
      cryptoSymbol={details?.symbol || cryptoSymbol}
      price={data?.price}
      marketCap={data?.marketCap}
      image={details?.image}
    />
  );
}

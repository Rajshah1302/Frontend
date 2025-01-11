import React, { useEffect, useState } from "react";
import axios from "axios";
import { CryptoCard } from "./CryptoCard";

export function CryptoDataFetcher({ cryptoId, cryptoSymbol, cryptoName }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/crypto", {
          params: {
            ids: cryptoId,
            vs_currencies: "usd",
            include_market_cap: true,
          },
        });
        setData({
          price: response.data[cryptoId]?.usd,
          marketCap: response.data[cryptoId]?.market_cap,
        });
      } catch (err) {
        console.error(err);
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
      cryptoSymbol={cryptoSymbol}
      cryptoName={cryptoName}
      price={data?.price}
      marketCap={data?.marketCap}
    />
  );
}

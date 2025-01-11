import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req, res) {
  const url = new URL(req.url);
  const ids = url.searchParams.get("ids");
  const vs_currencies = url.searchParams.get("vs_currencies");
  if (!ids || !vs_currencies) {
    return res
      .status(400)
      .json({ error: "Missing 'ids' or 'vs_currencies' parameter" });
  }

  const options = {
    method: "GET",
    url: "https://api.coingecko.com/api/v3/simple/price",
    headers: {
      accept: "application/json",
      "x-cg-pro-api-key": process.env.COINGECKO_API_KEY,
    },
    params: {
      ids: ids,
      vs_currencies: vs_currencies,
      include_market_cap: true,
    },
  };

  try {
    const response = await axios.request(options);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching data from Coingecko:", error);
    return NextResponse.json(
      { error: "Error fetching data from Coingecko" },
      { status: 500 }
    );
  }
}

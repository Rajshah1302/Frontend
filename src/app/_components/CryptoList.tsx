'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"

interface Crypto {
  id: string
  name: string
  symbol: string
  current_price: number
  image: string
  price_change_percentage_24h: number
}

export default function CryptoList() {
  const [cryptos, setCryptos] = useState<Crypto[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
      .then(response => response.json())
      .then((data: Crypto[]) => {
        setCryptos(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching crypto data:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="text-center">Loading...</div>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cryptos.map(crypto => (
        <Link href={`/cryptocurrencies/${crypto.id}`} key={crypto.id}>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <img src={crypto.image} alt={crypto.name} className="w-8 h-8" />
                <h2 className="font-semibold">{crypto.name}</h2>
                <span className="text-sm text-gray-500 ml-auto">{crypto.symbol.toUpperCase()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">${crypto.current_price.toLocaleString()}</span>
                <span className={`text-sm ${crypto.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {crypto.price_change_percentage_24h.toFixed(2)}%
                </span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}


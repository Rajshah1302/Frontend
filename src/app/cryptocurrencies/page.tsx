import CryptoList from "../_components/CryptoList";

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cryptocurrency List</h1>
      <CryptoList />
    </main>
  )
}


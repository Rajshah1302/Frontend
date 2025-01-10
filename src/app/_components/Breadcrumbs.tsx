import Link from "next/link"
import { ChevronRight } from 'lucide-react'

export function Breadcrumb() {
  return (
    <nav className="flex items-center m-0 text-sm text-muted-foreground">
      <Link href="/cryptocurrencies" className="hover:text-primary">
        Cryptocurrencies
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-foreground">Bitcoin</span>
    </nav>
  )
}


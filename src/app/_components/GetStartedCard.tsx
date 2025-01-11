import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import img from '../../../public/image.png';
import Image from 'next/image';

export function GetStartedCard() {
  return (
    <Card className="bg-[#0052FE] text-white max-w-sm lg:max-w-6xl lg:mx-auto">
      <CardHeader className="space-y-1 text-center">
        <h2 className="text-2xl font-bold">Get Started with KoinX</h2>
        <h3 className="text-xl font-bold">for FREE</h3>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-sm">
          With our range of features that you can equip for free, KoinX allows you to be more educated and
          aware of your tax reports.
        </p>
        <div className="relative mx-auto my-6 h-40 w-40">
          <Image
            src={img}
            alt="Illustration"
            className="h-full w-full"
          />
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button
          variant="secondary"
          size="lg"
          className="font-semibold text-primary hover:bg-secondary/90"
        >
          Get Started for FREE
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}


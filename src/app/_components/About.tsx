import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import img1 from "../../../public/about1.jpg";
import img2 from "../../../public/about2.jpg";

export default function About() {
  return (
    <div className="rounded-lg p-6 bg-white my-5 shadow-md max-w-6xl mx-5 sm:mx-0 sm:ml-10">
      <div className="space-y-8">
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">About Bitcoin</h2>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">What is Bitcoin?</h3>
            <p className="text-muted-foreground">
              Bitcoins price today is US$16,951.82, with a 24-hour trading
              volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
              currently -7.70% from its 7-day all-time high of $18,366.66, and
              3.40% from its 7-day all-time low of $16,394.75. BTC has a
              circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Lorem ipsum dolor sit amet
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
                lobortis tristique pharetra. Diam id et lectus urna et tellus
                aliquam dictum at. Viverra diam suspendisse enim facilisi diam
                ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed
                rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut
                sed. Quam scelerisque fermentum sapien morbi sodales odio sed
                rhoncus.
              </p>
              <p>
                Diam praesent massa dapibus magna aliquam a dictumst volutpat.
                Egestas vitae pellentesque auctor amet. Nunc sagittis libero
                adipiscing cursus felis pellentesque interdum. Odio cursus
                phasellus velit in senectus enim dui. Turpis tristique placerat
                interdum sed volutpat. Id imperdiet magna eget eros donec cursus
                nunc. Mauris faucibus diam mi nunc praesent massa turpis a.
                Integer dignissim augue viverra nulla et quis lobortis
                phasellus. Integer pellentesque enim convallis ultricies at.
              </p>
              <p>
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit
                aliquam massa vel convallis duis ac. Mi adipiscing semper
                scelerisque porttitor pulvinar nunc risus. Fermentum potenti
                iaculis lacinia congue ipsum fames amet dui. Purus ultrices
                tincidunt volutpat in eget. Ullamcorper dui
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Already Holding Bitcoin?</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="flex justify-between items-center overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400 opacity-75 p-6">
              <div className="flex-shrink-0 w-1/2 ">
                <Image
                  src={img1}
                  height={400}
                  width={400}
                  alt="Calculate your Profits"
                  className="rounded-lg"
                />
              </div>

              <div className="flex flex-col justify-center w-1/2 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Calculate your Profits
                </h3>
                <Button variant="secondary" className="w-fit">
                  Check Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
            <Card className="flex justify-between items-center overflow-hidden  bg-gradient-to-r from-orange-600 to-orange-400 opacity-75">
              <div className="flex-shrink-0 w-1/2 relative">
                <Image
                  src={img2}
                  className="rounded-lg m-4"
                  height={400}
                  width={400}
                  alt="Calculate your Profits"
                />
              </div>

              <div className="flex flex-col justify-center w-1/2 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {" "}
                  Calculate your tax liability
                </h3>
                <Button variant="secondary" className="w-fit">
                  Check Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </div>

          <p className="text-muted-foreground">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
        </section>
      </div>
    </div>
  );
}

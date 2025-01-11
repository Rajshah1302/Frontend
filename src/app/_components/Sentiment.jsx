import { AlertCircle, BarChart2, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import KeyEvents from "./KeyEvents";

const estimateMockData = [
  { label: "Buy", value: 76, color: "bg-green-500" },
  { label: "Hold", value: 8, color: "bg-gray-400" },
  { label: "Sell", value: 16, color: "bg-red-500" },
];

const ProgressBar = ({ label, value, color }) => {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-muted-foreground w-10">{label}</span>
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${value}%` }} />
      </div>
      <span className="text-sm text-muted-foreground w-10">{value}%</span>
    </div>
  );
};

export default function SentimentAlternative() {
  return (
    <Card className="rounded-lg p-6 bg-white my-5 shadow-md max-w-6xl mx-5 sm:mx-0 sm:ml-10">
      <CardContent className="p-6 space-y-8">
        <section>
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-xl font-semibold">Sentiment</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-semibold">Key Events</h3>
              <HelpCircle className="w-4 h-4 text-muted-foreground" />
            </div>

            <KeyEvents />
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-base font-semibold">Analyst Estimates</h3>
            <HelpCircle className="w-4 h-4 text-muted-foreground" />
          </div>

          <div className="flex flex-row items-center gap-8">
            <div className="relative w-32 h-32">
              <div className="w-full h-full rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-3xl font-semibold text-green-700">
                  76<span className="text-lg">%</span>
                </span>
              </div>
            </div>
            <div className="flex-1 space-y-4 overflow-x-auto">
              <div className="block gap-4 w-full">
                {estimateMockData.map((item) => (
                  <div
                    key={item.label}
                    className="flex-shrink-0 min-w-full bg-white rounded-lg p-4 shadow-md"
                  >
                    <ProgressBar
                      label={item.label}
                      value={item.value}
                      color={item.color}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}

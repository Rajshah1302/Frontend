import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AlertCircle, BarChart2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const EventCard = ({ color, icon: Icon, title, description }) => {
    const bgColor = {
      blue: "bg-blue-50/50 border-blue-100",
      green: "bg-green-50/50 border-green-100",
      red: "bg-red-50/50 border-red-100",
    }[color];
  
    const iconColor = {
      blue: "text-blue-600",
      green: "text-green-600",
      red: "text-red-600",
    }[color];
  
    return (
      <Alert variant="info" className={`border ${bgColor} p-5 `}>
        <Icon className={`h-5 w-5 ${iconColor}`} />
        <AlertTitle className="font-medium text-foreground">{title}</AlertTitle>
        <AlertDescription className="text-sm text-muted-foreground">
          {description}
        </AlertDescription>
      </Alert>
    );
  };
  

const eventMockData = [
  {
    id: 1,
    color: "blue",
    icon: AlertCircle,
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
  },
  {
    id: 2,
    color: "green",
    icon: BarChart2,
    title: "Dui vel quis dignissim mattis enim tincidunt.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipiscing metus quis del.",
  },
  {
    id: 3,
    color: "green",
    icon: BarChart2,
    title: "Dui vel quis dignissim mattis enim tincidunt.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipiscing metus quis del.",
  },
];

const KeyEvents = () => {
  return (
    <div className="m-4">
      <Carousel className="w-full">
        <CarouselContent className="">
          {eventMockData.map((event) => (
            <CarouselItem
              key={event.id}
              className="md:basis-1/2 lg:basis-1/2 h-50 "
            >
              <EventCard
                color={event.color}
                icon={event.icon}
                title={event.title}
                description={event.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default KeyEvents;

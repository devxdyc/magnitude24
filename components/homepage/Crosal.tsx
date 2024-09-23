"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Button } from "../ui/button";

export function AppleCardsCarouselDemo({ events }: { events: any }) {
  const data: any = [];
  events.map((event: any) => {
    data.push({
      category: event.category_name,
      title: event.name,
      src: event.square_url,
      content: <DummyContent event={event} />,
    });
  });

  const cards = data.map((card: any, index: any) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-3xl md:text-5xl font-bold text-primary/60 font-sans">
        Our Flagship Events
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ event }: { event: any }) => {
  return (
    <>
      <div
        key={"content"}
        className="bg-background p-8 md:p-14 rounded-3xl mb-4"
      >
        <Image
          src={"/magnitudenew.png"}
          alt="banner"
          height="500"
          width="500"
          className="md:w-[80%] overflow-hidden md:h-1/2 h-full w-full mx-auto object-contain"
        />
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          {event.short_description}
        </p>
        <div className="flex justify-between m-2 p-10">
          <a
            href={`/magnitude/events/${event.id}`}
            className="text-primary/60 text-base md:text-2xl font-sans"
          >
            Read More
          </a>
          <a
            href={`/magnitude/events/register/${event.id}`}
            className="text-primary/60 text-base md:text-2xl font-sans"
          >
            Register
          </a>
        </div>
      </div>
    </>
  );
};

// const data = [
//   {
//     category: "Artificial Intelligence",
//     title: "You can do more with AI.",
//     src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Productivity",
//     title: "Enhance your productivity.",
//     src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Product",
//     title: "Launching the new Apple Vision Pro.",
//     src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },

//   {
//     category: "Product",
//     title: "Maps for your iPhone 15 Pro Max.",
//     src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "iOS",
//     title: "Photography just got better.",
//     src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Hiring",
//     title: "Hiring for a Staff Software Engineer",
//     src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
// ];

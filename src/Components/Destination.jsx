import React from "react";
import DestinationCard from "./DestinationCard";

const destinations = [
  {
    name: "Paris, France",
    image: "https://source.unsplash.com/600x400/?paris",
    description: "Experience romance, art, and fine dining in the City of Light.",
  },
  {
    name: "Bali, Indonesia",
    image: "https://source.unsplash.com/600x400/?bali",
    description: "Relax on beautiful beaches surrounded by lush tropical nature.",
  },
  {
    name: "New York, USA",
    image: "https://source.unsplash.com/600x400/?newyork",
    description: "Enjoy iconic sights, Broadway shows, and vibrant nightlife.",
  },
];

export default function Destinations() {
  return (
    <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinations.map((d, i) => (
        <DestinationCard key={i} destination={d} />
      ))}
    </div>
  );
}

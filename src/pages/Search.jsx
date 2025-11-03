// src/pages/Search.jsx
import { useState } from "react";
import DestinationCard from "../components/DestinationCard";
import parisImg from "../assets/images/paris.jpg";
import baliImg from "../assets/images/bali.jpg";
import newyorkImg from "../assets/images/newyork.jpg";
import tokyoImg from "../assets/images/tokyo.jpg";
import sydneyImg from "../assets/images/sydney.jpg";
import southafrica from "../assets/images/southafrica.jpg";
import travelbg from "../assets/images/searchh.jpg";

const destinations = [
  {
    name: "Paris, France",
    image: parisImg,
    description: "Experience romance and fine dining.",
  },
  {
    name: "Bali, Indonesia",
    image: baliImg,
    description: "Beautiful beaches and tropical vibes.",
  },
  {
    name: "New York, USA",
    image: newyorkImg,
    description: "City of lights and culture.",
  },
   {
    name: "Tokyo, Japan",
    image: tokyoImg,
    description:"Discover a blend of traditional culture and cutting-edge technology.",
  },
  {
    name: "Sydney, Australia",
    image: sydneyImg,
    description:"Explore stunning beaches, the Sydney Opera House, and vibrant city life.",
  },
  {
    name: "southafrica",
    image: southafrica,
    description:"Experience the wild beauty and diverse cultures of South Africa.",
  }
];

function Search() {
  const [query, setQuery] = useState("");

  const filtered = destinations.filter((d) =>
    d.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="relative text-center flex flex-col items-center justify-center h-screen px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${travelbg})` }}>
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Search Destinations
      </h2>

      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by city or country..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((d, i) => <DestinationCard key={i} destination={d} />)
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No destinations found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Search;

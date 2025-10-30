import { useEffect } from "react";
import DestinationCard from "../components/DestinationCard";

// Import local images
import parisImg from "../assets/images/paris.jpg";
import baliImg from "../assets/images/bali.jpg";
import newyorkImg from "../assets/images/newyork.jpg";

const geoapifyKey = import.meta.env.VITE_GEOAPIFY_API_KEY;

// List of destinations
const destinations = [
  {
    name: "Paris, France",
    image: parisImg,
    description: "Experience romance, art, and fine dining in the City of Light.",
  },
  {
    name: "Bali, Indonesia",
    image: baliImg,
    description: "Relax on beautiful beaches surrounded by lush tropical nature.",
  },
  {
    name: "New York, USA",
    image: newyorkImg,
    description: "Enjoy iconic sights, Broadway shows, and vibrant nightlife.",
  },
];

function Destinations() {

  useEffect(() => {
    // Fetch geocode data for each destination
    destinations.forEach((d) => {
      const location = d.name;
      fetch(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(location)}&apiKey=${geoapifyKey}`)
        .then(res => res.json())
        .then(data => {
          console.log(`Geo data for ${d.name}:`, data);
          // You can store this in state if you want to display coordinates later
        })
        .catch(err => console.error(`Error fetching ${d.name}:`, err));
    });
  }, []);

  return (
    <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinations.map((d, i) => (
        <DestinationCard key={i} destination={d} />
      ))}
    </div>
  );
}

export default Destinations;

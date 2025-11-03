import { useEffect } from "react";
import DestinationCard from "../components/DestinationCard";
import travelbg from "../assets/images/travel.jpg";

// Import local images
import parisImg from "../assets/images/paris.jpg";
import baliImg from "../assets/images/bali.jpg";
import newyorkImg from "../assets/images/newyork.jpg";
import tokyoImg from "../assets/images/tokyo.jpg";
import sydneyImg from "../assets/images/sydney.jpg";
import southafrica from "../assets/images/southafrica.jpg";
// Get the Geoapify API key from environment variables
const geoapifyKey = import.meta.env.VITE_GEOAPIFY_API_KEY;

// List of destinations
const destinations = [
  {
    name: "Paris, France",
    image: parisImg,
    description:
      "Experience romance, art, and fine dining in the City of Light.",
  },
  {
    name: "Bali, Indonesia",
    image: baliImg,
    description:
      "Relax on beautiful beaches surrounded by lush tropical nature.",
  },
  {
    name: "New York, USA",
    image: newyorkImg,
    description: "Enjoy iconic sights, Broadway shows, and vibrant nightlife.",
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

function Destinations() {
  useEffect(() => {
    // Fetch geocode data for each destination
    destinations.forEach((d) => { 
      const location = d.name;
      fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(location)}&apiKey=${geoapifyKey}`,
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(`Geo data for ${d.name}:`, data);
          // You can store this in state if you want to display coordinates later
        })
        .catch((err) => console.error(`Error fetching ${d.name}:`, err));
    });
  }, []);

  return (
    <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-cover bg-no-repeat min-h-screen"
         style={{ backgroundImage: `url(${parisImg})` }}>
      {destinations.map((d, i) => (
        <DestinationCard key={i} destination={d} />
      ))}
    </div>
  );
}

export default Destinations;        
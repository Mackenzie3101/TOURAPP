import { Link } from "react-router-dom";
import travelbg from "../assets/images/travel.jpg";


function Home() {
  return (
    <div className="relative text-center flex flex-col items-center justify-center h-screen px-4 bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: `url(${travelbg})` }}>
      <h1 className="text-5xl font-bold text-black mb-4 drop-shadow-lg">
         WELCOME TO TOUR AND TRAVEL
      </h1>

      <h2 className="text-4xl font-bold text-black mb-4 drop-shadow-lg">
        Discover Your Next Adventure
      </h2>

      <p className="text-black mb-8 max-w-2xl mx-auto drop-shadow-md">
        Explore breathtaking destinations around the world. Plan your dream vacation with ease using our modern travel platform.
      </p>

      <Link
         to="/destinations"
         className="bg-blue-600 text-black px-6 py-3 rounded-lg hover:bg-blue-700">
        Destinations
      </Link>
    </div>
  );
}

export default Home;
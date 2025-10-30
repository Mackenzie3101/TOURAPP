import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center py-16 px-4 bg-gradient-to-b from-blue-100 to-white">
      <h2 className="text-4xl font-bold text-blue-700 mb-4">
        Discover Your Next Adventure
      </h2>
      <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
        Explore breathtaking destinations around the world. Plan your dream vacation with ease using our modern travel platform.
      </p>
      <Link
        to="/destinations"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Explore Destinations
      </Link>
    </div>
  );
}
export default Home;
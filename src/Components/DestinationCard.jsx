function DestinationCard({ destination }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform">
      <img
        src={destination.image}
        alt={destination.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{destination.name}</h3>
        <p className="text-gray-600 text-sm">{destination.description}</p>
      </div>
    </div>
  );
}
 export default DestinationCard;
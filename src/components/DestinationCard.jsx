function DestinationCard({ destination }) {
  return (
    <div className="border rounded p-4 shadow">
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="font-bold text-xl mt-2">{destination.name}</h2>
      <p>{destination.description}</p>
    </div>
  );
}
export default DestinationCard;

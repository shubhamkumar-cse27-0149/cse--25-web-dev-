export default function TravelWebsite() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      
      {/* Heading */}
      <h1 className="text-5xl font-bold text-sky-300 mb-8">
        My Travel Website
      </h1>

      {/* Images Section */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        
        <div className="border-4 border-sky-200 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Beach"
            className="w-[350px] h-[220px] object-cover"
          />
        </div>

        <div className="border-4 border-sky-200 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1493558103817-58b2924bce98"
            alt="Travel"
            className="w-[350px] h-[220px] object-cover"
          />
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-center max-w-2xl text-lg mb-8">
        Travelling helps us explore new places, experience different cultures,
        and create unforgettable memories with friends and family.
      </p>

      {/* Button */}
      <button className="bg-sky-300 hover:bg-sky-400 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md transition">
        Explore
      </button>
    </div>
  );
}
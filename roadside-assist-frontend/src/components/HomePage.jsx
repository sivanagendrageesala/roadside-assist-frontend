import React from "react";

const services = [
  { name: "Flat Tire", image: "/tire.jpg" },
  { name: "Battery Jump", image: "/battery.jpg" },
  { name: "Lockout Service", image: "/lockout.jpg" },
  { name: "Towing", image: "/towing.jpg" },
  { name: "Mechanical Help", image: "/mechanic.jpg" },
];

export default function HomePage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Roadside Assist</h1>
        <p className="text-lg mb-4">Fast Help, Anytime, Anywhere.</p>
        <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded hover:bg-yellow-500 transition">
          Book Now
        </button>
      </div>

      {/* Services */}
      <div className="py-12 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-gray-100 rounded-xl shadow-md hover:scale-105 transform transition overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold p-4">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-blue-50 py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <ul className="text-lg space-y-2">
          <li>✅ 24/7 Availability</li>
          <li>✅ Verified Technicians</li>
          <li>✅ Fast Response Time</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>📞 +91-95501-33034 | 📧 help@roadsideassist.com</p>
        <p className="mt-2">© 2025 Roadside Assist</p>
      </footer>
    </div>
  );
}

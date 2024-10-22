// HomePage.tsx
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Your Car Deserves the Best</h1>
          <p className="mt-4 text-lg md:text-xl">
            Professional mobile detailing services at your doorstep.
          </p>
          <button className="mt-6 bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-100 transition duration-300">
            Book Now
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Our Services</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Exterior Detailing",
                description: "Full exterior wash, polish, and protective coating.",
              },
              {
                title: "Interior Detailing",
                description: "Complete interior cleaning, vacuuming, and conditioning.",
              },
              {
                title: "Full Package",
                description: "Comprehensive detailing package for both interior and exterior.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">What Our Customers Say</h2>
          <div className="mt-10 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
            {[
              {
                quote: "Absolutely fantastic! My car looks brand new.",
                name: "John Doe",
              },
              {
                quote: "They did an amazing job, and the convenience is unbeatable!",
                name: "Jane Smith",
              },
              {
                quote: "The attention to detail was incredible. Highly recommended.",
                name: "Mark Johnson",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <p className="text-lg italic">"{testimonial.quote}"</p>
                <h4 className="mt-4 text-gray-800 font-semibold">- {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Shine?</h2>
          <p className="mt-4 text-lg">
            Get in touch with us today to schedule your detailing session.
          </p>
          <button className="mt-6 bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-100 transition duration-300">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

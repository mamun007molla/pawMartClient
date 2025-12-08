import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { Link } from "react-router";

const Cards = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [listings, setListings] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3000/listing")
      .then((res) => setListings(res.data));
  }, []);
  const filteredListings = useMemo(() => {
    return listings.filter((item) => {
      const matchCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      const lowerSearch = searchText.toLowerCase();
      const matchSearch =
        item.name.toLowerCase().includes(lowerSearch) ||
        item.location.toLowerCase().includes(lowerSearch);

      return matchCategory && matchSearch;
    });
  }, [listings, selectedCategory, searchText]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
       
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Available Listings
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            {/* Search */}
            <input
              type="text"
              placeholder="Search by name or location..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
            />

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="All">All Categories</option>
              <option value="Pets">Pets</option>
              <option value="Food">Food</option>
              <option value="Accessories">Accessories</option>
              <option value="Care Products">Care Products</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {filteredListings.length === 0 ? (
          <p className="text-gray-600">No listings found.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredListings.map((card) => (
              <div
                key={card._id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex "
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-40 h-40 object-cover "
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {card.name}
                  </h3>
                  <p className="text-sm text-gray-500">{card.category}</p>

                  <p className="mt-2 font-semibold text-gray-700">
                    {card.price === 0 || card.price === "free"
                      ? "Free for Adoption"
                      : `৳ ${card.price}`}
                  </p>

                  <p className="text-sm text-gray-600 mt-1">
                    📍 {card.location}
                  </p>

                  <Link
                    to={`/listing/${card._id}`}
                    className="mt-4 inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Cards;

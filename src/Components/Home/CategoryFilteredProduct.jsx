import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";

const CategoryFilteredProduct = () => {
  const { categoryName } = useParams();
  const decodedCategory = decodeURIComponent(categoryName);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://paw-mart-server-fawn.vercel.app/listing")
      .then((res) => setListings(res.data))
      .finally(() => setLoading(false));
  }, []);

  const filtered = listings.filter((item) => item.category === decodedCategory);

  if (loading) {
    return (
      <div className="w-full flex justify-center py-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {decodedCategory} Listings
        </h2>

        {filtered.length === 0 ? (
          <p className="text-gray-600">No products found in this category.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {item.category} • {item.location}
                  </p>
                  <p className="font-semibold text-gray-800 mb-3">
                    {item.price === 0 ? "Free for Adoption" : `৳ ${item.price}`}
                  </p>

                  <Link
                    to={`/listing/${item._id}`}
                    className="btn btn-sm btn-primary"
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

export default CategoryFilteredProduct;

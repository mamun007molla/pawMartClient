import React from "react";
import { Link } from "react-router";

const Category = () => {
  const categories = [
    {
      title: "Pets (Adoption)",
      icon: "🐶",
      categoryName: "Pets", 
    },
    {
      title: "Pet Food",
      icon: "🍖",
      categoryName: "Food",
    },
    {
      title: "Accessories",
      icon: "🧸",
      categoryName: "Accessories",
    },
    {
      title: "Pet Care Products",
      icon: "💊",
      categoryName: "Care Products",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Shop by Category
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, index) => (
            <Link
              key={index}
              to={`/category-filtered-product/${encodeURIComponent(
                cat.categoryName
              )}`}
              className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg hover:bg-gray-100 transition text-center"
            >
              <div className="text-5xl mb-4">{cat.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {cat.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;

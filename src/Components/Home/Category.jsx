import React from 'react';

const Category = () => {
     const categories = [
    {
      title: "Pets (Adoption)",
      icon: "🐶",
      link: "/pets"
    },
    {
      title: "Pet Food",
      icon: "🍖",
      link: "/pet-food"
    },
    {
      title: "Accessories",
      icon: "🧸",
      link: "/accessories"
    },
    {
      title: "Pet Care Products",
      icon: "💊",
      link: "/pet-care"
    }
  ];

    return (
         <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Shop by Category
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, index) => (
            <a
              key={index}
              href={cat.link}
              className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg hover:bg-gray-100 transition text-center"
            >
              <div className="text-5xl mb-4">{cat.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{cat.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Category;
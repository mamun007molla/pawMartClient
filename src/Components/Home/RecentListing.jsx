import React from "react";
import { Link } from "react-router";


const RecentListing = () => {
  const cards = [
    {
    id: "123",
    name: "Golden Retriever Puppy",
    category: "Pets (Adoption)",
    price: 0,
    location: "Dhaka, Bangladesh",
    image: "https://i.ibb.co/ZV1yP1X/dog.jpg",
  },
  {
    id: "123",
    name: "Golden Retriever Puppy",
    category: "Pets (Adoption)",
    price: 0,
    location: "Dhaka, Bangladesh",
    image: "https://i.ibb.co/ZV1yP1X/dog.jpg",
  },
  {
    id: "123",
    name: "Golden Retriever Puppy",
    category: "Pets (Adoption)",
    price: 0,
    location: "Dhaka, Bangladesh",
    image: "https://i.ibb.co/ZV1yP1X/dog.jpg",
  },
  {
    id: "123",
    name: "Golden Retriever Puppy",
    category: "Pets (Adoption)",
    price: 0,
    location: "Dhaka, Bangladesh",
    image: "https://i.ibb.co/ZV1yP1X/dog.jpg",
  },
  {
    id: "123",
    name: "Golden Retriever Puppy",
    category: "Pets (Adoption)",
    price: 0,
    location: "Dhaka, Bangladesh",
    image: "https://i.ibb.co/ZV1yP1X/dog.jpg",
  },
  {
    id: "123",
    name: "Golden Retriever Puppy",
    category: "Pets (Adoption)",
    price: 0,
    location: "Dhaka, Bangladesh",
    image: "https://i.ibb.co/ZV1yP1X/dog.jpg",
  }
  ]
  
  return (
    <div className="grid grid-cols-3 gap-3">
      {cards.map(card => (
        <div  key={card.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex ">
          <img src={card.image} alt={card.name} className="w-40 h-40 object-cover " />

          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{card.name}</h3>
            <p className="text-sm text-gray-500">{card.category}</p>

            <p className="mt-2 font-semibold text-gray-700">
              {card.price === 0 || card.price === "free" ? "Free for Adoption" : `৳ ${card.price}`}
            </p>

            <p className="text-sm text-gray-600 mt-1">📍 {card.location}</p>

            <Link
              to={`/listing/${card.id}`}
              className="mt-4 inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              See Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentListing;

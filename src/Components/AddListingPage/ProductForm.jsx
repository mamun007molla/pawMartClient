import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { use } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router";

const ProductForm = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    category: "pets",
    price: 0,
    location: "",
    description: "",
    image: "",
    email: user?.email || "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "category") {
      if (value === "pets") {
        setFormData((prev) => ({
          ...prev,
          category: value,
          price: 0,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          category: value,
          price: prev.price,
        }));
      }
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://paw-mart-server-fawn.vercel.app/listing", formData)
      .then((res) => {
        console.log("Saved:", res.data);
        Swal.fire({
          title: "Good job!",
          text: "Your item is added!",
          icon: "success",
        });
        navigate("/petSupplies");
      });

    e.target.reset();
  };

  const isPetsCategory = formData.category === "pets";

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-4"
    >
      <h2 className="text-2xl font-bold mb-2">Add New Listing</h2>

      {/* Product / Pet Name */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Product / Pet Name
        </label>
        <input
          type="text"
          name="name"
          required
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          name="category"
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2"
        >
          <option value="pets">Pets (Adoption)</option>
          <option value="food">Pet Food</option>
          <option value="accessories">Accessories</option>
          <option value="care">Pet Care Products</option>
        </select>
      </div>

      {/* Price */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Price {isPetsCategory && "(Free for Adoption)"}
        </label>
        <input
          type="number"
          name="price"
          min="0"
          value={formData.price}
          onChange={handleChange}
          disabled={isPetsCategory}
          className={`w-full border rounded-lg px-3 py-2 ${
            isPetsCategory ? "bg-gray-100 cursor-not-allowed" : ""
          }`}
        />
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium mb-1">Location</label>
        <input
          type="text"
          name="location"
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          name="description"
          rows="4"
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-3 py-2"
        ></textarea>
      </div>

      {/* Image */}
      <div>
        <label className="block text-sm font-medium mb-1">Image URL</label>
        <input
          type="url"
          name="image"
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium mb-1">Pick Up Date</label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">Email (Owner)</label>
        <input
          type="email"
          name="email"
          readOnly
          value={formData.email}
          className="w-full border rounded-lg px-3 py-2 bg-gray-100 cursor-not-allowed"
        />
      </div>

      <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
        Add Listing
      </button>
    </form>
  );
};

export default ProductForm;

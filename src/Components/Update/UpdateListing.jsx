import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateListing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [listing, setListing] = useState(null);

  const categories = [
    "Pets",
    "Food",
    "Accessories",
    "Care Products",
  ];

  useEffect(() => {
    axios.get(`http://localhost:3000/listing/${id}`).then((res) => {
      setListing(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Auto set price = 0 for Pets
    if (name === "category" && value === "Pets") {
      setListing((prev) => ({ ...prev, price: 0, category: value }));
      return;
    }

    setListing((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3000/listing/${id}`, listing).then((res) => {
      Swal.fire({
        title: "Updated!",
        text: "Listing updated successfully",
        icon: "success",
        timer: 1500,
      });
      console.log(res);

      navigate("/myList"); // redirect to dashboard
    });
  };

  if (!listing) return <p className="p-6">Loading...</p>;

  const isPets = listing.category === "Pets";

  return (
    <div className="max-w-2xl mx-auto bg-base-200 p-6 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Update Listing</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name */}
        <div>
          <label className="font-medium">Product / Pet Name</label>
          <input
            type="text"
            name="name"
            value={listing.name}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        {/* Category */}
        <div>
          <label className="font-medium">Category</label>
          <select
            name="category"
            value={listing.category}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={listing.price}
            onChange={handleChange}
            disabled={isPets}
            className={`input input-bordered w-full ${
              isPets ? "bg-gray-200 cursor-not-allowed" : ""
            }`}
            placeholder={isPets ? "Free for Adoption (0)" : "Enter price"}
          />
        </div>

        {/* Location */}
        <div>
          <label className="font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={listing.location}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        {/* Date */}
        <div>
          <label className="font-medium">Pickup Date</label>
          <input
            type="date"
            name="date"
            value={listing.date}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="font-medium">Image URL</label>
          <input
            type="url"
            name="image"
            value={listing.image}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-medium">Description</label>
          <textarea
            name="description"
            value={listing.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit */}
        <button className="btn btn-primary w-full mt-4">
          Update Listing
        </button>
      </form>
    </div>
  );
};

export default UpdateListing;

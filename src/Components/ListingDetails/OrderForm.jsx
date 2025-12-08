import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const OrderForm = ({ listing, user }) => {
  
  if (!listing) return <p>Loading...</p>;

  const isPet = listing.category === "Pets";

  const [formData, setFormData] = useState({
    buyerName: "",
    email: "",
    productId: "",
    productName: "",
    quantity: 1,
    price: 0,
    address: "",
    phone: "",
    date: "",
    additionalNotes: "",
  });

  
  useEffect(() => {
    if (!listing) return;

    setFormData((prev) => ({
      ...prev,
      buyerName: user?.name || "",
      email: user?.email || "",
      productId: listing._id,
      productName: listing.name,
      quantity: listing.category === "Pets" ? 1 : 1,
      price: listing.price,
    }));
  }, [listing, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Order Submitted:", formData);

    axios.post("http://localhost:3000/order", formData).then((res) => {
      console.log("Saved:", res.data);
      Swal.fire({
        title: "Good job!",
        text: "Your order is placed!",
        icon: "success",
      });

      // state reset
      setFormData((prev) => ({
        ...prev,
        address: "",
        phone: "",
        date: "",
        additionalNotes: "",
      }));
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fieldset bg-base-200 border-base-300 rounded-box border p-4 w-full"
    >
      <legend className="fieldset-legend">Place Your Order</legend>

      {/* Buyer Name */}
      <div>
        <label className="block text-sm font-medium">Buyer Name</label>
        <input
          type="text"
          name="buyerName"
          value={formData.buyerName}
          readOnly
          className="w-full border rounded-lg px-3 py-2 bg-gray-100 cursor-not-allowed"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          readOnly
          className="w-full border rounded-lg px-3 py-2 bg-gray-100 cursor-not-allowed"
        />
      </div>

      {/* Listing ID */}
      <div>
        <label className="block text-sm font-medium">Listing ID</label>
        <input
          type="text"
          name="productId"
          value={formData.productId}
          readOnly
          className="w-full border rounded-lg px-3 py-2 bg-gray-100 cursor-not-allowed"
        />
      </div>

      {/* Product Name */}
      <div>
        <label className="block text-sm font-medium">Product Name</label>
        <input
          type="text"
          name="productName"
          value={formData.productName}
          readOnly
          className="w-full border rounded-lg px-3 py-2 bg-gray-100 cursor-not-allowed"
        />
      </div>

      {/* Quantity */}
      <div>
        <label className="block text-sm font-medium">Quantity</label>
        <input
          type="number"
          name="quantity"
          min="1"
          value={formData.quantity}
          disabled={isPet}
          onChange={handleChange}
          className={`w-full border rounded-lg px-3 py-2 ${
            isPet ? "bg-gray-100 cursor-not-allowed" : ""
          }`}
        />
        {isPet && (
          <p className="text-xs text-gray-500 mt-1">
            Pets can only be adopted one at a time.
          </p>
        )}
      </div>

      {/* Price */}
      <div>
        <label className="block text-sm font-medium">Price</label>
        <input
          type="text"
          name="price"
          readOnly
          value={
            formData.price === 0
              ? "Free for Adoption"
              : `৳ ${formData.price}`
          }
          className="w-full border rounded-lg px-3 py-2 bg-gray-100 cursor-not-allowed"
        />
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-medium">Address</label>
        <input
          type="text"
          name="address"
          required
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter full address..."
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder="01XXXXXXXXX"
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium">Pick Up Date</label>
        <input
          type="date"
          name="date"
          required
          value={formData.date}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Additional Notes */}
      <div>
        <label className="block text-sm font-medium">Additional Notes</label>
        <textarea
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          rows="3"
          placeholder="Any extra details..."
          className="w-full border rounded-lg px-3 py-2"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
      >
        Confirm Order
      </button>
    </form>
  );
};

export default OrderForm;

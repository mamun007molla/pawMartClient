import React from "react";

import { useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { use } from "react";

const MylistTable = () => {
  const { user } = use(AuthContext);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`https://paw-mart-server-fawn.vercel.app/listing/user/${user.email}`)
      .then((res) => setListings(res.data));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You cannot recover this listing!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://paw-mart-server-fawn.vercel.app/listing/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your listing has been removed.",
                "success"
              );

              setListings(listings.filter((item) => item._id !== id));
            }
          });
      }
    });
  };

  if (!user) return <p className="p-4">Please login first.</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">My Listings</h2>

      {listings.length === 0 ? (
        <p>No listings added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Location</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {listings.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>

                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded object-cover"
                    />
                  </td>

                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>
                    {item.price === 0 ? (
                      <span className="text-green-600 font-bold">
                        Free for Adoption
                      </span>
                    ) : (
                      `৳ ${item.price}`
                    )}
                  </td>

                  <td>{item.location}</td>
                  <td>{item.date}</td>

                  <td className="flex gap-2">
                    {/* Update Button */}
                    <Link
                      to={`/update-listing/${item._id}`}
                      className="btn btn-sm btn-warning"
                    >
                      Update
                    </Link>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MylistTable;

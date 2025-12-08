import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Link, useParams } from "react-router";
import Navbar from "../Header/Navbar";
import OrderForm from "./OrderForm";

const DetailsCards = () => {
  const { id } = useParams();

  const [listings, setListings] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/listing/${id}`)
      .then((res) => setListings(res.data));
  }, [id]);

  const { name, category, email, description, price, location, image } =
    listings;

  return (
    <div className="">
      
      <main>
        {listings ? (
          <div className="w-11/12 mx-auto">
            <div className="hero bg-base-200 min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="space-y-3">
                  <h1 className="text-5xl font-bold">{name}</h1>
                  <h2 className="text-2xl font-semibold">{`Description`}</h2>
                  <p>{description}</p>
                  <p>{`Price: $${price}`}</p>
                  <p>{`Category: ${category}`}</p>

                  <p>{`Email: ${email}`}</p>
                  <p>{`Address: ${location}`}</p>
                  

                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                      <OrderForm listing={listings} />
                      <div className="modal-action">
                        <form method="dialog">
                         
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                  <div className="flex items-center gap-5">
                    <button
                      className="btn "
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      Adapt/Order
                    </button>
                    <Link to="/petSupplies" className="btn btn-secondary">
                      Back to All pets & Supply
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto py-16 px-4">
            <p className="text-red-500 font-semibold">Listing not found.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default DetailsCards;

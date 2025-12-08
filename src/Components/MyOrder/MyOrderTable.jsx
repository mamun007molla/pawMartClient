import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import { AuthContext } from "../../Provider/AuthProvider";
import Loader from "../Loader/Loader";

const MyOrderTable = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!user?.email) return;

    const fetchOrders = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://paw-mart-server-fawn.vercel.app/order/user/${user.email}`
        );
        setOrders(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user?.email]);

  if (!user) {
    return <p className="p-6">Please login to see your orders.</p>;
  }
  if (loading) {
    return <Loader />;
  }

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("My Orders / Adoption Requests", 14, 18);
    doc.setFontSize(11);
    doc.text(`User: ${user.email}`, 14, 26);

    const tableColumn = [
      "Product / Listing",
      "Buyer Name",
      "Price",
      "Qty",
      "Address",
      "Date",
      "Phone",
    ];

    const tableRows = orders.map((order) => [
      order.productName,
      order.buyerName,
      order.price === 0 ? "Free" : `৳ ${order.price}`,
      order.quantity,
      order.address,
      order.date,
      order.phone,
    ]);

    // ⬇️ Ekhane change: doc.autoTable na, autoTable(doc, ...)
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 32,
    });

    doc.save("my-orders-report.pdf");
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">My Orders / Adoption Requests</h2>

        {/* Download Report Button */}
        <button
          onClick={handleDownloadPDF}
          className="btn btn-primary btn-sm"
          disabled={orders.length === 0}
        >
          🧩 Download Report (PDF)
        </button>
      </div>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th>#</th>
                <th>Product / Listing Name</th>
                <th>Buyer Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Address</th>
                <th>Date</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={order._id || idx}>
                  <td>{idx + 1}</td>
                  <td>{order.productName}</td>
                  <td>{order.buyerName}</td>
                  <td>
                    {order.price === 0 ? (
                      <span className="text-green-600 font-semibold">Free</span>
                    ) : (
                      `৳ ${order.price}`
                    )}
                  </td>
                  <td>{order.quantity}</td>
                  <td>{order.address}</td>
                  <td>{order.date}</td>
                  <td>{order.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyOrderTable;

// src/pages/NotFound.jsx
import { Link } from "react-router";

import { useEffect } from "react";


const PageNotFound = () => {
  useEffect(() => {
      document.title = "Page Not Found | PawMart";
    }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you are looking for doesn’t exist.</p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;

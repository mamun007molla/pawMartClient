
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config"; 
import { useEffect } from "react";

const Register = () => {
     useEffect(() => {
    document.title = "Register | PawMart";
  }, []);
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    // Password validation
    if (password.length < 6) {
      const msg = "Password must be at least 6 characters long.";
      setError(msg);
      Swal.fire("Error", msg, "error");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      const msg = "Password must contain at least one uppercase letter.";
      setError(msg);
      Swal.fire("Error", msg, "error");
      return;
    }
    if (!/[a-z]/.test(password)) {
      const msg = "Password must contain at least one lowercase letter.";
      setError(msg);
      Swal.fire("Error", msg, "error");
      return;
    }

    // Create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // update displayName & photoURL
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => user);
      })
      .then(() => {
        Swal.fire("Success", "Account created successfully!", "success");
        form.reset();
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        Swal.fire("Error", err.message, "error");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("Google user:", result.user);
        Swal.fire("Success", "Logged in with Google!", "success");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Error", err.message, "error");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register</h1>
          <p className="py-6">Create your PawMart account to get started.</p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset space-y-2">
              {/* Name */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input input-bordered"
                placeholder="Your name"
                required
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input input-bordered"
                placeholder="you@example.com"
                required
              />

              {/* Password */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input input-bordered"
                placeholder="Password"
                required
              />
              <p className="text-xs text-gray-500">
                Must be at least 6 characters, with 1 uppercase and 1 lowercase
                letter.
              </p>

              {/* photoURL */}
              <label className="label">Photo URL</label>
              <input
                name="photoURL"
                type="url"
                className="input input-bordered"
                placeholder="https://example.com/photo.jpg"
              />

              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </fieldset>

            <p className="mt-3 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="link link-hover text-blue-500">
                Login here
              </Link>
            </p>

            <p className="text-center text-sm mt-2">
              Or continue with{" "}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="link link-hover text-blue-500"
              >
                Google
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

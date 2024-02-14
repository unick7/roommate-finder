// AuthPage.js
import { useState } from "react";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleToggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // let userCredential;
      if (isLogin) {
        // Login
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in successfully");
        navigate("/dashboard");
      } else {
        // Signup
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User registered successfully");
        navigate("/create-profile");
      }
      // const user = userCredential.user;
    } catch (error) {
      console.error("Error during authentication:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <div className="flex w-full max-w-3xl p-8 bg-white rounded-md shadow-md">
        {/* Left Half: Logo and Description */}
        <div className="w-1/2 mr-8">
          <img
            className="mb-4 mx-auto w-30 h-24 rounded-full"
            src="src/assets/logo.png"
            alt="Logo"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Roommate Finder
          </h1>
          <p className="text-gray-600">
            Find your ideal roommate in New York City!
          </p>
        </div>

        {/* Right Half: Login/Signup Form */}
        <div className="w-1/2">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            {isLogin ? "Log In" : "Sign Up"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-800 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                id="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-800 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {isLogin ? "Log In" : "Sign Up"}
            </button>
          </form>
          <div className="mt-4 text-center text-gray-500">
            {isLogin ? "New user?" : "Already have an account?"}{" "}
            <button
              className="text-blue-500 hover:text-blue-700 focus:outline-none"
              type="button"
              onClick={handleToggleForm}
            >
              {isLogin ? "Sign up here" : "Log in here"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

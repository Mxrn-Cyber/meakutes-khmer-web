import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import "./login.css"; // Import the CSS file

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login form submitted:", formData);

      // Using email prefix as the username
      const username = formData.email.split("@")[0];
      localStorage.setItem("username", username); // Store username in localStorage

      router.push("/"); // Redirect after successful login
    }
  };

  const handleSocialLogin = (platform) => {
    console.log(`${platform} login`);
    // Implement authentication logic here (e.g., using Firebase, OAuth)
  };

  return (
    <>
      <Head>
        <title>Sign In | Tourism Explorer</title>
        <meta
          name="description"
          content="Sign in to explore amazing destinations"
        />
      </Head>
      <div className="login-container">
        <div className="login-form-container">
          <div className="login-form">
            <h1>Login</h1>
            <p>
              Don&apos;t have an account?{" "}
              <Link href="/signup">
                <span className="text-green-600 hover:underline cursor-pointer">
                  Sign up
                </span>
              </Link>
            </p>

            <form onSubmit={handleSubmit}>
              <div className={`input-field ${errors.email ? "error" : ""}`}>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
              </div>

              <div className={`input-field ${errors.password ? "error" : ""}`}>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border rounded-md p-2 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-green-500" // Add padding to the right for button
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && (
                  <p className="error-message">{errors.password}</p>
                )}
              </div>

              <div className="remember-me mb-6 flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <button type="submit" className="submit-btn">
                Sign In
              </button>
            </form>

            <div className="or-divider">
              <span>Or continue with</span>
            </div>

            <div className="social-btns flex justify-center gap-4 mt-6">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                onClick={() => handleSocialLogin("GitHub")}
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.378.201 2.397.099 2.65.64.698 1.028 1.591 1.028 2.682 0 3.842-2.337 4.687-4.565 4.935.36.31.682.92.682 1.855 0 1.338-.012 2.419-.012 2.75 0 .268.18.58.688.482C17.137 18.165 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </button>

              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                onClick={() => handleSocialLogin("Google")}
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.494 12.275c0-.81-.073-1.59-.209-2.34H12v4.43h6.48c-.278 1.5-1.11 2.77-2.35 3.63v3.01h3.79c2.22-2.04 3.48-5.05 3.48-8.73z" />
                  <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.79-3.01c-1.05.7-2.37 1.12-3.79 1.12-2.92 0-5.39-1.98-6.27-4.64H2.18v3.03C4.16 21.54 7.79 24 12 24z" />
                  <path d="M5.73 14.56c-.24-.7-.38-1.44-.38-2.22s.14-1.52.38-2.22V7.09H2.18C1.43 8.64 1 10.27 1 12s.43 3.36 1.18 4.91l3.55-2.35z" />
                  <path d="M12 4.77c1.76 0 3.34.61 4.58 1.8l3.43-3.43C17.95 1.61 15.24 0 12 0 7.79 0 4.16 2.46 2.18 6.09l3.55 2.35c.88-2.66 3.35-4.64 6.27-4.64z" />
                </svg>
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

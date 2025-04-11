import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4  bg-gradient-to-br from-blue-400 to-blue-600">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden my-6 lg:my-0 flex flex-col md:flex-row">
        {/* Left: Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800 mb-6">
            <h1>Smart Campus Connect</h1>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Get started</h2>
          <p className="text-sm text-gray-600 mb-6">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-green-600 font-medium hover:underline">
              Sign up
            </a>
          </p>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-blue-50"
                placeholder="farwa@gmail.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-blue-50"
                placeholder="••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-all"
            >
              Login
            </button>
          </form>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src="/campus.jpeg"
            alt="Plant background"
            className="w-full h-full object-cover rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}

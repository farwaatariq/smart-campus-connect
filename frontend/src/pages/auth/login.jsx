// import React, { useState } from "react";
// import { auth, googleProvider } from "../../firebase/firebase";
// import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/dashboard");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       navigate("/");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4  bg-gradient-to-br from-blue-400 to-blue-600">
//       <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden my-6 lg:my-0 flex flex-col md:flex-row">
//         <div className="w-full md:w-1/2 p-8 md:p-12">
//           <div className="text-2xl font-bold text-gray-800 mb-6">
//             <h1>Smart Campus Connect</h1>
//           </div>

//           <h2 className="text-3xl font-bold mb-2 text-gray-900">Get started</h2>
//           <p className="text-sm text-gray-600 mb-6">
//             Don&apos;t have an account?{" "}
//             <a href="/signup" className="text-green-600 font-medium hover:underline">
//               Sign up
//             </a>
//           </p>

//           <form className="space-y-4" onSubmit={handleLogin}>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full  text-black mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-blue-50"
//                 placeholder="example@gmail.com"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Password</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full mt-1 px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-blue-50"
//                 placeholder="••••••"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full mt-4 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-all"
//             >
//               Login
//             </button>
//             <p className="text-center text-sm text-gray-500 mt-4">OR</p>
//             <button
//               type="button"
//               onClick={handleGoogleLogin}
//               className=" flex items-center w-full justify-center  px-4 py-2 mt-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all space-x-4">
//                 <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" class="w-5 h-5"/>
//                 <span>Continue with Google</span>     
//                 </button>
//           </form>
//         </div>
//         <div className="w-full md:w-1/2 h-64 md:h-auto">
//           <img
//             src="/campus.jpeg"
//             alt="Campus"
//             className="w-full h-full object-cover rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl hidden lg:block"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#2d253c] flex items-center justify-center px-4 py-8">
      <div className="max-w-5xl w-full bg-[#241d31] text-white rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">
        
        {/* Left Side - Image and Text */}
        <div
          className="md:w-1/2 h-[500px] md:h-auto bg-cover bg-center relative"
          style={{ backgroundImage: "url('/auth.jpeg')" }}
        >
          <div className="absolute top-4 right-4">
            <button className="bg-[#3d3450] hover:bg-[#4e3f66] text-sm text-white px-4 py-2 rounded-full transition">
              Back to website →
            </button>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-semibold mb-4">Smart Campus Connect</h1>
          <h2 className="text-xl font-semibold mb-1">Create an account</h2>
          <p className="text-sm text-white/70 mb-6">
            Already have an account? <a href="#" className="text-[#a892ee] underline">Log in</a>
          </p>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="First name" className="w-1/2 px-4 py-3 rounded-md bg-[#3d3450] text-white placeholder-white/70 focus:outline-none" defaultValue="Fletcher" />
              <input type="text" placeholder="Last name" className="w-1/2 px-4 py-3 rounded-md bg-[#3d3450] text-white placeholder-white/70 focus:outline-none" />
            </div>
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-md bg-[#3d3450] text-white placeholder-white/70 focus:outline-none" />
            <div className="relative">
              <input type="password" placeholder="Enter your password" className="w-full px-4 py-3 rounded-md bg-[#3d3450] text-white placeholder-white/70 focus:outline-none" />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 cursor-pointer">👁</span>
            </div>
            <label className="flex items-center text-sm space-x-2">
              <input type="checkbox" className="accent-[#a892ee]" defaultChecked />
              <span>I agree to the <a href="#" className="text-[#a892ee] underline">Terms & Conditions</a></span>
            </label>
            <button className="w-full bg-[#a892ee] hover:bg-[#b7a0f5] text-white font-medium py-3 rounded-md transition">
              Create account
            </button>
          </form>

          <div className="my-6 flex items-center justify-between text-sm text-white/50">
            <hr className="w-1/3 border-white/20" />
            <span>Or register with</span>
            <hr className="w-1/3 border-white/20" />
          </div>

          <div className="flex gap-4">
            <button className="w-1/2 border border-white/30 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-white/10">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
              Google
            </button>
            <button className="w-1/2 border border-white/30 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-white/10">
              <img src="https://www.svgrepo.com/show/349368/apple.svg" className="w-5 h-5" alt="Apple" />
              Apple
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;

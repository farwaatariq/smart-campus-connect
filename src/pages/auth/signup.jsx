

// export default function Signup () {
//     return (
//         <div className="max-w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
//             <section class="bg-gray-50 dark:bg-gray-900 my-8 rounded-2xl">
//                 <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto">
//                     <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
//                         Smart Campus
//                     </a>
//                     <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//                         <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
//                             <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                                 Create an account
//                             </h1>
//                             <form class="space-y-4 md:space-y-6" action="#">
//                                 <div>
//                                     <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
//                                     <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
//                                 </div>

//                                 <div className="flex flex-col lg:flex-row w-full gap-2">
//                                     <div className="w-full">
//                                         <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
//                                         <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" required=""/>
//                                     </div>
//                                     <div className="w-full">
//                                         <label for="role" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Role</label>
//                                         <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//                                             <option disabled="" value="" >Select a role</option>
//                                             <option value="student" >Student</option>
//                                             <option value="faculty" >Faculty</option>
//                                         </select>
//                                     </div>
//                                 </div>

//                                 <div className="w-full">
//                                     <label for="role" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Department</label>
//                                     <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//                                         <option disabled="" value="">Select a Department</option>
//                                         <option value="student" >Student</option>
//                                         <option value="faculty" >Faculty</option>
//                                     </select>
//                                 </div>
                                
//                                 <div className="flex flex-col lg:flex-row w-full gap-2">
//                                     <div>
//                                         <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                                         <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
//                                     </div>
//                                     <div>
//                                         <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
//                                         <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
//                                     </div>
//                                 </div>
//                                 <div class="flex items-start">
//                                     <div class="flex items-center h-5">
//                                         <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
//                                     </div>
//                                     <div class="ml-3 text-sm">
//                                         <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
//                                     </div>
//                                 </div>
//                                 <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
//                                 <p class="text-sm font-light text-gray-500 dark:text-gray-400">
//                                     Already have an account? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
//                                 </p>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

import React, { useState } from "react";
import { auth, googleProvider } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithPopup ,getAdditionalUserInfo } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import { getAdditionalUserInfo } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showPasswordRules, setShowPasswordRules] = useState(false);
  const [passwordValidations, setPasswordValidations] = useState({
    hasUpperLower: false,
    hasNumberSymbol: false,
    isLongEnough: false,
  });
  const navigate = useNavigate();

  const handlePasswordChange = (value) => {
    setPassword(value);

    setPasswordValidations({
      hasUpperLower: /(?=.*[a-z])(?=.*[A-Z])/.test(value),
      hasNumberSymbol: /(?=.*[0-9])|(?=.*[@$!%*?#&])/.test(value),
      isLongEnough: value.length >= 8,
    });
  };
  const handleSignup = async (e) => {
    e.preventDefault();

    if (!Object.values(passwordValidations).every(Boolean)) {
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already registered. Try logging in instead.");
      } else {
        alert("Signup failed. Please try again.");
      }
    }
  };
//   const handleGoogleSignup = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const additionalInfo = getAdditionalUserInfo(result);
  
//       if (additionalInfo.isNewUser) {
//         navigate("/complete-profile");
//       } else {
//         navigate("/");
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };
  
const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const additionalInfo = getAdditionalUserInfo(result);
  
      if (additionalInfo.isNewUser) {
        // Save extra user info in Firestore (or show a form if you want)
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          name: user.displayName,
          role: "student", // Default role or set from a form
          department: "cs", // Same here
          createdAt: new Date(),
        });
  
        console.log("New Google user registered");
        // navigate("/");
      } else {
        console.log("Returning Google user logged in");
      }
  
      navigate("/complete-profile");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="max-w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
      <section className="bg-gray-50 dark:bg-gray-900 my-8 rounded-2xl">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
          <a
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Smart Campus
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                Create an account
              </h1>
              <form className="space-y-4" onSubmit={handleSignup}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                  />
                </div>

                <div className="flex flex-col lg:flex-row w-full gap-2">
                  <div className="w-full">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="role"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Role
                    </label>
                    <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5">
                      <option disabled value="">
                        Select a role
                      </option>
                      <option value="student">Student</option>
                      <option value="faculty">Faculty</option>
                    </select>
                  </div>
                </div>

                <div className="w-full">
                  <label
                    htmlFor="department"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Department
                  </label>
                  <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5">
                    <option disabled value="">
                      Select a Department
                    </option>
                    <option value="cs">CS</option>
                    <option value="math">Math</option>
                    <option value="bio">Biology</option>
                  </select>
                </div>

                <div className="flex flex-col lg:flex-row w-full gap-2">
                  <div className="relative w-full">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      value={password}
                      onFocus={() => setShowPasswordRules(true)}
                    //   onBlur={() =>
                    //     setTimeout(() => setShowPasswordRules(false))
                    //   }
                      onChange={(e) => handlePasswordChange(e.target.value)}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 pr-10"
                      required
                    />
                    {/* 👁️ Toggle Icon */}
                    <span
                      className="absolute right-3 top-[38px] cursor-pointer text-gray-600"
                      onClick={() => setPasswordVisible((prev) => !prev)}
                      title="Toggle Password Visibility"
                    >
                      {passwordVisible ? "😳" : "😴"}
                    </span>

                    {/* 🔒 Password Rules */}
                    {showPasswordRules && (
                      <div className="mt-2 border border-blue-400 bg-blue-50 text-blue-800 text-sm rounded-lg p-3">
                        <p className="font-semibold mb-2">
                          🔒 Your password needs to:
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li
                            className={
                              passwordValidations.hasUpperLower
                                ? "text-green-600"
                                : "text-black"
                            }
                          >
                            {passwordValidations.hasUpperLower ? "😊" : "😔"}{" "}
                            Include both lower and upper case characters
                          </li>
                          <li
                            className={
                              passwordValidations.hasNumberSymbol
                                ? "text-green-600"
                                : "text-black"
                            }
                          >
                            {passwordValidations.hasNumberSymbol ? "😊" : "😔"}{" "}
                            Include at least one number or symbol
                          </li>
                          <li
                            className={
                              passwordValidations.isLongEnough
                                ? "text-green-600"
                                : "text-black"
                            }
                          >
                            {passwordValidations.isLongEnough ? "😊" : "😔"} Be
                            at least 8 characters long
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4"
                    required
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 text-sm font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-black hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </a>
                </p>
                <p className="text-center text-sm text-gray-500 mt-4">OR</p>
                <button
                  type="button"
                  onClick={handleGoogleSignup}
                  className=" flex items-center w-full justify-center  px-4 py-2 mt-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all space-x-4"
                >
                  <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google"
                    class="w-5 h-5"
                  />
                  <span>Continue with Google</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

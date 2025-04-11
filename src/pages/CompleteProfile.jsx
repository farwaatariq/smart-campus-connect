import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function CompleteProfile() {
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return;

    try {
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        name: user.displayName,
        role,
        department,
        createdAt: new Date(),
      });

      navigate("/");
    } catch (error) {
      alert("Failed to save profile info");
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-4 w-full max-w-md"
      >
        <h2 className="text-xl font-semibold text-black text-center">Complete Your Profile</h2>

        <div>
          <label className="block mb-1 text-sm  text-black font-medium">Select your role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full text-gray-600 border border-gray-300 p-2 rounded"
            required
          >
    
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm  text-black font-medium">Select your department</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full border text-gray-600 border-gray-300 p-2 rounded"
            required
          >
            <option value="">-- Select Department --</option>
            <option value="cs">CS</option>
            <option value="math">Math</option>
            <option value="bio">Biology</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all"
        >
          Save and Continue
        </button>
      </form>
    </div>
  );
}

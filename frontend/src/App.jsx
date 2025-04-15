// App.jsx or App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import Index from './pages';
import CompleteProfile from "./pages/CompleteProfile"; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />             {/* public home or landing */}
        <Route path="/login" element={<Login />} />       {/* login page */}
        <Route path="/signup" element={<Signup />} />     {/* signup page */}
        <Route path="/complete-profile" element={<CompleteProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

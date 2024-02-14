import "./App.css";
import AuthPage from "./components/AuthPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx"; // Import your Dashboard component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;

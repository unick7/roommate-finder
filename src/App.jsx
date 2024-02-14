import "./App.css";
import AuthPage from "./components/AuthPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import CreateProfile from "./components/CreateProfile.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-profile" element={<CreateProfile />} />
      </Routes>
    </Router>
  );
};

export default App;

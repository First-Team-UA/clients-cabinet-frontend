import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import TVChannels from "./pages/Channels";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Test from "./pages/Test"

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login onLogin={() => setIsAuthenticated(true)} />} />

        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <Layout />
            ) : (
              <Navigate to="/" replace /> 
            )
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="tv-channels" element={<TVChannels />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import { useAuth0 } from "@auth0/auth0-react";
import About from "./pages/About";
import DriverHome from "./pages/Driver/DriverHome";
import DriverProfile from "./pages/Driver/DriverProfile";
import RiderProfile from "./pages/Rider/RiderProfile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RiderHome from "./pages/Rider/RiderHome";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <BrowserRouter>
        {isAuthenticated ? (
          <div className="font-righteous">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/about" element={<About />} exact />
              <Route path="/driver-home" element={<DriverHome />} exact />
              <Route path="/rider-home" element={<RiderHome />} exact />
              <Route path="/driver-profile" element={<DriverProfile />} exact />
              <Route path="/rider-profile" element={<RiderProfile />} exact />
            </Routes>
            <Footer />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Landing />} exact />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;

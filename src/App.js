import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import { useAuth0 } from "@auth0/auth0-react";
import About from "./pages/About";
import DriverHome from "./pages/Driver/DriverHome";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RiderHome from "./pages/Rider/RiderHome";
import Notifications from "./pages/Shared/RiderNotifications";
import RentAVehicle from "./pages/Rider/RentAVehicle";
import RiderRewards from "./pages/Rider/RiderRewards";
import FindRide from "./pages/Rider/FindRide";
import CancelRide from "./pages/Rider/CancelRide";
import CreatePool from "./pages/Driver/CreatePool";
import Profile from "./pages/Shared/Profile";

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
              <Route path="/rider-notifications" element={<Notifications />} exact />
              <Route path="/rent-vehicle" element={<RentAVehicle />} exact />
              <Route path="/rider-rewards" element={<RiderRewards />} exact />
              <Route path="/find-ride" element={<FindRide />} exact />
              <Route path="/cancel-ride" element={<CancelRide />} exact />
              <Route path="/create-pool" element={<CreatePool />} exact />
              <Route path="/profile" element={<Profile />} exact />
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

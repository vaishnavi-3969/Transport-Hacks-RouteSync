import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import { useAuth0 } from "@auth0/auth0-react";
import About from "./pages/About";

function App() {
  const { isAuthenticated } = useAuth0;
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {isAuthenticated ? (
            <Route path="/" element={<Landing />} exact />
          ) : (
            <Route path="/" element={<Home />} exact />
          )
          }
          <Route path="/about" element={<About/>} exact/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

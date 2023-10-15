import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Appointment from "./pages/appointment";
import "./App.css";
import "./assets/css/flaticon_zigo.css";
import "./assets/css/footer.css";
import "./assets/css/header.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      delay: 200,
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/appointment" element={<Appointment />} />
      </Routes>
    </Router>
  );
}

export default App;

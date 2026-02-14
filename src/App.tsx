import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Project from "./pages/Project";
import Donation from "./pages/Donation";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about_us" element={<Aboutpage />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/donation" element={<Donation />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

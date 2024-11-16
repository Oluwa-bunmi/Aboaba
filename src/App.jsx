import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Education from "./pages/Education"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Community from "./pages/Community"
import Healthcare from "./pages/Healthcare"
import Welfare from "./pages/Welfare"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/education-donation" element={<Education />} />
        <Route path="/community-donation" element={<Community />} />
        <Route path="/healthcare-donation" element={<Healthcare />} />
        <Route path="/children-donation" element={<Welfare />} />
      </Routes>
    </>
  );
}

export default App

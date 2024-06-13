import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Laptops from "./components/Laptops";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <Header title="Fake store" />
      <Routes>
        <Route path="/" element={<Laptops />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer footerText="Junior Full Stack Developer © Spodina Daria" />
    </>
  );
}

export default App;

import { Navbar, Footer } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home, Doctors, About, Contact } from "./pages";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/doctors" element={<Doctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Navbar />
<Footer />
<div></div> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;

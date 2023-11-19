import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Doctors, About, Contact, EditProfile } from "../pages";

const App = () => {
  return (
    <>
      <Routes>
        {/* Login route without Navbar and Footer */}
        <Route path="/" element={<Login />} />

        {/* Routes with Navbar and Footer */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/editprofile" element={<EditProfile />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;

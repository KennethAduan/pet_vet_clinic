// import { Navbar, Footer } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Doctors, About, Contact, EditProfile } from "../pages";

import PrivateRoutes from "./PrivateRoutes";
const index = () => {
  return (
    <>

    <Routes>

        <Route element={<PrivateRoutes/>}>
            <Route path="/home" element={<Home/>} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/editprofile" element={<EditProfile />} />
        </Route>

        <Route path="/"  element={<Login />} />
    </Routes> 

    </>
  );
};

export default index;

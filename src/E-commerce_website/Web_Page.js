import React from "react";
import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import About from "./About/About";
import Blogs from "./Blogs/Blogs";
import Contact from "./Contact/Contact";
import CreateAccount, { HomeAction } from "./Create_Account/Create_Account";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Shop from "./Shop/Shop";
import Cart from "./CART/Log-In";
import Footer from "../Footer/Footer";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<Navbar /> }>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="create" element={<CreateAccount />}  action={HomeAction}/>
      <Route path="/logIn" element={<Cart/>}  />
      <Route path="/shop" element={<Shop />} />
    </Route>
  )
);

const MainPage = () => {
  return (
    <div>
        <RouterProvider router={router} />
         <Footer />
    </div>
  );
};

export default MainPage;
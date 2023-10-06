import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import { Navigationbar } from "./Components/Navbar";
import { Homepage } from "./Components/Homepage";
import { About } from "./Components/About";
import { Product } from "./Components/Product";
import { Testimonial } from "./Components/Testimonial";
import { Footer } from "./Components/Footer";

import("./assets/navbar.css");
import("./assets/homepage.css");
import("./assets/about.css");
import("./assets/product.css");
import("./assets/testimonial.css");
import("./assets/footer.css");

function App() {
  return (
    <div className="app">
      <Navigationbar />
      <Routes>
        {/* <Route path="/" element={<Homepage />}></Route> */}
        <Route path="about" element={<About />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="testimonial" element={<Testimonial />}></Route>
      </Routes>
      <Homepage />
      <About />
      <Product />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;

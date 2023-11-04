import Categories from "./components/Categories/Categories";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="max-w-7xl mx-auto">
        <Categories />
        <Products />
      </div>
    </div>
  );
}

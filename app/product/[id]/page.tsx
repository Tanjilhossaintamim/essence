import React from "react";
import Navbar from "../../components/navbar/Navbar";
import AddToCart from "./AddToCart";
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const ProductDetails = async ({ params }: { params: { id: number } }) => {
  const response = await fetch(
    "https://fakestoreapi.com/products/" + params.id
  );
  const product: Product = await response.json();
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={product.image} className="max-w-sm rounded-lg" />
          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="py-6">{product.description}</p>
            <AddToCart title={product.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

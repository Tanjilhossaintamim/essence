import Card from "./Card";
interface Products {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Products = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Products[] = await res.json();

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-center">Popular Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-20">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

"use client";

const AddToCart = ({ title }: { title: string }) => {
  console.log(title);

  return (
    <button
      className="btn btn-accent"
      onClick={() => alert(`${title.slice(0, 10)} successfully Added !`)}
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;

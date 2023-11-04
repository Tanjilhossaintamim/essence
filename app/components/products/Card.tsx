import { log } from "console";
import Link from "next/link";

interface Props {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}
const Card = ({ product }: Props) => {
  const { id, title, price, image } = product;

  return (
    <div className="card card-compact bg-base-100 shadow-xl relative">
      <figure className="flex-grow p-2">
        <img src={image} alt={title} className="w-2/3 h-80" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title.slice(0, 19)}</h2>
        <span className="text-base text-green-500 font-semibold">
          $ {price}
        </span>

        <div className="card-actions justify-end">
          <Link href={`product/${id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

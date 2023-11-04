interface Props {
  label: string;
  imgUrl: string;
}
const CategoryCard = ({ label, imgUrl }: Props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full relative hover:shadow-md cursor-pointer">
      <figure>
        <img
          src={imgUrl}
          alt={label}
          className="object-cover w-[400px] h-[200px]"
        />
      </figure>
      <div className="card-body absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="card-title text-2xl text-center">{label}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;

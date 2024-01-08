import Image from "next/image";

const ItemCard = ({ size = "main", title, imageName, price }) => {
  return (
    <div
      className={`${
        size === "secondary" ? "sm:w-72" : "sm:w-72 lg:w-96"
      } relative flex h-56 w-full max-w-screen-sm cursor-pointer flex-col rounded-xl border-2 bg-white shadow-[4px_4px_0px_0px_black] hover:shadow-none `}
    >
      <div
        className={`${
          size === "secondary" ? "lg:order-2" : "lg:order-1"
        } relative h-3/4 w-full`}
      >
        <Image
          src={`/products/${imageName}.jpg`}
          alt={"products"}
          fill={"true"}
          className={`${
            size === "secondary"
              ? "rounded-t-lg lg:rounded-b-lg lg:rounded-t-none"
              : "sm:rounded-t-lg"
          } overflow-auto  object-cover`}
        />
      </div>
      <p
        className={`${
          size === "secondary" ? "lg:order-1" : "lg:order-2"
        } flex h-1/4 items-center justify-between pl-5 font-bold`}
      >
        {title}
      </p>
      <div
        className={`${
          size === "secondary" ? "rounded-br-md" : "rounded-br-lg"
        } absolute bottom-0 right-0 z-50 flex h-1/4 items-center  justify-center  bg-black pl-3 pr-2 text-white`}
      >
        ${price}
      </div>
    </div>
  );
};

export default ItemCard;

import Image from "next/image";
// size === "secondary" ? "sm:w-72" : "sm:w-72 lg:w-96"

const ItemCard = ({ size = "secondary", title, imageName, price }) => {
  return (
    <div
      className={`${
        size === "secondary" ? "lg:col-span-3 " : "lg:col-span-4 "
      } relative flex h-56 cursor-pointer flex-col rounded-xl border-2 bg-white shadow-[4px_4px_0px_0px_black] hover:shadow-none `}
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
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        } absolute bottom-0 right-0 z-auto flex h-1/4 items-center  justify-center  bg-black pl-3 pr-2 text-white`}
      >
        ${price}
      </div>
    </div>
  );
};

export default ItemCard;

import ItemCard from "./itemCard/itemCard";

const products = [
  {
    title: "Nike Air Force",
    imageName: "WomenNikeShoes",
    price: "108",
    size: "featured",
  },
  {
    title: "Sony Headphones",
    imageName: "headphones",
    price: "52",
  },
  { title: "MacBook Pro M2", imageName: "labtops", price: "1,449.99" },
  { title: "DREAM PAIRS", imageName: "heals", price: "40.99" },
  { title: "Smart Watch", imageName: "watchs", price: "44" },
  {
    title: "Pendant lamp",
    imageName: "lighting",
    price: "32",
    size: "featured",
  },
  { title: "Iphone Pro MAX", imageName: "phones", price: "158" },
  { title: "Unisex Sunglasses", imageName: "sunGlasses", price: "14" },
];

const ProductsContainer = () => {
  return (
    <>
      {products.map((product, index) => {
        const { title, imageName, price, size } = product;
        return (
          <ItemCard
            key={index}
            title={title}
            imageName={imageName}
            price={price}
            size={size}
          />
        );
      })}
    </>
  );
};

export default ProductsContainer;

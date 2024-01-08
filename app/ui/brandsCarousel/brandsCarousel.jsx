import Image from "next/image";
import Amazon from "@public/brands/amazon.svg";
import Noon from "@public/brands/noon.svg";
import Shopify from "@public/brands/shopify.svg";
import Walmart from "@public/brands/walmart.svg";

export default function BrandsCarousel() {
  const logos = [
    { src: Amazon, alt: "Amazon" },
    { src: Noon, alt: "Noon" },
    { src: Shopify, alt: "Shopify" },
    { src: Walmart, alt: "Walmart" },
    { src: Amazon, alt: "Amazon" },
    { src: Noon, alt: "Noon" },
    { src: Shopify, alt: "Shopify" },
    { src: Walmart, alt: "Walmart" },
  ];

  return (
    <div className=" inline-flex w-full flex-nowrap overflow-hidden  pt-16 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} height={40} />
          </li>
        ))}
      </ul>
      <ul
        className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} height={40} />
          </li>
        ))}
      </ul>
    </div>
  );
}
import Image from "next/image";
import Amazon from "@public/assets/brands/amazon.svg";
import Noon from "@public/assets/brands/noon.svg";
import Shopify from "@public/assets/brands/shopify.svg";
import Walmart from "@public/assets/brands/walmart.svg";

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
      <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} height={40} priority={true} />
          </li>
        ))}
      </ul>
      <ul
        className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} height={40} priority={true} />
          </li>
        ))}
      </ul>
    </div>
  );
}

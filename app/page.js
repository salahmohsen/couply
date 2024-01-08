import Divider from "./ui/divider/divider";
import Header from "./ui/header/header";
import Section from "./ui/layout/section";
import MainSection from "./ui/mainSection/mainSection";
import BrandsCarousel from "./ui/brandsCarousel/brandsCarousel";
import ProductsContainer from "./ui/productsContainer/productsContainer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Section>
        <Header />
      </Section>
      <Divider />
      <Section>
        <MainSection />
      </Section>
      <Divider />
      <div className=" h-64 bg-black">
        <BrandsCarousel />
      </div>
      <Section className={"-mt-20 mb-10"}>
        <div
          className={
            "lg:grid-cols-13 mx-auto grid max-w-screen-lg grid-cols-1 gap-5 md:grid-cols-2"
          }
        >
          <ProductsContainer />
        </div>
      </Section>
    </main>
  );
}

import Divider from "./ui/divider/divider";
import Header from "./ui/header/header";
import Section from "./ui/layout/section";
import MainSection from "./ui/mainSection/mainSection";
import BrandsCarousel from "./ui/brandsCarousel/brandsCarousel";
import ItemCard from "./ui/itemCard/itemCard";

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
      <Section className={" -mt-24 mb-10 flex flex-wrap justify-center gap-5 "}>
        <ItemCard
          imageName={"WomenNikeShoes"}
          title={"Women’s Nike Shoes"}
          price={"59"}
        />
        <ItemCard
          size="secondary"
          imageName={"headphones"}
          title={"Headphones"}
          price={"59"}
        />
        <ItemCard
          size="secondary"
          imageName={"labtops"}
          title={"Laptops"}
          price={"59"}
        />
        <ItemCard
          size="secondary"
          imageName={"heals"}
          title={"heals"}
          price={"59"}
        />
        <ItemCard
          size="secondary"
          imageName={"watchs"}
          title={"Smart Watchs"}
          price={"59"}
        />
        <ItemCard imageName={"lighting"} title={"Pendant lamp"} price={"59"} />
        <ItemCard
          size="secondary"
          imageName={"phones"}
          title={"Iphones"}
          price={"59"}
        />
        <ItemCard
          size="secondary"
          imageName={"sunGlasses"}
          title={"Sung Glasses"}
          price={"59"}
        />
      </Section>
    </main>
  );
}

import Divider from "./ui/divider/divider";
import Header from "./ui/header/header";
import Section from "./ui/layout/section";
import MainSection from "./ui/mainSection/mainSection";

export default function Home() {
  return (
    <>
      <main className="">
        <Section>
          <Header />
        </Section>
        <Divider />
        <Section>
          <MainSection />
        </Section>
        <Divider />
      </main>
    </>
  );
}

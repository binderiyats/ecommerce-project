import { HeroSection } from "../components/Home/HeroSection";
import { Partners } from "../components/Home/Partners";
import { PopularProducts } from "../components/Home/PopularProducts";
import { SaleProduct } from "../components/Home/SaleProduct";
import { SpecialAndNews } from "../components/Home/SpecialAndNews";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <PopularProducts />
      <SaleProduct />
      <SpecialAndNews />
      <Partners />
    </>
  );
};

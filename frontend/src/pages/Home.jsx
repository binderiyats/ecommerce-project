import { LogIn } from "../components/global/LogIn";
import { HeroSection } from "../components/Home/HeroSection";
import { PopularProducts } from "../components/Home/PopularProducts";
import { SaleProduct } from "../components/Home/SaleProduct";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <PopularProducts />
      <SaleProduct />
      <LogIn />
    </>
  );
};

import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const useCart = () => {
  const { setShow, products, setProducts } = useContext(CartContext);

  const showCart = () => setShow(true);
  const closeCart = () => setShow(false);

  const addProduct = (product) => {
    const newProducts = [...products];

    if (products.length === 0) newProducts.push({ ...product, count: 1 });

    for (let i = 0; i < products.length; i++) {
      if (products[i].title === product.title) newProducts[i].count++;
      else newProducts.push({ ...product, count: 1 });
    }

    setProducts(newProducts);
  };

  return { showCart, closeCart, addProduct };
};

import "../../styles/components/popularProducts.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Products } from "../../data/products";
import { Categories } from "../../data/categories";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useCart } from "../../hooks/useCart";

const CategoryItem = ({ category, currentCategory }) => {
  return (
    <Link
      to={category.link}
      className={`category-item primary-color ${
        currentCategory === category.title.toLowerCase() ? "active" : ""
      }`}
    >
      {category.title}
    </Link>
  );
};

const ProductItem = ({ product }) => {
  const { addProduct, showCart } = useCart();

  return (
    <div className="product-item">
      {product.sale && (
        <div className="item-sale primary-color secondary-bg">
          Sale {product.sale}% off
        </div>
      )}

      <div className="picture">
        <img src={`./images/${product.imageUrl}`} alt={product.title} />
      </div>

      <div className="info">
        <div className="content">
          <Link to="#" className="primary-color">
            {product.title}
          </Link>
          <p>{product.brand}</p>
          <h4>${product.price}</h4>
        </div>
        <div
          className="add-cart-btn"
          onClick={() => {
            addProduct(product);
            showCart();
          }}
        >
          <RiShoppingCart2Line />
        </div>
      </div>
    </div>
  );
};

export const PopularProducts = () => {
  const location = useLocation();
  const [categories, setCategories] = useState(Categories);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [products, setProducts] = useState(Products);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    if (!searchParams.has("category")) {
      setCurrentCategory("all");

      setProducts(Products);
    } else {
      setCurrentCategory(searchParams.get("category"));
      setProducts(
        Products.filter((product) => {
          if (product.category.includes(searchParams.get("category")))
            return product;
        })
      );
    }
  }, [location]);

  return (
    <div className="popular-products container">
      <div className="header">
        <h3 className="primary-color">Popular Products</h3>
        <div className="categories">
          {categories.map((category, index) => {
            return (
              <CategoryItem
                key={`category-item-${index}`}
                category={category}
                currentCategory={currentCategory}
              />
            );
          })}
        </div>
      </div>
      <div className="products">
        {products.map((product, index) => {
          return <ProductItem key={`product-${index}`} product={product} />;
        })}
      </div>
    </div>
  );
};

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../components/global/Breadcrumb";

export const SingleProduct = () => {
  const { id } = useParams();
  const [breadcrumbItems, setBreadcrumbItems] = useState([
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
  ]);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8000/products/${id}`);
      setBreadcrumbItems([
        ...breadcrumbItems.slice(0, 2),
        { name: response.data.name },
      ]);
      setProduct(response.data);
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Breadcrumb {...{ breadcrumbItems }} />
    </>
  );
};

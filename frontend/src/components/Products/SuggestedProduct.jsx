import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { productData } from "../../static/data";
import styles from "../../styles/styles";
import ProductCard from "../Route/ProductCard/ProductCard";
import axios from "axios";

const SuggestedProduct = ({ data }) => {
  const { allProducts } = useSelector((state) => state.products);
  const [productData, setProductData] = useState();

  // //for product recommendation
  // const [userId, setUserId] = useState("");
  // const [productId, setProductId] = useState("");
  // const [rating, setRating] = useState("");
  // const [recommendations, setRecommendations] = useState([]);

  // useEffect(() => {
  //   if (userId) {
  //     axios.get(`/recommendations/${userId}`).then((response) => {
  //       setRecommendations(response.data);
  //     });
  //   }
  // }, [userId]);

  // const handleRate = () => {
  //   axios.post("/rate", { userId, productId, rating }).then(() => {
  //     setUserId("");
  //     setProductId("");
  //     setRating("");
  //   });
  // };

  useEffect(() => {
    const d =
      allProducts && allProducts.filter((i) => i.category === data.category);
    setProductData(d);
  }, []);

  return (
    <div>
      {data ? (
        <div className={`p-4 ${styles.section}`}>
          <h2
            className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}
          >
            Related Product
          </h2>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
            {productData &&
              productData.map((i, index) => (
                <ProductCard data={i} key={index} />
              ))}
          </div>
        </div>
      ) : null}

      <div>
        
      </div>
    </div>
  );
};

export default SuggestedProduct;

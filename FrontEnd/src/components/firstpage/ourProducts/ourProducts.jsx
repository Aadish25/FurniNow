import styles from "./sProducts.js";
import Product from "./products.jsx";
import { Link } from "react-router-dom";
import { getProduct } from "../../../services";
import Backdrop from "@mui/material/Backdrop";
import { useState, useEffect } from "react";
import LoadingScreen from "../../../loading/loading.jsx";

const OurProducts = () => {
  const [products, setProducts] = useState([]);
  // const JWT_TOKEN = localStorage.getItem("SavedToken");
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const list = await getProduct();
        setProducts(list.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  let filtered = products.slice(0, 8);
  return (
    <>
      {filtered.length == 0 ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <LoadingScreen/>
          {/* <CircularProgress color="inherit" /> */}
        </Backdrop>
      ) : (
        <div className="container" style={styles.container}>
          <h1 style={styles.h1}>Our Products</h1>
          <br />
          {}
          <div className="items" style={styles.item}>
            {filtered.map((item, index) => {
              const id = item._id;
              return (
                <Product
                  key={index}
                  id={id}
                  title={item.title}
                  category={item.category}
                  price={item.price}
                  discount={item.discount}
                  newItem={item.newItem}
                  image={item.image}
                />
              );
            })}
          </div>
          <Link to={`/home/shop/${"all"}`}>
            {" "}
            <button style={styles.btn} className="btn">
              Show More
            </button>{" "}
          </Link>
        </div>
      )}
    </>
  );
};
export default OurProducts;

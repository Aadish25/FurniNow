import { useState } from "react";
import styles from "./sProducts.js";
import { useDispatch} from "react-redux";
import "./responsive.css";
import { handleClick } from "../../../reducers/snackbar/snackbar.js";
// import { getProduct } from "../../../services";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
// import { add } from "../../../reducers/cart/cart.js";
import { addToCart, getCart } from "../../../services/index.js";
import { add} from "../../../reducers/cart/cart.js";

const Product = ({ id, title, category, price, discount, newItem, image }) => {
  const dispatch = useDispatch();
  const [isHover, setHover] = useState(false);
  function handleHover() {
    setHover(!isHover);
  }
  
  async function getList() {
    try {
      const response = await getCart();
      // console.log(response.data.data);
      dispatch(add(response.data.data));
      // dispatch(fetchCart());
    } catch (error) {
      console.log(error);
    }
  }
  async function addCart(id) {
    try {
      const data={
        "productID":id,
      }
      await addToCart(data);
      getList();
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(useSelector((state)=>state.item.value));
  return (
    <>
      <div
        className="main"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        style={styles.main}
      >
        <div className="image">
          <img id="img" style={styles.img} src={image[0]} alt="" />
        </div>
        <div className="content" style={styles.content}>
          <h3 style={styles.h3}>{title}</h3>
          <p style={styles.p}>{category}</p>
          <div className="price" style={styles.price}>
            <p style={styles.price.p}>Rs {price - (price * discount) / 100}</p>
            <p style={styles.price.p1}>Rs {price}</p>
          </div>
        </div>
        <div
          className="circle"
          style={{
            ...styles.circle,
            backgroundColor: newItem
              ? "rgba(46, 193, 172, 1)"
              : "rgba(233, 113, 113, 1)",
          }}
        >
          {newItem ? "new" : discount + "%"}
        </div>
        <div
          className="hoverBox"
          style={{ ...styles.hoverBox, display: isHover ? "flex" : "none" }}
        >
          {}
          <button
            style={styles.button}
            onClick={() => {
              addCart(id);
              dispatch(
                handleClick({
                  message: "Added to Cart!!!",
                  severity: "success",
                })
              );
            }}
          >
            Add to cart
          </button>
          <div className="icons" style={styles.icons}>
            <p style={styles.icons.p}>
              <i className="fa-solid fa-share-nodes"></i> Share
            </p>
            <p style={styles.icons.p}>
              <i className="fa-solid fa-right-left"></i>Compare
            </p>
            <p style={styles.icons.p}>
              <i className="fa-regular fa-heart"></i> Like
            </p>
          </div>
          <Link to={`/home/shop/singlePage/${id}`}>
            {" "}
            <Button variant="contained">See Details</Button>{" "}
          </Link>
        </div>
      </div>
    </>
  );
};
export default Product;

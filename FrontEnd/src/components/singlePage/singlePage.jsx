// import { useLocation } from 'react-router-dom/dist/dom';
import styles from "./stylePage.js";
import { useParams } from "react-router-dom";
// import products from "../shop/products.js";
import { useDispatch } from "react-redux";
// import { add } from "../../reducers/cart/cart.js";
// import { handleClick } from "../../reducers/snackbar/snackbar.js";
import { useEffect, useState } from "react";
import { addToCart, getCart, getProductById } from "../../services/index.js";
// import { addProduct } from "../../reducers/singlePage/singlePage.js";
// import { useLocation } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import { add } from "../../reducers/cart/cart.js";
import { handleClick } from "../../reducers/snackbar/snackbar.js";
import LoadingScreen from "../../loading/loading.jsx";
import OurProducts from "../firstpage/ourProducts/ourProducts.jsx";
// import Button from '@mui/material/Button';

export default function SinglePage() {
  const dispatch = useDispatch();
  let[quantity,setQuantity]=useState(1);
  const[item,setItem]=useState([]);
  const { id } = useParams();
  async function getSingleProduct()
  {
    try {
      const response= await getProductById(id);
      setItem(response.data.data);
    } catch (error) {
      console.log(error);
    }
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
        "quantity":quantity
      }
      await addToCart(data);
      getList();
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getSingleProduct();
  },[]);
  return (
    <>
    {item.length==0?<Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <LoadingScreen/>
      </Backdrop>:
    <div className="box" style={styles.box}>
      <div className="container" style={styles.container}>
        <div className="miniBox" style={styles.miniBox}>
          <div className="sideImage" style={styles.sideImg}>
            {item.image.map((a, index) => {
              return (
                <div key={index} className="imgBox" style={styles.imgBox}>
                  <img style={styles.pic} src={a} alt="" />
                </div>
              );
            })}
          </div>
          <div className="mainImage">
            <img style={styles.mImg} src={item.image[0]} alt="" />
          </div>
        </div>
        <div className="contentBox" style={styles.contentBox}>
          <div className="content" style={styles.content}>
            <h1 style={styles.h1}>{item.title}</h1>
            <p style={styles.p}>Rs: {parseInt(item.price) -
                            (parseInt(item.price) * parseInt(item.discount)) /
                              100}</p>
            <p style={styles.h1}>{item.rating}/5.0</p>
            <p style={styles.h1}>{item.description}</p>
            <p style={styles.h1}>Size : {item.size}</p>
            <div className="btn" style={styles.btn}>
              <div className="count" style={styles.count}>
                <button style={styles.button} onClick={() =>{ if(quantity>1){setQuantity(quantity - 1)}}}>-</button>
                <p style={styles.h1}>{quantity}</p>
                <button style={styles.button} onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <div className="cart" style={styles.cart}>
                {/* {console.log(product.quantity)} */}
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
                  Add to Cart
                </button>
              </div>
              <div className="cart" style={styles.cart}>
                <button style={styles.button}>Compare</button>
              </div>
            </div>
          </div>
          <div className="subContent" style={styles.subContent}>
            <p>SKU : {item._id}</p>
            <p>Category : {item.category}</p>
            <p>
              Share :{" "}
              <span>
                <i className="fa-brands fa-facebook"></i>
              </span>{" "}
              <span>
                <i className="fa-brands fa-instagram"></i>
              </span>{" "}
              <span>
                <i className="fa-brands fa-twitter"></i>{" "}
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
}
<OurProducts/>
    </>

  );
}

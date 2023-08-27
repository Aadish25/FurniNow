import styles from "./scart.js";
import { useDispatch, useSelector } from "react-redux";
import { handleClose } from "../../reducers/dialog/dialog.js";
import Button from "@mui/material/Button";
import { deleteItem, editCart, getCart } from "../../services";
import { add, fetchCart } from "../../reducers/cart/cart.js";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function CustomizedDialogs() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.box.value);
  const cartList = useSelector((state) => state.item.value);
  useEffect(() => {
    dispatch(fetchCart());
  }, []);
  async function itemDelete(id) {
    const data = {
      productID: id,
    };
    await deleteItem(data);
    const response = await getCart();
    dispatch(add(response.data.data));
  }
  async function editItem(id) {
    const data = {
      productID: id,
    };
    await editCart(data);
    const response = await getCart();
    dispatch(add(response.data.data));
  }
  let sum = 0;
  return (
    open && (
      <div
        className="container"
        style={{
          height: cartList[0].length === 0 ? "auto" : "80vh",
          ...styles.container,
        }}
        onMouseLeave={() => dispatch(handleClose())}
      >
        {cartList[0].map((temp) => {
          sum +=
            (parseInt(temp.detail.price) -
              (parseInt(temp.detail.price) * parseInt(temp.detail.discount)) /
                100) *
            temp.number;
        })}
        <div className="upper" style={styles.upper}>
          <h3>Shopping Cart</h3>
          <img
            style={{ color: "rgba(159, 159, 159, 1)" }}
            onClick={() => dispatch(handleClose())}
            src="src\assets\Close.svg"
            alt=""
          />
        </div>
        <div className="empty" style={styles.empty}>
          {cartList[0].length === 0 && "Cart is Empty"}
        </div>
        {cartList[0].length != 0 && (
          <div className="main" style={styles.main}>
            <ul style={styles.ul}>
              {cartList[0].map((temp, index) => (
                <li key={index}>
                  <div className="prod" style={styles.prod}>
                    <img
                      src={temp.detail.image[0]}
                      alt=""
                      style={{ height: "100px", width: "100px" }}
                    />
                    <div
                      className="content"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <h5>{temp.detail.title}</h5>
                      <p>
                        {temp.number}X{" "}
                        <span style={{ color: "rgba(184, 142, 47, 1)" }}>
                          {" "}
                          Rs.
                          {parseInt(temp.detail.price) -
                            (parseInt(temp.detail.price) *
                              parseInt(temp.detail.discount)) /
                              100}
                        </span>
                      </p>
                    </div>
                    <i
                      className="fa-regular fa-square-minus"
                      onClick={() => editItem(temp.detail._id)}
                    ></i>
                    <i
                      className="fa-solid fa-trash"
                      onClick={() => itemDelete(temp.detail._id)}
                    ></i>
                  </div>
                  <br />
                </li>
              ))}
            </ul>
            <div className="total" style={styles.total}>
              <h3>SubTotal </h3>
              <span
                style={{
                  color: "rgba(184, 142, 47, 1)",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                }}
              >
                Rs. {sum}
              </span>
            </div>
          </div>
        )}
        <br />
        <div className="btn" style={styles.btn}>
          <Link to={"/home/cart"}>
            {" "}
            <Button
              style={{
                borderRadius: "60px",
                color: "black",
                border: "1px solid black",
              }}
              variant="outlined"
            >
              Cart
            </Button>{" "}
          </Link>
          <Link to="/home/checkout">
            <Button
              style={{
                borderRadius: "60px",
                color: "black",
                border: "1px solid black",
              }}
              variant="outlined"
            >
              Checkout
            </Button>
          </Link>
          <Button
            style={{
              borderRadius: "60px",
              color: "black",
              border: "1px solid black",
            }}
            variant="outlined"
          >
            Comparison
          </Button>
        </div>
      </div>
    )
  );
}

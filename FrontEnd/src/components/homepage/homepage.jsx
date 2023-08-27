import { Outlet, Link } from "react-router-dom";
import styles from "./styleHome.js";
import Cart from "../Cart/cart.jsx";
import { Typography } from "@mui/material";
import logopic from "../../assets/logo.svg";
import "./responsive.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { handleClickOpen } from "../../reducers/dialog/dialog";
import { handleFun } from "../../reducers/shop/shop.js";
import { getCart } from "../../services/index.js";
import { add } from "../../reducers/cart/cart.js";
import { handleClick } from "../../reducers/snackbar/snackbar.js";

const Homepage = () => {
  const dispatch = useDispatch();
  // const cartItems = useSelector((state) => state.item.value);
  // console.log("cartItems",cartItems);
  async function getList() {
    try {
      const response = await getCart();
      dispatch(add(response.data.data));
      // dispatch(fetchCart());
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="navBar" style={styles.navBar}>
        <div className="logo" style={styles.logo}>
          <Link to={"/home"} className="link" style={styles.link}>
            <img src={logopic} alt="logo" />
            <h1 style={styles.logo.h1}>FurniNow</h1>
          </Link>
        </div>

        <div className="navBtn" style={styles.navBtn}>
          <ul style={styles.navBtn.ul}>
            <Link to={"/home"} className="link" style={styles.link}>
              <li style={styles.navBtn.li}>Home</li>
            </Link>
            <Link
              to={`/home/shop/${"all"}`}
              className="link"
              style={styles.link}
            >
              <li
                style={styles.navBtn.li}
                onClick={() => dispatch(handleFun(1))}
              >
                Shop
              </li>
            </Link>
            <Link style={styles.link} to={"/home/cart"}>
              <li style={styles.navBtn.li}>Cart</li>
            </Link>
            <Link style={styles.link} to={"/home/contact"}>
              <li style={styles.navBtn.li}>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="navIcon" style={styles.navIcon}>
          <i className="fa-regular fa-user"> !</i>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-heart"></i>
          <i
            className="fa-solid fa-cart-shopping"
            onClick={() => {
              {
                dispatch(handleClickOpen());
              }
              getList();
            }}
          ></i>
        </div>
      </div>
      <Cart />

      <Outlet />
      <div className="outsideFooter" style={styles.outsideFooter}>
        <div className="footer" style={styles.outsideFooter.footer}>
          <div className="first" style={styles.outsideFooter.footer.first}>
            <h1 style={styles.outsideFooter.footer.first.h1}>Furni Now</h1>
            <Typography style={styles.outsideFooter.footer.first.p}>
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </Typography>
          </div>
          <div className="second" style={styles.outsideFooter.footer.second}>
            <Typography style={styles.outsideFooter.footer.first.p}>
              Links
            </Typography>
            <Link style={styles.link} to={"/home"}>
              <Typography style={styles.outsideFooter.footer.first.h1}>
                Home
              </Typography>
            </Link>
            <Link style={styles.link} to={`/home/shop/${"all"}`}>
              <Typography style={styles.outsideFooter.footer.first.h1}>
                Shop
              </Typography>
            </Link>
            <Link style={styles.link} to={"/home/cart"}>
              <Typography style={styles.outsideFooter.footer.first.h1}>
                Cart
              </Typography>
            </Link>
            <Link style={styles.link} to={"/home/contact"}>
              <Typography style={styles.outsideFooter.footer.first.h1}>
                Contact
              </Typography>
            </Link>
          </div>
          <div className="third" style={styles.outsideFooter.footer.third}>
            <Typography style={styles.outsideFooter.footer.first.p}>
              Help
            </Typography>
            <Typography style={styles.outsideFooter.footer.first.h1}>
              Payment Options
            </Typography>
            <Typography style={styles.outsideFooter.footer.first.h1}>
              Returns
            </Typography>
            <Typography style={styles.outsideFooter.footer.first.h1}>
              Privacy Policies
            </Typography>
          </div>
          <div className="forth">
            <Typography style={styles.outsideFooter.footer.first.p}>
              Newsletter
            </Typography>
            <br />
            <div
              className="text"
              style={styles.outsideFooter.footer.forth.text}
            >
              <TextField
                id="standard-basic"
                label="Enter Your Email Address"
                variant="standard"
              />
              <Button
                style={{backgroundColor:"black",color: "white" }}
                variant="text"
                onClick={()=>
                dispatch(handleClick({message:"Subscribed!!",severity:"success"}))}
              >
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
        <div className="subFooter" style={styles.outsideFooter.subFooter}>
          <Typography>2023 FurniNow. All rights reverved</Typography>
        </div>
      </div>
    </>
  );
};
export default Homepage;

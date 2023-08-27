import styles from "./style.js";
import Footer from "../shop/ShopFooter.jsx";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import { billing } from "../../services/index.js";
import { handleClick } from "../../reducers/snackbar/snackbar.js";
export default function CheckOut() {
  const dispatch=useDispatch();
  const cartList = useSelector((state) => state.item.value);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    city: "",
    pinCode: "",
    phone: "",
    email: "",
    info: "",
  });
  let sum = 0;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleOrder = async () => {
    try {
      const response = await billing(data);
      dispatch(
        handleClick({ message: response.data.message,severity: "success" })
      );
    } catch (error) {
      dispatch(
        handleClick({ message: error.response.data.message, severity: "error" })
      );
    }
  };
  return (
    <div>
      {cartList[0].map((temp) => {
        sum +=
          (parseInt(temp.detail.price) -
            (parseInt(temp.detail.price) * parseInt(temp.detail.discount)) /
              100) *
          temp.number;
      })}
      <div className="sop" style={styles.sop}>
        <div style={styles.heading}>
          <p style={{ fontSize: "250%", fontWeight: "bold" }}>CheckOut</p>
          <p className="sml" style={styles.sml}>
            Home {">"} Check Out
          </p>
        </div>
      </div>
      <div className="container" style={styles.container}>
        <div className="box" style={styles.box}>
          <div className="billing" style={styles.billing}>
            <h2>Billing Details</h2>
            <div className="name" style={styles.name}>
              <TextField
                id="outlined-basic"
                label="First Name"
                name="firstName"
                onChange={handleChange}
                variant="outlined"
                required
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                onChange={handleChange}
                name="lastName"
                variant="outlined"
                required
              />
            </div>
            <TextField
              id="outlined-basic"
              fullWidth="false"
              onChange={handleChange}
              name="country"
              label="Country/Region"
              variant="outlined"
              required
            />
            <TextField
              id="outlined-basic"
              fullWidth="false"
              onChange={handleChange}
              name="address"
              label="Street Address"
              variant="outlined"
              required
            />
            <TextField
              id="outlined-basic"
              fullWidth="false"
              onChange={handleChange}
              name="city"
              label="Town/City"
              variant="outlined"
              required
            />
            <TextField
              id="outlined-basic"
              fullWidth="false"
              onChange={handleChange}
              label="Pin Code"
              name="pinCode"
              variant="outlined"
              inputProps={{ maxLength: 6 }}
              required
            />
            <TextField
              id="outlined-basic"
              name="phone"
              onChange={handleChange}
              fullWidth="false"
              label="Phone Number"
              variant="outlined"
              inputProps={{ maxLength: 10 }}
              required
            />
            <TextField
              id="outlined-basic"
              fullWidth="false"
              onChange={handleChange}
              name="email"
              label="Email"
              variant="outlined"
              required
            />
            <TextField
              id="outlined-basic"
              onChange={handleChange}
              fullWidth="false"
              name="info"
              label="Additional Information"
              variant="outlined"
            />
          </div>
          <div className="details" style={styles.details}>
            <div className="total" style={styles.total}>
              <div className="first" style={styles.first}>
                <h3>Product</h3>
                <br />
                {cartList[0].map((temp, index) => (
                  <div className="titles" style={styles.titles} key={index}>
                    <p style={styles.title}>{temp.detail.title}</p>
                    <p>x</p>
                    <p>{temp.number}</p>
                  </div>
                ))}
                <p>Total</p>
              </div>
              <div className="second" style={styles.first}>
                <h3>SubTotal</h3>
                <br />
                {cartList[0].map((temp, index) => (
                  <div className="titles" style={styles.titles} key={index}>
                    <p style={styles.title}>
                      Rs.
                      {(parseInt(temp.detail.price) -
                        (parseInt(temp.detail.price) *
                          parseInt(temp.detail.discount)) /
                          100) *
                        temp.number}
                    </p>
                  </div>
                ))}
                <p style={styles.sum}>Rs. {sum}</p>
              </div>
            </div>
            <div>
              <ul>
                <li>Direct Bank Transfer</li>
                <br />
              </ul>
              <p style={styles.p}>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
              <br />
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Payment Method
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Direct Bank Transfer"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Direct Bank Transfer"
                    control={<Radio />}
                    label="Direct Bank Transfer"
                  />
                  <FormControlLabel
                    value="Cash On Delivery"
                    control={<Radio />}
                    label="Cash On Delivery"
                  />
                </RadioGroup>
              </FormControl>
              <br />
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>
              <br />
              <Button
                style={styles.btn}
                variant="outlined"
                onClick={handleOrder}
              >
                Place Order
              </Button>
              <br />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import { Button, TextField } from "@mui/material";
import Footer from "../shop/ShopFooter.jsx";
import styles from "./style.js";
import { useState } from "react";
import { contact } from "../../services/index.js";
import { useDispatch } from "react-redux";
import { handleClick } from "../../reducers/snackbar/snackbar.js";

export default function Contact() {
    const dispatch=useDispatch();
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    try {
      const response = await contact(data);
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
      <div className="sop" style={styles.sop}>
        <div style={styles.heading}>
          <p style={{ fontSize: "250%", fontWeight: "bold" }}>Contact</p>
          <p className="sml" style={styles.sml}>
            Home {">"} Contact
          </p>
        </div>
      </div>
      <div className="container" style={styles.container}>
        <div className="line" style={styles.line}>
          <h2>Get In Touch With Us</h2>
          <p style={styles.p}>
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="detail" style={styles.detail}>
          <div className="info" style={styles.info}>
            <div className="address" style={styles.address}>
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h3>Address</h3>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <br />
            <div className="phone" style={styles.address}>
              <i className="fa-solid fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <br />
            <div className="workingTime" style={styles.address}>
              <i className="fa-solid fa-clock"></i>
              <div>
                <h3>Working Time</h3>
                <p>
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
          <div className="form" style={styles.form}>
            <div>
              <label htmlFor="outlined-basic">Your name</label>
              <TextField
                id="outlined-basic"
                fullWidth
                name="name"
                placeholder="abc"
                onChange={handleChange}
                variant="outlined"
                required
              />
            </div>
            <div>
              <label htmlFor="outlined-basic">Email address</label>
              <TextField
                id="outlined-basic"
                fullWidth
                name="email"
                placeholder="abc@def.com"
                onChange={handleChange}
                variant="outlined"
                required
              />
            </div>
            <div>
              <label htmlFor="outlined-basic">Subject</label>
              <TextField
                id="outlined-basic"
                fullWidth
                name="subject"
                onChange={handleChange}
                placeholder="This is an optional"
                variant="outlined"
              />
            </div>
            <div>
              <label htmlFor="outlined-basic">Message</label>
              <TextField
                id="outlined-basic"
                placeholder="Hi! i'd like to ask about"
                fullWidth
                onChange={handleChange}
                name="message"
                variant="outlined"
                required
                multiline
                rows={3}
              />
            </div>
            <Button style={styles.btn} onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

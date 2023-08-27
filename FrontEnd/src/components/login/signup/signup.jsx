import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, Navigate } from "react-router-dom";
import styles from "./signup.js";
import { authSignup } from "../../../services/index.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleClick } from "../../../reducers/snackbar/snackbar.js";

export default function SignUp() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    password_repeat: "",
  });
  const dispatch = useDispatch();
  async function register(e) {
    try {
      e.preventDefault();
      const response = await authSignup(data);
      setUser(response.data);
      dispatch(
        handleClick({ message: response.data.msg+"  Now Please Login!!!", severity: "success" })
      );
    } catch (error) {
      dispatch(
        handleClick({ message: error.response.data.msg, severity: "error" })
      );
    }
  }
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div style={styles.signUpForm}>
      {}
      {}
      <form>
        <h1>Sign Up</h1>
        <TextField
          id="standard-required"
          label="UserName"
          name="username"
          variant="standard"
          onChange={handleChange}
        />
        <br />
        <TextField
          id="standard-required"
          name="email"
          label="Email"
          variant="standard"
          onChange={handleChange}
        />
        <br />
        <TextField
          id="standard-password-input"
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          onChange={handleChange}
        />
        <br />
        <TextField
          id="standard-required"
          name="password_repeat"
          label="Confirm Password"
          variant="standard"
          onChange={handleChange}
        />
      </form>
      <Button variant="contained" onClick={register}>
        Sign Up
      </Button>
      <p>
        Already have an account?{" "}
        <Link style={styles.link} to={`/`}>
          Login
        </Link>
      </p>
      {user && <Navigate to="/" replace={true} />}
    </div>
    
  );
}

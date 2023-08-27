import styles from "./login.js";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { authLogin } from "../../../services";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { handleClick } from "../../../reducers/snackbar/snackbar.js";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  async function login(e) {
    try {
      e.preventDefault();
      const response = await authLogin(data);
      setUser(response.data);
      const token = response.data.token;
      localStorage.setItem("SavedToken", token);
      dispatch(
        handleClick({ message: response.data.msg, severity: "success" })
      );
    } catch (error) {
      dispatch(
        handleClick({ message: error.response.data.msg, severity: "error" })
      );
    }
  }
  return (
    <div className="loginForm" style={styles.loginForm}>
      <form>
        <h1>Welcome</h1>
        <TextField
          id="standard-required"
          label="Email"
          name="email"
          onChange={handleChange}
          variant="standard"
        />
        <br />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          autoComplete="current-password"
          variant="standard"
        />
      </form>
      <Button variant="contained" onClick={login}>
        Log in
      </Button>
      <p>
        New User?{" "}
        <Link style={styles.link} to={`signup`}>
          Create an account
        </Link>
      </p>
      {user && <Navigate to="/home" replace={true} />}
      <Link style={styles.link} to={"/home"}>
        <p>Skip For Now!!!</p>
      </Link>
    </div>
  );
}

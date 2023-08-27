import styles from "./layout.js";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import "./layout.css";
import login from "../../../assets/loginfinal.jpg";
import signUp from "../../../assets/signfinal.jpg";
import logopic from "../../../assets/logo.svg";
export default function Layout() {
  const { pathname } = useLocation();
 
  return (
    <section>
      <div className="air air1"></div>
      <div className="air air2"></div>
      <div className="air air3"></div>
      <div className="air air4"></div>

      <div className="main" style={styles.main}>
        <div className="heading"  style={styles.heading}>
          <div className="box" style={styles.box}>
            <img className="logoLayout" src={logopic} alt="logo" />
            <h1>FurniNow</h1>{" "}
          </div>
          <p>
            Make Your House a Home with FurniNow - Where Every Piece Matters!
          </p>
        </div>
        <div className="container" style={styles.container}>
          <div className="imgBack" style={styles.imgBack}>
            <img
              style={styles.img}
              className="img"
              src={pathname === "/" ? login : signUp}
              alt=""
            />
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
}

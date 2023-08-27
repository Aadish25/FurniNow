import { Link } from "react-router-dom";
// import products from "../../shop/products.js";
// import {useDispatch } from "react-redux";
import styles from "./sbrowse.js";
// import { handleFun } from "../../../reducers/shop/shop.js";
// import { list } from "../../../reducers/products/products.js";
import pic1 from "../../../assets/Sofa.jpg";
import pic2 from "../../../assets/Bed.jpg";
import pic3 from "../../../assets/Table and Chair.jpg";

const Browse = () => {  
  // const dispatch = useDispatch();
  const data=[
    {
      img:pic1,
      title:"Sofa",
    },
    {
      img:pic2,
      title:"Bed",
    },{
      img:pic3,
      title:"Chair",
    }
  ]
  return (
    <div className="container" style={styles.container}>
      <h1 style={styles.h1}>Browse The Range</h1>
      <p style={styles.p}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <br />
      <div style={styles.items} className="items">
        {data.map((item,index)=>{
          return(
          <div key={index} style={styles.element}>
          <Link to={`/home/shop/${item.title}`} ><img style={{borderRadius:"15px"}} src={item.img} alt="" height={"470px"} width={"381px"}/> </Link>
          <h2 style={styles.h2}>{item.title}</h2>
        </div>  
        )})}
      </div> 
    </div>
  );
};
export default Browse;

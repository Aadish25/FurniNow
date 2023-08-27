import styles from "./style.js";
import Footer from "../shop/ShopFooter.jsx";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import { addToCart, deleteItem, getCart } from "../../services/index.js";
import { add } from "../../reducers/cart/cart.js";
import { Link } from "react-router-dom";
// import OurProducts from "../firstpage/ourProducts/ourProducts.jsx";
export default function CartPage() {
  const dispatch=useDispatch();
  const cartList = useSelector((state) => state.item.value);
  let sum=0;
  async function itemDelete(id) {
    const data = {
      productID: id,
    };
    await deleteItem(data);
    getList();
  }
  async function getList() {
    try {
      const response = await getCart();
      dispatch(add(response.data.data));
    } catch (error) {
      console.log(error);
    }
  }
  async function addCart(id,quantity) {
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
  function handleChange(e,id)
  {
    addCart(id,e.target.value)    
  }
  return (
    <div>
      <div className="sop" style={styles.sop}>
        <div>
          <p style={{ fontSize: "250%", fontWeight: "bold" }}>Cart</p>
          <p className="sml" style={styles.sml}>
            Home {">"} Cart
          </p>
        </div>
      </div>
      <div className="box" style={styles.box}>
        <div className="container" style={styles.container}>
          <div className="header" style={styles.header}>
            <h1> </h1>
            <h3>Product</h3>
            <h1> </h1>
            <h3>Price</h3>
            <h1> </h1>
            <h3>Quantity</h3>
            <h1> </h1>
            <h3>Subtotal</h3>
            <h1> </h1>
          </div>
          <div className="items" style={styles.items}>
            {cartList[0].map((temp, index) => (
              <div className="list" style={styles.list} key={index}>
                <img style={styles.image} src={temp.detail.image[0]} alt="" />
                <h3>{temp.detail.title}</h3>
                <h3> </h3>
                <h3>
                  Rs.
                  {parseInt(temp.detail.price) -
                    (parseInt(temp.detail.price) *
                      parseInt(temp.detail.discount)) /
                      100}
                </h3>
                <h3> </h3>
                <input style={styles.quantity} type="number"  defaultValue={temp.number} min={1} onChange={(e)=>handleChange(e,temp.detail._id)} />
                {/* <h3>{temp.number}</h3> */}
                <h3> </h3>
                <h3>
                  {(parseInt(temp.detail.price) -
                    (parseInt(temp.detail.price) *
                      parseInt(temp.detail.discount)) /
                      100) *
                    temp.number}
                </h3>
                <i
                      className="fa-solid fa-trash"
                      onClick={() => itemDelete(temp.detail._id)}
                    ></i>
              </div>
            ))}
          </div>
        </div>
        <div className="total" style={styles.total}>
        {cartList[0].map((temp) => {
          sum +=
            (parseInt(temp.detail.price) -
              (parseInt(temp.detail.price) * parseInt(temp.detail.discount)) / 100) *
            temp.number;
        })}
          <h1>Cart Totals</h1>
          <h4>Total: Rs {sum} </h4>
          <Link to="/home/checkout"><Button style={styles.btn} variant="outlined">Check Out</Button></Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

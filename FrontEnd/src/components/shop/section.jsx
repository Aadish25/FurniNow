import styles from "./ssection";
import Product from "../firstpage/ourProducts/products";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { handleFun } from "../../reducers/shop/shop";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../reducers/products/products";
import { useEffect } from "react";
import { fetchCart } from "../../reducers/cart/cart";
import Backdrop from "@mui/material/Backdrop";
import LoadingScreen from "../../loading/loading";
let filtered = [];
export default function Section() {
  const dispatch = useDispatch();
  let itemList = useSelector((state) => state.product.value);
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCart());
  }, []);
  const { category } = useParams();
  // console.log("itemList",itemList);
  if (category !== "all") {
    // console.log("IN itemList",itemList);
    itemList = itemList.filter((a) => a.category == category);
    // console.log("after",itemList);
  }
  const handleChange = (_, value) => {
    dispatch(handleFun(value));
  };
  const page = useSelector((state) => state.page.value);
  const num = useSelector((state) => state.count.value);
  let length = itemList.length;
  let low = 0;
  let high = 0;
  if (num > 0 && num < itemList.length) {
    length = num;
    low = (page - 1) * 8;
    if (low + 8 <= num) {
      high = low + 8;
    } else {
      high = num;
    }
  } else {
    low = (page - 1) * 8;
    high = low + 8;
  }
  filtered = itemList.slice(low, high);
  return (
    <>
      {filtered.length == 0 ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <LoadingScreen/>
        </Backdrop>
      ) : (
        <div className="box" style={styles.box}>
          <div className="container" style={styles.container}>
            {filtered.map((item, index) => {
              const id = item._id;
              return (
                <Product
                  key={index}
                  id={id}
                  title={item.title}
                  category={item.category}
                  price={item.price}
                  discount={item.discount}
                  newItem={item.newItem}
                  image={item.image}
                />
              );
            })}
          </div>
          <div className="container" style={styles.container}>
            <Stack spacing={2}>
              <Pagination
                onChange={handleChange}
                count={Math.ceil(length / 8)}
                variant="outlined"
                color="primary"
              />
            </Stack>
          </div>
          <br />
        </div>
      )}
    </>
  );
}

import  {useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import products from "./products";
// import axios from "../../axios/axios";
import { Button, TextField, Typography } from "@mui/material";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import { useSelector, useDispatch } from "react-redux";
import ViewDayOutlinedIcon from "@mui/icons-material/ViewDayOutlined";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import styler from "./Stylefilter";
import { changeCount } from "../../reducers/filterValue/filterValue";
import { handleFun } from "../../reducers/shop/shop";
import { fetchProducts, list } from "../../reducers/products/products";

export default function ShopFilter() {
  const [sort, setSort] = useState(1);
  const num = useSelector((state) => state.count.value);
  const page = useSelector((state) => state.page.value);
  const dispatch = useDispatch();
  let itemList=useSelector((state)=>state.product.value);
  useEffect(() => {
    dispatch(fetchProducts());
  },[]);
  let length = itemList.length;
  let high = page * 8;
  let low = high - 8;

  if (high > num) {
    high = num;
  }
  const handleChange2 = (event) => {
    let value = event.target.value;
    if (value == "") {
      dispatch(changeCount(40));
      dispatch(handleFun(1));
    }
    if (value > length) {
      value = length;
      setTimeout(() => {
        alert("Value Exceeded!! Showing our all Products.");
      }, 1000);
    }
    if (value > 0 && value <= length) {
      dispatch(changeCount(value));
      dispatch(handleFun(1));
    }
  };
  const handleChange = (event) => {
    setSort(event.target.value);
    dispatch(handleFun(1));
  };
  const sortedProducts = itemList
    .slice()
    .sort(
      (a, b) =>
        a.price -
        (a.price * a.discount) / 100 -
        (b.price - (b.price * b.discount) / 100)
    );
  const sortedProductsDescending = itemList
    .slice()
    .sort(
      (a, b) =>
        b.price -
        (b.price * b.discount) / 100 -
        (a.price - (a.price * a.discount) / 100)
    );
      // console.log(itemList);
      // console.log(sortedProducts);
      // console.log(sortedProductsDescending);
  return (
    <>
      <Box className="mBox" style={styler.mBox}>
        <Typography>
          <Button style={{ color: "black" }}>
            <TuneRoundedIcon /> Filter
          </Button>
          <Button style={{ color: "black" }}>
            <GridViewRoundedIcon />
          </Button>
          <Button style={{ color: "black" }}>
            <ViewDayOutlinedIcon />
          </Button>
        </Typography>
        <Typography>
          Showing {low}-{high} of {length} results
        </Typography>
        <Typography
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          Show{" "}
          <TextField
            placeholder={num}
            onChange={handleChange2}
            id="SortVal"
            variant="outlined"
            style={{ width: "25%" }}
          />
        </Typography>

        <FormControl className="sortby" style={{ width: "10%" }}>
          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            label="Sort By"
            onChange={handleChange}
          >
            <MenuItem value={1} onClick={() => dispatch(list(itemList))}>
              Default
            </MenuItem>
            <MenuItem value={2} onClick={() => dispatch(list(sortedProducts))}>
              Price- Low to High
            </MenuItem>
            <MenuItem
              value={3}
              onClick={() => dispatch(list(sortedProductsDescending))}
            >
              Price- High to Low
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

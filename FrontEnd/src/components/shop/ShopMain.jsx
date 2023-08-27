import ShopTitle from "./ShopTitle";
import ShopFooter from "./ShopFooter";
import ShopFilter from "./ShopFilter";
import Shop from "./section";

export default function ShopMain() {
  return (
    <>
      <ShopTitle />
      <ShopFilter />
      <br />
      <Shop />
      <ShopFooter />
    </>
  );
}

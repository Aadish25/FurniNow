import styler from "./StyleShopTitle";
export default function ShopTitle() {
  return (
    <div className="sop" style={styler.sop}>
      <div>
        <p style={{ fontSize: "250%", fontWeight: "bold" }}>Shop</p>
        <p className="sml" style={styler.sml}>
          Home {">"} Shop
        </p>
      </div>
    </div>
  );
}

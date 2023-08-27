import styles from "./scarousel.js";
import Browse from "../browse/browse.jsx";
import OurProduct from "../ourProducts/ourProducts.jsx";
import SubCarousel from "../subcarousel/subCarousel.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cImg1 from "../../../assets/Crousel-1.svg";
import cImg2 from "../../../assets/Crousel-2.jpg";
import cImg3 from "../../../assets/Crousel-3.jpg";

import { Carousel } from "react-responsive-carousel";
import Content from "./content.jsx";
import "./responsive.css";
const image = [cImg1, cImg2, cImg3];
const DemoCarousel = () => {
  return (
    <>
      <Carousel
        style={styles.container}
        showArrows={false}
        showThumbs={false}
        autoPlay={true}
        showStatus={false}
        infiniteLoop={true}
        interval={2000}
        dynamicHeight={false}
      >
        {image.map((item, i) => (
          <div key={i}>
            <img style={{ objectFit: "cover" }} height={650} src={item} />
            <Content />
          </div>
        ))}
      </Carousel>
      <Browse />
      <OurProduct />
      <SubCarousel />
    </>
  );
};
export default DemoCarousel;

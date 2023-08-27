import styles from "./style.js";
import { Carousel } from "react-responsive-carousel";
import image from "../../../assets/subCarouselPics.js";
export default function subCarousel() {
  return (
    <div className="box" style={styles.box}>
      <div className="content" style={styles.content}>
        <h1 style={styles.h1}>50+ Beautiful rooms inspiration</h1>
        <p style={styles.p}>
          Our designer already made a lot of beautiful prototype of rooms that
          inspire you
        </p>
      </div>
      <div className="container" style={styles.container}>
        <Carousel
          showArrows={false}
          showThumbs={false}
          autoPlay={true}
          showStatus={false}
          infiniteLoop={true}
          interval={2000}
          dynamicHeight={false}
          width={"100%"}
        >
          {image.map((item, i) => (
            <div key={i}>
              <img style={{ objectFit: "cover", height: "400px" }} src={item} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

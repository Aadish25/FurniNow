import bg from "../../assets/ShopTitle.svg";
const styles = {
  sop: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "'Poppins', 'sans-serif'",
    padding: "6% 0%",
    backgroundImage: `url(${bg})`,
  },
  sml: {
    fontSize: "100%",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    gap:"25px",
    alignItems: "center",
    width: "100%",
    margin:"25px 0px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    gap: "15px",
    width: "70%",
  },
  header: {
    backgroundColor: "rgba(249, 241, 231, 1)",
    width: "100%",
    height: "40px",
    display: "grid",
    gridTemplateColumns: "repeat(9,1fr)",
    fontWeight: "500",
    fontFamily: "'Poppins', 'sans-serif'",
  },
  items: {
    width: "100%",
    display: "grid",
    gap: "15px",
    gridTemplateColumns: "repeat(1,1fr)",
    fontWeight: "500",
    fontFamily: "'Poppins', 'sans-serif'",
  },
  image: {
    height: "75px",
    width: "75px",
  },
  list: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(9,1fr)",
    fontWeight: "500",
    fontFamily: "'Poppins', 'sans-serif'",
  },
  total: {
    backgroundColor: "rgba(249, 241, 231, 1)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    fontWeight: "500",
    gap:"25px",
    fontFamily: "'Poppins', 'sans-serif'",
    height:"250px",
    width:"250px"
  },
  btn:{
    color:"black",
    border:" 1px solid black"
  },
  quantity:{
    height:"35px",
    width:"45px",
    textAlign:"center",
  }
};
export default styles;

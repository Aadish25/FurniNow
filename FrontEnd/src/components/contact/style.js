import bg from "../../assets/ShopTitle.svg";
const styles = {
  sop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Poppins', 'sans-serif'",
    padding: "6% 0%",
    backgroundImage: `url(${bg})`,
  },
  heading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  sml: {
    fontSize: "100%",
  },
  container:{
    margin:"35px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap:"25px",
    fontWeight: "500",
    fontFamily: "'Poppins', 'sans-serif'",
  },
  p:{
    color:"rgba(159, 159, 159, 1)",
  },
  line:{
    width:"45%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // gap:"25px",

  },
  detail:{
    display:"flex",
    justifyContent:"space-between",
    width:"55%"
  },
  info:{
    width:"25%",
  },
  address:{
    display:"flex",
    gap:"20px"
  },
  form:{
    width:"50%",
    display: "flex",
    gap:"25px",
    flexDirection: "column",
  },
  btn:{
    backgroundColor:"rgba(184, 142, 47, 1)",
    border:"1px solid transparent",
    color:"white",
    height:"50px",
    width:"200px",
    borderRadius:"5px"
  }
};
export default styles;

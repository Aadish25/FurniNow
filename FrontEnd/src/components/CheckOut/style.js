
import bg from "../../assets/ShopTitle.svg";
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin:"15px 0"
  },
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
  box: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "500",
    fontFamily: "'Poppins', 'sans-serif'",
    // gap:"45px",
    width:"70%"
  },
  billing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "40%",
    gap: "15px",
  },
  name: {
    display: "flex",
    gap: "15px",
  },
  details: {
    display: "flex",
    justifyContent: "flex-start",
    gap:"25px",
    // alignItems: "center",
    flexDirection: "column",
    width:"40%"
  },
  total: {
    display: "flex",
    justifyContent: "Space-between",
    // alignItems:"center",
    borderBottom:"1px solid rgba(217, 217, 217, 1)"
  },
  first: {
    display: "flex",
    flexDirection: "column",
    gap:"5px",
  },
  titles:{
    display:"flex",
    gap:"15px"
  },
  title:{
    color:"rgba(159, 159, 159, 1)"
  },
  sum:{
    color:"rgba(184, 142, 47, 1)",
    fontWeight:"700"
  },
  p:{
    color:"rgba(159, 159, 159, 1)",
    fontWeight:"300",
  },
  btn:{
    color:"black",
    border:" 1px solid black"
  },
};
export default styles;

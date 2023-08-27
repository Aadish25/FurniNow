const style = {
  container: {
    position:"fixed",
    overflow:"auto",
    top:"80px",
    right:"38px",
    width:"417px",
    zIndex:"500",
    backgroundColor:"rgba(255, 255, 255, 1)"
  },
  empty:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Poppins",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "36px",
    borderBottom: "0.1px solid black",
  },
  upper: {
    // padding: "25px",
    display: "flex",
    alignItems: "center",
    height:"100px",
    justifyContent: "space-evenly",
    fontFamily: "Poppins",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "36px",
    borderBottom: "0.1px solid black",
  },
  box: {
    position: "relative",
  },
  main:{
    fontFamily: "Poppins",
    marginTop:"15px",
    display: "flex",
    justifyContent: "center",
    gap:"25px",
    flexDirection: "column",
  },
  ul: {
    overflow:"auto",
    listStyleType: "none",
    height:"50vh",
    gap: "25px",
  },
  prod: {
    display: "flex",
    justifyContent: "space-evenly",
    gap: "25px",
  },
  total:{
    display:"flex",
    justifyContent:"space-evenly",
    borderBottom:"1px solid rgba(217, 217, 217, 1)"
  },
  btn:{
    display:"flex",
    alignItems:"center",
    justifyContent:"space-evenly"
  }
};
export default style;

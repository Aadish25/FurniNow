const styles = {
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection:"column"
  },
  heading:{
    fontFamily: "'Poppins', 'sans-serif'",
    fontSize:"20px"

  },
  box:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // flexDirection:"Column",
    gap:"5px",
    
    fontFamily: "'Poppins', 'sans-serif'",
    fontSize:"25px",
    color:"White"


  },
  container: {
    display: "flex",
    backgroundColor: "whitesmoke",
    // boxShadow: " 1px 1px 5px black",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
    width: "70%",
    border: "1px solid transparent",
    borderRadius: "25px",
  },
  imgBack: {
    height: "100%",
    backgroundColor: "rgb(64, 60, 101)",
    width: "80%",
    border: "1px solid transparent",
    borderTopLeftRadius: "25px",
    borderBottomLeftRadius: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: { width: "98%", height: "98%",borderTopLeftRadius: "25px",
  borderBottomLeftRadius: "25px",},  
};
export default styles;

const styles = {
  navBar: {
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    height: "80px",
    position:"fixed",
    zIndex:"2",
    alignItems: "center",
    justifyContent: "space-around",
  },
  link:{
    textDecoration:"none",
    color:"Black",
    display:"flex",
    gap:"5px"
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    gap: "5px",
    alignItems: "center",
    h1: {
      fontSize: "34px",
      margin: "0",
      fontFamily: "'Montserrat', 'sans-serif'",
    },
  },
  navBtn: {
    display: "flex",
    alignItems: "center",
    ul: {
      listStyleType: "none",
      display: "flex",
      padding: "0",
      gap: "25px",
      margin: "0",
    },
    li: {
      fontWeight: "500",
      fontFamily: "'Poppins', 'sans-serif'",
    },
  },
  navIcon: {
    display: "flex",
    alignItems: "center",
    gap: "25px",
  },
  outsideFooter: {
    width: "100%",
    borderTop: "1px solid black",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: "25px",
    footer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "100px",
      borderBottom: "1px solid black",
      first: {
        h1: {
          fontFamily: "'Poppins', 'sans-serif'",
          lineHeight: "300%",
        },
        p: {
          fontFamily: "'Poppins', 'sans-serif'",
          color: "rgba(159, 159, 159, 1)",
          fontWeight: "400",
        },
        width: "25%",
        display: "flex",
        flexDirection: "column",
      },
      second: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      },
      third: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      },
      forth: {
        text: {
          display: "flex",
          gap: "5px",
          TextField: {
            fontWeight: "800",
          },
        },
      },
    },
    subFooter: {
      fontFamily: "'Poppins', 'sans-serif'",
    },
  },
};
export default styles;

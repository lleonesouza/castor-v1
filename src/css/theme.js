// Day Theme
let dayColor = {
  one: "#E2E7FF",
  two: "#222D44",
  three: "#FFF8F0",
  four: "#1E1E24",
  five: "#592957"
};

let nightColor = {
    one: "#222D44",
    two: "#E2E7FF",
    three: "#1E1E24",
    four: "#FFF8F0",
    five: "#592957"
};

let color = day => {
  switch (day) {
    case "day":
      return dayColor;
    case "night":
      return nightColor;
    default:
      return dayColor;
  }
};

// Nav Position Theme
let left = {
  iconPosition: {
    left: '0',
    top: '0',
  },
    navDiv: {
        height: '100vh',
        width: "10%",
        minWidth: "100px",
        position: 'absolute',
        left: '0',
        top: '0',        
    },
  ul: {
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center'
  },
  firstDiv: {
    top: "0",
    left: "10%",
    width: "90%",
    height: "100vh"
  },
  boxShadow: '2px 2px 10px 6px',
  borderRadius: '0px 10px 10px 0px',
};

let right = {
  iconPosition: {
    left: '80%',
    top: '0',
  },
    navDiv: {
        height: '100vh',
        width: "10%",
        minWidth: "100px",
        position: 'absolute',
        left: '90%',
        top: '0',
    },
  ul: {
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center'
  },
  firstDiv: {
    top: "0",
    left: "0",
    width: "90%",
    height: "100vh"
  },
  boxShadow: '-2px -2px 10px 3px',
  borderRadius: '0px 10px 10px 0px',
};

let buttom = {
  iconPosition: {
    left: '0',
    top: '0',
  },
  navDiv: {
    height: '15%',
    width: "100%",
    position: 'absolute',
    left: '0',
    top: '85%',        
},
  ul: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },
  firstDiv: {
    width: "100%",
    height: "90%",
    
  },
  boxShadow: '2px 2px 10px 6px',
  borderRadius: '0px 10px 10px 0px',
};

let top = {
  navDiv: {
    minHeight: "100px",
    height: '10%',
    width: "100%",
    position: 'absolute',
    left: '0',
    top: '0',        
  },
  ul: {
    height: "10%",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  firstDiv: {
    top: "15%",
    left: "0px",
    width: "100%",
    height: "85%"
  },
  boxShadow: '2px 2px 10px 6px',
  borderRadius: '0px 10px 10px 0px',
};

let off = {
  firstDiv: {
    top: "10%",
    left: "0px",
    width: "100%",
    height: "90%"
  },
};

let nav = nav => {
  switch (nav) {
    case "top":
      return top;
    case "left":
      return left;
    case "right":
      return right;
    case "buttom":
      return buttom;
    default:
      return top;
  }
};

// Nav Theme

let Theme = ({ themeColor, navPosition }) => {
  return  {
      colors: color(themeColor),
      nav: nav(navPosition)
    }
};

export default Theme;

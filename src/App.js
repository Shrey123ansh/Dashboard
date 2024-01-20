import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Meet from "./pages/Meet.js";
import Events from "./pages/Events.js";
import Registration from "./pages/Registration.js";
import Payment from "./pages/Payment.js";


const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#111111",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "700px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
       <GlobalStyle />
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About/>} />
          <Route path="/experience" element={<Meet/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/payment" element={<Payment/>} />

        </Routes> 
     
    
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

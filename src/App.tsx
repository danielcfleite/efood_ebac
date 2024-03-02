import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { Rotas } from "./utils/routes";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

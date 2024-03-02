import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { Rotas } from "./utils/routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { Rotas } from "./utils/routes";
import { Footer } from "./Components/Footer";
import { store } from "./store";
import { Provider } from "react-redux";
import { Cart } from "./Components/Cart";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Cart />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

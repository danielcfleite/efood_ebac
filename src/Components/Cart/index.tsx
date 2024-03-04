import { useDispatch, useSelector } from "react-redux";
import { addMore, close, remove, removeOne } from "../../store/reducers/cart";
import {
  CartContainer,
  CartItem,
  DeleteButton,
  GoToCheckoutButton,
  Overlay,
  QuantityButton,
  SideBar,
} from "./styles";
import { RootReducer } from "../../store";
import { formataPreco } from "../../utils/formataPreco";

export const Cart = () => {
  const dispatch = useDispatch();
  const closeCart = () => {
    dispatch(close());
  };
  const { total } = useSelector((state: RootReducer) => state.cart);

  const { items, isOpen } = useSelector((state: RootReducer) => state.cart!);
  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={() => closeCart()} />
      <SideBar>
        <ul>
          {items.map((i) => (
            <CartItem key={i.id}>
              <img src={i.foto} />
              <div>
                <h3>{i.nome}</h3>
                <span>{formataPreco(i.preco)}</span>
                <div>
                  <span>
                    {" "}
                    Quantidade : {i.quantidade}
                    <QuantityButton onClick={() => dispatch(addMore(i.id))}>
                      +
                    </QuantityButton>
                    <QuantityButton onClick={() => dispatch(removeOne(i.id))}>
                      -
                    </QuantityButton>
                  </span>
                </div>
              </div>
              <DeleteButton onClick={() => dispatch(remove(i.id))} />
            </CartItem>
          ))}
        </ul>
        <div>
          <span>Valor total</span>
          <span>{formataPreco(total)}</span>
        </div>
        <GoToCheckoutButton>Continuar com a entrega</GoToCheckoutButton>
      </SideBar>
    </CartContainer>
  );
};

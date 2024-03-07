import { useState } from "react";
import {
  CheckoutButton,
  CheckoutContainer,
  InputContainer,
  SucessMessage,
} from "./styles";
import { close, resetCart, toggleCheckout } from "../../store/reducers/cart";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { RootReducer } from "../../store";
import { usePurchaseMutation } from "../../services/api";
import { MouseEvent } from "react";
import { Loader } from "../Loader";
import InputMask from "react-input-mask";

export const Checkout = () => {
  const [isPayment, setIsPayment] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);
  const submit = () => {
    form.handleSubmit();
    if (isSuccess) setIsSubmitSuccess(true);
  };
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation();
  const handlePaymentButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsPayment(true);
  };
  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;

    if (isTouched && isInvalid) {
      return message;
    }
    return "";
  };
  const finishPurchase = () => {
    dispatch(close());
    dispatch(toggleCheckout());
    setIsPayment(false);
    setIsSubmitSuccess(false);
    dispatch(resetCart());
  };
  const form = useFormik({
    initialValues: {
      receiver: "",
      description: "",
      city: "",
      zipCode: "",
      number: 0,
      complement: "",
      nameInCard: "",
      cardNumber: "",
      cardCode: 0,
      expiresMonth: "",
      expiresYear: "",
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, "O nome precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      description: Yup.string().required("O campo é obrigatório"),
      city: Yup.string().required("O campo é obrigatório"),
      zipCode: Yup.string()
        .min(10, "O CEP precisa ter 8 números")
        .max(10, "O CEP precisa ter 8 números")
        .required("O campo é obrigatório"),
      number: Yup.number().required("O campo é obrigatório"),
      complement: Yup.string(),
      // @ts-expect-error This line is intentionally causing a TypeScript error for now.
      nameInCard: Yup.string().when((values, schema) =>
        isPayment ? schema.required("O campo é obrigatório") : schema
      ),
      // @ts-expect-error This line is intentionally causing a TypeScript error for now.
      cardNumber: Yup.string().when((values, schema) =>
        isPayment ? schema.required("O campo é obrigatório") : schema
      ),
      // @ts-expect-error This line is intentionally causing a TypeScript error for now.
      expiresMonth: Yup.string().when((values, schema) =>
        isPayment ? schema.required("O campo é obrigatório") : schema
      ),
      // @ts-expect-error This line is intentionally causing a TypeScript error for now.
      expiresYear: Yup.string().when((values, schema) =>
        isPayment ? schema.required("O campo é obrigatório") : schema
      ),
      // @ts-expect-error This line is intentionally causing a TypeScript error for now.
      cardCode: Yup.string().when((values, schema) =>
        isPayment ? schema.required("O campo é obrigatório") : schema
      ),
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco * (item.quantidade ?? 1),
        })),
        delivery: {
          receiver: values.receiver,
          adress: {
            city: values.city,
            complement: values.complement,
            drescription: values.description,
            number: values.number,
            zipCode: values.zipCode,
          },
        },
        payment: {
          card: {
            code: values.cardCode,
            name: values.nameInCard,
            number: values.cardNumber,
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear),
            },
          },
        },
      });
    },
  });
  return (
    <form>
      {!isSubmitSuccess && (
        <CheckoutContainer>
          {isPayment ? (
            <div>
              <h3>Pagamento - valor de VALOR</h3>
              <div>
                <InputContainer>
                  <label htmlFor="nameInCard">Nome no cartão</label>
                  <input
                    type="text"
                    name=""
                    id="nameInCard"
                    value={form.values.nameInCard}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage("nameInCard", form.errors.nameInCard)}
                  </small>
                </InputContainer>
                <InputContainer>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    type="text"
                    name=""
                    id="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="9999.9999.9999.9999"
                  />
                  <small>
                    {getErrorMessage("cardNumber", form.errors.cardNumber)}
                  </small>
                </InputContainer>
                <InputContainer>
                  <label htmlFor="cardCode">CVV</label>
                  <InputMask
                    type="text"
                    name=""
                    id="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="999"
                  />
                  <small>
                    {getErrorMessage("cardCode", form.errors.cardCode)}
                  </small>
                </InputContainer>
                <InputContainer variant="double">
                  <div>
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <InputMask
                      type="text"
                      name=""
                      id="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99"
                    />
                    <small>
                      {getErrorMessage(
                        "expiresMonth",
                        form.errors.expiresMonth
                      )}
                    </small>
                  </div>
                  <div>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <InputMask
                      type="text"
                      name=""
                      id="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99"
                    />
                    <small>
                      {getErrorMessage("expiresYear", form.errors.expiresYear)}
                    </small>
                  </div>
                </InputContainer>
              </div>
              <CheckoutButton onClick={submit} type="button">
                Finalizar pagamento
              </CheckoutButton>
              <CheckoutButton onClick={() => setIsPayment(false)} type="button">
                Voltar para a edição do endereço
              </CheckoutButton>
            </div>
          ) : (
            <div>
              <h3>Entrega</h3>
              <div>
                <InputContainer>
                  <label htmlFor="receiver">Quem irá receber</label>
                  <input
                    type="text"
                    name=""
                    id="receiver"
                    value={form.values.receiver}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage("receiver", form.errors.receiver)}
                  </small>
                </InputContainer>
                <InputContainer>
                  <label htmlFor="description">Endereço</label>
                  <input
                    type="text"
                    name=""
                    id="description"
                    value={form.values.description}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage("description", form.errors.description)}
                  </small>
                </InputContainer>
                <InputContainer>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    name=""
                    id="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage("city", form.errors.city)}</small>
                </InputContainer>
                <InputContainer variant="double">
                  <div>
                    <label htmlFor="zipcode">CEP</label>
                    <InputMask
                      type="text"
                      name="zipCode"
                      id="zipCode"
                      value={form.values.zipCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99.999.999"
                    />
                    <small>
                      {getErrorMessage("zipCode", form.errors.zipCode)}
                    </small>
                  </div>
                  <div>
                    <label htmlFor="number">Número</label>
                    <input
                      type="number"
                      id="number"
                      value={form.values.number}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage("number", form.errors.number)}
                    </small>
                  </div>
                </InputContainer>
                <InputContainer>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    type="text"
                    name=""
                    id="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage("complement", form.errors.complement)}
                  </small>
                </InputContainer>
              </div>
              <CheckoutButton type="button" onClick={handlePaymentButton}>
                Continuar com o pagamento
              </CheckoutButton>
              <CheckoutButton
                onClick={() => dispatch(toggleCheckout())}
                type="button"
              >
                Voltar para o carrinho
              </CheckoutButton>
            </div>
          )}
          {isLoading && <Loader />}
        </CheckoutContainer>
      )}
      {isSubmitSuccess && (
        <SucessMessage>
          <h3>Pedido realizado - {data?.orderId}</h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <CheckoutButton onClick={finishPurchase} type="button">
            Concluir
          </CheckoutButton>
        </SucessMessage>
      )}
    </form>
  );
};

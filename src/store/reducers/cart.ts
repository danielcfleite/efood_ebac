import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Prato } from "../../types/cardapio";

type CartState = {
  items: Prato[];
  isOpen: boolean;
  total: number;
  isCheckout: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
  total: 0,
  isCheckout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const doesAlreadyExist = state.items.find(
        (p) => action.payload.id === p.id
      );
      if (doesAlreadyExist) {
        const newState = [...state.items];
        const index = newState.findIndex((p) => p.id === doesAlreadyExist.id);
        newState[index] = {
          ...newState[index],
          quantidade: (newState[index].quantidade || 1) + 1,
        };
        state.items = newState;
        state.total = state.total + action.payload.preco;
      } else {
        const newItem = {
          ...action.payload,
          quantidade: 1,
        };
        state.items.push(newItem);
        state.total = state.total + action.payload.preco;
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      );

      let totalToRemove = 0;
      if (itemToRemove) {
        totalToRemove = itemToRemove.quantidade! * itemToRemove.preco;
      }

      if (Object.is(state.total, -0)) {
        state.total = 0;
      }

      state.total -= totalToRemove;

      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    addMore: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        state.items[itemIndex].quantidade!++;
        state.total = state.total + state.items[itemIndex].preco;
      }
    },
    removeOne: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1 && state.items[itemIndex].quantidade! > 1) {
        state.items[itemIndex].quantidade!--;
        state.total = state.total - state.items[itemIndex].preco;
      } else {
        const confirmDelete = confirm(
          `gostaria de remover ${state.items[itemIndex].nome} do carrinho ?`
        );
        if (confirmDelete) {
          const itemToBeRemoved = state.items[itemIndex];
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
          state.total = state.total - itemToBeRemoved.preco;
        }
      }
    },
    toggleCheckout: (state) => {
      state.isCheckout = !state.isCheckout;
    },
    resetCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const {
  add,
  close,
  open,
  remove,
  addMore,
  removeOne,
  toggleCheckout,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;

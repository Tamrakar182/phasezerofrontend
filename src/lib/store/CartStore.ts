import { create } from "zustand";
import { persist } from "zustand/middleware";
import { cartReducer } from "@/lib/reducer/cartReducer";
import { CartStoreAction, CartStoreState } from "@/types/cart";

// actual creation of store
const useCartStore = create<CartStoreState>()(
  persist(
    (set) => ({
      cart: null,
      cartId: "",
      count: 0,
      discountCode: "",
      discountPercent: 0,
      totalAmount: 0,
      dispatch: (action: CartStoreAction) =>
        set((state: CartStoreState) => cartReducer(state, action)),
    }),
    {
      name: "cart-store",
    },
  ),
);

export default useCartStore;

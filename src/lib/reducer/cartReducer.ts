import { CartStoreAction, CartStoreState } from "@/types/cart"

export function cartReducer(
  state: CartStoreState,
  action: CartStoreAction
): CartStoreState {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        cart: action.payload,
        totalAmount: action.payload.product.price,
      }
    }
    case "APPLY_DISCOUNT": {
      const discountPercent = action.payload.percent
      const discountCode = action.payload.code
      return { ...state, discountPercent, discountCode }
    }
    case "RESET_CART": {
      return {
        ...state,
        cart: null,
        count: 0,
        discountCode: "",
        discountPercent: 0,
        totalAmount: 0,
      }
    }
    default:
      return state
  }
}

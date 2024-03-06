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
      const discountPercent = action.payload
      return { ...state, discountPercent }
    }
    default:
      return state
  }
}

import { PZCartProductI } from "@/types/product"

// state for cart store
export type CartStoreState = {
  cart: PZCartProductI | null
  count: number
  discountCode: string
  discountPercent: number
  totalAmount: number
  // eslint-disable-next-line no-unused-vars
  dispatch: (action: CartStoreAction) => void
}

// actions for cart store
export type CartStoreAction =
  | { type: "ADD_ITEM"; payload: PZCartProductI }
  | {
      type: "APPLY_DISCOUNT"
      payload: {
        code: string
        percent: number
      }
    }
  | {
    type: "RESET_CART"
  }

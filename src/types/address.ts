import { PZAddressResponseI } from "@/types/product"

export type AddressStoreState = {
  addresses: PZAddressResponseI[]
  paymentAddress: PZAddressResponseI | null
  count: number
  // eslint-disable-next-line no-unused-vars
  dispatch: (action: AddressStoreAction) => void
}

export type AddressStoreAction =
  | { type: "ADD_ADDRESS"; payload: PZAddressResponseI }
  | { type: "REMOVE_ADDRESS"; payload: number }
  | {
      type: "MODIFY_ADDRESS"
      payload: { index: number; modifiedAddress: PZAddressResponseI }
    }
  | { type: "FILL_ADDRESSES"; payload: PZAddressResponseI[] }
  | { type: "SET_PAYMENT_ADDRESS"; payload: PZAddressResponseI | null }

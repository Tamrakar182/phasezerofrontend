import { AddressStoreAction, AddressStoreState } from "@/types/address"

export function addressReducer(
  state: AddressStoreState,
  action: AddressStoreAction
): AddressStoreState {
  switch (action.type) {
    case "ADD_ADDRESS": {
      const newAddress = action.payload
      const addresses = [...state.addresses, newAddress]
      const count = addresses.length
      return { ...state, addresses, count }
    }
    case "REMOVE_ADDRESS": {
      const newAddresses = [...state.addresses]
      newAddresses.splice(action.payload, 1)
      const count = newAddresses.length
      return { ...state, addresses: newAddresses, count }
    }
    case "MODIFY_ADDRESS": {
      const { index, modifiedAddress } = action.payload
      const newAddresses = [...state.addresses]
      newAddresses[index] = modifiedAddress
      return { ...state, addresses: newAddresses }
    }
    case "FILL_ADDRESSES": {
      const addresses = action.payload
      const count = addresses.length
      return { ...state, addresses, count }
    }
    case "SET_PAYMENT_ADDRESS": {
      const paymentAddress = action.payload
      return { ...state, paymentAddress }
    }
    default:
      return state
  }
}

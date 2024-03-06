import { create } from "zustand"
import { persist } from "zustand/middleware"
import { addressReducer } from "@/lib/reducer/addressReducer"
import { AddressStoreAction, AddressStoreState } from "@/types/address"

// actual creation of store
const useAddressStore = create<AddressStoreState>()(
  persist(
    (set) => ({
      addresses: [],
      count: 0,
      paymentAddress: null,
      dispatch: (action: AddressStoreAction) =>
        set((state: AddressStoreState) => addressReducer(state, action)),
    }),
    {
      name: "address-store",
    }
  )
)

export default useAddressStore

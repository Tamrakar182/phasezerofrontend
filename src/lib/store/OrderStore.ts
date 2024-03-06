import { create } from "zustand"
import { persist } from "zustand/middleware"
import { orderReducer } from "@/lib/reducer/orderReducer"
import { OrderStoreAction, OrderStoreState } from "@/types/order"

// actual creation of store
const useOrderStore = create<OrderStoreState>()(
  persist(
    (set) => ({
      orders: [],
      count: 0,
      dispatch: (action: OrderStoreAction) =>
        set((state: OrderStoreState) => orderReducer(state, action)),
    }),
    {
      name: "order-store",
    }
  )
)

export default useOrderStore

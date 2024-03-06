import { OrderStoreAction, OrderStoreState } from "@/types/order"

export function orderReducer(
  state: OrderStoreState,
  action: OrderStoreAction
): OrderStoreState {
  switch (action.type) {
    case "ADD_ORDER": {
        const newOrder = action.payload
        const orders = [...state.orders, newOrder]
        const count = orders.length
        return { ...state, orders, count }
    }
    case "FILL_ORDERS": {
        const orders = action.payload
        const count = orders.length
        return { ...state, orders, count }
    }
    default:
      return state
  }
}

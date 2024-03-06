import { PZOrderResponseI } from "@/types/product";

export type OrderStoreState = {
  orders: PZOrderResponseI[];
  count: number;
  // eslint-disable-next-line no-unused-vars
  dispatch: (action: OrderStoreAction) => void;
};

export type OrderStoreAction =
  | { type: "ADD_ORDER"; payload: PZOrderResponseI }
  | { type: "FILL_ORDERS"; payload: PZOrderResponseI[] }

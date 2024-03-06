import { PZCartProductI } from "@/types/product"

export function cartPostHelper(data: PZCartProductI) {
  return {
    productId: data.product?.id,
    color: data.color,
    size: data.size,
    quantity: data.quantity,
  }
}

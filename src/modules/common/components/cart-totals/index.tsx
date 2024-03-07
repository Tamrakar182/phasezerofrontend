import React from "react"
import { PZCartProductI } from "@/types/product"

type CartTotalsProps = {
  cart: PZCartProductI | null
  discount: number
  total: number
  delieveryCharge: number
}

const CartTotals: React.FC<CartTotalsProps> = ({ cart, discount, total, delieveryCharge }) => {
  const subTotal = cart?.product.price
  const discountAmount = (total * discount) / 100
  return (
    <div>
      <div className="text-small-regular text-gray-700">
        <div className="flex items-center justify-between text-base-regular text-gray-900 mb-2">
          <span>Subtotal</span>
          <span>Rs. {subTotal ?? 0}</span>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center justify-between">
            <span>Discount</span>
            <span>- Rs. {discountAmount}</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center justify-between">
            <span>Delivery Charge</span>
            <span>+ Rs. {delieveryCharge}</span>
          </div>
        </div>
        <div className="h-px w-full border-b border-gray-200 border-dashed my-4" />
        <div className="flex items-center justify-between text-base-regular text-gray-900 mb-2">
          <span>Total</span>
          <span>Rs. {total - discountAmount + delieveryCharge}</span>
        </div>
      </div>
    </div>
  )
}

export default CartTotals

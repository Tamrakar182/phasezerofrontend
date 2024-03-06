"use client"
import DiscountCode from "@modules/checkout/components/discount-code"
import CartTotals from "@modules/common/components/cart-totals"
import Spinner from "@modules/common/icons/spinner"
import Button from "@modules/common/components/button"
import { CartStoreState } from "@/types/cart"
import { PZGuestCheckoutI } from "@/types/userCheckout"
import { useFormContext } from "react-hook-form"

type Props = {
  cartState: CartStoreState
  handlePayment: (data: PZGuestCheckoutI) => void
  submitting: boolean
  delieveryCharge: number
}

const CheckoutSummary = ({ cartState, handlePayment, submitting, delieveryCharge }: Props) => {
  const { handleSubmit } = useFormContext<PZGuestCheckoutI>();

  return (
    <div className="sticky top-0 flex flex-col-reverse small:flex-col gap-y-8">
      <div className="w-full bg-white p-6 flex flex-col gap-y-6">
        <CartTotals
          cart={cartState.cart}
          discount={cartState.discountPercent}
          total={cartState.totalAmount}
          delieveryCharge={delieveryCharge}
        />
        <Button type="submit" onClick={handleSubmit(handlePayment)} disabled={submitting}>
          Proceed to Payment
          {submitting && <Spinner />}
        </Button>
      </div>
      <div className="p-6 bg-white">
        <DiscountCode discount={cartState.discountPercent} />
      </div>
    </div>
  )
}

export default CheckoutSummary

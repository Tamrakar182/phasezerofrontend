"use client"
import Addresses from "@modules/checkout/components/addresses"
// import Payment from "@modules/checkout/components/payment"
// import { PZGuestCheckoutI } from "@/types/userCheckout"

const CheckoutForm = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-1 gap-y-8">
        <div>
          <Addresses />
        </div>
        {/* <div>
          <Payment />
        </div> */}
      </div>
    </div>
  )
}

export default CheckoutForm

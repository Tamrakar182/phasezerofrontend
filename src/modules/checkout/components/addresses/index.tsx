import ShippingAddress from "../shipping-address"
import { PZGuestCheckoutI } from "@/types/userCheckout"

const Addresses = () => {
  return (
    <div className="bg-white">
      <div className="text-xl-semi flex items-center gap-x-4 px-8 pb-6 pt-8">
        <div className="bg-gray-900 w-8 h-8 rounded-full text-white flex justify-center items-center text-sm">
          1
        </div>
        <h2>Delievery address</h2>
      </div>
      <div className="px-8 pb-8">
        <ShippingAddress />
      </div>
    </div>
  )
}

export default Addresses

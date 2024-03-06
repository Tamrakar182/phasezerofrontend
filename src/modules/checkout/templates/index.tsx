"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"
import CheckoutSummary from "./checkout-summary"
import useFromStore from "@lib/hooks/useFromStore"
import useCartStore from "@lib/store/CartStore"
import { useState } from "react"
import { PZGuestCheckoutI } from "@/types/userCheckout"
import Payment from "@modules/checkout/components/payment"
import ShippingAddress from "../components/shipping-address"
import { useForm, FormProvider } from "react-hook-form"
import { PaymentProvider } from "@lib/context/payment-context"

const CheckoutTemplate = () => {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [payment, setPayment] = useState<string>("cash_on_delivery")

  const cartState = useFromStore({
    store: useCartStore,
    storeCallback: (state) => state,

  })

  const delieveryCharge = 125

  const methods = useForm<PZGuestCheckoutI>({
    defaultValues: {
      name: "",
      email: "",
      phoneNo: "",
      address: "",
    },
  });

  const handlePayment = (data: PZGuestCheckoutI) => {
    if (cartState) {
      console.log({
        ...data,
        price: cartState.totalAmount - (cartState.totalAmount * cartState.discountPercent) / 100 + delieveryCharge,
        product: cartState.cart?.product.name,
        size: cartState.cart?.size,
        color: cartState.cart?.color,
        paymentMethod: payment,
      })
    }
  }

  const handlePaymentMethodChange = (method: string) => {
    setPayment(method)
  }

  return (
    <div className="bg-gray-100 relative small:min-h-screen">
      <div className="h-16 bg-white">
        <nav className="flex items-center h-full justify-center content-container">
          <Link href="/" className="max-w-[500px]">
            <img
              src="/logo_black.png"
              alt="logo"
              className="object-contain h-20 w-50 p-4"
            />
          </Link>
        </nav>
      </div>
      <div className="relative">
        <FormProvider {...methods}>
          <PaymentProvider>
            <div className="grid grid-cols-1 small:grid-cols-[1fr_416px] gap-y-8 content-container gap-x-8 py-12">
              <>
                <div>
                  <div className="w-full grid grid-cols-1 gap-y-8">
                    <div>
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
                    </div>
                    <div>
                      <Payment
                        paymentMethod={payment}
                        handlePaymentMethodChange={handlePaymentMethodChange}
                      />
                    </div>
                  </div>
                </div>
                {cartState && (
                  <CheckoutSummary
                    cartState={cartState}
                    handlePayment={handlePayment}
                    submitting={submitting}
                    delieveryCharge={delieveryCharge}
                  />
                )}
              </>
            </div>
          </PaymentProvider>
        </FormProvider>
      </div>
    </div>
  )
}

export default CheckoutTemplate

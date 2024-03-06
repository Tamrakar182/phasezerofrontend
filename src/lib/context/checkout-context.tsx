"use client"
import useToggleState, { StateType } from "@lib/hooks/use-toggle-state"
import React, { createContext, useContext } from "react"
import useFromStore from "@lib/hooks/useFromStore"
import useCartStore from "@lib/store/CartStore"
import useAddressStore from "@lib/store/AddressStore"
import { AddressStoreState } from "@/types/address"
import { CartStoreState } from "@/types/cart"

interface CheckoutContext {
  editAddresses: StateType
}

const CheckoutContext = createContext<CheckoutContext | null>(null)

interface CheckoutProviderProps {
  children?: React.ReactNode
}

export const CheckoutProvider = ({ children }: CheckoutProviderProps) => {
  const editAddresses = useToggleState()
  
  return (
      <CheckoutContext.Provider
        value={{
          editAddresses,
        }}
      >
        {children}
      </CheckoutContext.Provider>
  )
}

export const useCheckout = () => {
  const context = useContext(CheckoutContext)
  if (context === null) {
    throw new Error("useCheckout must be used within a CheckoutProvider")
  }
  return { ...context }
}

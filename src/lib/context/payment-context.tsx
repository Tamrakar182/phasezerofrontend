import React, { createContext, useContext, useState } from "react";

type PaymentMethod = "cash-on-delivery" | "esewa";

interface PaymentContext {
  paymentMethod: PaymentMethod;
  setPaymentMethod: (method: PaymentMethod) => void;
}

const PaymentContext = createContext<PaymentContext | null>(null);

interface PaymentProviderProps {
  children?: React.ReactNode;
}

export const PaymentProvider = ({ children }: PaymentProviderProps) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    "cash-on-delivery"
  );

  return (
    <PaymentContext.Provider
      value={{
        paymentMethod,
        setPaymentMethod,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (context === null) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }
  return { ...context };
};

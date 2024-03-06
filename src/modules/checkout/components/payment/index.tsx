import React from "react";
import StepContainer from "../step-container";
import Radio from "@modules/common/components/radio";
import clsx from "clsx";

interface Props {
  paymentMethod: string;
  handlePaymentMethodChange: (method: string) => void;
}

const Payment = ({ paymentMethod, handlePaymentMethodChange }: Props) => {

  return (
    <StepContainer title="Payment" index={2}>
      <div
        className={clsx(
          "flex flex-col gap-y-4 border-b border-gray-200 last:border-b-0 pb-6 "
        )}
      >
        <button
          className={"flex flex-row items-center gap-x-4 px-8"}
          onClick={() => handlePaymentMethodChange("cash_on_delivery")}
        >
          <Radio checked={paymentMethod === "cash_on_delivery"} />
          <img src="/cod.png" height={40} width={40} alt="cash on delievery" />
          <p>Cash On Delivery</p>
        </button>
        <button
          className={"flex flex-row items-center gap-x-4 px-8"}
          onClick={() => handlePaymentMethodChange("esewa")}
        >
          <Radio checked={paymentMethod === "esewa"} />
          <img src="/esewa.png" height={40} width={40} alt="esewa" />
          <p>Esewa</p>
        </button>
      </div>
    </StepContainer>
  );
};

export default Payment;

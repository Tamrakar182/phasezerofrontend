import Radio from "@modules/common/components/radio"
import clsx from "clsx"
import React from "react"

const PaymentContainer = () => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-y-4 border-b border-gray-200 last:border-b-0 "
      )}
    >
      <button className={"flex flex-row items-center gap-x-4 py-4 px-8"}>
        <Radio checked={true} />
        <p>Cash on Delivery</p>
      </button>
    </div>
  )
}

export default PaymentContainer

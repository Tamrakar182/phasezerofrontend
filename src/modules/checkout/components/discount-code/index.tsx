import Button from "@modules/common/components/button"
// import Input from "@modules/common/components/input"
import Trash from "@modules/common/icons/trash"
import { useState, ChangeEvent } from "react"
import useCartStore from "@lib/store/CartStore"
import axios from "@lib/util/axios"

type Props = {
  discount: number
}

const DiscountCode = ({ discount }: Props) => {
  const dispatch = useCartStore((state) => state.dispatch)

  const [couponCode, setCouponCode] = useState<string>("")
  const [couponError, setCouponError] = useState<string>("")

  const onApply = async () => {
    try {
      const res = await axios.get("/coupon?code=" + couponCode);
      if (res.data.success) {
        const coupon = res.data.discount;
        setCouponCode("");
        dispatch({ type: "APPLY_DISCOUNT", payload: coupon });
        return;
      }
      setCouponError("Invalid coupon code");
    } catch (error) {
      setCouponError("Invalid coupon code");
    }
  }

  const onRemove = () => {
    dispatch({ type: "APPLY_DISCOUNT", payload: 0 })
  }

  const handleCouponCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCouponCode(value)
  }

  return (
    <div className="w-full bg-white flex flex-col">
      <div className="mb-4">
        <h3 className="text-base-semi">Discount</h3>
      </div>
      <div className="text-small-regular">
        {discount > 0 ? (
          <div className="flex items-center justify-between">
            <div>
              <span>Applied Discount: </span>
              <span className="font-semibold">{discount}%</span>
            </div>
            <div>
              <button className="flex items-center gap-x-2" onClick={onRemove}>
                <Trash size={16} />
                <span className="sr-only">Remove discount code from order</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-[1fr_80px] gap-x-2">
              <input
                placeholder="Code"
                id="couponCode"
                value={couponCode}
                name="couponCode"
                onChange={handleCouponCodeChange}
              />
              <div>
                <Button
                  onClick={onApply}
                  className="!min-h-[0] h-[46px] w-[80px]"
                >
                  Apply
                </Button>
              </div>
            </div>
            {couponError !== "" && (
              <div className="absolute">
                <span className="text-rose-600">{couponError}</span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default DiscountCode

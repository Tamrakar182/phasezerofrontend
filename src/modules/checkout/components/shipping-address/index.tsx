import { emailRegex } from "@lib/util/regex"
import Input from "@modules/common/components/input"
import { PZGuestCheckoutI } from "@/types/userCheckout"
import { useFormContext } from "react-hook-form"

const ShippingAddress = () => {
  const { formState: { errors, touchedFields }, register } = useFormContext<PZGuestCheckoutI>();


  return (
    <div>
      <form
        id="form"
        className="w-full my-4 flex flex-col gap-y-4"
      >
        <div className="grid grid-cols-1 gap-y-2">
          <Input
            label="Email"
            {...register("email", {
              required: "Email is required",
              pattern: emailRegex,
            })}
            autoComplete="email"
            errors={errors}
            touched={touchedFields}
          />
          <div className="grid grid-cols-2 gap-x-2">
            <Input
              label="Name"
              {...register("name", {
                required: "Name is required",
              })}
              autoComplete="name"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Phone No"
              {...register("phoneNo", {
                required: "Phone Number is required",
                minLength: {
                  value: 10,
                  message: "Phone Number must be at exactly 10 characters long",
                },
                maxLength: {
                  value: 10,
                  message: "Phone Number must be at exactly 10 characters long",
                },
              })}
              autoComplete="tel"
              errors={errors}
              touched={touchedFields}
            />
          </div>
          <Input
            label="Address"
            {...register("address", {
              required: "Address is required",
            })}
            autoComplete="address-line1"
            errors={errors}
            touched={touchedFields}
          />
        </div>
      </form>
    </div>
  )
}

export default ShippingAddress

import { Listbox, Transition } from "@headlessui/react"
import Radio from "@modules/common/components/radio"
import ChevronDown from "@modules/common/icons/chevron-down"
import clsx from "clsx"
import { isEqual, omit } from "lodash"
import { Fragment, useMemo, useState } from "react"
import { PZAddressResponseI } from "@/types/product"
import useAddressStore from "@lib/store/AddressStore"
import { useCheckout } from "@lib/context/checkout-context"

type AddressSelectProps = {
  addresses: PZAddressResponseI[]
  currentAddress: PZAddressResponseI | null
}

const AddressSelect = ({ addresses, currentAddress }: AddressSelectProps) => {
  const [selected, setSelected] = useState<string | undefined>(undefined)
  const dispatch = useAddressStore((state) => state.dispatch)
  const {
    editAddresses: { toggle: setEdit },
  } = useCheckout()

  const handleSelect = (id: string) => {
    const savedAddress = addresses.find((a) => a.id === id)

    if (savedAddress) {
      dispatch({
        type: "SET_PAYMENT_ADDRESS",
        payload: savedAddress,
      })
      setEdit()
    }

    setSelected(id)
  }

  const selectedAddress = useMemo(() => {
    for (const address of addresses) {
      const checkEquality = isEqual(
        omit(address, ["id", "postal_code", "state", "city"]),
        currentAddress
      )

      if (checkEquality) {
        return address
      }
    }
  }, [currentAddress, addresses])

  return (
    <Listbox onChange={handleSelect} value={selected}>
      <div className="relative">
        <Listbox.Button className="relative w-full flex justify-between items-center px-4 py-[10px] text-left bg-white cursor-default focus:outline-none border border-gray-200 focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-gray-300 focus-visible:ring-offset-2 focus-visible:border-gray-300 text-base-regular">
          {({ open }) => (
            <>
              <span className="block truncate">
                {selectedAddress ? selectedAddress.street : "Choose an address"}
              </span>
              <ChevronDown
                size={16}
                className={clsx({ "transform rotate-180": open })}
              />
            </>
          )}
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-20 w-full overflow-auto text-small-regular bg-white border border-gray-200 border-top-0 max-h-60 focus:outline-none sm:text-sm">
            {addresses.map((address: PZAddressResponseI) => {
              return (
                <Listbox.Option
                  key={address.id}
                  value={address.id}
                  className="cursor-default select-none relative pl-6 pr-10 hover:bg-gray-50 py-4"
                >
                  <div className="flex gap-x-4 items-center">
                    <Radio checked={selected === address.id} />
                    <div className="flex flex-col text-left text-base-regular mt-2">
                      <span>{address.street}</span>
                      <span>
                        {address.postal_code}, {address.city}
                      </span>
                      <span>{address.state}</span>
                    </div>
                  </div>
                </Listbox.Option>
              )
            })}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default AddressSelect

import { Dialog, Transition } from "@headlessui/react"
import useToggleState from "@lib/hooks/use-toggle-state"
import Button from "@modules/common/components/button"
import ChevronDown from "@modules/common/icons/chevron-down"
import X from "@modules/common/icons/x"
import clsx from "clsx"
import React, { Fragment } from "react"
import OptionSelect from "../option-select"
import { PZProductI } from "@/types/product"
import useCartStore from "@lib/store/CartStore"
import { useRouter } from "next/navigation"

type MobileActionsProps = {
  show: boolean
  product: PZProductI
}

const MobileActions: React.FC<MobileActionsProps> = ({
  product,
  show,
}: MobileActionsProps) => {
  const { state, open, close } = useToggleState()

  const sizes = product.stock.map((stock) => stock.size)
  const colors = product.stock.map((stock) => stock.color)
  const dispatch = useCartStore((state) => state.dispatch)
  const router = useRouter()
  
  
  const [size, setSize] = React.useState<string>(sizes[0])
  const [color, setColor] = React.useState<string>(colors[0])
  
  const selectedStock = product.stock.find(
    (stock) => stock.size === size && stock.color === color
  );

  const isOutOfStock = selectedStock ? selectedStock.stockQuantity === 0 : false;
  
  const updateOptions = (option: string, type: string) => {
    if (type === "size") {
      setSize(option)
    } else {
      setColor(option)
    }
  }

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        product: { ...product },
        size: size,
        color: color,
        quantity: 1,
      },
    })
  }

  const handleCheckout = () => {
    addToCart()
    router.push("/checkout")
  }

  return (
    <>
      <div
        className={clsx("lg:hidden sticky inset-x-0 bottom-0", {
          "pointer-events-none": !show,
        })}
      >
        <Transition
          as={Fragment}
          show={show}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="bg-white flex flex-col gap-y-3 justify-center items-center text-large-regular p-4 h-full w-full border-t border-gray-200">
            <div className="flex items-center gap-x-2">
              <span>{product.name}</span>
              <span>—</span>
              <div className="flex items-end gap-x-2 text-gray-700">
                Rs.<p>{product.price}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 w-full gap-x-4">
              <Button onClick={open} variant="secondary">
                <div className="flex items-center justify-between w-full">
                  <span>Select Options</span>
                  <ChevronDown />
                </div>
              </Button>
              <Button onClick={handleCheckout}>
                {isOutOfStock ? "Out of stock" : "Checkout"}
              </Button>
            </div>
          </div>
        </Transition>
      </div>
      <Transition appear show={state} as={Fragment}>
        <Dialog as="div" className="relative z-[75]" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-700 bg-opacity-75 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed bottom-0 inset-x-0">
            <div className="flex min-h-full h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="w-full h-full transform overflow-hidden text-left flex flex-col gap-y-3">
                  <div className="w-full flex justify-end pr-6">
                    <button
                      onClick={close}
                      className="bg-white w-12 h-12 rounded-full text-gray-900 flex justify-center items-center"
                    >
                      <X />
                    </button>
                  </div>
                  <div className="bg-white px-6 py-12">
                    {sizes.length > 1 && (
                      <div className="flex flex-col gap-y-6">
                        <div>
                          <OptionSelect
                            option={sizes}
                            current={size}
                            updateOption={(selectedSize) =>
                              updateOptions(selectedSize, "size")
                            }
                            title="Size"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="bg-white px-6 py-12">
                    {colors.length > 1 && (
                      <div className="flex flex-col gap-y-6">
                        <div>
                          <OptionSelect
                            option={colors}
                            current={color}
                            updateOption={(selectedColor) =>
                              updateOptions(selectedColor, "color")
                            }
                            title="Color"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileActions

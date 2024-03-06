import { Disclosure } from "@headlessui/react"
import clsx from "clsx"
import { useCheckout } from "@lib/context/checkout-context"

type StepContainerProps = {
  index: number
  title: string
  closedState?: React.ReactNode
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

const StepContainer = ({
  index,
  title,
  className,
  closedState,
  children,
  ...props
}: StepContainerProps) => {
  // const {
  //   editAddresses: { state },
  // } = useCheckout()
  return (
    <div>
      <div
        className={clsx("bg-white", className)}
        {...props}
      >
        <div className="text-xl-semi flex items-center gap-x-4 px-8 pb-6 pt-8">
          <div className="bg-gray-900 w-8 h-8 rounded-full text-white flex justify-center items-center text-sm">
            {index}
          </div>
          <h2>{title}</h2>
        </div>
        <Disclosure>
          <Disclosure.Panel
            static
            className={clsx(
              "transition-[max-height,opacity] duration-700 ease-in-out overflow-hidden",
            )}
          >
            {children}
          </Disclosure.Panel>
          <Disclosure.Panel
            static
            className={clsx(
              "transition-[max-height,opacity] duration-700 ease-in-out overflow-hidden",
            )}
          >
            {closedState}
          </Disclosure.Panel>
        </Disclosure>
      </div>
    </div>
  )
}

export default StepContainer

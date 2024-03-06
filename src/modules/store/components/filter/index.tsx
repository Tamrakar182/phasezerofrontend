import { Fragment } from "react"
import { Dialog, Disclosure, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

const filters = [
  {
    id: "order",
    name: "Sort by",
    options: [
      { value: "", label: "Featured" },
      { value: "asc", label: "Price, low to high" },
      { value: "desc", label: "Price, high to low" },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "All New Arrivals" },
      { value: "tees", label: "Tees" },
      { value: "crewnecks", label: "Crewnecks" },
      { value: "sweatshirts", label: "Sweatshirts" },
      { value: "pants-shorts", label: "Pants & Shorts" },
    ],
  },
  {
    id: "size",
    name: "Sizes",
    options: [
      { value: "XS", label: "XS" },
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
      { value: "XL", label: "XL" },
      { value: "2XL", label: "2XL" },
    ],
  },
  {
    id: "material",
    name: "Material",
    options: [
      { value: "cotton", label: "Cotton" },
      { value: "polyester", label: "Polyester" },
    ],
  },
]

type Props = {
  filterOpen: boolean
  handleFilterOpen: (bool: boolean) => void
  handleFilterChange: (sectionId: string, optionValue: string) => void
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Filter({
  filterOpen,
  handleFilterOpen,
  handleFilterChange,
}: Props) {
  return (
    <div className="bg-white">
      <div>
        <Transition.Root show={filterOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40"
            onClose={() => handleFilterOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex pt-[64px]">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                      onClick={() => handleFilterOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 pb-4 pt-4"
                      >
                        {({ open }) => (
                          <fieldset>
                            <legend className="w-full px-2">
                              <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                <span className="text-sm font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "-rotate-180" : "rotate-0",
                                      "h-5 w-5 transform"
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </legend>
                            <Disclosure.Panel className="px-4 pb-2 pt-4">
                              <div className="space-y-4">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`${section.id}-${optionIdx}`}
                                      name={section.id}
                                      // name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type={
                                        section.id === "order"
                                          ? "radio"
                                          : "checkbox"
                                      }
                                      className="h-4 w-4 rounded border-gray-300 text-slate-900 focus:ring-slate-900"
                                      onChange={() =>
                                        handleFilterChange(
                                          section.id,
                                          option.value
                                        )
                                      }
                                    />
                                    <label
                                      htmlFor={`${section.id}-${optionIdx}`}
                                      className="ml-3 text-xsmall-regular text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </fieldset>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  )
}

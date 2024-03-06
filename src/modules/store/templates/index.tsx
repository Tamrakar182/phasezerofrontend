"use client"
import { useState } from "react"
import Filter from "@/modules/store/components/filter"
import { PlusIcon } from "@heroicons/react/20/solid"
import { generateFilterQuery } from "@lib/util/generateFilterQuery"
import useFilter from "@lib/hooks/data-fetching/useFilter"
import FilteredProducts from "@modules/products/components/filtered-products"

const StoreTemplate = () => {
  const [filterOpen, setFilterOpen] = useState<boolean>(false)
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string[]
  }>({})
  const { isLoading, data } = useFilter(generateFilterQuery(selectedFilters))

  const handleFilterChange = (sectionId: string, optionValue: string) => {
    setSelectedFilters((prevState) => {
      if (sectionId === "order") {
        // If it's a radio button, directly set the value
        return { ...prevState, [sectionId]: [optionValue] }
      } else {
        const prevSelectedOptions = prevState[sectionId] || []
        const isSelected = prevSelectedOptions.includes(optionValue)
        const newSelectedOptions = isSelected
          ? prevSelectedOptions.filter((value) => value !== optionValue)
          : [...prevSelectedOptions, optionValue]
        return { ...prevState, [sectionId]: newSelectedOptions }
      }
    })
  }

  const handleFilterOpen = (bool: boolean) => {
    setFilterOpen(bool)
  }

  return (
    <div className="py-6">
      <Filter
        filterOpen={filterOpen}
        handleFilterOpen={handleFilterOpen}
        handleFilterChange={handleFilterChange}
      />
      <main className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="border-b border-gray-200 pb-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            New Arrivals
          </h1>
          <p className="mt-4 text-base text-gray-500">
            Checkout out the latest release of Basic Tees, new and improved with
            four openings!
          </p>
        </div>

        <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <aside>
            <h2 className="sr-only">Filters</h2>

            <button
              type="button"
              className="inline-flex items-center"
              onClick={() => handleFilterOpen(true)}
            >
              <span className="text-sm font-medium text-gray-700">Filters</span>
              <PlusIcon
                className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
            </button>
          </aside>

          {/* Product grid */}
          <div className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
            <FilteredProducts isLoading={isLoading} products={data} />
          </div>
        </div>
      </main>
    </div>
  )
}
export default StoreTemplate

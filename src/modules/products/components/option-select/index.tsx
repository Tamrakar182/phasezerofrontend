import { onlyUnique } from "@lib/util/only-unique"
import clsx from "clsx"
import React from "react"

type OptionSelectProps = {
  option: string[]
  current: string
  updateOption: (option: string) => void
  title: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
}) => {
  const filteredOptions = option.map((v: string) => v).filter(onlyUnique)

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-base-semi">Select {title}</span>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
        {filteredOptions.map((v: string, index: number) => {
          return (
            <button
              onClick={() => updateOption(v)}
              key={index}
              className={clsx(
                "border-gray-200 border text-xsmall-regular h-[50px] transition-all duration-200",
                { "border-gray-900": v === current }
              )}
            >
              {v.toUpperCase()}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default OptionSelect

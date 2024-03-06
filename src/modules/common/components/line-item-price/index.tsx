import { getPercentageDiff } from "@lib/util/get-precentage-diff"
import clsx from "clsx"

type LineItemPriceProps = {
  item: any
  style?: "default" | "tight"
}

const LineItemPrice = ({
  item,
  style = "default",
}: LineItemPriceProps) => {
  const originalPrice =
    (item.variant).original_price * item.quantity
  const hasReducedPrice = (item.total || 0) < originalPrice

  return (
    <div className="flex flex-col text-gray-700 text-right">
      <span
        className={clsx("text-base-regular", {
          "text-rose-600": hasReducedPrice,
        })}
      >
        {/* {formatAmount({
          amount: item.total || 0,
          region: region,
          includeTaxes: false,
        })} */}
      </span>
      {hasReducedPrice && (
        <>
          <p>
            {style === "default" && (
              <span className="text-gray-500">Original: </span>
            )}
            <span className="line-through">
              {/* {formatAmount({
                amount: originalPrice,
                region: region,
                includeTaxes: false,
              })} */}
            </span>
          </p>
          {style === "default" && (
            <span className="text-rose-600">
              -{getPercentageDiff(originalPrice, item.total || 0)}%
            </span>
          )}
        </>
      )}
    </div>
  )
}

export default LineItemPrice

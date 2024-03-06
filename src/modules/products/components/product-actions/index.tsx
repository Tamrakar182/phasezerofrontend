import Button from "@modules/common/components/button"
import OptionSelect from "@modules/products/components/option-select"
import clsx from "clsx"
import React from "react"
import { PZProductI } from "@/types/product"
import useCartStore from "@lib/store/CartStore"
import { useRouter } from "next/navigation"

type ProductActionsProps = {
  product: PZProductI
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
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
        product: product,
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
    <div className="flex flex-col gap-y-2">
      <h3 className="text-xl-regular">{product.name}</h3>
      <p className="text-base-regular">{product.description}</p>


      {sizes.length > 1 && (
        <div className="my-8 flex flex-col gap-y-6">
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

      {/* <img src={product.size_chart} alt="size chart" className="w-full" /> */}

      {colors.length > 1 && (
        <div className="my-8 flex flex-col gap-y-6">
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

      <div className="mb-4">
        <div className="flex flex-col text-gray-700">
          <span className={clsx("text-xl-semi text-gray-700")}>
            Rs. {product.price}
          </span>
        </div>
      </div>

      <Button onClick={handleCheckout} disabled={isOutOfStock}>
        {isOutOfStock ? "Out of stock" : "Checkout"}
      </Button>
    </div>
  )
}

export default ProductActions
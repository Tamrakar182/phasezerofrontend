import ProductActions from "@modules/products/components/product-actions"
import { PZProductI } from "@/types/product"
import React from "react"

type ProductInfoProps = {
  product: PZProductI
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-12 lg:max-w-[500px] mx-auto">
        <div>
          <ProductActions product={product} />
        </div>
      </div>
    </div>
  )
}

export default ProductInfo

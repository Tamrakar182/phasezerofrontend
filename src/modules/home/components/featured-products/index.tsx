"use client"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { PZProductWithoutStockI } from "../../../../../data"

type Props = {
  products: PZProductWithoutStockI[]
}

const FeaturedProducts = ({ products }: Props) => {

  return (
    <div className="py-12">
      <div className="content-container py-4">
        <div className="flex flex-col items-center text-center mb-16">
          {/* <span className="text-base-regular text-gray-600 mb-6">
            2024 SPRING/SUMMER
          </span> */}
          <p className="text-2xl-regular text-gray-900 max-w-lg">
            2024 SPRING/SUMMER
          </p>
        </div>
        <ul className="grid grid-cols-1 small:grid-cols-3 gap-x-4 gap-y-8">
          {products
            ? products.map((product) => (
                <li key={product.id}>
                  <ProductPreview product={product} />
                </li>
              ))
          : Array.from(Array(3).keys()).map((i) => (
            <li key={i}>
              <SkeletonProductPreview />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FeaturedProducts

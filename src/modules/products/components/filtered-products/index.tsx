import repeat from "@lib/util/repeat"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { PZProductI } from "@/types/product"

type Props = {
  products: PZProductI[] | undefined
  isLoading: boolean
}

const FilteredProducts = ({ products, isLoading }: Props) => {
  return (
    <div className="flex-1 content-container">
      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-4 gap-y-8 flex-1">
        {!isLoading &&
          products &&
          products.map((p) => (
            <li key={p.id}>
              <ProductPreview product={p} />
            </li>
          ))}
        {isLoading &&
          repeat(8).map((index) => (
            <li key={index}>
              <SkeletonProductPreview />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default FilteredProducts

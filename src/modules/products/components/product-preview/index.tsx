import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"

const ProductPreview = ({ product }: ProductPreviewType) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <div>
        <Thumbnail thumbnail={product.image[0]} size="full" />
        <div className="text-base-regular mt-2">
          <span>{product.name}</span>
          <div className="flex items-center gap-x-2 mt-1">
            <span className="text-gray-500">Rs. {product.price}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductPreview

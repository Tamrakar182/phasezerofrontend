import repeat from "@lib/util/repeat"
import Button from "@modules/common/components/button"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { useMemo, useState, useEffect } from "react"
import ProductPreview from "../product-preview"
import { PZProductI } from "@/types/product"
import useFilter from "@lib/hooks/data-fetching/useFilter"
import { randomisedProducts } from "@lib/util/randomiseProducts"

type RelatedProductsProps = {
  product: PZProductI
}

const RelatedProducts = ({ product }: RelatedProductsProps) => {
  const [showCount, setShowCount] = useState<number>(4)
  const [query, setQuery] = useState<string>(`category=${product.categories[0].name}`)
  const { data, isLoading } = useFilter(query)

  // Fetch all products if there are less than 4 products in the store
  useEffect(() => {
    if (data && data.length < 5) {
      setQuery("");
    }
  }, [data]);
  
  // Filter out the current product from the related products
  const products = useMemo(() => {
    const filteredData = data?.filter((item) => item.id !== product.id)
    return filteredData && filteredData.length > 12 ? randomisedProducts(filteredData).slice(0, 9) : filteredData
  }, [data, product.id])

  // Slice the products to show only the first 4
  const visibleProducts = useMemo(
    () => products?.slice(0, showCount),
    [showCount, products]
  )

  // Show more button handler
  const handleShowMore = () => {
    const cardsToAdd = 4
    setShowCount((prevCount) => prevCount + cardsToAdd)
  }

  return (
    <div className="product-page-constraint">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-base-regular text-gray-600 mb-6">
          Related products
        </span>
        <p className="text-2xl-regular text-gray-900 max-w-lg">
          You might also want to check out these products.
        </p>
      </div>

      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-4 gap-y-8">
        {visibleProducts && visibleProducts.map((p) => (
          <li key={p.id}>
            <ProductPreview product={p} />
          </li>
        ))}
        {isLoading &&
          !visibleProducts &&
          repeat(8).map((index) => (
            <li key={index}>
              <SkeletonProductPreview />
            </li>
          ))}
      </ul>
      {showCount < 9 && (
        <div className="flex items-center justify-center mt-8">
          <Button
            isLoading={isLoading}
            onClick={handleShowMore}
            className="w-72"
          >
            Load more
          </Button>
        </div>
      )}
    </div>
  )
}

export default RelatedProducts

"use client"
import React, { useEffect, useRef, useState } from "react"
import { useIntersection } from "@lib/hooks/use-in-view"
import ProductInfo from "@modules/products/templates/product-info"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ImageGallery from "@modules/products/components/image-gallary"
import MobileActions from "@modules/products/components/mobile-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import { PZProductI } from "@/types/product"

type ProductTemplateProps = {
  product: PZProductI;
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {
  const [isOnboarding, setIsOnboarding] = useState<boolean>(false)
  const info = useRef<HTMLDivElement>(null)
  const inView = useIntersection(info, "0px")

  useEffect(() => {
    const onboarding = window.sessionStorage.getItem("onboarding")
    setIsOnboarding(onboarding === "true")
  }, [])

  return (
    <>
      <div className="content-container flex flex-col small:flex-row small:items-start py-6 relative">
        <div className="flex flex-col gap-y-8 w-full">
          <ImageGallery images={product?.image || []} />
        </div>
        <div
          className="small:sticky small:top-20 w-full py-8 small:py-0 small:max-w-[344px] medium:max-w-[400px] flex flex-col gap-y-12"
          ref={info}
        >
          {isOnboarding && <ProductOnboardingCta />}
          <ProductInfo product={product} />
          <ProductTabs product={product} />
        </div>
      </div>
      <MobileActions product={product} show={!inView} /> 
    </>
  )
}

export default ProductTemplate

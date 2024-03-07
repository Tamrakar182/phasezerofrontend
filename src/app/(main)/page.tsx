import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
// import { getProductByCategory } from "@lib/data"
import { data } from "../../../data"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Phase Zero",
  description:
    "Shop all available models only at the Phase Zero. Secure Payment.",
}

export default async function Home() {
  // const data = await getProductByCategory("collection")
  return (
    <>
      <Hero />
      <FeaturedProducts products={data} />
    </>
  )
}

// import { getProductBySlug } from "@lib/data"
import ProductTemplate from "@modules/products/templates"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { data } from "../../../../../data"
import { getStock } from "@lib/data"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = data.find((product) => product.slug === params.slug)
  if (!product) {
    notFound()
  }
  return {
    title: `${product.name} | Phase Zero Store`,
    description: `${product.description}`,
  }
}

export default async function CollectionPage({ params }: Props) {
  const initialProduct = data.find((product) => product.slug === params.slug);
  const res = await getStock(params.slug).catch((err) => {
    notFound();
  })

  if (!initialProduct) {
    notFound();
  }

  const product = {
    ...initialProduct,
    stock: res.stock,
  }

  return <ProductTemplate product={product} />
}

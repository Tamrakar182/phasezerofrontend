import { PZProductI } from "@/types/product"

export const randomisedProducts = (availableProducts: PZProductI[] | undefined) => {
  if (!availableProducts) return []
  const shuffledData = [...availableProducts]
  for (let i = shuffledData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]]
  }
  return shuffledData.slice(0, 9)
}

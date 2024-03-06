import { useEffect, useState } from "react"
import useApi from "@/lib/hooks/useApi"
import { PZCategoryReponseI } from "@/types/product"

const useCategories = (slug: string = "") => {
  const [data, setData] = useState<PZCategoryReponseI[]>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")
  const { fetchData } = useApi()

  const fetchCategory = async () => {
    try {
      setIsLoading(true)
      if (slug === "") {
        const receivedData = await fetchData(`/categories`)
        setData(receivedData?.payload)
        return
      }
      const receivedData = await fetchData(`/categories/${slug}`)
      setData(receivedData?.payload)
    } catch (err: any) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCategory()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  return { error, data, isLoading, fetchCategory }
}

export default useCategories

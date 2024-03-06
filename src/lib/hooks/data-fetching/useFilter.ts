import { useState, useEffect } from "react"
import useApi from "@/lib/hooks/useApi"
import { PZProductI } from "@/types/product"

const useFilter = (query: string = "") => {
  const [data, setData] = useState<PZProductI[]>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")
  const { fetchData } = useApi()

  const fetchFilterData = async () => {
    try {
      setIsLoading(true)
      const receivedData = await fetchData(`/products/filter?${query}`)
      setData(receivedData?.payload)
    } catch (err: any) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchFilterData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return { error, data, isLoading, fetchFilterData }
}

export default useFilter

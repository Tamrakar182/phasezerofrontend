import { useEffect, useState } from "react";
import useApi from "@/lib/hooks/useApi";
import { PZCollectionsResponseI } from "@/types/product";

const useCollections = (slug: string = "") => {
  const [data, setData] = useState<PZCollectionsResponseI[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const { fetchData } = useApi();

  const fetchCollection = async () => {
    try {
      setIsLoading(true);
      if (slug === "") {
        const receivedData = await fetchData(`/collections`);
        setData(receivedData?.payload);
        return;
      }
      const receivedData = await fetchData(`/collections/${slug}`);
      setData(receivedData?.payload);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCollection();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return { error, data, isLoading, fetchCollection };
};

export default useCollections;

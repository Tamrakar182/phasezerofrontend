import { AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import axios from "@/lib/util/axios"

const useApi = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<AxiosResponse<any, any> | null>(null);
  const [error, setError] = useState<string>("");

  const fetchData = useCallback(async (url: string) => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setData(response.data);
      setError("");
      return response?.data;
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
    return null;
  }, []);

  const post = async (url: string, newData: any) => {
    try {
      setLoading(true);
      const res = await axios.post(url, newData);
      setError("");
      return res.data;
    } catch (err) {
      setError("Error updating data");
    } finally {
      setLoading(false);
    }
  };

  const patch = async (url: string, id: string, newData: any) => {
    try {
      setLoading(true);
      const res = await axios.patch(`${url}/${id}`, newData);
      setError("");
      return res.data;
    } catch (err) {
      setError("Error updating data");
    } finally {
      setLoading(false);
    }
  };

  const update = async (url: string, id: string, newData: any) => {
    try {
      setLoading(true);
      const res = await axios.put(`${url}/${id}`, newData);
      setError("");
      return res.data;
    } catch (err) {
      setError("Error updating data");
    } finally {
      setLoading(false);
    }
  };

  const remove = async (url: string, id: string) => {
    try {
      setLoading(true);
      const res = await axios.delete(`${url}/${id}`);
      setError("");
      return res.data;
    } catch (err) {
      setError("Error deleting data");
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, error, fetchData, post, update, remove, patch };
};

export default useApi;

import {
  PZProductI,
  PZCategoryReponseI,
  PZCollectionsResponseI,
  PZOrderResponseI,
  PZAddressResponseI,
} from "@/types/product"
import axios from "@/lib/util/axios"
// import { auth } from "@lib/util/authUtil"

/**
 * Fetches a product by slug
 * @param slug (string) - The slug of the product to retrieve
 * @returns (array) - A product (should only be one)
 * @throws Will throw an error if the axios request fails.
 */
export async function getProductBySlug(slug: string): Promise<PZProductI> {
  try {
    const response = await axios.get(`/products/${slug}`)
    const { payload } = response.data
    return payload
  } catch (err) {
    throw err
  }
}

/**
 * Fetches a product by its category from the "/products" endpoint.
 * @param {string} category - The category of the product to fetch.
 * @returns {Promise<PZProductI[]>} - A promise that resolves to an object containing the product data.
 * @throws Will throw an error if the axios request fails.
 */
export async function getProductByCategory(
  category: string
): Promise<PZProductI[]> {
  try {
    const response = await axios.get(`/products/filter?category=${category}`)
    const { payload } = response.data
    return payload
  } catch (err) {
    throw err
  }
}

/**
 * Retrieves the categories from the server.
 * @returns A promise that resolves to an array of PZCategoryReponseI objects.
 * @throws If an error occurs while fetching the categories.
 */
export async function getCategories(): Promise<PZCategoryReponseI[]> {
  try {
    const response = await axios.get(`/categories`)
    const { payload } = response.data
    return payload
  } catch (err) {
    throw err
  }
}

/**
 * Retrieves collections from the server.
 * @returns A promise that resolves to an array of PZCollectionsResponseI objects.
 * @throws If an error occurs during the retrieval process.
 */
export async function getCollections(): Promise<PZCollectionsResponseI[]> {
  try {
    const response = await axios.get(`/collections`)
    const { payload } = response.data
    return payload
  } catch (err) {
    throw err
  }
}

/**
 * Retrieves products by collection ID.
 * @param collectionId - The ID of the collection.
 * @returns A Promise that resolves to a PZCollectionsResponseI object.
 * @throws If an error occurs during the API request.
 */
export async function getProductsByCollection(
  collectionId: number
): Promise<PZCollectionsResponseI> {
  try {
    const response = await axios.get(`/collections/${collectionId}`)
    const { payload } = response.data
    return payload
  } catch (err) {
    throw err
  }
}

/**
 * Retrieves all products from the server.
 * @returns A Promise that resolves to an array of PZOrderResponseI objects.
 * @throws If an error occurs during the API request.
 */
// export async function getOrders(): Promise<PZOrderResponseI[]> {
//   try {
//     const axiosInstance = await axiosAuthConfig()
//     const session = await auth()
//     const response = await axiosInstance.get(
//       `/users/${session?.user.payload.id}/order`
//     )
//     const { payload } = response.data
//     return payload
//   } catch (err) {
//     throw err
//   }
// }

/**
 * Retrieves a single order from the server.
 * @param orderId - The ID of the order to retrieve.
 * @returns A Promise that resolves to a PZAddressResponseI object.
 * @throws If an error occurs during the API request.
 */
// export async function (): Promise<PZAddressResponseI[]> {
//   try {
//     const axiosInstance = await axiosAuthConfig()
//     const session = await auth()
//     const response = await axiosInstance.get(
//       `/users/${session?.user.payload.id}/address`
//     )
//     const { payload } = response.data
//     return payload
//   } catch (err) {
//     throw err
//   }
// }

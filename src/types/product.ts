export interface PZProductI {
  id: number
  slug: string
  name: string
  description: string
  size_chart: string
  info: string[]
  image: string[]
  price: number
  available_stock: number
  collectionId: number
  stock: PZProuctStockI[]
  categories: PZCategoryI[]
}

export interface PZCartProductI {
  id?: string;
  product: {
    available_stock: number;
    collectionId: number;
    description: string;
    id: number;
    image: string[];
    info: string[];
    name: string;
    price: number;
    slug: string;
  };
  color: string;
  size: string;
  quantity: number;
}

export interface PZCategoryI {
  id: number
  name: string
}

export interface PZCategoryReponseI {
  id: number
  name: string
  products: PZProductI[]
}

export interface PZCollectionsResponseI {
  id: number
  name: string
  products: PZProductI[]
}

export interface PZOrderResponseI {
  id: string
  order_total: number
  order_date: string
  order_status: string
  payment_method: string
  address: PZAddressResponseI
  items: PZOrderItemI[]
}

export interface PZAddressResponseI {
  id?: string
  street: string
  city: string
  state: string
  postal_code: string
}

export interface PZOrderItemI {
  id: string
  orderId: string
  productId: number
  color: string
  size: string
  quantity: number
  price: number
  product: PZProductI
}

export interface PZProuctStockI {
  color: string
  stockQuantity: number
  size: string
}

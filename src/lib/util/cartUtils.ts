import { PZCartProductI } from "@/types/product"

export function updateCart(product: PZCartProductI, cart: PZCartProductI[]) {
  const existingCartItemIndex = cart.findIndex(
    (item) =>
      item.product.id === product.product.id &&
      item.size === product.size &&
      item.color === product.color
  )

  if (existingCartItemIndex === -1) {
    cart.push({ ...product })
  } else {
    cart[existingCartItemIndex].quantity += product.quantity
  }

  return cart
}

export function mergeCarts(cart1: PZCartProductI[], cart2: PZCartProductI[]) {
  cart2.forEach((product2) => {
    const existingCartItemIndex = cart1.findIndex(
      (product1) =>
        product1.product.id === product2.product.id &&
        product1.size === product2.size &&
        product1.color === product2.color
    )

    if (existingCartItemIndex === -1) {
      cart1.push({ ...product2 })
    } else {
      cart1[existingCartItemIndex].quantity += product2.quantity
    }
  })

  return cart1
}

export function calculateTotalAmount(cart: PZCartProductI[]) {
  return cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  )
}

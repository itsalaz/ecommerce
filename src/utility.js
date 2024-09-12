
export const saveCartToLocalStorage = (cart) => {
  const cartData = {
    items: cart,
    timestamp: new Date().getTime()
  }
  localStorage.setItem('cart', JSON.stringify(cartData))
}

export const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem('cart')
  if (!cartData) {
    return []
  }

  const { items, timestamp } = JSON.parse(cartData)
  const oneDay = 24 * 60 * 60 * 1000 // one day in milliseconds 
  if (new Date().getTime() - timestamp > oneDay) {
    localStorage.removeItem('cart')
    return []
  }
  return items
}
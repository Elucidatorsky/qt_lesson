const _products = [
    {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
    {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
  ]
  
  export default {
    getProducts(cb) {
      console.log('getProducts in shop')
      setTimeout(() => {
        console.log('time getProducts in shop')
        cb(_products);
      }, 1000)
    }
  }
export function debounce (func, delay) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
export function findIndex (list, song) {
  return list.findIndex((item) => { // 防止list里面有多重数组
    return item.id === song.id
  })
}

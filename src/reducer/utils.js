export function arrToMap(arr) {
  return arr.reduce(
    (acc, item) => ({
      ...acc,
      [item.id]: item
    }),
    {}
  )
}

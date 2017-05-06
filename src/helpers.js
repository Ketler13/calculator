export const collectDigitsAndDotsTogether = (array, addition) => {
  return array.map((elem, i, arr) => {
    if (i !== (arr.length - 1)) return elem
    return elem.concat(addition)
  })
}

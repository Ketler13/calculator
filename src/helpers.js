export const collectDigitsAndDotsTogether = (array, addition) => {
  return array.map((elem, i, arr) => {
    if (i !== (arr.length - 1)) return elem
    return elem.concat(addition)
  })
}

export const addFuncToLatestValue = (array, func) => {
  return array.map((elem, i, arr) => {
    if (i !== (arr.length - 1)) return elem
    return `${func}(${elem})`
  })
}

export const changeSignOfLastValue = array => {
  return array.map((elem, i, arr) => {
    if (i !== (arr.length - 1)) return elem
    if (elem.includes('-')) {
      return elem.slice(1)
    } else {
      return `-${elem}`
    }
  })
}

export const functions = {
  sin(x) {
    return Math.sin(x)
  },
  cos(x) {
    return Math.cos(x)
  },
  tan(x) {
    return Math.tan(x)
  },
  ctg(x) {
    return Math.cos(x) / Math.sin(x)
  },
  sqrt(x) {
    return Math.sqrt(x)
  },
  revDiv(x) {
    return 1 / x
  },
  log(x) {
    return Math.log(x) / Math.LN10
  },
  ln(x) {
    return Math.log(x)
  },
  cube(x) {
    return x * x * x
  },
  sqr(x) {
    return x * x
  },
  pow(x, y) {
    return Math.pow(x, y)
  },
  tenPow(x) {
    return Math.pow(10, x)
  }
}

export function fact(x) {
  return (x != 1) ? x * fact(x - 1) : 1
}

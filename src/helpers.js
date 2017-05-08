export const collectDigitsAndDotsTogether = (array, addition) => {
  return array.map((elem, i, arr) => {
    if (i !== (arr.length - 1)) return elem
    return elem.concat(addition)
  })
}

export const deleteLastSymbol = array => {
  const proxy = array.filter((elem, i, arr) => {
    if (i !== (arr.length - 1)) return elem
    if (elem.length === 1) return false
    return elem
  })
  return proxy.map((elem, i, arr) => {
    if (i !== (arr.length - 1)) return elem
    if (elem.length > 1) return elem.slice(0, elem.length - 1)
    return elem
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

const degToRad = deg => {
  return deg * Math.PI / 180;
}

export const functions = {
  sin(x) {
    return Math.sin(x)
  },
  sind(x) {
    return Math.sin(degToRad(x))
  },
  cos(x) {
    return Math.cos(x)
  },
  cosd(x) {
    return Math.cos(degToRad(x))
  },
  tan(x) {
    return Math.tan(x)
  },
  tand(x) {
    return Math.tan(degToRad(x))
  },
  ctg(x) {
    return Math.cos(x) / Math.sin(x)
  },
  ctgd(x) {
    return Math.cos(degToRad(x)) / Math.sin(degToRad(x))
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
  },
  toUSD(value) {
    return eval(value)
  },
  toUAH(value) {
    return eval(value)
  }
}

export function fact(x) {
  return (x != 1) ? x * fact(x - 1) : 1
}

export const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '(', ')', '.', 'Enter', '=', 'Backspace']

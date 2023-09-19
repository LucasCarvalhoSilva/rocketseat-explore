const activity01 = () => {
  console.log("Hellow World")
  alert("Hello World!")
}

const sum = (valor1, valor2) => {
  return valor1 + valor2
}

const activity02 = () => {
  console.log(sum(10, 15))
}

const isNumber = (value) => {
  if(typeof value === "number") {
    return "é um número"
  } else {
    return "não é um número"
  }
}

const activity03 = (value) => {
  console.log(isNumber(value))
}

const isString = (value) => {
  if(typeof value === "string") {
    return "é uma string"
  } else {
    return "não é uma string"
  }
}

const activity04 = (value) => {
  console.log(isString(value))
}

const isBoolean = (value) => {
  if(typeof value === "boolean") {
    return "é um booleano"
  } else {
    return "não é um booleano"
  }
}

const activity05 = (value) => {
  console.log(isBoolean(value))
}

const minus = (valor1, valor2) => {
  return valor1 - valor2
}

const activity06 = (value1, value2) => {
  console.log(minus(value1, value2))
}

const times = (valor1, valor2) => {
  return valor1 * valor2
}

const activity07 = (value1, value2) => {
  console.log(minus(value1, value2))
}

const dividedBy = (valor1, valor2) => {
  return valor1 / valor2
}

const activity08 = (value1, value2) => {
  console.log(minus(value1, value2))
}

const isEven = (number) => {
  if (number % 2 === 0) {
    return "É um número par"
  } else {
    return "Não é um número par"
  }
}

const activity09 = (value) => {
  console.log(isEven(value))
}

const isOdd = (number) => {
  if (number % 1 === 0) {
    return "É um número impar"
  } else {
    return "Não é um número impar"
  }
}

const activity10 = (value) => {
  console.log(isOdd(value))
}
activity06(8, 10)
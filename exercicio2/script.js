// # Exercício 2
// Crie um array de números que contenha 8 números.
// Depois disso, utilize este array para criar duas funcões de array `map()`:

// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;
// 2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;

const array = [1,2,3,4,5,6,7,8]

const primFuncao = array.map(valor => {
    const triplos = valor*3
   return triplos
}
)

const segFuncao = array.map(valor => {
    const metades = valor/2
   return metades
}
)

console.log(primFuncao)
console.log(segFuncao)
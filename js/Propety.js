const estudiante = {
    name : 'juan',
    age: 15,
    id: 1,
    curse: 'A-1'
}

//console.log(Object.getOwnPropertyDescriptors(estudiante))


//caso 1
/*estudiante.name = 'Juan'
console.log('antes de la asignacion')
console.log(estudiante)

Object.defineProperty(estudiante, "name", {
    value: estudiante.name,
    writable: false,
    enumerable: true,
    configurable: true
})
estudiante.name = 'Ana'
console.log('despues de la asignacion')
console.log(estudiante)*/

//caso 2

// console.log('antes de la invocarlo')
//  console.log(estudiante)
//  console.log(Object.keys(estudiante))
//  Object.defineProperty(estudiante, "name", {
//      value: estudiante.name,
//   writable: true,
//     enumerable: false,
//      configurable: true
// })

//  console.log('despues de la despues')
//  console.log(Object.keys(estudiante))
//  console.log(estudiante)


//caso 3

/*console.log('antes de la intentar borrarlo')
delete estudiante.age
console.log(estudiante)

Object.defineProperty(estudiante, "name", {
    value: estudiante.name,
    writable: true,
    enumerable: true,
    configurable: false
})

console.log('despues de la intentar borrarlo')
delete estudiante.name
console.log(estudiante)*/

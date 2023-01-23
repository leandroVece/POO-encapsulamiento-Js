const estudiante = {
    name : 'juan',
    age: 15,
    id: 1,
    curse: {
        name : 'Matematicas' 
    }

}

/*const estudiante2 = estudiante

console.log("original");
console.log(estudiante);
console.log("copia");
console.log(estudiante2);

estudiante2.name = 'Ana'

console.log("original");
console.log(estudiante);
console.log("copia");
console.log(estudiante2);
*/

/*const estudiante2 = Object.assign({},estudiante)
const estudiante3 = Object.create(estudiante)


estudiante2.name = 'Ana'
estudiante3.name = 'pedro'
estudiante.curse.name = 'Js'

console.log("original");
console.log(estudiante);
console.log("copias");
console.log(estudiante2);
console.log(estudiante3);*/

const str = JSON.stringify(estudiante)
const estudiante2 = JSON.parse(str);

estudiante2.name = 'Ana'
estudiante2.curse.name = 'Js'

console.log("original");
console.log(estudiante);
console.log("copia");
console.log(estudiante2);

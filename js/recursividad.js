var numero = 0;

const estudiante = {
    name: 'juan',
    age: 15,
    id: 1,
    curse: {
        name: 'Matematicas'
    },
    metodo() {
        console.console.log("hola soy un metodo");
    }
}


function funcionRecursiva(numero) {
    console.log(numero);
    if (numero < 5) {
        return funcionRecursiva(numero + 1);
    } else {
        return 5;
    }
}

funcionRecursiva(numero);

function isObject(subject) {
    return typeof subject == "object"
}
function esUnArray(subject) {
    return Array.isArray(subject);
}

function deepCopy(subject) {
    let copySubject;
    const subjectIsArray = esUnArray(subject);
    const subjectIsObject = isObject(subject);

    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }
    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);

        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key]
            }
        }
    }

    return copySubject;
}

const estudiante2 = deepCopy(estudiante)
console.log("original");
console.log(estudiante);
console.log("copia");
console.log(estudiante2);
// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: false // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Inicializar la matriz
let butacas = setup();

function reservarAsientos(butacas, cantidad){

    if(cantidad > butacas[0].length) return new Set(); // Si la cantidad > NButacas

    for(let i = butacas.length -1; i >= 0; -i--){ // Iniciamos por la ultima fila
        let fila = butacas[i], disponibles = [];

        for(let asiento of fila){ 
            asiento.estado ? disponibles = [] : disponibles.push(asiento.id);
            if(disponibles.length === cantidad) return new Set(disponibles); // Pocos asientos juntos
        }
    }

    return new Set();
}

// Imprimir la matriz
//console.log(butacas);

// Probando la seleccion de butacas
//console.log(reservarAsientos(butacas, 5));
//console.log(disponibles);

// Cantidad supera el numero de butacas
//console.log(reservarAsientos(butacas, 5));

// Colocamos un asiento ocupado en la fila mas lejana
//butacas[9][5].estado = true; 
//console.log(reservarAsientos(butacas, 6)); // Si no hay 6 consecutivos, devuelve un Set vacío

// Ultima fila como ocupada
butacas[9].forEach(asiento => asiento.estado = true);
console.log(reservarAsientos(butacas, 4)); // Buscará en la siguiente fila mas lejana


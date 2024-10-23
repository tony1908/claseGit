// Comment added.
// Inicializamos una lista que contiene los primeros dos números de Fibonacci
let fibonacciSequence = [0, 1];

// Variables para los dos últimos números iniciales de la secuencia
let previousNumber = 0;
let currentNumber = 1;

// Uso de un bucle while para calcular la secuencia hasta que el siguiente número exceda 100
while (true) {
  let nextNumber = previousNumber + currentNumber; // Calculo del siguiente número en la secuencia

  if (nextNumber > 100) {
    break; // Salir del bucle si el siguiente número es mayor que 100
  }

  fibonacciSequence.push(nextNumber); // Añadir el siguiente número a la lista

  // Actualizar los dos últimos números para la próxima iteración
  previousNumber = currentNumber;
  currentNumber = nextNumber;
}

console.log(fibonacciSequence); // Mostramos la secuencia de Fibonacci hasta 100


 import {printMatrix, gauss} from "./maths.js"

document.addEventListener("DOMContentLoaded", function () {
  // Obtener la tabla y las celdas de la misma
  const table = document.getElementById('table');
  const submitButton = document.getElementById('submitButton');
  const matrix = document.getElementById('matrix');

  // Crear una matriz 3x3
  let A = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  submitButton.addEventListener("click", () => {
    for (let i = 0; i < table.rows.length; i++) {
      for (let j = 0; j < table.rows[i].cells.length; j++) {
        A[i][j] = table.rows[i].cells[j].getElementsByTagName('input')[0].value;
      }
      // Nested for where we access to the first element input value (there can be several inputs un the same cell)
      // in row i and cell j to store it in our matrix
    }

    printMatrix(A);
  });


});

/* TODO
function modifyOrder () {

}
*/

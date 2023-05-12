 import {printMatrix, gauss, dete} from './maths.js'

document.addEventListener("DOMContentLoaded", function () {

  const table = document.getElementById('table');
  const submitButton = document.getElementById('submitButton');
  const matrix = document.getElementById('matrix');
  let order = 3;

  const I = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
    ];
  let A = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 4, 3]
  ];

  printMatrix(A, I);

  submitButton.addEventListener("click", (event) => {
    for (let i = 0; i < order; i++) {
      for (let j = 0; j < order; j++) {
        A[i][j] = table.rows[i].cells[j].getElementsByTagName('input')[0].value;
        console.log(`${i} ${j} insertion`);
        }
      }
      // Nested for where we access to the first element input value (there can be several inputs in the same cell)
      // in row i and cell j to store it in our matrix

    gauss(A, I);
  });


});

/* TODO
function modifyOrder () {

}
*/

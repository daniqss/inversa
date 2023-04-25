// import {gauss} from "./maths.js"
// import { addition } from "./maths.js";
// console.log(addition(2, 3));

document.addEventListener("DOMContentLoaded", function () {
  // Obtener la tabla y las celdas de la misma
  const table = document.getElementById('table');
  const cells = table.getElementsByTagName('td'); // table data
  const submitButton = document.getElementById('submitButton');
  const matrix = document.getElementById('matrix');

  function printMatrix(A) {
    let output = `            
    $$\\begin{equation} \\left( \\begin{array} 
    ${A[0][0]} & ${A[0][1]} & ${A[0][2]} & 1 & 0 & 0\\\\
    ${A[1][0]} & ${A[1][1]} & ${A[1][2]} & 0 & 1 & 0\\\\
    ${A[2][0]} & ${A[2][1]} & ${A[2][2]} & 0 & 0 & 1\\\\
    \\end{array} \\right) \\end{equation}$$`;

    // $$\begin{equation} \left( \begin{array}{ccc|ccc} 
    //   ${A[0][0]} & ${A[0][1]} & ${A[0][2]} & 1 & 0 & 0\\
    //   ${A[1][0]} & ${A[1][1]} & ${A[1][2]} & 0 & 1 & 0\\
    //   ${A[2][0]} & ${A[2][1]} & ${A[2][2]} & 0 & 0 & 1\\
    //   \end{array} \right) \end{equation}$$`;
    //   
    //   Original latex code. In JS we use \ before a special character as \b to mark 
    //   that it's not a special character (in this case \begin)
    
    matrix.innerText = output;
    }

  // Crear una matriz 3x3
  let A = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  submitButton.addEventListener("click", () => {
    console.log("submit button is working jeje");
    // Iterar a través de las celdas de la tabla y guardar su contenido en la matriz
    for (let i = 0; i < table.rows.length; i++) {
      for (let j = 0; j < table.rows[i].cells.length; j++) {
        A[i][j] = table.rows[i].cells[j].getElementsByTagName('input')[0].value;
        console.log(`fila ${i + 1} columna ${j + 1} elemento ${A[i][j]}`);
      }
      // var row = Math.floor(i / 3);
      // var col = i % 3;
      // A[row][col] = cells[i].getElementsByTagName("input")[0].value;
      // console.log(`fila ${row + 1} columna ${col + 1} elemento ${A[row][col]}`);
    }

    printMatrix(A);
  });


});

/* TODO
function modifyOrder () {

}
*/

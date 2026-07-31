// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

const readlineSync = require('readline-sync');

function readMatrix() {
    const rows = readlineSync.questionInt('Enter number of rows: ');
    const columns = readlineSync.questionInt('Enter number of columns: ');
    const matrix = [];

    for (let i = 0; i < rows; i++) {
        const rowText = readlineSync.question(`Enter row ${i + 1}: `);
        const row = rowText.split(' ').map(Number);
        matrix.push(row);
    }

    console.log();
    return matrix;
}

function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let line = '';
        for (let j = 0; j < matrix[i].length; j++) {
            line += matrix[i][j] + '   ';
        }
        console.log(line.trimEnd());
    }
}

function transposeMatrix(matrix) {
    const transposed = [];
    for (let c = 0; c < matrix[0].length; c++) {
        const newRow = [];
        for (let r = 0; r < matrix.length; r++) {
            newRow.push(matrix[r][c]);
        }
        transposed.push(newRow);
    }
    return transposed;
}

function addMatrices(matrixA, matrixB) {
    const result = [];
    for (let i = 0; i < matrixA.length; i++) {
        const newRow = [];
        for (let j = 0; j < matrixA[i].length; j++) {
            newRow.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(newRow);
    }
    return result;
}

function multiplyMatrices(matrixA, matrixB) {
    const result = [];
    for (let i = 0; i < matrixA.length; i++) {
        const newRow = [];
        for (let j = 0; j < matrixB[0].length; j++) {
            let total = 0;
            for (let k = 0; k < matrixA[0].length; k++) {
                total += matrixA[i][k] * matrixB[k][j];
            }
            newRow.push(total);
        }
        result.push(newRow);
    }
    return result;
}

function main() {
    console.log('Part A - Transpose Matrix');
    const originalMatrix = readMatrix();
    console.log('Original Matrix:');
    displayMatrix(originalMatrix);

    const transposedMatrix = transposeMatrix(originalMatrix);
    console.log('\nTransposed Matrix:');
    displayMatrix(transposedMatrix);

    console.log('\nPart B - Add Two Matrices');
    console.log('Matrix A');
    const matrixA = readMatrix();
    console.log('Matrix B');
    const matrixB = readMatrix();
    const addedMatrix = addMatrices(matrixA, matrixB);
    console.log('\nSum of Matrices:');
    displayMatrix(addedMatrix);

    console.log('\nPart C - Multiply Two Matrices');
    console.log('Matrix A');
    const firstMatrix = readMatrix();
    console.log('Matrix B');
    const secondMatrix = readMatrix();
    const multipliedMatrix = multiplyMatrices(firstMatrix, secondMatrix);
    console.log('\nProduct of Matrices:');
    displayMatrix(multipliedMatrix);
}

main();


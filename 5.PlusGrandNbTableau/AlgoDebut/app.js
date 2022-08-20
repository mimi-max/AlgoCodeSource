function plusGrandNb(arr) {

  let plusGrand = []
  for (let i = 0; i < arr.length; i++) {
    let max = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j]
      }
    }
    plusGrand.push(max)
  }

  return plusGrand
}
// function plusGrandNb(arr) {
//   let maximum = [];
//   arr.forEach((item) => {
//     let result = item.reduce((accumulateur, valeurCourante) => {
//       if (valeurCourante > accumulateur) {
//         return valeurCourante
//       } else {
//         return accumulateur
//       }

//     }, 0)
//     maximum.push(result)
//   })
//   return maximum
// }


console.log(plusGrandNb([
  [1, 5, 8, 3],
  [15, 47, 88, 26],
  [32, 35, 37, 39],
  [3000, 1001, 857, 1]
]));



// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui prends un tableau composé de plusieurs tableaux en
// argument et qui retourne un seul tableau qui contient la valeur maximale de
// chaque tableaux.

// ----------------- CONSEILS -----------------

// Une boucle "for" permet d'itérer dans un tableau.
// Vous n'êtes pas limité à une boucle "for", vous pouvez en utiliser plusieurs...

// la méhode [].push(), pour pousser un élément dans un tableau;
// Testez :
// var arrTest = [0,10];
// arrTest.push(80);
// console.log(arrTest);





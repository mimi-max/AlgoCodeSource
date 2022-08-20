function finSimilaire(str, fin) {
  let n= str.length - fin.length
  let sameLetter ="";

  for(let i=n;i<=str.length-1;i++){
    sameLetter+=str[i];
  }
  
  if (sameLetter===fin){
      return "la fin est similaire"
    }else{
      return'pas similaire'
    }
 

}

console.log(finSimilaire("ours", "rs"));


// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui vous informe si les lettres(second arguments),
// correspondent à la fin du mot(premier argument).
// Si elles correspondent, retournez "La fin est similaire"
// Sinon "La fin ne correspond pas".


// ----------------- CONSEILS -----------------


// La fonction "slice" permet de découper une chaine de caractère.
// Essayez cela : 
// console.log("hello".slice(2));

// La méthode length permet de donner la longueur d'une chaine.
// Essayez cela :
// console.log("hello".length);

// Mais il y a des dizaines de façon de résoudre cet algorithme(et les autres...),
// N'hésitez pas à le faire à votre façon et à TESTER vos idées(c'est important). 



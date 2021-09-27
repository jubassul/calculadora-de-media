const getNote = () => {  
let firstNote = parseFloat(document.getElementById("firstNote").value);
let secondNote = parseFloat(document.getElementById("secondNote").value);
let thirdNote = parseFloat(document.getElementById("thirdNote").value);
let fourthNote = parseFloat(document.getElementById("fourthNote").value);
let SumTotalNote = (firstNote + secondNote + thirdNote + fourthNote) / 4

let note = SumTotalNote.toFixed(1)
console.log(note)
  
if (note >=6) {
   alert(`Nota = ${note} Parabéns, Você está Aprovado!`)
} else {
   alert(`Nota = ${note} Que Pena, Você está Reprovado!`)
}
}
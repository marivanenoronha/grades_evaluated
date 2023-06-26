console.log("Start of application")

const assessmentOne = 4
const assessmentTwo = 8
let assessmentOptional = 2

if(assessmentOptional == undefined) {
    assessmentOptional = -1
    console.log(assessmentOptional)
}

function calculteAvarege(noteOne, noteTwo, noteOptional) {
    if(noteOne < noteTwo){
        noteOne = noteOptional
    }else if(noteTwo < noteOne) {
        noteTwo = noteOptional
    }

    console.log(noteOne, noteTwo, noteOptional)
}

calculteAvarege(assessmentOne, assessmentTwo, assessmentOptional)
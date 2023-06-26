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

    const avarege = (noteOne + noteTwo) / 2
    return avarege
}

function messageAvarege(avarege) {
    if(avarege >= 6) {
        console.log(`Approved: ${avarege}`)
    }else if(avarege < 3) {
        console.log(`Disapproved: ${avarege}`)
    }else{
        console.log(`Exam: ${avarege}`)
    }
}

const avaregeStudentOne = calculteAvarege(assessmentOne, assessmentTwo, assessmentOptional)
const avaregeStudentTwo = calculteAvarege(2, 5, 7)
messageAvarege(avaregeStudentOne)
messageAvarege(avaregeStudentTwo)
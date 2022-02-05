/* // Problem -1

function anaToVori(ana) {
    let convert = ana / 16;
    return convert;
}
var myAna = 120;
var vori = anaToVori(myAna)
console.log(vori);
 */




// Problem -2
/* 
function pandaCost(singara, samucha, zilapi) {
    const perSingara = 7;
    const perSamucha = 10;
    const perZilapi = 15;
    const singaraQuantity = singara * perSingara;
    const samuchaQuantity = samucha * perSamucha;
    const zilapiQuantity = zilapi * perZilapi;
    const totalQuantity = singaraQuantity + samuchaQuantity + zilapiQuantity;
    return totalQuantity;

} 

const firstOption = pandaCost(0, 0, 2);
console.log(firstOption);
 */




// Problem -3

/* 
function picnicBudget(hundedPeopleBudget) {
    const firstHundedPeople = 5000;
    const secondHundedPeople = 4000;
    const thirdHundedPeople = 3000;
    
    if (hundedPeopleBudget <= 100) {
        const firstbudget = hundedPeopleBudget * firstHundedPeople;
        return firstbudget;
    }
    else if (hundedPeopleBudget <= 200) {
        const firstShift = 100 * firstHundedPeople;
        const restPeopleBudget = hundedPeopleBudget - 100;
        const secondShift = restPeopleBudget * secondHundedPeople;
        const totalPeopleBudget = firstShift + secondShift;
        return totalPeopleBudget;
    }
    else {
        const firstShift = 100 * firstHundedPeople;
        const secondShift = 100 * secondHundedPeople;
        const restBudget = hundedPeopleBudget - 200;
        const newBudget = thirdHundedPeople * restBudget;
        const totalPeopleBudget = firstShift + secondShift + newBudget;
        return totalPeopleBudget;



    }
}

let result = picnicBudget(205);
console.log(result)  


 

 */







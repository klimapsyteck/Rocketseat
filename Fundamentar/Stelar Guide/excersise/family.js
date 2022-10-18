
const receive = [100, 809, 740, 1400, 100, 1000]
const bills = [1500, 250, 200, 950, 800]

function calcAmout(){
    let sumReceive = 0;
    let sumBills = 0;

    for(let value of receive ){
        sumReceive += value
    }

    for(let value of bills ){
        sumBills += value
    }
       
    return sumReceive - sumBills
}

function situation(){
    let status = calcAmout()

    if(status > 0){
        console.log("Positive")
    }else {
        console.log("Negative")
    }
}

situation()
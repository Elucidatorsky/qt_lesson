// total/num*2 抢的公平
function hongbao(total, num) {
    const arr = [];
    restAmount = total;
    restNum = num;
    for(var i = 0; i < num - 1 ; i++){
        let amount = parseFloat(Math.random() * (restAmount/restNum)*2).toFixed(2);
        restAmount -= amount;
        restNum --;
        arr.push(amount);
    } 
    arr.push(restAmount.toFixed(2));
    return arr;
}
console.log(hongbao(1,20));
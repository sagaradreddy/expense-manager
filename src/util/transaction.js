import { genRandId } from "./genid";
//  const to get store the data
let localStorageTransactions = JSON.parse(localStorage.getItem("transaction"))

// to read all transaction 
let myTransactions = localStorage.getItem("transaction")!==null ? localStorageTransactions : [];

// update localStorage data
let updateLocalStorage= () => {
    localStorage.setItem("transaction",JSON.stringify(myTransactions))
}


// store transaction 
let addTransaction = (data)=>{
    const single ={
        id:genRandId(),
        txt : data.txt,
        amount:data.amount
 };
    myTransactions.push(single);
updateLocalStorage(myTransactions);
}
// remove transaction
const removeTransaction = (id)=>{
console.log('remove id =',id)
 myTransactions= myTransactions.filter(item => item.id !== id);
window.location.href = "/";
updateLocalStorage()

}
// return all stored transaction
const readAll=() =>{
    return myTransactions;
}

export {addTransaction,readAll,removeTransaction}










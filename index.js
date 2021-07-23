const bill=document.querySelector("#bill")
const cash=document.querySelector("#cash")

const btnGetChange=document.querySelector("#btn_getChange")
const noOfNotes=document.querySelectorAll(".noOfNotes");

console.log("noOfNotes :"+noOfNotes)

const curr=[2000,500,100,50,20,10,5,2,1]
var result=[0,0,0,0,0,0,0,0,0];

function initiate()
{
    console.log("initiate working" )
    let bill_amount=parseInt(bill.value);
    let cash_given=parseInt(cash.value); //show only if bill_amt is valid


    if(bill_amount>0 && cash_given>=bill_amount)
    {
        let change=cash_given-bill_amount
        console.log(typeof(change)+" "+change)
        let output=getChange(change)
        console.log(output)
    }

}


function getChange(change)
{
    console.log("getting change")
    
    for(let i=0;i<curr.length;i++)
    {
        if(change>=curr[i])
        {
            let notes=Math.floor(change/curr[i])
            change-=(notes*curr[i])
            result[i]=notes
            noOfNotes[i].innerHTML=notes
        }
    }
    return result
}




btnGetChange.addEventListener('click',()=>
{
    console.log("Clicked")
    initiate()
})
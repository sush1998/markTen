const bill=document.querySelector("#bill")
const cash=document.querySelector("#cash")

const errorBill=document.querySelector("#errorBill")
const errorCash=document.querySelector("#errorCash")

const btn_next=document.querySelector("#btn_next")
const btnGetChange=document.querySelector("#btn_getChange")
const noOfNotes=document.querySelectorAll(".noOfNotes");
const display_cashGiven=document.querySelector(".display_cashGiven")
const output_content=document.querySelector(".output_content")

console.log("noOfNotes :"+noOfNotes)

const curr=[2000,500,100,50,20,10,5,2,1]



function checkBill(){
    const bill_amount=parseInt(bill.value);
    if(!isNaN(bill_amount) && bill_amount>0)
    {
        console.log("valid bill")
        //show cash given
        display_cashGiven.style.display="block"
        return true
    }
}

function checkCashGiven(bill_amount,cash_given)
{
    if(!isNaN(cash_given) && cash_given>=bill_amount)
    {
        console.log("Valid Cash given")
        return true
    }
}

    function getChange(bill_amount,cash_given)
    {
        let result=[0,0,0,0,0,0,0,0,0];
        let change=cash_given-bill_amount;
        console.log("getting change"+" "+change)
        for(let i=0;i<curr.length;i++)
        {
            if(change>=curr[i])
            {
                let notes=Math.floor(change/curr[i])
                change-=(notes*curr[i])
                result[i]=notes
                noOfNotes[i].innerHTML=notes
            }
            else{
                noOfNotes[i].innerHTML=0
            }
        }
        console.log(result)
    }

btn_next.addEventListener('click',()=>
{
    if(!checkBill())
    {
        errorBill.innerHTML="Enter valid bill Amount"
    }
    else{
        errorBill.innerHTML=""
    }

})

btnGetChange.addEventListener('click',()=>
{
    const bill_amount=parseInt(bill.value);
    const cash_given=parseInt(cash.value)
    if(!checkCashGiven(bill_amount,cash_given))
    {
        errorCash.innerHTML="Please enter valid cash"
    }
    else
    {
        errorCash.innerHTML=""
        getChange(bill_amount,cash_given)
        output_content.style.display="block"
    }
})
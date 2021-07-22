const curr=[1,5,10,20,100,500,1000]


var result=[0,0,0,0,0,0,0];

let bill=50;
let amount=500;

let change=amount-bill;

let res=chan(change)
console.log(res)

function chan(change)
{
    for(let i=curr.length-1;i>=0;i--)
    {
        if(change>=curr[i])
        {
            let notes=Math.floor(change/curr[i])
            console.log(curr[i]+' '+notes)
            change=change - notes*curr[i]
            result[i]=notes
        }
        
    }
    return result
}


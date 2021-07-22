const curr=[1,5,10,20,100,500,1000]

let result=[];

let bill=50;
let amount=500;

let change=amount-bill;

let res=chan(change)

console.log(result)

function chan(change)
{
    while(change>=0)
    {
        for(let i=curr.length-1;i>=0;i--)
        {
            if(change>=curr[i])
            {
                change-=curr[i]
                console.log(change+" "+curr[i])
                result.push(curr[i])
                console.log(result)
                chan(change)
            }

        }
    }
}


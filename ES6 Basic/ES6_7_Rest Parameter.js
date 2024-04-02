// Rest Parameter
function Calculation(...numbers){
    let sum=20;
    for(let i of numbers){
        sum=sum+i;
    }
    console.log(sum)
}
Calculation(25,24,41,14,);
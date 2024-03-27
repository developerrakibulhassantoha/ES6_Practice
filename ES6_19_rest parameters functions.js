//rest Function over the loop
function someThing(...numbers){
    let sum=25; 
    for(let i of numbers){
        sum=sum+i;
    }
    console.log( numbers);
}
someThing(1,251,2,1,25,25)


// rest function array aKare value gula daKabe
function restFun(...x){
    console.log(x)
}
restFun(12,51,25,12,"Rakib","hassan")
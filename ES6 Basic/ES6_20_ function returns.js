// function string , number, array, ect return korte pare
function myCountry(){
    return "Bangladesh"
}
console.log(myCountry());

function callOne(){
    return 25;
}

function callTwo(){
    return 50;
}
function callThree(){
    return callOne();
}
console.log(callOne()+callTwo()+callThree())

// akta function arekta function K return korte pare
function callOne(){
    return 25;
}

function callTwo(){
    return 50;
}
function callThree(){
    return 58;
}
console.log(callOne()+callTwo()+callThree())
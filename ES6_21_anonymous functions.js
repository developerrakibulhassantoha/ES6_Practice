//Anonymous functions ja function er kono name nai
var MyFun=function(){
    return "hello";

}

//re-assign 
var MyFun=function(){
    return "hello again";

}
console.log(MyFun())

// parameters passing
var MyFun=function(x){
    return x;

}
console.log(MyFun("Rakib"))
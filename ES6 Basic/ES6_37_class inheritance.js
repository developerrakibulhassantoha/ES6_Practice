// class inheritance
class parent{
    ihFun1() {
        console.log("Thic is inheritancce Function1")
    }
    ihFun2() {
        console.log("Thic is inheritancce function2")
    }
    ihFun3() {
        console.log("Thic is inheritancce function3")
    }

}
class child extends parent{

}
var obj=new child();
obj.ihFun1();
obj.ihFun2();
obj.ihFun3();

// inheritance bolte boja jai j class er modde ja  function ase tar bitore ja document ase se gula arek 
// function er modde niye aste hole oy functon er modde extends Keyword diye ager function k add kora call korte hbe .
// tar por oy function er object toyri kore sey function k call korte hbe.


// class overriding

class parent{
    ihFun1() {
        console.log("Thic is inheritancce Function1")
    }
    ihFun2() {
        console.log("Thic is inheritancce function2")
    }
    ihFun3() {
        console.log("Thic rakib is inheritancce function3")
    }

}
class child extends parent{
    ihFun3() {
        console.log(" Thic is inheritancce function3 Thic is inheritancce function3 Thic is inheritancce function3")
    }

}
var obj=new child();
obj.ihFun3();   //over ride . child class er modde kono change korle segula k over rid bole..
                //change gula kinto abr parent class e kaj korbe na


                // super Keyword
 //super keyword use kore child function e parent function gula add kora hoy and pereant kono kico child e use korte caile super Keyword use korte hoy.
class parent{
    ihFun1() {
        console.log("Thic is inheritancce Function1")
    }
    ihFun2() {
        console.log("Thic is inheritancce function2")
    }
    ihFun3() {
        console.log("Thic  is rakib and inheritancce function3")
    }

}
class child extends parent{
    demo(){
        super.ihFun1();
        super.ihFun3();
    }
}
var obj=new child();   
obj.demo();            
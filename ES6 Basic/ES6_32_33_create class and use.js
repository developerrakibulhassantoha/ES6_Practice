// ক্লাস কেন দরকার?
// 1. Befor ES6, it was hard to create a class is JavaScript
// 2. But is ES6, we can create the class by using the class keyword.

class Myclass{
    Myfun1() {
        console.log("Bangladesh");
    }
    Myfun2() {
        console.log("Maldiv");
    }
    Myfun3() {
        console.log("Tailand");
    }
    Myfun4() {
        console.log("Canada");
    }
}
var obj=new Myclass;
obj.Myfun1();
obj.Myfun2();
obj.Myfun3();
obj.Myfun4();


//Perameter passing
class Myclass{
    Myfun1(Name) {
        console.log(Name);
    }
    Myfun2(Name) {
        console.log(Name);
    }
    Myfun3(Name) {
        console.log(Name);
    }
    Myfun4(Name) {
        console.log(Name);
    }
}
var obj=new Myclass;
obj.Myfun1("Rakib");
obj.Myfun2("Raihan");
obj.Myfun3("Rakesh");
obj.Myfun4("Riya");

// class constructor er modde perameter passin
class myClass{
    constructor(a,b){
        console.log(a+b)
    }
}
new myClass(30,40);

// class constructor er modde perameter passin
class myClass{
    constructor(a,b){
        this.firstNam=a
        this.lastNam=b
    }
    add(){
        let result=this.firstNam+this.lastNam
        console.log(result);
    }
}
var obj=new myClass(50,25);
obj.add();

 // class constructor er modde perameter passin
class myClass{
    constructor(a,b){
        this.firstNam=a
        this.lastNam=b
    }
    add(){
        let result=this.firstNam+" "+ this.lastNam
        console.log(result);
    }
}
var obj=new myClass("Rakibul","hassan");
obj.add();
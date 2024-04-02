//Simple Object likar Style

var PersonDetails={
    Name:"Rakibul Hassan Toha",
    Age:'20 years',
    Hobby:'Code and Travels',
    City:'Cox`s Bazar',
}
console.log(PersonDetails.Name)
console.log(PersonDetails)
console.log(PersonDetails['Age'])


//Nesting obect
var MyDetails={
    Name:{
        RealName:"Rakibul hassan",
        DName:"Babo",
    },
    Age:{
    RealAge:"24 years",
    },
}

console.log(MyDetails['Age']['RealAge']);
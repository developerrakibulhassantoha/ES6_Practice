/* Set Method
1. .clear()        "loop calar age value gula K clean kora er kaj/sob value gula Clean kora er kaj"
2. .delete(value)  "value gula K delete kore dewa ar Kaj"
3. .has(value)     " Specipics KONO value ase kina check kora hlo er Kaj"
4. .values()       " sob valu gola K ak sate niye asa Hlo er kaj"
5. .size        " Koy ta value ase ta ber Kora er Kaj"
*/
var mySet=new Set();
mySet.add("Bangladesh");
mySet.add("Ameriya");
mySet.add("India");
mySet.add("Tailand");
mySet.add("Bhutan");
mySet.add("Europ");
mySet.add("Canada");

// clear method use
mySet.clear()
console.log(mySet)

// delete method use
mySet.delete("Tailand")
console.log(mySet)

 // has method use
if(mySet.has('Europ')){
    console.log("Yes")
}
else{
    console.log("No")
}

// values method use
mySet.values()
console.log(mySet)

// size method use

console.log(mySet.size)

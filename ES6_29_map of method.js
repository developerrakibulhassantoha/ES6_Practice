/* method
1.delete(Key) " pair K delete kore dewa hlo  er kaj"
2.get(Key)    "pair er modde jodi kono vlue take tahole tader k koje ber kora er kaj"
3.clear  "loop calar age sob pair gula K Clean kore pala er kaj"
4.has (Key)   "valu ase Kina check kora"
*/
var myMap=new Map();

myMap.set("Key1","Bangladesh")
myMap.set("Key2","india")
myMap.set("Key3","Srilanka")
myMap.set("Key4","China")
myMap.set("Key5","Maldiv")
myMap.set("Key6","Bhutan")
myMap.set("Key7","Ameriya")
myMap.set("Key8","Napal")

// use delete method
myMap.delete("Key1")  
myMap.delete("Key2")  
for(let myvalue of myMap.values()){
    console.log(myvalue);
}

// use get method
console.log(myMap.get("Key2"));


// use clear method
myMap.clear();

for(let myvalue of myMap.values()){
    console.log(myvalue);
}
// use has method
if(myMap.has("Key9")){
    console.log("yes")
}
else{
    console.log("No")
}
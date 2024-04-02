// Static Keyword K Call kora hole er somporko toyri hoy sora sori class er sate
// jodi static keyword na take tahole class er somporko sora sori Object er sate

// static use na kore
class stClass{
    static cllStatic(){
        console.log("Hello My Static Keyword");
    }
}
var obj=new stClass();
obj.cllStatic();

// static K use korle static er sompoko hoye jai sora sori class er sate ty class k toye call korle run korbe
class stClass{
    static cllStatic(){
        console.log("Hello My Static Keyword");
    }
}
stClass.cllStatic();
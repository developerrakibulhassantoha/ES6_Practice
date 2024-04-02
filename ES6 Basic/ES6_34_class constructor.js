/*       class constructor
1. constructor হচ্ছে ক্লাসের নিজস্ব মেথড/ফাংশন
2. ক্লাস অবজেক্ট তৈরি হলেই, constructor অটো কল হয়
3. constructor অন্য ফাংশনের মতোই কাজ করে
4. কিন্তু constructor রিটার্ন করতে পারে না
*/

class Myclass{
    constructor(){
        console.log("hello i am constructor")

    }
}
new Myclass();

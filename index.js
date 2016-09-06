var fruits = ["Banana", "Orange", "Apple", "Mango"];

function myPush ()
{
    fruits.push("Kiwi");
} 

function myPop ()
{
    fruits.pop();
}

function myPeek ()
{
    return fruits[fruits.length -1];
}

myPush();

console.log(myPeek());


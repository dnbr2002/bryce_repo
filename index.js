var StackClass = {

    x: [],

    push: function(element) {
        this.x.push(element);
    },

    pop: function() {
        return this.x.pop();
    },

    peek: function() {
        return this.x[this.x.length - 1];
    }


}

function StackClassConstructor() {
    var o = Object.create(StackClass);
    
    return o;
}
var sc = StackClassConstructor();

sc.push(1);
sc.push(2);
sc.push(3);
sc.push(4);
sc.pop();
console.log(sc.peek());



/* var MyArrClass={
Arr:[],
push:function(lastobj){
    this.stack[this.stack.length]=lastobj;
},
pop:function(){
    var ret = this.stack[this.stack.length-1];
    this.stack.length = this.stack.lenght-1;
}
}
*/

/*var fruits = ["Banana", "Orange", "Apple", "Mango"];

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

*/
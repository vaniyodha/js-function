var a = 10;
var b = 5;
var sum = a - b
console.log(sum, typeof sum)
// function with parameter
function print(name) {
    console.log(name);
    console.log('welcome to our group')
}
print('vani')
print('power')

function print(name) {
    console.log(name, 'hii hello')
}
print('vani')

/*function add (a,b){
    var sum=a+b
    return sum
}*/
//  invoke function or callimg function means  code inside a function is executed when the function is invoked 
var add = function (a, b) {
    var sum = a + b;
    return sum
}
var response = add(122, 222)
console.log('response is' + response);
//function expersiom


    var add3 = function(m,n,o){
        var sum2 = m+n+o;
        return sum2;
    }
    
    var res3 = add3(4,2,1);
    console.log(res3);
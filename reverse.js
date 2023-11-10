function reverseString(str){
    var reverse = "";
    for( var i = 0; i< str.length; i++){
        var char = str[i];
        reverse  = char + reverse ;
    }
    return reverse ;
}
var statement = " Hello rafiq bhai kamon asen ";
var forRafiq = reverseString(statement);
console.log(forRafiq);
// var numbers =[12,23,24,4,67];
// var sum = 0;
// for (var i = 0; i < numbers.length; i++){
//     var element = numbers[i];
//      sum     = sum + element;
// }
// console.log("total   of numbers : =", sum);
function getArrySum(numbers)
{
    var sum = 0;
for (var i = 0; i < numbers.length; i++){
    var element = numbers[i];
     sum     = sum + element;
}
return sum;
}
var numbers =[12,23,24,4,67];
var result = getArrySum(numbers);
var total  =getArrySum([12,23,42,56]);//new system add
console.log("total number of :", total);
console.log("total of the numbers: =", result);
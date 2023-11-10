var marks = [12,43,45,67,89,98];

// for(var i = 0; i<marks.length; i++){
//        var element = marks[i];
//        console.log(element);
// }

// console.log('outside');
// console.log('gulisthan');
// function add(number1,number2,number3){
//     var total = number1+number2+number3;
//     return total;
// }
// var result1 = add(65,67,68);
// console.log(result1);

// console.log('not adding this time');
// console.log('not eting right now');

// var result2 = add(112,1123);
// console.log(result2);
function largestNumber(numbers){
    var larger = numbers[0];
    for(var i = 0; i< numbers.length; i++){
        
    var element = numbers[i];
           
             if( element > larger){
                larger = element;
             }
    }
    return larger;
}
var output =largestNumber([45,78,40]);
console.log(output);
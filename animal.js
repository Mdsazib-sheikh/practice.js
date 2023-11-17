function animalCalculator(depth){
     var animal = 0;
     if(depth <= 10){
        anima = depth *50;
     }
       else if(depth <= 20){
          var firstPart = 10 *50;
          var remaining = depth - 10;
          var secondPart = remaining * 100;
          animal = firstPart + secondPart;

       }else{
        var fisrtPart = 10 * 50;
        var secondPart = 10 *100;
        var remaining  = depth -20;
        var thirdtPart = remaining *300;
        var animal = fisrtPart + secondPart + thirdtPart;
       }
               return animal;
}
var result = animalCalculator(23);
console.log(result);
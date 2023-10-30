// var n = 18;

//     for(i = 2; i<n; i++){
//     //    console.log(i, n % i);
//        if( n%i == 0){
//         console.log('Not a prime number')
//          break;
//        }

//     }

//     console.log(' your  number is a prime number ');
 function isPrimeNumber(n){
       for(i = 2; i<n; i++){
    
       if( n%i == 0){
        return ('Not a prime number')
         
       }
return 'your Number is a prime number '
    }


}
var result  = isPrimeNumber(128);
console.log(result);
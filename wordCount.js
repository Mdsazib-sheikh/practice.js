var speech = "I am a good person.";
var count = 0;
// console.log(speech.length);
// console.log(speech[3]);//arry position cheek 
for( var i = 0; i<speech.length; i++){
  var char = speech[i];
//    if( char == " "){
//         count++
//    }
 if( char == " " && speech[i-1] != " ")
 count++;
}
count++;
console.log(count);

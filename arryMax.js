var marks = [45,23,111,82,70,90,];
var max   = marks [0];
for( var i = 0; i<marks.length; i++){
    var element = marks[i];
       if(element > max){
        max = element ;
       }
}
console.log("Heighest alue is =", max);
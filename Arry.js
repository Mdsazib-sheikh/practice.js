// arry declear
var firendsAge= [12,20,13,16];
console.log(firendsAge);
// arry decler end

// arry include age any object 

var sonaliAge= firendsAge[3];
console.log(sonaliAge);
// arry include age end

// arry index size increase check 

firendsAge[3] = 21;
 var positions = firendsAge.indexOf(13);

//  arry index size increse end

// arry length/size check check

console.log(firendsAge.length);

// arry push check

firendsAge.push(15);
firendsAge.push(19)
console.log(firendsAge.length);

// arry element out and check pop

firendsAge.pop();
console.log(firendsAge)



const countries = ["Ghana", "Nigeria", "Randa"];

countries.splice(1, 0, 'Kenya', 'Mali');

console.log(countries);

var teaLine =['balam','kamal','salam','jamal','gaji'];
teaLine.unshift('hasan');
teaLine.pop();
var part= teaLine.slice(2,5)
console.log(part);
console.log(teaLine);
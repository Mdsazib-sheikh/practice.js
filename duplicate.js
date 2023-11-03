var collection = [1,2,3,4,512,23,34,56,78,];
var uniqueName = [];
for( var i = 0; i< collection.length; i++){
    var element = collection[i];
    var index = uniqueName.indexOf(element);//arry index check system
    if(index == -1){
        uniqueName.push(element);//arry add system.(.push)

    }
}
console.log(uniqueName);
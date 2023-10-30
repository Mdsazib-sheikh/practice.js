var student= {id:1211, phone:1712, name:"arif"};
var student1={id:12321, phone:1731, name:"alif"};
var phoneNo=student.phone;
// var phoneNo2=student["phone"];
// var phonePropName = "phone";
// var phoneNo =student1[phonePropName]
// var phoneNo =student["phone"];
console.log(phoneNo);
console.log(student);
// update phone number
student1.phone = 12341;
student1["phone"]=32122;
console.log(phoneNo);
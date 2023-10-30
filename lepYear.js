// const year = 3561;
// let remainder = year % 4;
// // console.log(remainder);
// // console.log(remainder == 0);
// if (remainder == 0) {
//     console.log('year is a  leap year');
// }
// else {
//     console.log('year is not a leap year'); 
// }

function isleapYear(year){
    const remainder = year % 4;
    if (remainder == 0) {
            
            return true;
        }
        else {
        return false;

        }
}
const check2000= isleapYear(2000);
console.log(check2000);
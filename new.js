 //Switch statement

// var password=prompt("Enter the password:");

// switch (password) {
//     case 'Naveen*333':
//         alert("Right password")
//         break;

//     case '333*neevaN':
//         alert("Right password in reverse manner");
//         break;
//     default:
//         alert("Enter the right password!");
//         break;
// }


// var A1=90;
// var A2=80;
// var A3=95;

// var S1=89;
// var S2=76;
// var 

var Alex=[90,80,95];
var Sara=[89,76,98];
var nancy=[42,98,83];
var AlexSum=0;
var SaraSum=0;
var NancySum=0;

for (let index = 0; index < Alex.length; index++) {
    AlexSum=AlexSum + Alex[index];
    SaraSum=SaraSum + Sara[index];
    NancySum=NancySum + nancy[index];
}

console.log( "Alex sum is " + AlexSum/3);
console.log( "Sara sum is " + SaraSum/3);
console.log( "Nancy sum is " + NancySum/3);
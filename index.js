// Class - 17

// function theFan () {
//     console.log("Press the switch to turn of the fan")

// }
// theFan();

// function bringSomeFood (taka) {
    
//     var priceOfPotato =20;
//     var quantityOfPotato = taka/priceOfPotato;
//     return quantityOfPotato;
// }

// var totalPotato = bringSomeFood (100);
// console.log(totalPotato);

// function sumOfNum (num1, num2) {
//     // console.log(num1, num2);
//     var total = num1 + num2;
//     // console.log(total);
//     return total;
// }

// var result = sumOfNum (1,2);
//  console.log(result); 

// function multiplyOfNum(num1, num2, num3) {
//     var multiply = num1 * num2 *num3;
//     return multiply;
// }

// var result = multiplyOfNum (10,20, 2);
// console.log(result);


// function devitionOfNum (num1, num2) {
//     var devition = num1 / num2;
//     return devition;

// }
// var result = devitionOfNum (200, 20);
// console.log(result);


// var student = {   
//     orderId: 400000,
//     name : "Mr.x",
//     gender: "Male",
//     salary: "1000$"
// }
// console.log(student);

// var myPc = {
//     Brand: "custom",
//     Cpu: "amd ryzen 5 5600",
//     Ram : "8gb",
//     Gpu : "6gb rtx 2060",
//     Price: 850
// }

// // myPc.Price = "850$";
// myPc["Price"] ="850$";
// console.log(myPc);
 
// var color = "black";

// if (color == "yellow"){
//     console.log("the Color is Yellow");
// }else if (color == "green"){
//     console.log("the color is green");
// }else if (color == "blue"){
//     console.log("the color is blue");
// }else if(color == "red" ){
//     console.log("the color is red");
// } else{
//     console.log("the color is black");
// }

// var color = "blue";

// switch(color){
//     case "yellow":
//         console.log("the color is yellow");
//         break;
//     case "green":
//         console.log("the color is green");
//         break;
//     case "blue":
//         console.log("the color is blue");
//         break;
//     default:
//         console.log("the color is black");
// }

let num = [10, 20, 30, 40, 50,];
    for(var i = 0; i < num.length; i++) {
        if(num[i] == 30){
            // break;
            continue;
        }
        console.log(num[i]);
    }
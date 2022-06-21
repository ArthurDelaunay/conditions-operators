// 01 - Comparaison
// const test = 143
// const bis = 219
// console.log(test === bis)
// console.log(test >= bis)
// console.log(test <= bis)
// console.log(test !== bis)

// 02 - Condition
// const limit = 50
// let score = 64
// score = 20

// if (score >= limit){
//     console.log("Ok good!")
// }
// else {
//     console.log("Oh nooo...")
// }

// 03 - Condition II
// const password = "azerty"
// if (password.length > 5) {
//     console.log("The password is secure")
// }
// else {
//     console.log("Password is not secured")
// }

// 04 - Condition III
// const password = "azerty"
// const limit = 50
// let score = 64
// if (password.length > 5 && score >= limit) {
//     console.log("Everything is good")
// }
// else if (password.length > 5 || score >= limit) {
//     console.log("Something is good")
// }
// else {
//     console.log("Nothing is good")
// }

// 05 - Random
// const random = Math.ceil(Math.random()*6)
// console.log (random)
// if (random === 6) {
//     console.log("Yes I win !")
// }
// else {
//     console.log("So close...")
// }

// 06 - Month
// let month = "January"
// switch (month) {
//     case "January":
//     case "February":
//     case "March": 
//         console.log("Winter")
//     break
    
//     case "April":
//     case "May":
//     case "June":
//         console.log("Spring")
//     break

//     case "July":
//     case "August":
//     case "September":
//         console.log("Summer")
//     break

//     case "October":
//     case "November":
//     case "December":
//         console.log("Autumn")
//     break

//     default:
//         console.log("This is not a month")
// }

// 07 - Rounded but better
// let roundedNumber = -123.24474
// let decimalRoundedNumber = roundedNumber - Math.floor(roundedNumber)
// if (decimalRoundedNumber < 0.5) {
//     console.log(`L'arrondie naturel de ${roundedNumber} est  ${Math.floor(roundedNumber)}`)
// }
// else {
//     console.log(`L'arrondie naturel de ${roundedNumber} est  ${Math.ceil(roundedNumber)}`)
// }

// 08 - Rounded but better, Méthode 2

// let roundedNumber = 123.2666
// let roundedNumberString = roundedNumber.toString()
// let index = roundedNumberString.indexOf(".") + 1
// let indexPlusOne = index +1
// let afterDot = roundedNumberString.substring(index, indexPlusOne)
// console.log (afterDot)

// if (afterDot < 5) {
//     console.log(`L'arrondie naturel de ${roundedNumber} est  ${Math.floor(roundedNumber)}`)
// }
// else {
//           console.log(`L'arrondie naturel de ${roundedNumber} est  ${Math.ceil(roundedNumber)}`)
// }

// 09 - Rounded but better, Méthode 3

// let roundedNumber = 123.23446
// let roundedNumberString = roundedNumber.toString()
// let splitNumber = roundedNumberString.split("")
// let index = splitNumber.indexOf(".") + 1
// if (splitNumber[index] < 5) {
//     console.log(`L'arrondie naturel de ${roundedNumber} est  ${Math.floor(roundedNumber)}`)
// }
// else {
//           console.log(`L'arrondie naturel de ${roundedNumber} est  ${Math.ceil(roundedNumber)}`)
// }
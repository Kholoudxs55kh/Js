// 1. Write a JavaScript function to print the “Hello World” message
// ========================================================================================
// 2. Write a JavaScript function Returns whether a given year is a leap year, according to the rules of the Gregorian calendar. A year is a leap year if it is (1) divisible by 4 but not 100, or else (2) is divisible by 400.
// ========================================================================================
// 3. Define a function called multiplyFive which accepts a number and returns that number multiplied by 5.
// ========================================================================================

let year = +prompt("Enter the Year You want to Check : ")
let numToMul = +prompt("Enter The Num To Be Multibled : ")

function printMsg ()
{
    document.write("<h1>Hello World!!</h1> <br>")
}




function leapYearOrNot(year)
{
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
        document.write("<h3>It's a leap Year!!</h3> <br>")
    else
        document.write("<h3>It's a regular Year. </h3> <br>")

}


function mulByFive (n)
{
   return n*5
}



let leapYear = leapYearOrNot(year)
let Result = mulByFive(numToMul)

printMsg()
document.write(leapYear)
document.write("<h3> the multible of " + numToMul + "  by 5 is  " + Result +"</h3> <br>")

function prime()
{
    let array = [];
    let size = 5;

for (var i=0; i<size; i++){
    array[i] = prompt("enter array element no: " + (i+1));
}

var f=array[0];
var f, i, flag = true;

for(i = 2; i <= f - 1; i++) 

    
    if (f % i == 0) { 
        flag = false; 
        break; 
    } 
    if (flag == true)
        {
            document.getElementById('prm_ans').innerText =  "The first element " + f +  " is a prime number";
        }
        else
        {
        document.getElementById('prm_ans').innerText = "The first element " + f + " is not a prime number";
            
        }
    }
//-----------------------------------------------------------------------------

function counting ()
{
     let array = [];
     let size = 5;

     for (i=0; i<size; i++)
     {
          array[i] = prompt("enter array element " + (i+1));
     }
console.log('the array is ' + array);
var item = null;
var counter = 0;
var freqCount = 1;

for( var i=0; i<= array.length; i++)
{
     for ( var  j=i; j<=array.length; j++)
     {
         if (array[i] == array[j])
            counter ++;
            if (freqCount < counter)
            {
            freqCount = counter;
            item = array[i];
            }
     }
counter = 0;
}
if (item !== null)
document.getElementById('freq_ans').innerText =`The most frequent item in the array is '${item}' , repeated ${freqCount} times`;
else
document.getElementById('freq_ans').innerText ="All items repeated once";
}
//-----------------------------------------------------------------------------


// 3).
// JavaScript program which accept a string as input and swap the case of each character. 

function swap()
{
var str= prompt ("enter the words to change case");
var strnew="";
for ( var i=0; i<str.length; i++)
{
    if( str[i] === str[i].toUpperCase())
    {
        strnew += str[i].toLowerCase();
      }
        else
    {
        strnew += str[i].toUpperCase();
      }

}
document.getElementById('swap_ans').innerText = "The original string is " + str + '\n' + " The changed string is " +strnew;
 return true;
}
//-----------------------------------------------------------------------------
// 4). 
// JavaScript program to find the sum of squares of the elements of an array. 

function doubleAdd()
{

    let array = [];
    let newarray = [];
     let size = 5;

     for (i=0; i<size; i++)
     {
          array[i] = prompt("enter array element " + (i+1));
     }
     let sum = 0;
    for ( var i=0; i < array.length; i++)
    {
        newarray[i] = array[i] * array[i];
        sum += newarray[i];
    }
    document.getElementById('square_ans').innerText = "The entered array of numbers is " + array 
            + '\n' + "The sum of squares of elements from the array is " + sum;
    return true;
}

//-----------------------------------------------------------------------------
// 5). 
// JavaScript for loop that will iterate from 0 to 15. 
// For each iteration, check if the current number is odd or even, and 
// display the message to the screen as odd or even. 

function oddEven()
{
    let ans = "";
    for( i=0; i<=15; i++)
    {
        if (( i%2) == 0)
            ans+= "The number '" + i + "' is even" + '\n';
        else
            ans+= "The number '" + i + "' is odd" + '\n';
    }
    document.getElementById('odevn_ans').innerText = ans;   
}

//-----------------------------------------------------------------------------
// 6).
// JavaScript function to truncate a string 
// if it is longer than the specified number of characters.

function truncate()
{
    let str = prompt ("Enter the string to be truncated");
    let length = prompt ("Enter the length of string to be accepted");
    
    if (str.length > length)
    {
        document.getElementById('trunc_ans').innerText = "The original string is " + str + '\n' +
        " The truncated string is " + (str.slice(0,length));
        
    }
}

//-----------------------------------------------------------------------------
// 7).
// JavaScript program that accept two integers 
// and display the larger using findLarge() function.

function findLarge()
{
    let int1= prompt("Enter the first number");
    let int2=prompt("Enter the second number");
    if(int1>int2)
    document.getElementById('large_ans').innerText = " The Two numbers to be comapared are '"+ int1 + "' and '" + int2 + "'" + '\n' +
    "'" +int1+ "' is the larger number";
    else
    document.getElementById('large_ans').innerText = " The Two numbers to be comapared are '"+ int1 + "' and '" + int2 + "'" + '\n' +
    "'" +int2 + "' is the larger number";

}

//-----------------------------------------------------------------------------
//8).
// Write a JavaScript program using for…in to read the objects from an array entered by an user 
// and to arrange it in alphabetical order. 

function sorting()
{
    let array =[];
    let newarray=[];
    let length = 5;

    // accepting input for array from user
    for( i=0; i<length; i++)    
        {
        array[i] = prompt( "enter 5 object names:");
        newarray[i] = array[i].toLowerCase();
        }
    document.getElementById('sort_ans').innerText = "The Array elements are " + array + '\n' +
    " The Array elements in alphabetical order is " +  array.sort();
}
//-----------------------------------------------------------------------------

// 9).
// JavaScript program to print the letters of the word “Javascript” 
// in each line using for…of. 

function pattern()
{
    let str = "JavaScript";
    let ans=" ";

    for(var i of str)
    {
        ans += i  + " ";
     document.getElementById('pattrn_ans').innerText += ans + "\n";
    }
}
//-----------------------------------------------------------------------------


// 10).
//  JavaScript program to construct the following pattern, using a nested for loop.   
// * 
// * *   
// * * * 
// * * * *  


function star()
{
    let ans="";
    for(var i=1; i<5; i++)
    {
        for ( var j=1; j<=i; j++)
        {
            ans += "*";
        }
        ans+="\n";
    }
    document.getElementById('str_ans').innerText= ans;   
}
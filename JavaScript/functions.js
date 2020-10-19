// Create a function called oddArray
// that accept an array
// and return an array have only the odd elemnts

// var nums= [1,2,3,8,9]
// Ex: oddArray(nums) => [1,3,9]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self


/******* Start Your Code *********/
var evenArr = new Array ( );  
     var oddArr = new Array ( );  
     var arr = new Array ( );  
     for( var i=0 ; i<10 ; i++){ 
       arr.push(i);
       oddEven();

     }
     function oddEven(Array){
       if (arr[i]%2==0)
       {  evenArr.push(i);
                       }

            else{oddArr.push(i);}}

                          
     console.log(arr);
     console.log(evenArr);
     console.log(oddArr);

     

/******* End Your Code ********* */




// Create a function called aveArray
// that accept an array
// and return the average of the numbers inside this array

// var nums= [1,2,3,8,9]
// Ex: aveArray(nums) => 4.6

// var nums2= [1,2,3,8,9,77]
// Ex: aveArray(nums) => 16.6

// ** solve it one time using for loop and another using while loop
// **try more cases by your self


/******* Start Your Code *********/
    var arr = new Array(1, 2, 5, 20, 25);
    var avg = arrayAverage(arr);
    function arrayAverage(arr){

    var sum = 0;
    for(var i in arr) {
        sum += arr[i];
    }
    var numbersCnt = arr.length;
    return (sum / numbersCnt);
                          }
        console.log(avg);

/******* End Your Code ********* */




// Create a function called factorial
// that takes a single parameter n,
// and return the product of all integers up to n starting from 1
// Ex: factorial(2); => 2 * 1 => 2
// Ex: factorial(4); => 4 * 3 * 2 * 1 => 24



/******* Start Your Code *********/

var  x=prompt('enter the num.');
    var dot=1;
    function factorial(i,x){
        for(var i=1;i<=x;i++){
           
            dot=dot*i;
        }

    }
    
    console.log(dot)

/******* End Your Code ********* */
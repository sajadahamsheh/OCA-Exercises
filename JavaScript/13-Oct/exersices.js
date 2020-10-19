/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
  
var a=5;
var b=12;
if (a<b){
    console.log('a')
}else{console.log('b')};

 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  
           var a=6;
           var b=-4;
           var c=9;
           var product=a*b*c;
                
           if(product>=0){
               alert('the sign is +')
           }
           else{alert('the sign is -')};


 /******* End Your Code ********* */


/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */

/******* Start Your Code *********/
var a=6;
var b=-4;
var c=9;

if (a>b && a>c)
{
if (b>c)
{
 alert(a + " ," + b + ", " +c);
}
else
{
 alert(a + ", " + b + ", " +c);
}
}
else if (b>a && b >c)
{
if (a>c)
{
  alert(b + ", " + a + ", " +c);
}
else
{
  alert(b + ", " + c + ", " +a);
}
}
else if (c>a && c>b)
{
if (a>b)
{
 alert(c + ", " + a + ", " +b);
}
else
{
 alert(c + ", " + b + ", " +a);
}
}


 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
var a=6;
var b=4;
var c=9;
var d=7;
var e=8;  
if(a>b && a>c && a>d && a>e){alert('the largest is a =',a );}
else if (b>a  && b>c && b>d && b>e){alert('the largest is b ='+ b );}
else if (c>a  && c>b && c>d && c>e){alert('the largest is c ='+ c );}
else if (d>a  && d>b && d>c && d>e){alert('the largest is d ='+ d );}
else if (e>a  && e>b && e>c && e>d){alert('the largest is e ='+ e );}
   
 /******* End Your Code ********* */





 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/

/******* Start Your Code *********/
var x=prompt('enter the value of y');
var y=prompt('enter the value of y');
if (x>y){
console.log('hello word')
}else{console.log('goodbye')};

 /******* End Your Code ********* */




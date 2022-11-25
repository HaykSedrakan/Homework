//Task 1
function reverse(num) { 
  
    let str = num.toString()
    let last = str.length - 1 
      if(num % 10 === 0) 
    { 
        return num 
    } 
      else if(str.length <= 1) 
      {
  
        return num 
  } 
      else 
      {
          last = str.slice(0,-1)
          let first = str.slice(-1)
          let result = first + last
            return result
      }
  } 
  console.log(reverse(367))
  
//Task 2
function sort(a,b,c)
  {
    if(a > b && b > c)
    {
        return c + " " + b + " " + a
    } 
    else if(a > c && c > b)
    {
        return b + " " + c + " " + a
    }
   else if(b > a && a > c)
   {
        return c + " " + a + " " + b
       
   }else if (b > c && c > a) 
    {
        return a + " " + c + " " + b
      
    }
   else if(c > a && a > b) 
    {
        return b + " " + a + " " + c
      
    }
   else if(c > b && b > a) 
    {
        return a + " " + b + " " + c;
    }
}

console.log(sort(3,2,1));


//Task 3
let  n = +prompt()

let i = 0
let j = 0

if(n % 2 === 0 && !Math.floor(n / 10)) {
    i += 1
}

if(n % 3 === 0 && n % 10 === 1) {
    j += 1
}

console.log(j);
console.log(i);

//Task 4

function rectangleTriangle(num , height , base)

{
  if( height <= 0 || base <= 0)
  {
    return "Please Enter only positive num"
  }
  else if(num === 'triangle')
  {
    let result = ( height * base ) / 2

    return (`Square of the triangle is ${result} `)
  }
  else if(num === 'rectangle')
  {
    let result1 = height * base

    return (`Square of the rectangle is ${result1} `)
  }
}

  console.log(rectangleTriangle('triangle' , 6,7))
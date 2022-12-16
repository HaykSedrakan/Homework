//Task 1
let arr = [1,2,3,4]

let func = function(array)
  {
    return Math.max(...array.slice(0, -1).map((n, index) => n *     array[index + 1]))

  }

console.log(func(arr))

//Task 2

let arr = [1, 2, 3, 4, 6, 29]
let emptyArr = []


function index(array) {
  for (let i = 1; i <= Math.max(...array); i++) {
       if(array.indexOf(i) === -1 )
       {
         emptyArr.push(i)
       }
  }return emptyArr
}
console.log(index(arr))

//Task 3
let arr = [6,5,4,3,4,61]
Array.prototype.bubblSort = function (){
    let array = this
    for(let i = 0; i < array.length ; i++){
        for(let j = 0; j < ( array.length - i -1); j++){
            if(array[j] > array[j+1]){

            let  temp = array[j]
            array[j] = array[j + 1]
            array[j+1] = temp
            }
        }
    }
return array
}

console.log(arr.bubblSort())

//Task 4

function prime(num)
  {
    for(let i = 2 ; i <= num ; i++)
      {
        if(num % i === 0)
        {
          return false
        }
        return num > 1
      }
  }
function isPrime(num)
  {
    let primesArr = []

    for(let i = 2; i <= num ; i++)
      {
        if(prime(i))
        {
          primesArr.push(i)
        }
      }
    return primesArr
  }

console.log(isPrime(100))

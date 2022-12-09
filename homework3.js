//Task2

let arr = [[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0, -1]]

function ar(arr)
{
    let res = []
    arr.forEach(elem => {
        res.push(elem.reduce((a,b)=> a + b))
    })
}

console.log(ar(arr))

//Task 4
let arr = [10, 100, 20]

function func(a,b,step){
    for(let i = a; i <= b; i+=step){
        console.log(i);
    }
}

func(arr[0],arr[1],arr[2])

//Task 3

let arr = [5, 4, 78, 0, -3, 7]

let oddArr = []
let evenArr = []
let result = 0

function index(array)
  {
    for(let i = 0; i < array.length;i++)
      {
        if(array[i] % 2 === 1 || array[i] % 2 === -1)
        {
          oddArr.push(array[i])
        }
        if(array[i] % 2 === 0)
        {
          evenArr.push(array[i])
        }
      result = oddArr.map(x => x * evenArr.length)
      }
    return result
  }

console.log(index(arr))
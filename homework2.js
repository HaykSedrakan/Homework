//Task 1


let obj = {}

let obj1 = {}

function index(ob,ob1)
  {
    const emptyObj = Object.keys(ob).length === 0;
    const emptyObj1 = Object.keys(ob1).length === 0;

    if(emptyObj && emptyObj1) {

        return true
        
      }
    for(let key in ob)
      {
        for(let key in ob1)
          {  
             if(ob[key] === ob1[key])
                {
                  
                  return true
                }
              else{return false}
          }
       }
    
  }

console.log(index(obj,obj1))

//Task2
let str = "hello"
function repeat(str) {
    let repeats =""
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str.charAt(i) == str.charAt(j) && repeats.indexOf(str.charAt(j)) == -1) {
                repeats += str.charAt(i)
            }
        }
    }
    if(repeats.length == 0 ){
        return false
    } else {
        return true
    }
}
console.log(repeat(str))

//Task 3

function fibonachi(num)
  {
    if(num < 0)
    {
      return num
    }

    let after = 1
    let before = 0

    for(let i = 2; i <= num ; i++)
      {
        let result =  before + after

        before = after
        after = result
      }
    return after
  }

console.log(fibonachi(10))

//Task 4

function foo(n) {
    let str = n.toString()
    let arr = Array.from(str)
    let nArr = arr.map(elem => Number(elem))
  if(n === 0)
  {
    return 'Cannot calculate'
  }

  else{return nArr.reduce((a,b) => a * b)
}
}

console.log(foo(0))

//Task 5

function matrix(size)
  {
    let res = ''
    let num = 0

    for(let i = 0; i < size;i++)
      {
        let row = ''
        for(let j = 0 ;j < size ; j++)
          {
            if(j === num || j === size - (num + 1))
            {
              row += '*'
            }else{row += ' '}
          }
        num++
        res += row + '\n'
      }
    return res
  }

console.log(matrix(15))


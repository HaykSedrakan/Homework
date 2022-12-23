//Task 1
function recursionDeleteFirstDigit(array) {
    if (array.length === 0) {
        return array
    }
    else if(array.length === 1){
        array.splice([0], 1)
        return array
    }
    else if(array.length > 1)
    {
        recursionDeleteFirstDigit(array.splice([0],1))

        return array
    }
}

let arr = [6, 78, 'n', 0, 1]

console.log(recursionDeleteFirstDigit(arr))

//Task 2
let arr = [1, [3, 4, [1, 2],[42,[[[[[[242,[[[[[[[[[4]]]]]]]]]]]]]]]]],10]
function flattenArray(array)
{
    return array.flatMap(elem => {
        if(Array.isArray(elem))
        {
            return flattenArray(elem)
        }else{
            return elem
        }
    })
}
console.log(flattenArray(arr))

//Task 3

function sumOfDigits(num)
{
    let sum = 0
    let result
    for(let i = 0; i <= num;i++)
    {
        sum += num % 10
        num = parseInt(num / 10)

        result = String(sum)
    }
    if(result.length === 1)
    {
        return +result
    }
    else(result.length > 1)
    {
        return sumOfDigits(result)
    }
}

console.log(sumOfDigits(345))

//Task 4

let arr = [
    { book: 'Catcher in the Rye', readStatus: true, percent: 40 },
    { book: 'Animal farm', readStatus: true, percent: 20 },
    { book: 'Solaris', readStatus: false, percent: 90 },
    { book: 'The fall', readStatus: true, percent: 50 },
    { book: 'White night', readStatus: false, percent: 60 },
    { book: 'After dark', readStatus: true, percent: 70 },
]
function sortByDescendingOrder(array) {
    let result = array.filter(elem => elem.readStatus === true).sort((item1,item2) => item2.percent - item1.percent)

    return result.map((elem) => {
        return {
            book:elem.book,
            readStatus:elem.readStatus,
            percent:elem.percent + '%',
        }
    })
}

console.log(sortByDescendingOrder(arr))
//Task 1
class Author{
    constructor(name,email,address){
        this.name = name
        this.email = email
        this.address = address
    }

    get getName(){
        return this.name
    }

    set setName(val){
        this.name = val
    }

    get getEmail(){
        return this.email
    }

    set setEmail(val){
        this.email = val
    }

    get getAddress(){
        return this.address
    }

    set setAddress(val){
        this.address = val
    }

    toString(){
        return `Name\` ${this.name} : Email\` ${this.email} : Address\` ${this.address}`
    }
}

class Book{
    constructor(author,count,price)
    {
        this.name = author
        this.count = count
        this.price = price
    }

    get getName(){
        return this.name
    }

    set setName(val){
        this.name = val
    }

    get getCount(){
        return this.count
    }

    set setCount(val){
        this.count = val
    }

    get getPrice(){
        return this.price
    }

    set setPrice(val){
        this.price = val
    }

    getProfit(){
        return this.price * this.count
    }

    toString(){
        return `Name\` ${this.name} : Count\` ${this.count} : Price\` ${this.price}`
    }
}

// Task 2

class Account{
    constructor(id,name,balance) {
        this.id = id
        this.name = name
        this.balance = balance
    }


    get getId(){
        return this.id
    }

    get getBalance(){
        return this.balance
    }

    set setBalance(val){
        this.balance = val
    }

    get getName(){
        return this.name
    }

    set setName(val){
        this.name = val
    }

    credit(amount){
        let res = this.balance + amount

        return res
    }

    debit(amount){
        let res = amount < this.balance 
        ? this.balance - amount
        : 'Amount exceeded balance'

        return res
    }

    transferTo(anotherAccount,amount){
        if(amount < this.balance)
        {
            this.balance -= amount
            anotherAccount.balance += amount
        }else{
            return 'Amount exceeded balance'
        }
    }

    static identifyAccounts(accountFirst, accountSecond){
        if(Array.isArray(accountFirst) && Array.isArray(accountFirst))
        {
            for(let i = 0; i < accountFirst.length;i++)
            {
                for(let j = 0; j < accountSecond.length;j++)
                {
                    if(accountFirst[i] === accountSecond[j])
                    {
                        return 'Yes they are equal'
                    }else{
                        return 'No they are not equal'
                    }
                }
            }
        }else{
            for(let key in accountSecond)
            {
                if(accountFirst[key] === accountSecond[key])
                {
                    return 'Yes they are equal'
                }else{
                    return 'No they are not equal'
                }
            }
        }
    }
}

//Task 3

class Person{
    constructor(name,surname,gender,age) {
     this.name = name
     this.surname = surname
     this.gender = gender
     this.age = age
    }

    get getName(){
      return this.name
    }

    get getSurname(){
      return this.surname
    }

    get getAge(){
      return this.age
    }

    set setAge(val){
      this.age = val
    }

    get getGender(){
      return this.gender
    }
}

class Student extends Person{
    constructor(name,surname,gender,age,program,year,fee) {
        super(name,surname,gender,age)

        this.program = program
        this.year = year
        this.fee = fee
    }

    get getProgram(){
     return this.program
    }

    set setProgram(val)
    {
        let result = Array.isArray(val) 
        ? this.program = val 
        : []

        return result
    }

    get getYear(){
        return this.year
    }

    set setYear(val){
        this.year = val
    }

    get getFee(){
        return this.fee
    }

    set setFee(val){
        this.fee = val
    }

    passExam(program,grade){
        let res
        if(program.length)
        {
            res = program.every(item => item >= grade) ? this.year++ : false
        }
    }   

    toString(){
    return `Name\` ${this.name} :
      Surname\` ${this.surname} : 
      Gender\` ${this.gender} :
      Age\` ${this.age} :
      Program\` ${this.program}
      Year\` ${this.year} :
      Fee\` ${this.fee} :
      `
    }
}

class Staff extends Person{
    constructor(name,surname,gender,age,program,pay) {
        super(name,surname,gender,age)
        this.program = program
        this.pay = pay
    }

    get getProgram(){
        return this.program
    }

    set setProgram(val){
      let result = typeof this.program === 'string' ? this.program = val : ''

      return result
    }

    get getPay(){
        return this.pay
    }
    set setPay(val){
        this.pay = val
    }

    toString(){
    return `Name\` ${this.name} :
      Surname\` ${this.surname} : 
      Gender\` ${this.gender} :
      Age\` ${this.age}` 
    }
}
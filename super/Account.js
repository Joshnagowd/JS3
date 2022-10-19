class Account {
    constructor(name ,email){
        this.acc_Name = name
        this.acc_Email= email
    }
   
    }

class Saving_Account extends Account{
    constructor(id , name , email , amount){
        super(name , email)
        this.acc_Id = id;
        this.acc_Amount = amount

    }
    
    }

let a1 = new Saving_Account(101 , "Joshi" , "joshi@gmail.com" , 60000);
let a2 = new Saving_Account(101 , "gowd" , "gowd@gmail.com" , 60000);
console.log(a1)
console.log(a2)

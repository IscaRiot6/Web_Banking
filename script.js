function myAccount(name, balance, IBan) {
    this.name = name
    this.balance = balance
    this.IBan = IBan
}

myAccount.prototype.deposit = function(amount) {
    this.balance += amount
    return 'your new balance is ' + this.balance
}

myAccount.prototype.withdraw = function(amount) {
    if (amount <= this.balance) {
        this.balance -= amount
        return 'you have withdrown ' + this.balance
    } else {
        return "Error 'Insufficient balance!'"  
    }
    }

myAccount.prototype.getBalance = function() {
    return this.balance
}

myAccount.prototype.getIBAN = function(IBan) {
    if (this.balance === false) {
        return 'New account created for ' + this.name +
        'IBAN: ' + this.IBan

    }
}

let KostasMinaidis = new myAccount('Kostas Minaidis', 100, 'IBAN: GR00010003')




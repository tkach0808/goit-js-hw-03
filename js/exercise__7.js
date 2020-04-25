'use strict';

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const transaction = {
      type: 0,
      amount: 0,
      id: 0,
    };
    transaction.amount = amount;
    transaction.type = type;
    transaction.id = Math.round(Math.random(1) * 10000);
    return transaction;
  },

  deposit(amount) {
    this.balance += amount;
    const type = 'deposit';
    this.transactions.push(this.createTransaction(amount, type));
  },

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      const type = 'withdraw';
      this.transactions.push(this.createTransaction(amount, type));
      return;
    }
    if (amount > this.balance) {
      console.log('снятие такой суммы не возможно, недостаточно средств.');
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    // eslint-disable-next-line
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return 'мы н.....а не нашли!!!!';
  },

  getTransactionTotal(type) {
    let totalMoney = 0;
    // eslint-disable-next-line
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        totalMoney += transaction.amount;
      }
    }
    console.log(
      `Было проведно операцый типа :${type} на сумму "${totalMoney}-$"`,
    );
  },
};

// //////////////////////////////////////////////////////////////////////////////////

console.log(account.createTransaction(1234, Transaction.DEPOSIT));
console.log(account.createTransaction(4321, Transaction.WITHDRAW));

// ////////////////////////////////////////////////////////////////////////////////////

account.deposit(1000);
account.deposit(2000);
account.deposit(7000);
console.log('balance =', account.getBalance());
console.table(account.transactions);

// ////////////////////////////////////////////////////////////////////////////////////

account.withdraw(500);
account.withdraw(2000);
account.withdraw(3500);
account.withdraw(35000);

console.log('balance =', account.getBalance());
console.table(account.transactions);

// ////////////////////////////////////////////////////////////////////////////////////

console.log(account.getTransactionDetails(558));

// ////////////////////////////////////////////////////////////////////////////////////

account.getTransactionTotal(Transaction.WITHDRAW);
account.getTransactionTotal(Transaction.DEPOSIT);

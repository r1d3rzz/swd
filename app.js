class BankAccount {
  #money = 0;

  deposit(amount) {
    this.#money += amount;
  }

  checkBalance() {
    this.#money;
    return `Your Balance amount is ${this.#money} MMK`;
  }

  transfer(whom, amount) {
    if (amount <= this.#money) {
      this.#money -= amount;
      return `successfully transfer ${amount} MMK from ${whom}.`;
    } else {
      return "not enough money!";
    }
  }

  withdraw(amount) {
    if (amount <= this.#money) {
      this.#money -= amount;
      return `successfully withdraw ${amount} MMK.`;
    } else {
      return "not enough money!";
    }
  }
}

const rider = new BankAccount();
rider.deposit(10000);

console.log(rider.checkBalance());
console.log(rider.transfer("MTK", 5000));
console.log(rider.checkBalance());
console.log(rider.transfer("Su Su", 5000));
console.log(rider.checkBalance());
console.log(rider.withdraw(5000));

rider.deposit(15000);
console.log(rider.checkBalance());
console.log(rider.withdraw(5000));
console.log(rider.checkBalance());
console.log(rider.transfer("MTK", 100000));

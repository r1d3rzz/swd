// let total = 0;

// function buy(name, price, qty) {
//   let cost = price * qty;
//   total += cost;
//   console.log(name + " - " + price + " - " + qty);
// }

// function findTax(amount, percentage) {
//   return amount * (percentage / 100);
// }

// buy("apple", 500, 3);
// buy("mango", 600, 1);
// buy("berry", 1500, 2);
// buy("berry", 1500, 2);
// buy("berry", 1500, 2);
// buy("lime", 200, 5);

// console.log("======================");

// console.log("total", total);

// console.log("Tax", findTax(total, 5));

// let totalPrice = total + findTax(total, 5);

// console.log("Total", totalPrice, totalPrice > 10000 ? "U Got Lucky Draw" : "");

// console.log("======================");

// function findEvenOrOdd(num) {
//   if (num % 2 == 0) {
//     console.log("Is Even", num);
//   } else {
//     console.log("Is Odd", num);
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   findEvenOrOdd(i);
// }

// console.log("======================");

let result = "Exam Passed";
function passOrFail(mark) {
  if (mark >= 40) {
    return "Pass";
  } else {
    result = "Exam Fail";
    return "Fail";
  }
}

// console.log(passOrFail(40));
// console.log(passOrFail(39));
// console.log(passOrFail(40));
// console.log(passOrFail(40));
// console.log(passOrFail(40));
// console.log("======================");
// console.log(result);
// console.log("======================");


let mark = [10,40,50,20,35,45];

let objMark = {
  mm : 40,
  eng : 40,
  math : 40,
  phy : 50,
  geol : 40,
}

// for (i of mark) {
//   console.log(
//     i,
//     passOrFail(i)
//   );
// }

for (i in objMark) {
  console.log(
    i,
    objMark[i],
    passOrFail(objMark[i])
  );
}

console.log(result);
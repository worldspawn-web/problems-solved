const getSum = (a, b) => {
  let carry;

  while (b) {
    carry = a & b;
    a ^= b; //
    console.log(a);
    b = carry << 1;
  }

  return a;
};

getSum(3, 4);

// Конкретно в этом коде используется побитовая операция для сложения двух чисел без использования оператора "+".
// Вместо этого используется цикл while, в котором сначала вычисляется перенос (если он есть), затем происходит побитовое сложение и сдвиг переноса на 1 бит влево.
// Таким образом, числа складываются поэтапно до тех пор, пока не будет достигнут результат.

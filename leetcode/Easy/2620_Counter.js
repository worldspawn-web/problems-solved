var createCounter = function (n) {
  let number = n - 1;
  return function () {
    return (number += 1);
  };
};

// OR JUST SIMPLY DO THIS (SLOWER IN RUNTIME):
return n++;

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

export class Challenge {
  static solution(number: number): number {
    let sum = 0;
    if (number < 0) return sum;
    for (let i = 3; i < number; i += 1) {
      if (i % 3 === 0 || i % 5 === 0) sum += i;
    }
    return sum;
  }
}

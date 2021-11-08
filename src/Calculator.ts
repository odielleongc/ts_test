import { echo } from '@utils';

export default class calculator {
  static Sum(a: number, b: number): number {
    let c = a + b;
    echo();
    return c;
  }

  static Difference(a: number, b: number): number {
    let c = a - b;
    echo();
    return c;
  }
}

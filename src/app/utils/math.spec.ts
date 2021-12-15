import { isEven, isEvenTruncateDecimal } from "./math";



describe('the math module', () => {



  it('can tell you if a number is even', () => {
    expect(isEven(6)).toBe(true);
    expect(isEven(7)).toBe(false);
    expect(isEven(6.9999)).toBeFalse();
  });



  it('can truncate a floating point number and tell you if it is even', () => {
    expect(isEvenTruncateDecimal(6.9997)).toBe(true);
    expect(isEvenTruncateDecimal(7.132)).toBe(false);
  });
});

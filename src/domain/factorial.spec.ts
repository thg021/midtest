import { Factorial } from './factorial';

describe('FactorialCalculator - calculateFactorial()', () => {

    it('should throw an error for a negative number', () => {
        expect(() => Factorial.calculate(-1)).toThrowError(
            'Factorial is not defined for negative numbers.'
        );
    });

    it('should be able to pass the parameter correctly', () => {
        const spyOnFactorial = vi.spyOn(Factorial, 'calculate')
        Factorial.calculate(2)
        expect(spyOnFactorial).toHaveBeenCalledWith(2)
    })
    it('should calculate the factorial of 0', () => {
        const factorial = Factorial.calculate(0);
        expect(factorial).toBe(1);
    });

    it('should calculate the factorial of 1', () => {
        const factorial = Factorial.calculate(1);
        expect(factorial).toBe(1);
    });

    it('should calculate the factorial of a positive number', () => {
        const factorial = Factorial.calculate(5);
        expect(factorial).toBe(120);
    });



    it('should calculate the factorial of a large number', () => {
        const factorial = Factorial.calculate(10);
        expect(factorial).toBe(3628800);
    });
});

export class Factorial {
    static calculate(number: number): number {
        if (number < 0) {
            throw new Error("Factorial is not defined for negative numbers.");
        }

        if (number === 0 || number === 1) {
            return 1;
        }

        return Array.from({ length: number }, (_, index) => index + 1)
            .reduce((acc, curr) => acc * curr, 1);
    }
}
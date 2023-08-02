import { PrimeNumber } from "./primeNumber"

describe('create', () => {
    it('should be created an instance of PrimeNumber', () => {
        const prime = PrimeNumber.create(2)
        expect(prime).instanceOf(PrimeNumber)
    })

    it('should be able to pass the parameter correctly', () => {
        const spyOnPrimeNumber = vi.spyOn(PrimeNumber, 'create')
        PrimeNumber.create(2)
        expect(spyOnPrimeNumber).toHaveBeenCalledWith(2)
    })
})


describe('isCurrentNumberPrime', () => {
    it('should be able to return false for numbers less than or equal to 1', () => {
        expect(PrimeNumber.create(1).isCurrentNumberPrime()).toBe(false);
        expect(PrimeNumber.create(0).isCurrentNumberPrime()).toBe(false);
        expect(PrimeNumber.create(-5).isCurrentNumberPrime()).toBe(false);
    });

    it('should be able to return true for prime numbers 2 and 3', () => {
        expect(PrimeNumber.create(2).isCurrentNumberPrime()).toBe(true);
        expect(PrimeNumber.create(3).isCurrentNumberPrime()).toBe(true);
    });

    it('should be able to return false for numbers divisible by 2 and 3', () => {
        expect(PrimeNumber.create(4).isCurrentNumberPrime()).toBe(false);
        expect(PrimeNumber.create(6).isCurrentNumberPrime()).toBe(false);
        expect(PrimeNumber.create(9).isCurrentNumberPrime()).toBe(false);
        expect(PrimeNumber.create(12).isCurrentNumberPrime()).toBe(false);
    });

    it('should be able to return true for prime numbers greater than 3', () => {
        expect(PrimeNumber.create(5).isCurrentNumberPrime()).toBe(true);
        expect(PrimeNumber.create(7).isCurrentNumberPrime()).toBe(true);
        expect(PrimeNumber.create(11).isCurrentNumberPrime()).toBe(true);
        expect(PrimeNumber.create(13).isCurrentNumberPrime()).toBe(true);
        expect(PrimeNumber.create(17).isCurrentNumberPrime()).toBe(true);
    });

    it('should be able to return false for non-prime numbers greater than 3', () => {
        expect(PrimeNumber.create(10).isCurrentNumberPrime()).toBe(false);
        expect(PrimeNumber.create(15).isCurrentNumberPrime()).toBe(false);
        expect(PrimeNumber.create(20).isCurrentNumberPrime()).toBe(false);
        expect(PrimeNumber.create(25).isCurrentNumberPrime()).toBe(false);
        expect(PrimeNumber.create(30).isCurrentNumberPrime()).toBe(false);
    });
})


describe('getFirstNPrimes', () => {
    it('should return the first 10 prime numbers starting from 2', () => {
        const first10Primes = PrimeNumber.create(2).getFirstNPrimes(10);
        const expectedPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
        expect(first10Primes).toEqual(expectedPrimes);
    });

    it('should return the first 5 prime numbers starting from 5', () => {
        const first5Primes = PrimeNumber.create(5).getFirstNPrimes(5);
        const expectedPrimes = [5, 7, 11, 13, 17];
        expect(first5Primes).toEqual(expectedPrimes);
    });

    it('should return an empty array for n <= 0', () => {
        const emptyArray1 = PrimeNumber.create(2).getFirstNPrimes(0);
        const emptyArray2 = PrimeNumber.create(5).getFirstNPrimes(-5);
        expect(emptyArray1).toEqual([]);
        expect(emptyArray2).toEqual([]);
    });

    it('should return the prime number 2 for n = 1', () => {
        const singlePrime = PrimeNumber.create(2).getFirstNPrimes(1);
        expect(singlePrime).toEqual([2]);
    });

    it('should return the first 20 prime numbers starting from 2', () => {
        const first20Primes = PrimeNumber.create(2).getFirstNPrimes(20);
        const expectedPrimes = [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71
        ];
        expect(first20Primes).toEqual(expectedPrimes);
    });
})
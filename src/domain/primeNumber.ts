export class PrimeNumber {

    private static num: number;

    static isPrime(num: number): PrimeNumber {
        PrimeNumber.num = num;

        return new PrimeNumber();
    }

    isCurrentNumberPrime(): boolean {
        if (PrimeNumber.num <= 1) {
            return false;
        }

        if (PrimeNumber.num === 2 || PrimeNumber.num === 3) {
            return true;
        }

        if (PrimeNumber.num % 2 === 0 || PrimeNumber.num % 3 === 0) {
            return false;
        }

        let i = 5;
        while (i * i <= PrimeNumber.num) {
            if (PrimeNumber.num % i === 0 || PrimeNumber.num % (i + 2) === 0) {
                return false;
            }
            i += 6;
        }

        return true;
    }

    getFirstNPrimes(n: number): number[] {
        const primes: number[] = [];
        let count = 0;
        let num = PrimeNumber.num;

        while (count < n) {
            if (PrimeNumber.isPrime(num).isCurrentNumberPrime()) {
                primes.push(num);
                count++;
            }
            num++;
        }

        return primes;
    }
}
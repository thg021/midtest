import { InvestmentCalculator, InvestmentCalculatorProps } from './investmentCalculator'; // Replace with the correct path to the InvestmentCalculator class

describe('InvestmentCalculator', () => {
    it('should calculate the final value of the investment with positive interest rate', () => {
        const props: InvestmentCalculatorProps = {
            initialCapital: 1000,
            interestRate: 5,
            investmentTimeMonths: 12,
        };
        const investment = new InvestmentCalculator(props);
        const finalValue = investment.calculateFinalValue();
        expect(finalValue).toBeCloseTo(1051.16, 2);
    });

    it('should calculate the final value of the investment with zero interest rate', () => {
        const props: InvestmentCalculatorProps = {
            initialCapital: 1000,
            interestRate: 0,
            investmentTimeMonths: 12,
        };
        const investment = new InvestmentCalculator(props);
        const finalValue = investment.calculateFinalValue();
        expect(finalValue).toBe(1000);
    });

    it('should calculate the final value of the investment with negative interest rate', () => {
        const props: InvestmentCalculatorProps = {
            initialCapital: 1000,
            interestRate: -2,
            investmentTimeMonths: 12,
        };
        const investment = new InvestmentCalculator(props);
        const finalValue = investment.calculateFinalValue();

        expect(finalValue).toBeCloseTo(980.18, 2);
    });

    it('should calculate the final value of the investment with different investment time', () => {
        const props: InvestmentCalculatorProps = {
            initialCapital: 2000,
            interestRate: 3.5,
            investmentTimeMonths: 24,
        };
        const investment = new InvestmentCalculator(props);
        const finalValue = investment.calculateFinalValue();
        expect(finalValue).toBeCloseTo(2144.8, 2);
    });
});

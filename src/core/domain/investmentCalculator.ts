export interface InvestmentCalculatorProps {
    initialCapital: number
    interestRate: number
    investmentTimeMonths: number
}

export class InvestmentCalculator {
    private initialCapital: number;
    private interestRate: number;
    private investmentTimeMonths: number;

    constructor(props: InvestmentCalculatorProps) {
        this.initialCapital = props.initialCapital;
        this.interestRate = props.interestRate;
        this.investmentTimeMonths = props.investmentTimeMonths;
    }

    public calculateFinalValue(): number {
        const monthlyInterestRate = this.interestRate / 100 / 12;
        const finalValue = this.initialCapital * Math.pow(1 + monthlyInterestRate, this.investmentTimeMonths);
        return Number(finalValue.toFixed(2));
    }
}

interface CalculatorProps {
    x: number
    y: number
    operator: string
}

interface OperatorFunction {
    (x: number, y: number): number;
}

interface OperatorsMap {
    [operator: string]: OperatorFunction;
}

const DEFAULT_OPTIONS = {
    operator: [
        '/',
        '*',
        '-',
        '+',
    ],
};

export class Calculator {
    operator: string
    x: number
    y: number

    constructor(props: CalculatorProps) {
        this.x = props.x
        this.y = props.y
        this.operator = props.operator
        this.validate()
    }

    private calculate(): number {
        const operators: OperatorsMap = {
            '+': (x: number, y: number) => x + y,
            '-': (x: number, y: number) => x - y,
            '*': (x: number, y: number) => x * y,
            '/': (x: number, y: number) => x / y
        }
        const operatorFunction = operators[this.operator]
        return operatorFunction(this.x, this.y);
    }

    private validate() {
        const isOperatorValid = DEFAULT_OPTIONS.operator.includes(this.operator)

        if (!isOperatorValid) {
            throw new Error("Operator not allowed!")
        }

        if (this.y === 0 && this.operator === "/") {
            throw new Error("Division by zero is not allowed!")
        }


    }

    static executeOperation(props: CalculatorProps) {
        const calculator = new Calculator(props)

        return calculator.calculate()
    }
}
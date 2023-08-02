import { Calculator } from './calculator'

it('should throw an exception when the division is by 0', () => {
    const props = {
        x: 0,
        y: 0,
        operator: '/'
    }

    expect(() => Calculator.executeOperation(props)).toThrow('Division by zero is not allowed!')
})

it('should throw an exception when the operator is invalid.', () => {
    const props = {
        x: 0,
        y: 0,
        operator: '0'
    }

    expect(() => Calculator.executeOperation(props)).toThrow('Operator not allowed!')
})

it('should perform the basic mathematical operations of addition, subtraction, division, and multiplication', () => {
    const props = {
        x: 2,
        y: 2
    }

    let result = Calculator.executeOperation({ ...props, operator: '+' })
    expect(result).toBe(4)

    result = Calculator.executeOperation({ ...props, operator: '-' })
    expect(result).toBe(0)

    result = Calculator.executeOperation({ ...props, operator: '/' })
    expect(result).toBe(1)

    result = Calculator.executeOperation({ ...props, operator: '*' })
    expect(result).toBe(4)
})
import { Calculator } from '@/core/domain/calculator';
import { Factorial } from '@/core/domain/factorial';
import { GradeCalculator } from '@/core/domain/gradeCalculator';
import { InvestmentCalculator } from '@/core/domain/investmentCalculator';
import { MultiplicationTable } from '@/core/domain/multiplicationTable';
import { Palindrome } from '@/core/domain/palindrome';
import { PrimeNumber } from '@/core/domain/primeNumber';
import { Vowel } from '@/core/domain/vowel';
import inquirer, { QuestionCollection } from 'inquirer';

interface Option {
    name: string;
    action: (params: any) => void;
    question?: QuestionCollection;
}

const options: Option[] = [
    {
        name: 'Calculator',
        action: (params: any) => {
            try {
                const { x, y, operator } = params
                const result = Calculator.executeOperation({
                    x: parseFloat(x),
                    y: parseFloat(y),
                    operator: operator
                })
                console.log(`\nResult: ${x} ${operator} ${y} = ${result}\n`);
            } catch (error: any) {
                console.log(error.message)
            }

            showOptions();
        },
        question: [
            {
                type: 'input',
                name: 'x',
                message: 'Enter number 1:',
                validate: (value: any) => {
                    const num = parseFloat(value);
                    return !isNaN(num) ? true : 'Please enter a valid number';
                },
            },
            {
                type: 'input',
                name: 'y',
                message: 'Enter number 2:',
                validate: (value: any) => {
                    const num = parseFloat(value);
                    return !isNaN(num) ? true : 'Please enter a valid number';
                },
            },
            {
                type: "list",
                name: 'operator',
                message: 'Choose the type of operator:',
                choices: ['+', '-', '*', '/']
            }
        ],
    },
    {
        name: 'Prime Numbers',
        action: (params: any) => {

            try {
                const num = parseFloat(params.x)
                const result = PrimeNumber.create(num).getFirstNPrimes(10)
                !PrimeNumber.isPrime(num)
                    ? console.log(`\nThe entered number ${num} is no prime\n`)
                    : console.log(`\nThe entered number ${num} is prime and the next prime numbers starting from this are: ${result}\n`)
            } catch (error: any) {
                console.log(error.message)
            }

            showOptions();
        },
        question: [
            {
                type: 'input',
                name: 'x',
                message: 'Enter a number:',
                validate: (value: any) => {
                    const num = parseFloat(value);
                    return !isNaN(num) ? true : 'Please enter a valid number';
                },
            }
        ],
    },
    {
        name: 'Factorial',
        action: (params: any) => {

            try {
                const result = Factorial.calculate(params.x)
                console.log(`\nFactorial: ${result}\n`);
            } catch (error: any) {
                console.log(error.message)
            }
            showOptions();
        },
        question: [
            {
                type: 'input',
                name: 'x',
                message: 'Enter a number:',
            },
        ],
    },
    {
        name: 'Palindrome',
        action: (params: any) => {
            try {
                const result = Palindrome.checkPalindrome(params.text)
                console.log(`\nThe ${params.text} is palindrome? ${result}\n`);
            } catch (error: any) {
                console.log(error.message)
            }
            showOptions();
        },
        question: [
            {
                type: 'input',
                name: 'text',
                message: 'Enter the text to check if it is a palindrome:',
            },
        ],
    },
    {
        name: 'Table',
        action: (params: any) => {
            try {
                const result = MultiplicationTable.generateTable(params.number)
                const table = result.join(',').replace(/,/g, "\n")
                console.log(`\nMultiplication table ${params.number}:\n${table}\n`);
            } catch (error: any) {
                console.log(error.message)
            }
            showOptions();
        },
        question: [
            {
                type: 'input',
                name: 'number',
                message: 'Enter a number:',
            },
        ],
    },
    {
        name: 'Vowel Counter',
        action: (params: any) => {
            try {
                const result = Vowel.count(params.text)
                console.log(`\nThe total number of vowels in the text [${params.text}]: \n ${result}\n`);
            } catch (error: any) {
                console.log(error.message)
            }
            showOptions();
        },
        question: [
            {
                type: 'input',
                name: 'text',
                message: 'Enter a phrase or word:',
            },
        ],
    },
    {
        name: 'Grade Average',
        action: (params: any) => {
            try {
                const gradeCalculator = new GradeCalculator()
                gradeCalculator.addGrade(parseFloat(params.grade1))
                gradeCalculator.addGrade(parseFloat(params.grade2))
                gradeCalculator.addGrade(parseFloat(params.grade3))

                const result = gradeCalculator.getAverage()
                console.log(`\nAverage is: \n ${result}\n`);
            } catch (error: any) {
                console.log(error.message)
            }
            showOptions();
        },
        question: [
            {
                type: 'input',
                name: 'grade1',
                message: 'Enter a grade1:',
                validate: (value: any) => {
                    const num = parseFloat(value);
                    return !isNaN(num) ? true : 'Please enter a valid number';
                },
            },
            {
                type: 'input',
                name: 'grade2',
                message: 'Enter a grade2:',
                validate: (value: any) => {
                    const num = parseFloat(value);
                    return !isNaN(num) ? true : 'Please enter a valid number';
                },
            },
            {
                type: 'input',
                name: 'grade3',
                message: 'Enter a grade3:',
                validate: (value: any) => {
                    const num = parseFloat(value);
                    return !isNaN(num) ? true : 'Please enter a valid number';
                },
            },
        ],
    },
    {
        name: 'Interest Calculation',
        action: (params: any) => {

            try {
                const { initialCapital, interestRate, investmentTimeMonths } = params
                const investmentCalculator = new InvestmentCalculator({
                    initialCapital: parseFloat(initialCapital),
                    interestRate: parseFloat(interestRate),
                    investmentTimeMonths: parseFloat(investmentTimeMonths)
                })

                console.log(`\nYou will have a total of at the end of the investment: \n $ ${investmentCalculator.calculateFinalValue()}\n`);
            } catch (error: any) {
                console.log(error.message)
            }
            showOptions();
        },
        question: [
            {
                type: 'input',
                name: 'initialCapital',
                message: 'Enter the initial capital:',
                validate: (value: any) => {
                    const num = parseFloat(value);
                    return !isNaN(num) ? true : 'Please enter a valid number';
                },
            },
            {
                type: 'input',
                name: 'interestRate',
                message: 'Enter the interest rate:',
                validate: (value: any) => {
                    const num = parseFloat(value);
                    return !isNaN(num) ? true : 'Please enter a valid number';
                },
            },
            {
                type: 'input',
                name: 'investmentTimeMonths',
                message: 'Enter the total number of months the money will be invested:',
                validate: (value: any) => {
                    const num = parseFloat(value);
                    return !isNaN(num) ? true : 'Please enter a valid number';
                },
            },
        ],
    },
    {
        name: 'Exit',
        action: () => {
            console.log('Goodbye!');
        },
    },
];

function showOptions() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'option',
                message: 'Select an option:',
                choices: options.map((option) => option.name),
                loop: false
            },
        ])
        .then((answers) => {
            const selectedOption = options.find((option) => option.name === answers.option);
            if (selectedOption?.question) {
                inquirer.prompt(selectedOption.question).then((params) => {
                    selectedOption.action(params);
                });
            } else {
                selectedOption?.action({});
            }
        });
}

console.log('Welcome to the exercises list for the developer position!');
showOptions();
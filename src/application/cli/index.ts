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
                const result = Calculator.executeOperation({
                    x: parseFloat(params.x),
                    y: parseFloat(params.y),
                    operator: params.operator
                })
                console.log(`\nResult Calculator: ${result}\n`);
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
                message: 'Enter type operator:',
                choices: ['+', '-', '*', '/']
            }
        ],
    },
    {
        name: 'Prime Numbers',
        action: (params: any) => {

            try {
                const result = PrimeNumber.isPrime(params.x).getFirstNPrimes(params.n)
                console.log(`\nResult Prime numbers: ${result}\n`);
            } catch (error: any) {
                console.log(error.message)
            }

            showOptions();
        },
        question: [
            {
                type: 'input',
                name: 'x',
                message: 'Enter parameter 3:',
                validate: (value: any) => {
                    const num = parseFloat(value);
                    return !isNaN(num) ? true : 'Please enter a valid number';
                },
            },
            {
                type: 'input',
                name: 'n',
                message: 'Enter number repetion:',
                validate: (value: any) => {
                    const num = parseFloat(value);
                    return !isNaN(num) ? true : 'Please enter a valid number';
                },
            },
        ],
    },
    {
        name: 'Factorial',
        action: (params: any) => {

            try {
                const result = Factorial.calculate(params.x)
                console.log(`\nResult Prime numbers: ${result}\n`);
            } catch (error: any) {
                console.log(error.message)
            }
            showOptions();
        },
        question: [
            {
                type: 'input',
                name: 'x',
                message: 'Enter number:',
            },
        ],
    },
    {
        name: 'Palindrome',
        action: (params: any) => {
            try {
                const result = Palindrome.checkPalindrome(params.text)
                console.log(`\nO ${params.text} é: ${result}\n`);
            } catch (error: any) {
                console.log(error.message)
            }
            showOptions();
        },
        question: [
            {
                type: 'input',
                name: 'text',
                message: 'Entre com o texto para verficarmos se é um palimetro:',
            },
        ],
    },
    {
        name: 'Table',
        action: (params: any) => {
            try {
                const result = MultiplicationTable.generateTable(params.number)
                const table = result.join(',').replace(/,/g, "\n")
                console.log(`\n Multiplication Table number ${params.number}: \n ${table}\n`);
            } catch (error: any) {
                console.log(error.message)
            }
            showOptions();
        },
        question: [
            {
                type: 'input',
                name: 'number',
                message: 'Enter parameter 3:',
            },
        ],
    },
    {
        name: 'Vowel Counter',
        action: (params: any) => {
            try {
                const result = Vowel.count(params.text)
                console.log(`\n Total vowels the phase [${params.text}] is: \n ${result}\n`);
            } catch (error: any) {
                console.log(error.message)
            }
            showOptions();
        },
        question: [
            {
                type: 'input',
                name: 'text',
                message: 'Enter parameter 3:',
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
                message: 'Enter grade1:',
                validate: (value: any) => {
                    const num = parseFloat(value);
                    return !isNaN(num) ? true : 'Please enter a valid number';
                },
            },
            {
                type: 'input',
                name: 'grade2',
                message: 'Enter grade2:',
                validate: (value: any) => {
                    const num = parseFloat(value);
                    return !isNaN(num) ? true : 'Please enter a valid number';
                },
            },
            {
                type: 'input',
                name: 'grade3',
                message: 'Enter grade3:',
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

                console.log(`\n Voce tera is: \n ${investmentCalculator.calculateFinalValue()}\n`);
            } catch (error: any) {
                console.log(error.message)
            }
            showOptions();
        },
        question: [
            {
                type: 'input',
                name: 'initialCapital',
                message: 'Enter initialCapital 3:',
                validate: (value: any) => {
                    const num = parseFloat(value);
                    return !isNaN(num) ? true : 'Please enter a valid number';
                },
            },
            {
                type: 'input',
                name: 'interestRate',
                message: 'Enter interestRate 3:',
                validate: (value: any) => {
                    const num = parseFloat(value);
                    return !isNaN(num) ? true : 'Please enter a valid number';
                },
            },
            {
                type: 'input',
                name: 'investmentTimeMonths',
                message: 'Enter investmentTimeMonths 3:',
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

console.log('Welcome to the CLI prompt!');
showOptions();
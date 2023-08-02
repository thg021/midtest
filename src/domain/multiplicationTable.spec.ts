import { MultiplicationTable } from "./multiplicationTable";

describe('MultiplicationTable', () => {
    it('should generate the multiplication table for a given number', () => {
        const number = 5;
        const expectedTable = [
            '5 x 1 = 5',
            '5 x 2 = 10',
            '5 x 3 = 15',
            '5 x 4 = 20',
            '5 x 5 = 25',
            '5 x 6 = 30',
            '5 x 7 = 35',
            '5 x 8 = 40',
            '5 x 9 = 45',
            '5 x 10 = 50',
        ];
        const table = MultiplicationTable.generateTable(number);
        expect(table).toEqual(expectedTable);
    });

    it('should generate the multiplication table for a negative number', () => {
        const number = -5;
        const expectedTable = [
            '-5 x 1 = -5',
            '-5 x 2 = -10',
            '-5 x 3 = -15',
            '-5 x 4 = -20',
            '-5 x 5 = -25',
            '-5 x 6 = -30',
            '-5 x 7 = -35',
            '-5 x 8 = -40',
            '-5 x 9 = -45',
            '-5 x 10 = -50',
        ];
        const table = MultiplicationTable.generateTable(number);
        expect(table).toEqual(expectedTable);
    });

    it('should generate the multiplication table for zero', () => {
        const number = 0;
        const expectedTable = [
            "0 x 1 = 0",
            "0 x 2 = 0",
            "0 x 3 = 0",
            "0 x 4 = 0",
            "0 x 5 = 0",
            "0 x 6 = 0",
            "0 x 7 = 0",
            "0 x 8 = 0",
            "0 x 9 = 0",
            "0 x 10 = 0",
        ]
        const table = MultiplicationTable.generateTable(number);
        expect(table).toEqual(expectedTable);
    });
});
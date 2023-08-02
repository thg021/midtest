export class MultiplicationTable {
    static generateTable(number: number): string[] {
        return Array.from({ length: 10 }, (_, index) => {
            const multiplier = index + 1;
            const result = number * multiplier;
            return `${number} x ${multiplier} = ${result}`;
        });
    }
}
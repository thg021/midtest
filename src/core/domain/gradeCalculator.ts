export class GradeCalculator {
    private grades: number[];

    constructor() {
        this.grades = [];
    }

    private calculateAverage(): number {
        if (this.grades.length === 0) {
            return 0;
        }

        if (this.grades.length < 3) {
            throw new Error('To calculate the average, we need a minimum of 3 grades')
        }

        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }

    addGrade(grade: number): void {
        this.grades.push(grade);
    }

    getAverage(): number {
        return this.calculateAverage();
    }
}
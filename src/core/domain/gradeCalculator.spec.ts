import { GradeCalculator } from './gradeCalculator'; // Replace with the correct path to the GradeCalculator class

describe('GradeCalculator', () => {
    let gradeCalculator: GradeCalculator;

    beforeEach(() => {
        gradeCalculator = new GradeCalculator();
    });

    it('should calculate the average of grades', () => {
        gradeCalculator.addGrade(85);
        gradeCalculator.addGrade(78);
        gradeCalculator.addGrade(92);

        const average = gradeCalculator.getAverage();
        expect(average).toBeCloseTo(85, 2); // Approximate average with 2 decimal places
    });

    it('should return 0 for an empty grade list', () => {
        const average = gradeCalculator.getAverage();
        expect(average).toBe(0);
    });

    it('should return an exception when the grade is less than 3', () => {
        gradeCalculator.addGrade(90);
        expect(() => gradeCalculator.getAverage()).toThrowError('To calculate the average, we need a minimum of 3 grades');
    });

    it('should calculate the average for negative grades', () => {
        gradeCalculator.addGrade(-85);
        gradeCalculator.addGrade(-78);
        gradeCalculator.addGrade(-92);

        const average = gradeCalculator.getAverage();
        expect(average).toBeCloseTo(-85, 2); // Approximate average with 2 decimal places
    });
});

import { Vowel } from './vowel'; // Replace with the correct path to the Vowel class

describe('Vowel Count', () => {
    it('should count vowels in a string with only lowercase vowels', () => {
        const input = 'aeiou';
        const vowelCount = Vowel.count(input);
        expect(vowelCount).toBe(5);
    });

    it('should count vowels in a string with mixed-case vowels', () => {
        const input = 'aEiOu';
        const vowelCount = Vowel.count(input);
        expect(vowelCount).toBe(5);
    });

    it('should count vowels in a string with both lowercase and uppercase consonants', () => {
        const input = 'Hello, World!';
        const vowelCount = Vowel.count(input);
        expect(vowelCount).toBe(3);
    });

    it('should count vowels in an empty string', () => {
        const input = '';
        const vowelCount = Vowel.count(input);
        expect(vowelCount).toBe(0);
    });

    it('should count vowels in a string with no vowels', () => {
        const input = 'xyz123';
        const vowelCount = Vowel.count(input);
        expect(vowelCount).toBe(0);
    });
});

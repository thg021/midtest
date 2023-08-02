import { Palindrome } from "./palindrome";

describe('PalindromeChecker', () => {
    it('should detect palindromes with lowercase characters', () => {
        expect(Palindrome.checkPalindrome('racecar')).toBe(true);
        expect(Palindrome.checkPalindrome('level')).toBe(true);
        expect(Palindrome.checkPalindrome('deified')).toBe(true);
        expect(Palindrome.checkPalindrome('madam')).toBe(true);
    });

    it('should detect palindromes with mixed-case characters', () => {
        expect(Palindrome.checkPalindrome('RaceCar')).toBe(true);
        expect(Palindrome.checkPalindrome('LeVeL')).toBe(true);
        expect(Palindrome.checkPalindrome('DeifiEd')).toBe(true);
        expect(Palindrome.checkPalindrome('MadAm')).toBe(true);
    });

    it('should detect palindromes with spaces', () => {
        expect(Palindrome.checkPalindrome('A man a plan a canal Panama')).toBe(true);
        expect(Palindrome.checkPalindrome('Was it a car or a cat I saw')).toBe(true);
    });

    it('should detect non-palindromes with punctuation', () => {
        expect(Palindrome.checkPalindrome('Able was I, ere I saw Elba!')).toBe(false);
        expect(Palindrome.checkPalindrome('Mr. Owl ate my metal worm')).toBe(false);
    });

    it('should detect non-palindromes', () => {
        expect(Palindrome.checkPalindrome('hello')).toBe(false);
        expect(Palindrome.checkPalindrome('open')).toBe(false);
        expect(Palindrome.checkPalindrome('world')).toBe(false);
        expect(Palindrome.checkPalindrome('notapalindrome')).toBe(false);
    });

    it('should handle empty strings as palindromes', () => {
        expect(Palindrome.checkPalindrome('')).toBe(true);
    });

    it('should handle single characters as palindromes', () => {
        expect(Palindrome.checkPalindrome('a')).toBe(true);
        expect(Palindrome.checkPalindrome('B')).toBe(true);
    });

    it('should handle non-alphanumeric characters as palindromes', () => {
        expect(Palindrome.checkPalindrome('**')).toBe(true);
    });

    it('should handle non-alphanumeric characters as non-palindromes', () => {
        expect(Palindrome.checkPalindrome('!!@%')).toBe(false);
    });

    describe('normalizeWord', () => {

        it('should be able to pass parameter correctly', () => {
            const spyNormalizeWord = vi.spyOn(Palindrome as any, 'normalizeWord')
            const word = 'test';
            Palindrome["normalizeWord"](word);
            expect(spyNormalizeWord).toHaveBeenCalledWith(word)
        })
        it('should convert the word to lowercase', () => {
            const word = 'RaceCar';
            const normalizedWord = Palindrome["normalizeWord"](word);
            expect(normalizedWord).toBe('racecar');
        });

        it('should remove all spaces from the word', () => {
            const word = 'A man a plan a canal Panama';
            const normalizedWord = Palindrome["normalizeWord"](word);
            expect(normalizedWord).toBe('amanaplanacanalpanama');
        });


        it('should handle an empty string', () => {
            const word = '';
            const normalizedWord = Palindrome["normalizeWord"](word);
            expect(normalizedWord).toBe('');
        });

    })

    describe('isPalindrome', () => {
        it('should return true for palindromes', () => {
            expect(Palindrome["isPalindrome"]('racecar')).toBe(true);
            expect(Palindrome["isPalindrome"]('A man a plan a canal Panama')).toBe(true);
            expect(Palindrome["isPalindrome"]('**')).toBe(true);
        });

        it('should return false for non-palindromes', () => {
            expect(Palindrome["isPalindrome"]('hello')).toBe(false);
            expect(Palindrome["isPalindrome"]('world')).toBe(false);
            expect(Palindrome["isPalindrome"]('nonpalindrome')).toBe(false);
            expect(Palindrome["isPalindrome"]('!!@%')).toBe(false);
        });

        it('should handle empty string as a palindrome', () => {
            expect(Palindrome["isPalindrome"]('')).toBe(true);
        });

        it('should be case-insensitive', () => {
            expect(Palindrome["isPalindrome"]('Racecar')).toBe(true);
            expect(Palindrome["isPalindrome"]('LeVeL')).toBe(true);
            expect(Palindrome["isPalindrome"]('Deified')).toBe(true);
            expect(Palindrome["isPalindrome"]('Madam')).toBe(true);
        });
    })
});
export class Palindrome {
    private static normalizeWord(word: string): string {
        return word.toLowerCase().replace(/\s/g, '');
    }

    private static isPalindrome(word: string): boolean {
        const cleanedWord = Palindrome.normalizeWord(word);
        const reversedWord = cleanedWord.split('').reverse().join('');
        return cleanedWord === reversedWord;
    }

    static checkPalindrome(word: string): boolean {
        return Palindrome.isPalindrome(word);
    }
}
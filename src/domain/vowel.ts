export class Vowel {
    static count(input: string): number {
        const vowels = 'aeiouAEIOU';
        let count = 0;

        for (const char of input) {
            if (vowels.includes(char)) {
                count++;
            }
        }

        return count;
    }
}
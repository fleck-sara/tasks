/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        const emptyarr: number[] = [];
        return emptyarr;
    }
    const arr: number[] = [numbers[0], numbers[numbers.length - 1]];
    return arr;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const nums = numbers.map((num: string): number => parseInt(num));
    const numss = nums.map((n: number): number => (isNaN(n) ? (n = 0) : n));
    return numss;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const amtsno$ = amounts.map((amt: string): string =>
        amt.charAt(0) === "$" ? (amt = amt.substring(1)) : amt
    );
    const nums = amtsno$.map((num: string): number => parseInt(num));
    const numss = nums.map((n: number): number => (isNaN(n) ? (n = 0) : n));
    return numss;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const msg = messages.filter(
        (message: string): boolean => message.charAt(message.length - 1) !== "?"
    );
    const msg2 = msg.map((m: string): string =>
        m.endsWith("!") ? (m = m.toUpperCase()) : m
    );
    return msg2;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortwords = words.filter((word: string): boolean => word.length < 4);
    return shortwords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const lowercase = colors.map(
        (color: string): string => (color = color.toLowerCase())
    );
    const RGB = lowercase.filter(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    if (colors.length === RGB.length || colors.length === 0) {
        return true;
    }
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    let sum = 0;
    const findsum = addends.map((end: number): number => (sum = sum + end));
    let str = sum.toString() + "=";
    const createstr = addends.map(
        (end: number): string => (str = str + end.toString() + "+")
    );
    return str.substring(0, str.length - 1);
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const indexfirstneg = values.findIndex(
        (value: number): boolean => value < 0
    );
    if (indexfirstneg === -1) {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const val = [...values, sum];
        return val;
    }
    const positives = values.slice(0, indexfirstneg);
    const sum = positives.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const arr = [...values];
    arr.splice(indexfirstneg + 1, 0, sum);
    return arr;
}

import {multiply, splitIntoWords, substract, sum} from "./01";

// data for all tests
let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {

    //action
    const result1 = sum(a,b);
    a = 100;
    const result2 = sum(a,c);

    //expected result
    expect(result1).toBe(3);
    expect(result2).toBe(103);
})

test('multiply should be correct', () => {

    //action
    const result1 = multiply(a,b);
    const result2 = multiply(b,c);

    //expected result
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

test('substract should be correct', () => {
    // data

    //action
    const result1 = substract(a,b);
    const result2 = substract(b,c);

    //expected result
    expect(result1).toBe(-1);
    expect(result2).toBe(-1);
})

test("splitting into words should be correct", () => {
    let sent1 = "Hello my friend";
    let sent2 = "JS -  is the best language";

    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friend");

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe("js");
    expect(result2[1]).toBe("is");
    expect(result2[2]).toBe("the");
    expect(result2[3]).toBe("best");
    expect(result2[4]).toBe("language");
})
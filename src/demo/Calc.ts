class Calculator {

    add(a: number, b: number): number {
        return a + b;
    }
}

interface CalcInterface {
    add: (a: number, b: number) => number
    print: () => void
}
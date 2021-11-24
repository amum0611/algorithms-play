const num1 = 3141592653589793238462643383279502884197169399375105820974944592;
const num2 = 2718281828459045235360287471352662497757247093699959574966967627;

const karatsuba = (num1, num2) => {

    // num = 10^(n/2)a + b
    // if number is 1540, then a = 15 and b = 40; whereas n = 4

    // assumption num1 and num2 contains equal number of digits

    // ans = (10^(n/2)a + b) * (10^(n/2)x + y)
    // ans = 10^(n/2)a*10^(n/2)x + 10^(n/2)ay + b10^(n/2)x + by
    // ans = 10^n*ax + 10^(n/2)*(ay + bx) + by

    let numOfDigits = num1 > 0 ? Math.ceil(Math.log10(num1 + 1)) : 1;

    if (numOfDigits == 1) {
        return num1*num2;
    }

    let a, b, x, y = 0;

    a = Math.floor(num1 / Math.pow(10, numOfDigits / 2));
    b = num1 - a * Math.pow(10, numOfDigits/2);

    x = Math.floor(num2 / Math.pow(10, numOfDigits / 2));
    y = num2 - x * Math.pow(10, numOfDigits/2);


    // a = parseInt(`${num1}`.slice(0, numOfDigits / 2));
    // b = parseInt(`${num1}`.slice(numOfDigits / 2));
    // x = parseInt(`${num2}`.slice(0, numOfDigits / 2));
    // y = parseInt(`${num2}`.slice(numOfDigits / 2));

    // console.log(`${a} - ${b} - ${x} - ${y}`);

    return (Math.pow(10, numOfDigits) * karatsuba(a, x)) + (Math.pow(10, numOfDigits / 2) * (karatsuba(a, y) + karatsuba(b, x))) + karatsuba(b, y);
    
};

let result = karatsuba(1234, 5678);

console.log(result);
console.log(result.toLocaleString('fullwide', { useGrouping: false}));

let result2 = karatsuba(num1, num2);

console.log(result2);
console.log(result2.toLocaleString('fullwide', { useGrouping: false}));

// 8539734222673567065463550869546574495034888535765114961879601127067743044893204848617875072216249073013374895871952806582723184
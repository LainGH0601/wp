var x =10;

function printOdd(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

printOdd(x);

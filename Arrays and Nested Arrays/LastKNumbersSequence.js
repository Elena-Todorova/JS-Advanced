function lastKNum(n, k) {
    let result = [1];

    for (let i = 0; i < n - 1; i++) {
        let last = result.slice(-k);
        let sum = 0;

        for (const el of last) {
            sum += el

        }
        result.push(sum);
    }
    return result
}

console.log(lastKNum(8, 2))
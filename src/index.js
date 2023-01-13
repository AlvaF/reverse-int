module.exports = function reverse(n) {
    let arr = String(Math.abs(n))
    let arr1 = arr.split('').reverse();
    return Number(arr1.join(''));
}

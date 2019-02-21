function calculate(temp) {
    if (typeof temp !== 'number') {
        throw Error("The given argument is not a number")
    } else {
        var numb = (temp - 32) * (5 / 9)
    }
    return numb
}

QUnit.test('Testing conversion function with positive inputs', function (assert) {
    assert.equal(parseFloat(Math.round(calculate(15) * 100) / 100).toFixed(2), -9.44, 'Tested with 15');
    assert.equal(parseFloat(Math.round(calculate(32) * 100) / 100).toFixed(2), 0, 'Tested with 32');
    assert.equal(parseFloat(Math.round(calculate(100) * 100) / 100).toFixed(2), 37.78, 'Tested with 100');
});

QUnit.test('Testing conversion function with negative inputs', function (assert) {
    assert.equal(parseFloat(Math.round(calculate(-15) * 100) / 100).toFixed(2), -26.11, 'Tested with -15');
    assert.equal(parseFloat(Math.round(calculate(-32) * 100) / 100).toFixed(2), -35.56, 'Tested with -32');
    assert.equal(parseFloat(Math.round(calculate(-100) * 100) / 100).toFixed(2), -73.33, 'Tested with -100');
});

QUnit.test('Testing conversion function with 0', function (assert) {
    assert.equal(parseFloat(Math.round(calculate(0) * 100) / 100).toFixed(2), -17.78, 'Tested with 0');
});

// QUnit.test('Testing conversion function with non-numbers', function (assert) {
// 
// });
const {display, setChooseK, power, range} = require('./functions');

test('display([]) equals "Ø"?', () => {
    expect(display([])).toEqual("Ø");
});

test('display([1, 2, 3]) equals "{1, 2, 3}"?', () => {
    expect(display([1, 2, 3])).toEqual("{1, 2, 3}");
});

test('display([[], [1], [2], [1, 2]]) equals "{Ø, {1}, {2}, {1, 2}}"?', () => {
    expect(display([[], [1], [2], [1, 2]])).toEqual("{Ø, {1}, {2}, {1, 2}}");
});

test('range(0) equals []?', () => {
    expect(range(0)).toEqual([]);
});

test('range(1) equals [1]?', () => {
    expect(range(1)).toEqual([1]);
});

test('range(2) equals [1, 2]?', () => {
    expect(range(2)).toEqual([1, 2]);
});

test('setChooseK([1, 2, 3], 0) equals [[]]?', () => {
    expect(setChooseK([1, 2, 3], 0)).toEqual([[]]);
});

test('setChooseK([1, 2, 3], 1) equals [[1], [2], [3]]?', () => {
    expect(setChooseK([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
});

test('setChooseK([1, 2, 3], 2) equals [[1, 2], [1, 3], [2, 3]]?', () => {
    expect(setChooseK([1, 2, 3], 2)).toEqual([[1, 2], [1, 3], [2, 3]]);
});

test('setChooseK([1, 2, 3], 3) equals [[1, 2, 3]]?', () => {
    expect(setChooseK([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
});

test('setChooseK([1, 2], 3) equals []?', () => {
    expect(setChooseK([1, 2], 3)).toEqual([]);
});

test('power([]) equals [[]]?', () => {
    expect(power([])).toEqual([[]]);
});

test('power([1, 2, 3]) equals [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]?', () => {
    expect(power([1, 2, 3])).toEqual([[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]);
});
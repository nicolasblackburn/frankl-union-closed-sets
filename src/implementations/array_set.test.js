const {display, isAtom, isEmpty, isSubset, power, range, setChooseK} = require('./array_set');

test('display([]) equals "Ø"?', () => {
    expect(display([])).toEqual("Ø");
});

test('display([1, 2, 3]) equals "{1, 2, 3}"?', () => {
    expect(display([1, 2, 3])).toEqual("{1, 2, 3}");
});

test('display([[], [1], [2], [1, 2]]) equals "{Ø, {1}, {2}, {1, 2}}"?', () => {
    expect(display([[], [1], [2], [1, 2]])).toEqual("{Ø, {1}, {2}, {1, 2}}");
});

test('isAtom(1) equals true?', () => {
    expect(isAtom(1)).toStrictEqual(true);
});

test('isAtom([]) equals false?', () => {
    expect(isAtom([])).toStrictEqual(false);
});

test('isAtom([1]) equals false?', () => {
    expect(isAtom([1])).toStrictEqual(false);
});

test('isEmpty([1]) equals false?', () => {
    expect(isEmpty([1])).toStrictEqual(false);
});

test('isEmpty([]) equals true?', () => {
    expect(isEmpty([])).toStrictEqual(true);
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

test('isSubset([], [1, 2, 3]) equals true?', () => {
    expect(isSubset([], [1, 2, 3])).toEqual(true);
});

test('isSubset([1, 2], [1, 2, 3]) equals true?', () => {
    expect(isSubset([1, 2], [1, 2, 3])).toEqual(true);
});

test('isSubset([1, 4], [1, 2, 3]) equals false?', () => {
    expect(isSubset([1, 4], [1, 2, 3])).toEqual(false);
});

test('isSubset([1, 2, 3], [1, 2]) equals false?', () => {
    expect(isSubset([1, 2, 3], [1, 2])).toEqual(false);
});
const set = require('./set');

test('set.from([]) equals 0?', () => {
    expect(set.from([])).toEqual(0);
});

test('set.from([1, 3, 4]) equals 13?', () => {
    expect(set.from([1, 3, 4])).toEqual(13);
});

test('set.display(set.from([])) equals "Ø"?', () => {
    expect(set.display(0)).toEqual('Ø');
});

test('set.display(13) equals "{1, 3, 4}"?', () => {
    expect(set.display(13)).toEqual('{1, 3, 4}');
});

test('set.isSubset(0, 13) equals true?', () => {
    expect(set.isSubset(0, 13)).toEqual(true);
});

test('set.isSubset(9, 13) equals true?', () => {
    expect(set.isSubset(9, 13)).toEqual(true);
});

test('set.isSubset(3, 13) equals false?', () => {
    expect(set.isSubset(3, 13)).toEqual(false);
});
import {score} from '../src/bowling';

test('no rolls', () => {
    expect(score([])).toEqual(0)
})

test('one roll of 5 pins', () => {
    expect(score([5])).toEqual(5)
})

test('two rolls of 5 and 4 pins', () => {
    expect(score([5, 4])).toEqual(9)
})

test('two open frames', () => {
    expect(score([5, 4, 4, 5])).toEqual(18)
})

test('a spare with an additional roll knocking off 1 pin', () => {
    expect(score([5, 5, 1])).toEqual(12)
})

test('many spares and missing bonus', () => {
    expect(score([6, 4, 4, 6, 7, 3])).toEqual(41)
})

test('a strike with an additional open frame', () => {
    expect(score([10, 5, 4])).toEqual(28)
})

test('many strikes and missing bonus', () => {
    expect(score([10, 10, 10])).toEqual(60)
})

test('final frame and complete game', () => {
    expect(score([5, 4, 4, 6, 7, 0, 10, 10, 10, 5, 3, 6, 4, 4, 6, 10, 10, 10])).toEqual(178)
})

test('ignores excess rolls in 10th frame if an open frame', () => {
    expect(score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 5])).toEqual(1)
})

test('ignores excess rolls in 10th frame if a strike', () => {
    expect(score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 1, 5])).toEqual(11)
})

test('ignores excess rolls in 10th frame if a spare', () => {
    expect(score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 2, 1, 5])).toEqual(11)
})